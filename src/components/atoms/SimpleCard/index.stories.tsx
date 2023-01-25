import type { Meta, Story } from '@storybook/react/types-6-0';
import uuid from 'react-uuid';
import { SimpleCard } from './index';

export default {
  component: SimpleCard,
  title: 'atoms/simpleCard',
} as Meta;

const props = {
  id: uuid(),
  image: 'https://picsum.photos/id/1019/1000/600/',
  title:
    'ゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめ',
  path: '/shop_items'
};

const Template: Story = () => <SimpleCard id={props.id} image={props.image} title={props.title} path={props.path} />;

export const simpleCard = Template.bind({});
