import uuid from "react-uuid";
import dayjs from 'dayjs';
import { WideCardProps } from "src/components/atoms/WideCard";

export const exampleCalrouselMock = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
  },
];
export const exampleCampaignMock = [
  {
    id: uuid(),
    image: 'https://picsum.photos/id/1019/1000/600/',
    title: 'ゆめみゆめみ',
    path: '/shop_items',
  },
  {
    id: uuid(),
    image: 'https://picsum.photos/id/1019/1000/600/',
    title: 'ゆめゆめ',
    path: '/shop_items',
  },
  {
    id: uuid(),
    image: 'https://picsum.photos/id/1019/1000/600/',
    title: 'ゆめみゆめみゆゆめみゆめみゆゆめみゆめみゆゆめみゆめみゆ',
    path: '/shop_items',
  },
  {
    id: uuid(),
    image: 'https://picsum.photos/id/1019/1000/600/',
    title: 'ゆめみゆめみゆゆめみゆめみゆ',
    path: '/shop_items',
  },
  {
    id: uuid(),
    image: 'https://picsum.photos/id/1019/1000/600/',
    title: 'ゆめみゆめみゆゆめみゆめみゆゆめみゆめみゆ',
    path: '/shop_items',
  },
  {
    id: uuid(),
    image: 'https://picsum.photos/id/1019/1000/600/',
    title: 'ゆめみゆめみゆゆめみゆめみゆ',
    path: '/shop_items',
  },
];

export const exampleCategoryMock = [
  {
    id: uuid(),
    image: 'https://picsum.photos/id/1019/1000/600/',
    title: 'ゆめみゆめみゆめみゆめみゆめみゆ',
    path: '/shop_items',
  },
  {
    id: uuid(),
    image: 'https://picsum.photos/id/1019/1000/600/',
    title: 'ゆめゆめみゆめみゆめみゆめゆめめ',
    path: '/shop_items',
  },
  {
    id: uuid(),
    image: 'https://picsum.photos/id/1019/1000/600/',
    title: 'ゆめみゆめみゆ',
    path: '/shop_items',
  },
  {
    id: uuid(),
    image: 'https://picsum.photos/id/1019/1000/600/',
    title: 'ゆめみゆめみゆ',
    path: '/shop_items',
  },
];

export const exampleNoticeMock:WideCardProps[] = [
  {
    time: dayjs('2020-12-23'),
    labels: [
      {
        name: '重要',
        color: '#E20E20',
      },
      {
        name: '新商品',
        color: '#E89244',
      },
      {
        name: '特別価格',
        color: '#40AF40',
      },
    ],
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    time: dayjs('2020-12-24'),
    labels: [
      {
        name: '重要',
        color: '#E20E20',
      },
      {
        name: '特別価格',
        color: '#40AF40',
      },
    ],
    text: 'テキストテキトテキストテキストテキストテキストテキストテキスト',
  },
];