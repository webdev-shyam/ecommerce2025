import { categories } from '@/data/categories';

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id.toString(),
  }));
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}