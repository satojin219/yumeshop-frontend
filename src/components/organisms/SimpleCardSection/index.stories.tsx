import type { Meta, Story } from '@storybook/react/types-6-0';
import uuid from 'react-uuid';
import { SimpleCardSection, SimpleCardSectionProps } from './index';

export default {
  component: SimpleCardSection,
  title: 'organisms/simpleCardSection',
} as Meta;

const Template: Story<SimpleCardSectionProps> = (args) => (
  <SimpleCardSection {...args} />
);

export const Campaign = Template.bind({});
Campaign.args = {
  heading: 'キャンペーン',
  simpleCardArray: [
    {
      id: uuid(),
      image: 'https://picsum.photos/id/1019/1000/600/',
      title: 'ゆめゆめみゆめみ',
      path: '/shop_items',
    },
    {
      id: uuid(),
      image: 'https://picsum.photos/id/1019/1000/600/',
      title:
        'ゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめ',
      path: '/shop_items/1',
    },
    {
      id: uuid(),
      image: 'https://picsum.photos/id/1019/1000/600/',
      title: 'ゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめ',
      path: '/shop_items/2',
    },
    {
      id: uuid(),
      image: 'https://picsum.photos/id/1019/1000/600/',
      title:
        'ゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆ',
      path: '/shop_items/2',
    },
  ],
};
