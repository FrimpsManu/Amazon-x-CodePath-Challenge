/*
  # Initial Schema Setup for Food Accessibility App

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text)
      - full_name (text)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - providers
      - id (uuid, primary key)
      - name (text)
      - address (text)
      - description (text)
      - image_url (text)
      - rating (numeric)
      - created_at (timestamp)
      - updated_at (timestamp)
      - user_id (uuid, foreign key)
    
    - food_items
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - image_url (text)
      - price (numeric)
      - original_price (numeric)
      - quantity (integer)
      - expires_at (timestamp)
      - provider_id (uuid, foreign key)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - dietary_tags
      - id (uuid, primary key)
      - name (text)
      - created_at (timestamp)
    
    - food_dietary_tags
      - food_id (uuid, foreign key)
      - tag_id (uuid, foreign key)
      - created_at (timestamp)
    
    - reservations
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - food_id (uuid, foreign key)
      - quantity (integer)
      - pickup_time (timestamp)
      - status (text)
      - created_at (timestamp)
      - updated_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create tables
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  full_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE providers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  description text,
  image_url text,
  rating numeric DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE food_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  image_url text,
  price numeric NOT NULL,
  original_price numeric NOT NULL,
  quantity integer NOT NULL DEFAULT 0,
  expires_at timestamptz NOT NULL,
  provider_id uuid REFERENCES providers(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE dietary_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE food_dietary_tags (
  food_id uuid REFERENCES food_items(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES dietary_tags(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (food_id, tag_id)
);

CREATE TABLE reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  food_id uuid REFERENCES food_items(id) ON DELETE CASCADE,
  quantity integer NOT NULL,
  pickup_time timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE dietary_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_dietary_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read their own data" ON users
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Providers are viewable by everyone" ON providers
  FOR SELECT TO public
  USING (true);

CREATE POLICY "Providers can be managed by their owners" ON providers
  FOR ALL TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Food items are viewable by everyone" ON food_items
  FOR SELECT TO public
  USING (true);

CREATE POLICY "Food items can be managed by provider owners" ON food_items
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM providers
      WHERE providers.id = food_items.provider_id
      AND providers.user_id = auth.uid()
    )
  );

CREATE POLICY "Dietary tags are viewable by everyone" ON dietary_tags
  FOR SELECT TO public
  USING (true);

CREATE POLICY "Food dietary tags are viewable by everyone" ON food_dietary_tags
  FOR SELECT TO public
  USING (true);

CREATE POLICY "Reservations can be read by their owners" ON reservations
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Reservations can be created by authenticated users" ON reservations
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Reservations can be updated by their owners" ON reservations
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);

-- Insert initial dietary tags
INSERT INTO dietary_tags (name) VALUES
  ('vegan'),
  ('vegetarian'),
  ('gluten-free'),
  ('organic'),
  ('high-protein');