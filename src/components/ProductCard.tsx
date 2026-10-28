import Link from 'next/link';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/produkciya/${product.slug}/`} aria-label={`Подробнее: ${product.title}`}>
        <div className="product-image-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
            loading="lazy"
          />
        </div>
        <div className="product-copy">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span className="product-link">Подробнее <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  );
}
