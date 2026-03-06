import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import RadioCard from '../components/radio-card/RadioCard';
import OtpInput from '../components/otp-input/OtpInput';
import ProgressBar from '../components/progress-bar/ProgressBar';
import Modal from '../components/modal/Modal';
import CountrySelect from '../components/dropdown-select/DropdownSelect';
import PersonalIcon from '../assets/icons/personalIcon.svg?react';
import BusinessIcon from '../assets/icons/businessIcon.svg?react';
import OnboardingIcon from '../assets/icons/onboardingIcon.svg?react';
import SuccessIcon from '../assets/icons/successIcon.svg?react';
import ShieldIcon from '../assets/icons/shieldIcon.svg?react';

interface FormData {
  accountType: string;
  countryCode: string;
  mobileNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>({
    accountType: 'personal',
    countryCode: '+91',
    mobileNumber: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const validateStep = () => {
    const newErrors: Partial<FormData> = {};

    if (step === 2) {
      if (!formData.mobileNumber) {
        newErrors.mobileNumber = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
        newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
      }
    }

    if (step === 3) {
      if (otp.some((digit) => !digit)) {
        setOtpError('Please enter complete OTP');
        return false;
      }
      setOtpError('');
    }

    if (step === 4) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
    }

    if (step === 5) {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async (e?: React.SubmitEvent) => {
    if (e) e.preventDefault();
    if (!validateStep()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);

    if (step === 5) {
      setShowModal(true);
    } else if (step === 3) {
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="onboarding">
      <div className="onboarding-left">
        <div className="onboarding-header">
          <p className="onboarding-subtitle">Let's get started</p>
          <h1 className="onboarding-title">Create your account</h1>
          <p className="onboarding-description">
            Follow the steps to create your account
          </p>
        </div>
        <div className="onboarding-illustration">
          <OnboardingIcon />
        </div>
      </div>

      <div className="onboarding-right">
        <ProgressBar currentStep={step} totalSteps={5} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="onboarding-card"
        >
          {step === 1 && (
            <div className="onboarding-step">
              <h2 className="step-title">
                To join us tell us <strong>what type of account</strong> you are
                opening
              </h2>
              <div
                className="step-content"
                role="radiogroup"
                aria-label="Account type selection"
              >
                <RadioCard
                  icon={<PersonalIcon />}
                  label="Personal"
                  value="personal"
                  checked={formData.accountType === 'personal'}
                  onChange={(value) =>
                    setFormData({ ...formData, accountType: value })
                  }
                />
                <RadioCard
                  icon={<BusinessIcon />}
                  label="Business"
                  value="business"
                  checked={formData.accountType === 'business'}
                  onChange={(value) =>
                    setFormData({ ...formData, accountType: value })
                  }
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="onboarding-step">
              <h2 className="step-title">OTP Verification</h2>
              <div className="step-content">
                <div className="input-wrapper">
                  <label className="input-label">Mobile Number*</label>
                  <div className="mobile-input-group">
                    <CountrySelect
                      value={formData.countryCode}
                      onChange={(code) =>
                        setFormData({ ...formData, countryCode: code })
                      }
                    />
                    <input
                      type="number"
                      className={`input ${errors.mobileNumber ? 'input-error' : ''}`}
                      placeholder="8343989239"
                      value={formData.mobileNumber}
                      maxLength={10}
                      onChange={(e) => {
                        if (formData.mobileNumber.length >= 10) return;
                        setFormData({
                          ...formData,
                          mobileNumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <span className="input-error-text">
                      {errors.mobileNumber}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="onboarding-step">
              <h2 className="step-title">OTP Verification</h2>
              <p className="step-subtitle">
                An OTP has been sent to your mobile number
              </p>
              <div className="step-content width-auto">
                <div className="otp-wrapper">
                  <OtpInput length={4} value={otp} onChange={setOtp} />
                  {otpError && (
                    <span className="input-error-text otp-error-text">
                      {otpError}
                    </span>
                  )}
                </div>
                <div className="resend-wrapper">
                  <button type="button" className="resend-link">
                    Did not receive OTP? <strong>Resend OTP</strong>
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="onboarding-step">
              <h2 className="step-title">What is your name?</h2>
              <div className="step-content">
                <Input
                  label="First Name"
                  placeholder="Oliver"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  error={errors.firstName}
                />
                <Input
                  label="Last Name"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  error={errors.lastName}
                />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="onboarding-step">
              <h2 className="step-title">Create Password for your account</h2>
              <div className="step-content">
                <Input
                  label="Enter new password"
                  type="password"
                  placeholder="Enter new password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  error={errors.password}
                  helperText="Must be atleast 6 characters"
                />
                <Input
                  label="Confirm password"
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  error={errors.confirmPassword}
                  helperText="Both passwords must match"
                />
              </div>
            </div>
          )}

          <div className="onboarding-actions">
            <Button
              variant="secondary"
              onClick={handleBack}
              disabled={step === 1}
              type="button"
            >
              Back
            </Button>
            <Button type="submit" loading={loading}>
              Continue
            </Button>
          </div>
        </form>
      </div>

      <Modal isOpen={showModal}>
        <div className="success-modal">
          <div className="success-icon">
            <SuccessIcon />
          </div>
          <h2 className="success-title">You're all set!</h2>
          <p className="success-subtitle">
            Here's a quick summary of your account details
          </p>
          <div className="success-details">
            <div className="detail-row">
              <span>Account Type</span>
              <strong>{formData.accountType}</strong>
            </div>
            <div className="detail-row">
              <span>Email</span>
              <strong>jo****@example.com</strong>
            </div>
            <div className="detail-row">
              <span>Name</span>
              <strong>
                {formData.firstName} {formData.lastName}
              </strong>
            </div>
            <div className="detail-row">
              <span>Mobile Number</span>
              <strong>{formData.mobileNumber}</strong>
            </div>
          </div>
          <p className="security-note">
            <ShieldIcon />
            Your account is secured with bank-grade security
          </p>
          <Button onClick={() => navigate('/dashboard')}>
            Go To Dashboard
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Onboarding;
