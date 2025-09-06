export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Electronics',
    description: 'Cutting-edge technology and innovative gadgets for modern living',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
  },
  {
    id: 2,
    name: 'Fashion',
    description: 'Trendy clothing and accessories to express your unique style',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
  },
  {
    id: 3,
    name: 'Home & Garden',
    description: 'Transform your living space with our curated home essentials',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
  },
  {
    id: 4,
    name: 'Sports & Fitness',
    description: 'Gear up for an active lifestyle with premium sports equipment',
    image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg',
  },
  {
    id: 5,
    name: 'Beauty & Health',
    description: 'Premium beauty products and wellness essentials for self-care',
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg',
  },
  {
    id: 6,
    name: 'Books & Media',
    description: 'Expand your knowledge with our collection of books and media',
    image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg',
  },
];