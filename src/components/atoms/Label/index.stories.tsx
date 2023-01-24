import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import { Label } from './index';

export default {
  argTypes: {
    headlineTypes: {
      control: { type: 'radio' },
      options: ['small', 'middle', 'large'],
    },
  },
  component: Label,
  title: 'atoms/Label',
} as Meta;

type HeadlineProps = React.ComponentProps<typeof Label>;

const Template: Story<HeadlineProps> = (args) => <Label {...args} />;

export const Important = Template.bind({});
Important.args = {
  name: '重要',
  color: '#E20E20',
};

export const LimitedTime = Template.bind({});
LimitedTime.args = {
  name: '期間限定',
  color: '#E20E20',
};

export const NewItem = Template.bind({});
NewItem.args = {
  name: '新商品',
  color: '#E89244',
};

export const SpecialPrice = Template.bind({});
SpecialPrice.args = {
  name: '特別価格',
  color: '#40AF40',
};

