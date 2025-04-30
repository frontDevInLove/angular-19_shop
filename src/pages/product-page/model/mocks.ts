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
  title: 'Моторное масло LIQUI MOLY Optimal Synth 5W-40 4 л',
  article: 'ART-124587',
  price: 3450,
  bonus: 210,
  stock: [
    {
      city: 'Ростов',
      count: 12,
      deliveryDate: '2025-05-02',
    },
    {
      city: 'Москва',
      count: 5,
      deliveryDate: '2025-05-03',
    },
  ],
};
