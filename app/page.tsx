// /app/page.tsx
import Link from 'next/link';
import { pages } from './restaurant_pages/data/pages';

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Select a Page</h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {pages.map((page) => (
          <Link key={page.slug} href={`/restaurant_pages/${page.slug}`}>
            {page.title}
          </Link>
        ))}
      </nav>
    </main>
  );
}
