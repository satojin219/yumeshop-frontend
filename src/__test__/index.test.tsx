import { render, screen } from '@testing-library/react';
import Home from '../pages';

describe('Home', () => {
  
  it('renders a heading', () => {

    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /キャンペーン/i,
    });
    // const image = screen.getByAltText('ゆめみゆめみゆ');

    expect(heading).toBeInTheDocument();
    // expect(image).toBeInTheDocument();
  });
  
});
