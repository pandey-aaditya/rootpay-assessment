import { type InputHTMLAttributes, forwardRef, useState } from 'react';
import HideIcon from '../../assets/icons/hideIcon.svg?react';
import ShowIcon from '../../assets/icons/showIcon.svg?react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, type, className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    return (
      <div className="input-wrapper">
        {label && <label className="input-label">{label}</label>}
        <div className="input-container">
          <input
            ref={ref}
            type={isPassword && showPassword ? 'text' : type}
            className={`input ${isPassword ? 'has-suffix' : ''} ${error ? 'input-error' : ''} ${className}`}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              className="input-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HideIcon /> : <ShowIcon />}
            </button>
          )}
        </div>
        {error && <span className="input-error-text">{error}</span>}
        {helperText && !error && (
          <span className="input-helper-text">{helperText}</span>
        )}
      </div>
    );
  }
);

export default Input;
