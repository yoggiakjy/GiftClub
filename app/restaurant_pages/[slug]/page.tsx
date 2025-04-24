// /app/restaurant_pages/[slug]/page.tsx
import RestaurantTemplate from '../RestaurantTemplate';
import { getPageBySlug } from '../data/pages';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default function DynamicPage({ params }: Props) {
  const page = getPageBySlug(params.slug);

  if (!page) return notFound();

  return <RestaurantTemplate title={page.title} image = {page.image} discount ="" description=''/>;
}
