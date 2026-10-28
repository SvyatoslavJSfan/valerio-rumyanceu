import type { Metadata } from 'next';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Обо мне',
  description: `О мастере и изготовлении деревянных изделий. ${site.region}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="panel page-intro">
        <span className="eyebrow">О мастере</span>
        <h1>Обо мне</h1>
        <p>{site.about}</p>
      </section>
      <div className="info-grid">
        <section className="panel info-card">
          <h2>Индивидуальный подход</h2>
          <p>
            У каждого изделия свои размеры, назначение и особенности. Перед изготовлением
            можно обсудить основные требования и подобрать подходящее решение.
          </p>
        </section>
        <section className="panel info-card">
          <h2>Что я делаю</h2>
          <ul>
            <li>Мебель и предметы интерьера из дерева.</li>
            <li>Столы, кровати, шкафы, двери и другие изделия.</li>
            <li>Детские домики, качели и конструкции для участка.</li>
          </ul>
        </section>
      </div>
      <p className="note">
        Этот текст пока шаблонный. Лучше добавить реальные сведения о мастере, опыте,
        используемых породах древесины и географии работ.
      </p>
    </>
  );
}
