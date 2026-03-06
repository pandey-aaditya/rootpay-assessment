import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

function Button({
  children,
  variant = 'primary',
  loading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button button-${variant} ${loading ? 'button-loading' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className="button-spinner" /> : children}
    </button>
  );
}

export default Button;
