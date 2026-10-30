import type { MetadataRoute } from 'next';
import { allProducts } from '@/data/products';

export const dynamic = 'force-static';

const baseUrl = 'https://valerio-rumyanceu.ru';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/produkciya/`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakty/`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/obo-mne/`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/mebel-na-zakaz/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
   {
      url: `${baseUrl}/derevyannye-balki/`,
      changeFrequency: 'monthly',
      priority: 0.8,
   },
   {
      url: `${baseUrl}/nashi-raboty/`,
      changeFrequency: 'monthly',
      priority: 0.8,
   },
  ];

  const productPages: MetadataRoute.Sitemap = allProducts.map(
    (product) => ({
      url: `${baseUrl}/produkciya/${product.slug}/`,
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  );

  return [...pages, ...productPages];
}