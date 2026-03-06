import { render } from '@testing-library/react';
import ProgressBar from '../ProgressBar';

describe('ProgressBar', () => {
  it('renders progress bar', () => {
    const { container } = render(
      <ProgressBar currentStep={1} totalSteps={5} />
    );
    expect(container.querySelector('.progress-bar')).toBeInTheDocument();
  });

  it('calculates correct progress percentage', () => {
    const { container } = render(
      <ProgressBar currentStep={2} totalSteps={5} />
    );
    const fill = container.querySelector('.progress-bar-fill') as HTMLElement;
    expect(fill.style.width).toBe('40%');
  });
});
