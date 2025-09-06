export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sale?: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    sale: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 299.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    featured: true,
  },
  {
    id: 3,
    name: 'Professional Camera Lens',
    price: 649.99,
    originalPrice: 899.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    sale: true,
  },
  {
    id: 4,
    name: 'Luxury Skincare Set',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beauty & Health',
  },
  {
    id: 5,
    name: 'Designer Sunglasses',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fashion',
    sale: true,
  },
  {
    id: 6,
    name: 'Premium Coffee Maker',
    price: 179.99,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home & Garden',
  },
  {
    id: 7,
    name: 'Wireless Bluetooth Speaker',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
  },
  {
    id: 8,
    name: 'Organic Tea Collection',
    price: 34.99,
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home & Garden',
  },
  {
    id: 9,
    name: 'Premium Yoga Mat',
    price: 59.99,
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sports & Fitness',
  },
  {
    id: 10,
    name: 'Designer Notebook Set',
    price: 24.99,
    image: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Books & Media',
  },
  {
    id: 11,
    name: 'Smart Home Assistant',
    price: 129.99,
    image: 'https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
  },
  {
    id: 12,
    name: 'Artisan Candle Set',
    price: 45.99,
    image: 'https://images.pexels.com/photos/1581210/pexels-photo-1581210.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home & Garden',
  },
  {
    id: 13,
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
  },
  {
    id: 14,
    name: 'Designer Handbag',
    price: 189.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fashion',
    sale: true,
  },
  {
    id: 15,
    name: 'Fitness Resistance Bands',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sports & Fitness',
  },
  {
    id: 16,
    name: 'Premium Face Serum',
    price: 89.99,
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beauty & Health',
    featured: true,
  },
  {
    id: 17,
    name: 'Classic Novel Collection',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Books & Media',
  },
  {
    id: 18,
    name: 'Casual Sneakers',
    price: 119.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fashion',
  },
];