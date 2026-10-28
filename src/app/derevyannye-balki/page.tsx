import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Деревянные балки на заказ',
  description:
    'Деревянные балки ' +
    'по индивидуальным размерам. ' +
    'Производство и доставка по согласованию.',
};

export default function DerevyannyeBalki() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
    DerevyannyeBalki
    </main>
  );
}
