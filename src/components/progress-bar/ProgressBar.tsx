interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;
