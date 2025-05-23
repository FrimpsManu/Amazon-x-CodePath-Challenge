/*
  # Create reservations table and policies

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references users.id)
      - `food_id` (uuid, references food_items.id)
      - `quantity` (integer)
      - `pickup_time` (timestamptz)
      - `status` (text, default: 'pending')
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `reservations` table
    - Add policies for:
      - Users can create their own reservations
      - Users can read their own reservations
      - Users can update their own reservations
      - Providers can read reservations for their food items

  3. Triggers
    - Add trigger to update food_items quantity when reservation is created
    - Add trigger to update food_items quantity when reservation is cancelled
*/

-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  food_id uuid REFERENCES food_items(id) ON DELETE CASCADE,
  quantity integer NOT NULL CHECK (quantity > 0),
  pickup_time timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can create their own reservations"
  ON reservations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own reservations"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own reservations"
  ON reservations
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Providers can read reservations for their food items"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM food_items
      JOIN providers ON providers.id = food_items.provider_id
      WHERE food_items.id = reservations.food_id
      AND providers.user_id = auth.uid()
    )
  );

-- Create function to update food item quantity
CREATE OR REPLACE FUNCTION update_food_item_quantity()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    -- Check if there's enough quantity available
    IF (
      SELECT quantity FROM food_items WHERE id = NEW.food_id
    ) < NEW.quantity THEN
      RAISE EXCEPTION 'Not enough quantity available';
    END IF;
    
    -- Update food item quantity
    UPDATE food_items
    SET quantity = quantity - NEW.quantity
    WHERE id = NEW.food_id;
    
  ELSIF TG_OP = 'UPDATE' AND NEW.status = 'cancelled' AND OLD.status != 'cancelled' THEN
    -- Restore quantity when reservation is cancelled
    UPDATE food_items
    SET quantity = quantity + OLD.quantity
    WHERE id = OLD.food_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER update_food_item_quantity_on_reserve
  AFTER INSERT OR UPDATE ON reservations
  FOR EACH ROW
  EXECUTE FUNCTION update_food_item_quantity();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER update_reservations_updated_at
  BEFORE UPDATE ON reservations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();