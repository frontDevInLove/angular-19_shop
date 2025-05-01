import { ProductContext } from '@pages/product-page/model/product-context.service';

export const mockProduct: ProductContext = {
  id: '1',
  images: [
    '/sliders/img_1.png',
    '/sliders/img_2.jpeg',
    '/sliders/img_3.jpeg',
    '/sliders/img_4.jpeg',
    '/sliders/img_4.jpeg',
  ],
  title:
    'Ключ комбинированный 27мм (Chrome vanadium) на держателе сатинированный 1/10 (ER-31027) ЭВРИКА',
  logo: '/images/logo.png',
  article: 'ФТ-305.174',
  code: '00000030692',
  price: 15341,
  bonus: 20.79,
  stock: [
    {
      city: 'Москва',
      count: 2,
      deliveryDate: '22.04.2025',
    },
    {
      city: 'Ростов',
      count: 2,
      deliveryDate: '29.04.2025',
    },
  ],
  specs: [
    {
      label: 'Тип ТС',
      value: 'грузовые автомобили, автобусы, сельхозтехника',
    },
    {
      label: 'Применяемость',
      value: 'КАМАЗ, ЛИАЗ, CASE с дв. CUMMINS ISBe/ISDe',
    },
    {
      label: 'Марка ТС',
      value: 'КАМАЗ, ЛИАЗ, CASE',
    },
    {
      label: 'Кросс‑коды',
      value:
        'FC6206, WK950/3, 110-16-008, 6127, FF185M, 1457434180, KC28, KF3041',
    },
    {
      label: 'Состав комплекта',
      value: 'Фильтр очистки топлива: 1 шт.',
    },
    {
      label: 'Модель двигателя',
      value: 'Cummins ISD 6.7, Cummins ISB 6.7',
    },
    {
      label: 'Марка двигателя',
      value: 'Cummins Inc.',
    },
    {
      label: 'Доп. информация',
      value: '–',
    },
  ],
};
