import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="panel hero">
        <div className="hero-content">
          <span className="eyebrow">Мастерская изделий из дерева</span>
          <h1>Дерево.<br />Характер.<br />Ручная работа.</h1>
          <p>
            Мебель и предметы из массива дерева по индивидуальным размерам,
            а также деревянные балки и комплектующие к ним. Работаю для заказчиков
            из Тверской и Московской областей.
          </p>
        </div>
      </section>

      <section className="home-actions" aria-label="Разделы сайта">
        <Link className="action-card" href="/produkciya/">
          <span>Продукция</span><span aria-hidden="true">↗</span>
        </Link>
        <Link className="action-card" href="/kontakty/">
          <span>Контакты</span><span aria-hidden="true">↗</span>
        </Link>
        <Link className="action-card" href="/obo-mne/">
          <span>Обо мне</span><span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="panel section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Примеры работ</span>
            <h2>Из дерева — с характером</h2>
          </div>
          <p>Посмотрите некоторые изделия из каталога. Каждый проект можно обсудить индивидуально.</p>
        </div>
        <div className="product-grid">
          {featured.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
        <p style={{ margin: '24px 0 0' }}>
          <Link className="product-link" href="/produkciya/">Смотреть всю продукцию →</Link>
        </p>
      </section>
    </>
  );
}
