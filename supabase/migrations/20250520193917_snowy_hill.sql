-- ===============================
-- Initial Schema Setup for Food Accessibility App
-- ===============================

-- 1. USERS TABLE
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  full_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 2. PROVIDERS TABLE
CREATE TABLE providers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  description text,
  image_url text,
  rating numeric DEFAULT 0,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 3. FOOD ITEMS TABLE
CREATE TABLE food_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  image_url text,
  price numeric NOT NULL,
  original_price numeric NOT NULL,
  quantity integer NOT NULL DEFAULT 0 CHECK (quantity >= 0),
  expires_at timestamptz NOT NULL,
  provider_id uuid REFERENCES providers(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 4. DIETARY TAGS TABLE
CREATE TABLE dietary_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 5. FOOD-DIETARY TAGS JOIN TABLE
CREATE TABLE food_dietary_tags (
  food_id uuid REFERENCES food_items(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES dietary_tags(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (food_id, tag_id)
);

-- 6. RESERVATIONS TABLE
CREATE TABLE reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  food_id uuid REFERENCES food_items(id) ON DELETE CASCADE,
  quantity integer NOT NULL CHECK (quantity > 0),
  pickup_time timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 7. USER SETTINGS TABLE (for accessibility)
CREATE TABLE user_settings (
  user_id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  highContrast boolean DEFAULT false,
  largeText boolean DEFAULT false,
  screenReader boolean DEFAULT false,
  updated_at timestamptz DEFAULT now()
);

-- Trigger to auto-update updated_at on user_settings
CREATE OR REPLACE FUNCTION update_user_settings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_user_settings_updated_at
  BEFORE UPDATE ON user_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_user_settings_updated_at();

-- ===============================
-- Enable Row Level Security (RLS)
-- ===============================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE dietary_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_dietary_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;

-- ===============================
-- Policies
-- ===============================

-- USERS
CREATE POLICY "Users can read their own data"
  ON users FOR SELECT TO authenticated
  USING (auth.uid() = id);

-- PROVIDERS
CREATE POLICY "Providers are viewable by everyone"
  ON providers FOR SELECT TO public
  USING (true);

CREATE POLICY "Providers can be managed by their owners"
  ON providers FOR ALL TO authenticated
  USING (auth.uid() = user_id);

-- FOOD ITEMS
CREATE POLICY "Food items are viewable by everyone"
  ON food_items FOR SELECT TO public
  USING (true);

CREATE POLICY "Food items can be managed by provider owners"
  ON food_items FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM providers
      WHERE providers.id = food_items.provider_id
      AND providers.user_id = auth.uid()
    )
  );

-- DIETARY TAGS
CREATE POLICY "Dietary tags are viewable by everyone"
  ON dietary_tags FOR SELECT TO public
  USING (true);

-- FOOD-DIETARY TAGS
CREATE POLICY "Food dietary tags are viewable by everyone"
  ON food_dietary_tags FOR SELECT TO public
  USING (true);

-- RESERVATIONS
CREATE POLICY "Reservations can be read by their owners"
  ON reservations FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Reservations can be created by authenticated users"
  ON reservations FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Reservations can be updated by their owners"
  ON reservations FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);

-- USER SETTINGS
CREATE POLICY "Users can manage their own accessibility settings"
  ON user_settings FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ===============================
-- Insert Initial Dietary Tags
-- ===============================
INSERT INTO dietary_tags (name) VALUES
  ('vegan'),
  ('vegetarian'),
  ('gluten-free'),
  ('organic'),
  ('high-protein');
