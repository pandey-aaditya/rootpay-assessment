import { render, screen, fireEvent } from '@testing-library/react';
import DropdownSelect from '../DropdownSelect';

describe('DropdownSelect', () => {
  const mockOnChange = jest.fn();

  it('renders with default value', () => {
    render(<DropdownSelect value="+91" onChange={mockOnChange} />);
    expect(screen.getByText('+91')).toBeInTheDocument();
  });

  it('opens dropdown on click', () => {
    render(<DropdownSelect value="+91" onChange={mockOnChange} />);
    const trigger = screen.getByRole('button');

    fireEvent.click(trigger);
    expect(screen.getByText('India')).toBeInTheDocument();
  });
});
