import { render, screen, fireEvent } from '@testing-library/react';
import OtpInput from '../OtpInput';

describe('OtpInput', () => {
  const mockOnChange = jest.fn();

  it('renders correct number of inputs', () => {
    render(
      <OtpInput length={4} value={['', '', '', '']} onChange={mockOnChange} />
    );
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(4);
  });

  it('only accepts numeric input', () => {
    render(
      <OtpInput length={4} value={['', '', '', '']} onChange={mockOnChange} />
    );
    const input = screen.getAllByRole('textbox')[0];

    fireEvent.change(input, { target: { value: 'a' } });
    expect(mockOnChange).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: '5' } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
