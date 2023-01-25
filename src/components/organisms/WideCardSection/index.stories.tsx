import type { Meta, Story } from '@storybook/react/types-6-0';
import dayjs from 'dayjs';
import { WideCardSection } from './index';

export default {
  component: WideCardSection,
  title: 'organisms/WideCardSection',
} as Meta;

type WideCardSectionProps = React.ComponentProps<typeof WideCardSection>;

const Template: Story<WideCardSectionProps> = (args) => (
  <WideCardSection {...args} />
);

export const Notice = Template.bind({});
Notice.args = {
  heading: 'お知らせ',
  wideCardArray: [
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
      text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
  ],
};
