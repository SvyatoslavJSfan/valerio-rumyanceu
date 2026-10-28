import Image from 'next/image';
import type { Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <Image
        src={product.image}
        alt={product.title}
        width={800}
        height={600}
        sizes="(max-width: 640px) 100vw, 50vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </article>
  );
}