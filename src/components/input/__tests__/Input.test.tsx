import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input', () => {
  it('renders input field', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('toggles password visibility', () => {
    render(<Input type="password" value="secret" onChange={() => {}} />);
    const input = screen.getByDisplayValue('secret');
    const toggleButton = screen.getByRole('button');

    expect(input).toHaveAttribute('type', 'password');
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');
  });
});
