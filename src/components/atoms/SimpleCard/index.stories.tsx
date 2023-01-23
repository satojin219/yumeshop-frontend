import type { Meta, Story } from '@storybook/react/types-6-0';
import { SimpleCard } from './index';

export default {
  component: SimpleCard,
  title: 'atoms/simpleCard',
} as Meta;

const props = {
  image: 'https://picsum.photos/id/1019/1000/600/',
  title:
    'ゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめみゆめ',
};

const Template: Story = () => <SimpleCard image={props.image} title={props.title} url={props.url} />;

export const simpleCard = Template.bind({});
