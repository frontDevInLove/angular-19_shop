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
};
