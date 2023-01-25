import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import dayjs from 'dayjs';
import { WideCard } from './index';

export default {
  argTypes: {},
  component: WideCard,
  title: 'atoms/WideCard',
} as Meta;

type WideCardProps = React.ComponentProps<typeof WideCard>;

const Template: Story<WideCardProps> = (args) => <WideCard {...args} />;

export const wideCard = Template.bind({});
wideCard.args = {
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
};
