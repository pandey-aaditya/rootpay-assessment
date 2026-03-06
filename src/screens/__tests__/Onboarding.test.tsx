import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Onboarding from '../Onboarding';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Onboarding', () => {
  it('renders step 1 by default', () => {
    renderWithRouter(<Onboarding />);
    expect(screen.getByText(/what type of account/i)).toBeInTheDocument();
  });

  it('shows Personal and Business options', () => {
    renderWithRouter(<Onboarding />);
    expect(screen.getByText('Personal')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
  });

  it('advances to step 2 on continue', async () => {
    renderWithRouter(<Onboarding />);

    fireEvent.click(screen.getByText('Continue'));

    await waitFor(() => {
      expect(screen.getByText('OTP Verification')).toBeInTheDocument();
    });
  });

  it('disables Back button on first step', () => {
    renderWithRouter(<Onboarding />);
    expect(screen.getByText('Back')).toBeDisabled();
  });
});
