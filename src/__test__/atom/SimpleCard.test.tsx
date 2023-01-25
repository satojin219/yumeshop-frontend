import { render, screen } from '@testing-library/react';
import uuid from 'react-uuid';
import { SimpleCard } from 'src/components/atoms/SimpleCard';

const props = {
  id: uuid(),
  image: 'https://picsum.photos/id/1019/1000/600/',
  title: 'ゆめみ',
  path: '/shop_items',
};

describe('SimpleCard', () => {
  it('render SimpleCard component', () => {
    render(
      <SimpleCard
        id={props.id}
        image={props.image}
        title={props.title}
        path={props.path}
      />,
    );
    expect(screen.getByText('ゆめみ')).toBeInTheDocument();
    
  });
});
