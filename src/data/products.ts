export type Product = {
  slug: string;
  title: string;
  category: 'furniture' | 'timber';
  image: string;
  images?: string[];
  description: string;
  details?: string[];
};

export const products: Product[] = [
  {
    slug: 'krovat-iz-koryag',
    title: 'Кровать из массива дерева',
    category: 'furniture',
    image: '/images/furniture/bed/krovat-iz-koryag.jpg',
     images: [
    '/images/furniture/bed/krovat-iz-koryag.jpg',
    '/images/furniture/bed/krovat-s-rogami.jpeg',
    '/images/furniture/bed/spalnyi-kabinet.jpeg',

  ],
    description: 'Изготовление кровати по индивидуальным размерам.',
    details: ['Индивидуальные размеры и конфигурация.', 'Натуральная древесина.', 'Варианты отделки обсуждаются при заказе.'],
  },
  {
    slug: 'krovat-v-japonskom-stile',
    title: 'Кровать в японском стиле',
    category: 'furniture',
    image: '/images/furniture/bed/krovat-v-japonskom-stile.jpg',
    description: 'Изготовление кровати в японском стиле.',
    details: ['Лаконичный дизайн.', 'Размеры под конкретное помещение.', 'Возможность согласовать детали исполнения.'],
  },
  {
    slug: 'shkaf-v-stile-loft',
    title: 'Шкаф в стиле loft',
    category: 'furniture',
    image: '/images/furniture/cabinet/shkaf-v-stile-loft.jpg',
    images: [
      '/images/furniture/cabinet/shkaf-v-stile-loft.jpg',
    '/images/furniture/cabinet/shkaf-szadi.jpeg',
    '/images/furniture/cabinet/shkaf-vnutri.jpeg',
  ],
    description: 'Изготовление шкафа в стиле loft.',
    details: ['Стиль loft и сочетание фактур.', 'Размеры и внутреннее наполнение обсуждаются индивидуально.'],
  },
  {
    slug: 'stol-dlya-posidelok',
    title: 'Стол для посиделок',
    category: 'furniture',
    image: '/images/furniture/table/stol-dlya-posidelok.jpg',
    description: 'Изготовление стола для посиделок.',
    details: ['Стол для дома, дачи или террасы.', 'Размер и отделка подбираются индивидуально.'],
  },
  {
    slug: 'stol-romashka',
    title: 'Стол-ромашка',
    category: 'furniture',
    image: '/images/furniture/table/stol-romashka.jpg',
    images: [
    '/images/furniture/table/stol-romashka.jpg',
    '/images/furniture/table/zagotovki-k-stolu-tsvetku.jpeg',
  ],
    description: 'Изготовление стола-ромашки.',
    details: ['Оригинальная форма столешницы.', 'Индивидуальный подбор размеров и отделки.'],
  },
  {
    slug: 'stol-v-lesnom-stile',
    title: 'Стол в лесном стиле',
    category: 'furniture',
    image: '/images/furniture/table/stol-v-lesnom-stile.jpg',
    images: [
    '/images/furniture/table/stol-v-lesnom-stile.jpg',
    '/images/furniture/table/dekor-podstoliya.jpeg',
    '/images/furniture/table/pismennyi-stol-myslitelya.jpeg',
    '/images/furniture/table/stoleshniza-variant1.jpeg',
  ],
    description: 'Изготовление стола в лесном стиле.',
    details: ['Выразительная природная фактура.', 'Возможность согласовать размеры и конструкцию.'],
  },
    {
    slug: 'kukhonnyi-stol',
    title: 'Кухонный стол',
    category: 'furniture',
    image: '/images/furniture/table/kukhonnyi-stol.jpeg',
    images: [
    '/images/furniture/table/kukhonnyi-stol.jpeg',
    '/images/furniture/table/podstolie.jpeg',
    '/images/furniture/table/podstolie1.jpeg',
    '/images/furniture/table/stoleshniza.jpeg',
  ],
    description: 'Изготовление кухонного стола.',
    details: ['Выразительная природная фактура.', 'Возможность согласовать размеры и конструкцию.'],
  },
      {
    slug: 'stol-dlya-sada',
    title: 'Стол для сада',
    category: 'furniture',
    image: '/images/furniture/table/stol-dlya-sada.jpeg',
    images: [
    '/images/furniture/table/stol-dlya-sada.jpeg',
    '/images/furniture/table/stol-zagotovka.jpeg',
  ],
    description: 'Изготовление стола для сада.',
    details: ['Выразительная природная фактура.', 'Возможность согласовать размеры и конструкцию.'],
  },
  {
    slug: 'detskiy-domik',
    title: 'Детский домик',
    category: 'furniture',
    image: '/images/miscellaneous/detskiy-domik.jpg',
    description: 'Изготовление детского домика.',
    details: ['Конструкция и размеры согласуются индивидуально.', 'Исполнение для участка или дачи.'],
  },
    {
    slug: 'stol-so-skameikoi-v-sad1',
    title: 'Стол со скамейкой в саду',
    category: 'furniture',
    image: '/images/furniture/table/stol-so-skameikoi-v-sad1.jpeg',
    images: [
    '/images/furniture/table/stol-so-skameikoi-v-sad1.jpeg',
    '/images/furniture/table/stol-so-skameikoi-v-sad2.jpeg',
  ],
    description: 'Изготовление стола со скамейкой для сада.',
    details: ['Выразительная природная фактура.', 'Возможность согласовать размеры и конструкцию.'],
  },
  {
    slug: 'detskiy-domik-v-stile-fachwerk',
    title: 'Детский домик в стиле фахверк',
    category: 'furniture',
    image: '/images/miscellaneous/detskiy-domik-v-stile-fachwerk.jpg',
    description: 'Изготовление детского домика в стиле фахверк.',
    details: ['Декоративный каркас в стиле фахверк.', 'Размеры и детали проекта обсуждаются заранее.'],
  },
  {
    slug: 'dveri',
    title: 'Двери',
    category: 'furniture',
    image: '/images/miscellaneous/dveri.jpg',
    description: 'Изготовление дверей.',
    details: ['Размеры и внешний вид по индивидуальным требованиям.', 'Варианты древесины и отделки согласуются отдельно.'],
  },
  {
    slug: 'kacheli',
    title: 'Качели',
    category: 'furniture',
    image: '/images/miscellaneous/kacheli.jpg',
    images: [
    '/images/miscellaneous/kacheli.jpg',
    '/images/miscellaneous/sistema-podvesov.jpeg',
  ],
    description: 'Изготовление качелей.',
    details: ['Для сада, дачи или загородного дома.', 'Конструкция и габариты обсуждаются индивидуально.'],
  },
  {
    slug: 'lestnitsa',
    title: 'Лестница',
    category: 'furniture',
    image: '/images/miscellaneous/lestnitsa.jpg',
    images: [
    '/images/miscellaneous/lestniza1.jpeg',
    '/images/miscellaneous/lestniza-ograzhdenie.jpeg',
  ],
    description: 'Изготовление лестницы.',
    details: ['Изготовление с учётом особенностей помещения.', 'Геометрия и отделка согласуются до начала работ.'],
  },
  {
    slug: 'tv-gruppa',
    title: 'Телевизорная группа',
    category: 'furniture',
    image: '/images/miscellaneous/tv-gruppa-polki.jpg',
    images: [
    '/images/miscellaneous/tv-gruppa-polki.jpg',
    '/images/miscellaneous/tv-gruppa.jpg',
  ],
    description: 'Изготовление телевизорной группы.',
    details: ['Мебельная композиция для телевизионной зоны.', 'Размеры и расположение элементов обсуждаются индивидуально.'],
  },
  {
    slug: 'sanuzel',
    title: 'Санузел',
    category: 'furniture',
    image: '/images/miscellaneous/sanuzel.jpeg',
    description: 'Изготовление санузла.',
    details: ['Индивидуальный дизайн и планировка.', 'Конфигурация под размеры помещения.'],
  },
    {
    slug: 'stol-so-skameikami',
    title: 'Стол с скамейками',
    category: 'furniture',
    image: '/images/miscellaneous/stol-so-skameikami.jpeg',
    description: 'Изготовление стола с скамейками.',
    details: ['Индивидуальный дизайн и планировка.', 'Конфигурация под размеры помещения.'],
  },
];

export const timberProducts: Product[] = [
  {
    slug: 'derevyannye-balki',
    title: 'Деревянные балки и комплектующие к ним',
    category: 'timber',
    image: '/images/timber/smontirovannye-balki.jpg',
    images: [
    '/images/timber/balka1.jpg',
    '/images/timber/balka2.jpg',
    '/images/timber/balka3.jpg',
    '/images/timber/balka4.jpg',
    '/images/timber/balka5.jpg'
  ],
    description: 'Распил древесины на балки и пиломатериалы. Наличие, сечение и длину необходимо уточнять.',
    details: ['Возможен распил по согласованным размерам.', 'Породу древесины, сечение, длину и объём уточняйте заранее.'],
  },
];

export const allProducts: Product[] = [...products, ...timberProducts];

export function getProductBySlug(slug: string) {
  return allProducts.find((product) => product.slug === slug);
}
