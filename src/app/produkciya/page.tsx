import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { allProducts } from '@/data/products';

export const metadata: Metadata = {
  title: 'Продукция',
  description: 'Каталог изделий из дерева, мебели на заказ, деревянных балок и пиломатериалов.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="panel page-intro">
        <span className="eyebrow">Каталог</span>
        <h1>Продукция</h1>
        <p>
          Здесь собраны примеры изделий из дерева. Размеры, конструкцию и отделку
          мебели можно согласовать индивидуально. Наличие и параметры пиломатериалов уточняются отдельно.
        </p>
      </section>
      <section className="product-grid" aria-label="Каталог изделий">
        {allProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
      </section>
    </>
  );
}
