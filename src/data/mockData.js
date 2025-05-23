const providers = [
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    name: 'Fresh Market Grocery',
    address: '123 Main St, Anytown',
    image: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 8,
    distance: 8,
  },
  {
    id: '223e4567-e89b-12d3-a456-426614174001',
    name: 'Taste of Home Restaurant',
    address: '456 Oak Ave, Anytown',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 6,
    distance: 2,
  },
  {
    id: '323e4567-e89b-12d3-a456-426614174002',
    name: 'Green Earth Co-op',
    address: '789 Elm Blvd, Anytown',
    image: 'https://images.pexels.com/photos/8902674/pexels-photo-8902674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 9,
    distance: 0,
  },
  {
    id: '423e4567-e89b-12d3-a456-426614174003',
    name: 'Urban Harvest Bakery',
    address: '101 Maple Rd, Anytown',
    image: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 7,
    distance: 5
  }
];

const foodItems = [
  {
    id: '523e4567-e89b-12d3-a456-426614174004',
    name: 'Organic Vegetable Bundle',
    provider: 'Fresh Market Grocery',
    description: 'Assorted organic vegetables harvested today. Perfect for family meals.',
    image: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 9.99,
    originalPrice: 9.99,
    expiresAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    distance: 8,
    dietary: ['vegan', 'gluten-free', 'organic'],
    cuisine: 'various',
    rating: 8,
    quantity: 10
  },
  {
    id: '623e4567-e89b-12d3-a456-426614174005',
    name: 'Homestyle Chicken Soup',
    provider: 'Taste of Home Restaurant',
    description: 'Made fresh this morning. Healthy, hearty soup with vegetables and herbs.',
    image: 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 8.50,
    originalPrice: 10.99,
    expiresAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    distance: 2,
    dietary: ['high-protein'],
    cuisine: 'american',
    rating: 7,
    quantity: 10
  },
  {
    id: '723e4567-e89b-12d3-a456-426614174006',
    name: 'Vegan Buddha Bowl',
    provider: 'Green Earth Co-op',
    description: 'Nutrient-rich bowl with quinoa, roasted vegetables, and tahini dressing.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 11.99,
    originalPrice: 13.99,
    expiresAt: new Date(Date.now() + 1 * 12 * 60 * 60 * 1000).toISOString(),
    distance: 0,
    dietary: ['vegan', 'gluten-free', 'organic'],
    cuisine: 'international',
    rating: 9,
    quantity: 8
  },
  {
    id: '823e4567-e89b-12d3-a456-426614174007',
    name: 'Artisan Bread Loaves',
    provider: 'Urban Harvest Bakery',
    description: 'Freshly baked sourdough and whole grain bread loaves from today.',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 5.50,
    originalPrice: 6.99,
    expiresAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    distance: 5,
    dietary: ['vegetarian'],
    cuisine: 'bakery',
    rating: 6,
    quantity: 15
  },
  {
    id: '923e4567-e89b-12d3-a456-426614174008',
    name: 'Mediterranean Meal Box',
    provider: 'Taste of Home Restaurant',
    description: 'Complete meal with hummus, falafel, Greek salad, and pita bread.',
    image: 'https://images.pexels.com/photos/1618901/pexels-photo-1618901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 12.99,
    originalPrice: 14.99,
    expiresAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    distance: 2,
    dietary: ['vegetarian', 'high-protein'],
    cuisine: 'mediterranean',
    rating: 8,
    quantity: 7
  },
  {
    id: 'a23e4567-e89b-12d3-a456-426614174009',
    name: 'Seasonal Fruit Box',
    provider: 'Fresh Market Grocery',
    description: 'Assorted seasonal fruits, perfect for snacking or desserts.',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 10.99,
    originalPrice: 12.99,
    expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    distance: 8,
    dietary: ['vegan', 'gluten-free', 'organic'],
    cuisine: 'various',
    rating: 7,
    quantity: 12
  }
];

const dietaryOptions = [
  { value: 'vegan', label: 'Vegan' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'gluten-free', label: 'Gluten-Free' },
  { value: 'organic', label: 'Organic' },
  { value: 'high-protein', label: 'High Protein' }
];

const cuisineOptions = [
  { value: 'american', label: 'American' },
  { value: 'italian', label: 'Italian' },
  { value: 'asian', label: 'Asian' },
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'international', label: 'International' },
  { value: 'bakery', label: 'Bakery' },
  { value: 'various', label: 'Various' }
];

export { providers, foodItems, dietaryOptions, cuisineOptions };
