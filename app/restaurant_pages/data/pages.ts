export const pages = [
  { slug: 'page1', title: 'Page One', image: '/images/image1.jpg' },
  { slug: 'page2', title: 'Page Two', image: '/images/image2.jpg' },
  { slug: 'page3', title: 'Page Three', image: '/images/image3.jpg' },
  { slug: 'page4', title: 'Page Four', image: '/images/image4.jpg' },
  { slug: 'page5', title: 'Page Five', image: '/images/image5.jpg' },
];

export function getPageBySlug(slug: string) {
  return pages.find((page) => page.slug === slug);
}