import './image-gallery.css';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Calrousel } from './index';

export default {
  component: Calrousel,
  title: 'organisms/Calrousel',
} as Meta;

const images = [
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

const Template: Story = () => <Calrousel images={images} />;

export const calrousel = Template.bind({});
