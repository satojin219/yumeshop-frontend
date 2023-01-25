import type { Meta, Story } from '@storybook/react/types-6-0';
import { Footer } from './index';

export default {
  component: Footer,
  title: 'organisms/Footer',
} as Meta;

type FooterProps = React.ComponentProps<typeof Footer>;
  
const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const footer = Template.bind({});
footer.args = {
  links: [
    {
      name: 'メニューメニュー',
      path: 'https://www.yumemi.co.jp/',
    },
    {
      name: 'メニューメニュー',
      path: 'https://www.yumemi.co.jp/',
    },
    {
      name: 'メニューメニュー',
      path: 'https://www.yumemi.co.jp/',
    },
    {
      name: 'メニューメニュー',
      path: 'https://www.yumemi.co.jp/',
    },
    {
      name: 'メニューメニュー',
      path: 'https://www.yumemi.co.jp/',
    },
    {
      name: 'メニューメニュー',
      path: 'https://www.yumemi.co.jp/',
    },
  ],
};