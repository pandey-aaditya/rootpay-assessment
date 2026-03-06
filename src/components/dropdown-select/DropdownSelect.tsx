import { useState, useEffect, useRef } from 'react';

interface Country {
  code: string;
  name: string;
  flag: string;
}

const countries: Country[] = [
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+1', name: 'USA', flag: '🇺🇸' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
];

interface DropdownSelectProps {
  value: string;
  onChange: (code: string) => void;
}

function DropdownSelect({ value, onChange }: DropdownSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedCountry =
    countries.find((c) => c.code === value) || countries[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown-select" ref={dropdownRef}>
      <button
        type="button"
        className="dropdown-select-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="dropdown-flag">{selectedCountry.flag}</span>
        <span className="dropdown-code">{selectedCountry.code}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M3 5L6 8L9 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="dropdown-select-dropdown">
          {countries.map((country) => (
            <div
              key={country.code}
              className={`dropdown-option ${country.code === value ? 'dropdown-option-selected' : ''}`}
              onClick={() => {
                onChange(country.code);
                setIsOpen(false);
              }}
            >
              <span className="dropdown-flag">{country.flag}</span>
              <span className="dropdown-code">{country.code}</span>
              <span className="dropdown-name">{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownSelect;
