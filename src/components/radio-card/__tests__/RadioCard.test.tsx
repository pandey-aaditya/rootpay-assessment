import { render, screen, fireEvent } from '@testing-library/react';
import RadioCard from '../RadioCard';

describe('RadioCard', () => {
  const mockOnChange = jest.fn();

  it('renders with label', () => {
    render(
      <RadioCard
        icon={<span>Icon</span>}
        label="Personal"
        value="personal"
        checked={false}
        onChange={mockOnChange}
      />
    );
    expect(screen.getByText('Personal')).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    render(
      <RadioCard
        icon={<span>Icon</span>}
        label="Personal"
        value="personal"
        checked={false}
        onChange={mockOnChange}
      />
    );
    fireEvent.click(screen.getByRole('radio'));
    expect(mockOnChange).toHaveBeenCalledWith('personal');
  });
});
