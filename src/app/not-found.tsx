import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="panel page-intro">
      <span className="eyebrow">404</span>
      <h1>Страница не найдена</h1>
      <p>Возможно, ссылка устарела или адрес был введён с ошибкой.</p>
      <Link className="product-link" href="/">Вернуться на главную →</Link>
    </section>
  );
}
