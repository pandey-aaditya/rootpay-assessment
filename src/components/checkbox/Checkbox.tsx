interface CheckboxProps {
  checked: boolean;
}

function Checkbox({ checked }: CheckboxProps) {
  return (
    <div className={`checkbox ${checked ? 'checkbox-checked' : ''}`}>
      {checked && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8L6 11L13 4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default Checkbox;
