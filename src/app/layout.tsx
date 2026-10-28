import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: {
    default: `${site.name} — изделия из дерева`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL('https://example.com'), // Замените на домен сайта после его появления
  openGraph: {
    title: `${site.name} — изделия из дерева`,
    description: site.description,
    locale: 'ru_RU',
    type: 'website',
  },
};

const navigation = [
  { href: '/', label: 'Главная' },
  { href: '/produkciya/', label: 'Продукция' },
  { href: '/kontakty/', label: 'Контакты' },
  { href: '/obo-mne/', label: 'Обо мне' },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link href="/" className="brand" aria-label={`${site.name} — главная`}>
              {site.name}
              <small>Мастерская изделий из дерева</small>
            </Link>
            <nav className="main-nav" aria-label="Главная навигация">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <p>© {new Date().getFullYear()} {site.name}</p>
            <p>{site.region}</p>
            <Link href="/kontakty/">Контактная информация</Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
