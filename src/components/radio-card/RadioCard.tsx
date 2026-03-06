import Checkbox from '../checkbox/Checkbox';

interface RadioCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

function RadioCard({ icon, label, value, checked, onChange }: RadioCardProps) {
  return (
    <div
      role="radio"
      aria-checked={checked}
      className={`radio-card ${checked ? 'radio-card-checked' : ''}`}
      onClick={() => onChange(value)}
    >
      <div className="radio-card-content">
        <span
          className={`radio-card-icon ${checked ? 'radio-card-icon-active' : ''}`}
        >
          {icon}
        </span>
        <span className="radio-card-label">{label}</span>
      </div>
      {checked && <Checkbox checked={checked} />}
    </div>
  );
}

export default RadioCard;
