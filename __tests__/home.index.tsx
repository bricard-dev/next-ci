import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home', () => {
  it('should render a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: /home/i });

    expect(heading).toBeInTheDocument();
  });
});
