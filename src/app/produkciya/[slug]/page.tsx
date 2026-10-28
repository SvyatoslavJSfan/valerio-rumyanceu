import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allProducts, getProductBySlug } from '@/data/products';
import ProductGallery from '@/components/ProductGallery/ProductGallery';


export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Изделие не найдено' };

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <div className="breadcrumbs">
        <Link href="/">Главная</Link> / <Link href="/produkciya/">Продукция</Link> / {product.title}
      </div>
      <article className="panel product-detail">
        <div className="detail-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <ProductGallery
            images={product.images ?? [product.image]}
            title={product.title}
          />
        </div>
        <div className="detail-copy">
          <span className="eyebrow">{product.category === 'timber' ? 'Пиломатериалы' : 'Изделия из дерева'}</span>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {product.details && (
            <ul>
              {product.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          )}
          <p className="note">
            Параметры и детали исполнения обсуждаются индивидуально. Свяжитесь со мной,
            чтобы уточнить информацию об этом изделии.
          </p>
          <Link className="product-link" href="/kontakty/">Контактная информация →</Link>
        </div>
      </article>
      <p style={{ marginTop: 24 }}>
        <Link className="back-link" href="/produkciya/">← Вернуться в каталог</Link>
      </p>
    </>
  );
}
