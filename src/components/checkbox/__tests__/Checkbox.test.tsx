import { render } from '@testing-library/react';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  it('renders unchecked state', () => {
    const { container } = render(<Checkbox checked={false} />);
    const checkbox = container.querySelector('.checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toHaveClass('checkbox-checked');
  });

  it('renders checked state', () => {
    const { container } = render(<Checkbox checked={true} />);
    const checkbox = container.querySelector('.checkbox');
    expect(checkbox).toHaveClass('checkbox-checked');
  });
});
