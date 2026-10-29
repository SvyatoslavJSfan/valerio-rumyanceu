import type { Metadata } from 'next';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Контакты',
  description: `Контактная информация мастерской ${site.name}. ${site.region}.`,
};

export default function ContactsPage() {
  return (
    <>
      <section className="panel page-intro">
        <span className="eyebrow">Связаться</span>
        <h1>Контакты</h1>
        <p>По вопросам изготовления мебели и пиломатериалов свяжитесь со мной удобным способом.</p>
      </section>
      <div className="info-grid">
        <section className="panel info-card">
          <h2>Контактная информация</h2>
          <ul className="contact-list">
            <li>
              <strong>Телефон</strong>
              <a href={`tel:${site.phoneLink}`}>{site.phone}</a>
            </li>
            <li>
              <strong>Электронная почта</strong>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <strong>Регион работы</strong>
              <span>{site.region}</span>
            </li>
          </ul>
        </section>
        <section className="panel info-card">
          <h2>Что можно обсудить</h2>
          <ul>
            <li>Тип изделия и желаемый внешний вид.</li>
            <li>Размеры, конструкцию и материалы.</li>
            <li>Для пиломатериалов — породу древесины, сечение, длину и объём.</li>
            <li>Возможность изготовления и сроки.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
