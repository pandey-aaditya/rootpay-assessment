# RootPay Assessment - Multi-Step Onboarding Flow

A pixel-perfect implementation of a multi-step account creation flow built with React, TypeScript, and LESS.

## 🚀 Live Demo

[Deployed URL](#) _(https://rootpay-assessment.netlify.app/)_

## 📋 Features

### ✅ Implemented Requirements

- **Multi-step form flow** with 5 steps (Account Type → Mobile → OTP → Name → Password)
- **Form validation** with error states and messages
- **Interactive states**: hover, focus, active, loading, disabled
- **Password visibility toggle** with show/hide icons
- **OTP input** with auto-focus and numeric-only validation
- **Country code selector** with dropdown (India, USA, Germany)
- **Progress indicator** showing current step
- **Success modal** with account summary
- **Responsive layout** with left illustration panel
- **Keyboard support** - Enter key to submit forms
- **Click outside** to close dropdowns

### 🎨 UI/UX Highlights

- Smooth animations and transitions
- Loading states on buttons
- Error validation messages
- Conditional checkbox display (only when selected)
- Dynamic icon colors based on selection state
- Proper spacing and typography matching Figma

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router DOM** - Routing
- **LESS** - CSS preprocessor
- **vite-plugin-svgr** - SVG as React components
- **Jest + React Testing Library** - Testing

## 📁 Project Structure

```
src/
├── assets/
│   └── icons/              # SVG icons
├── components/
│   ├── button/             # Primary/Secondary button with loading
│   ├── checkbox/           # Animated checkbox component
│   ├── dropdown-select/    # Country code selector
│   ├── input/              # Input with password toggle
│   ├── modal/              # Success modal
│   ├── otp-input/          # 4-digit OTP input
│   ├── progress-bar/       # Step progress indicator
│   └── radio-card/         # Account type selector
├── screens/
│   ├── Onboarding.tsx      # Main multi-step form
│   └── Dashboard.tsx       # Success redirect page
├── styles/
│   ├── variables.less      # Design tokens
│   ├── index.less          # Global styles
│   └── Onboarding.less     # Screen-specific styles
└── utils/                  # Utility functions
```

## 🎯 Key Design Decisions

### 1. Component Architecture

- **Atomic design** - Small, reusable components
- **Controlled components** - All form state managed in parent
- **TypeScript interfaces** - Type-safe props and state

### 2. Styling Approach

- **LESS variables** - Centralized design tokens (colors, spacing, typography)
- **BEM-like naming** - `.component-element-modifier` pattern
- **CSS transitions** - Smooth hover/focus states
- **Flexbox layout** - Responsive and maintainable

### 3. State Management

- **React useState** - Simple, effective for form state
- **Validation on submit** - Better UX than real-time validation
- **Error state per field** - Clear feedback to users

### 4. Form Handling

- **Native form element** - Enables Enter key submission
- **Async validation** - Simulates API calls with loading states
- **Step-based validation** - Only validate current step

### 5. Accessibility

- **Semantic HTML** - Proper form elements and labels
- **Keyboard navigation** - Tab, Enter, Backspace support
- **Focus states** - Clear visual indicators
- **ARIA labels** - Screen reader support

## 🔧 Setup & Installation

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📝 Validation Rules

- **Mobile Number**: 10 digits, numeric only
- **OTP**: All 4 digits required
- **Name**: Both first and last name required
- **Password**: Minimum 6 characters, must match confirmation

## 🎨 Design Tokens

```less
// Colors
@primary-blue: #0066ff;
@text-dark: #1a2b3c;
@text-medium: #4a5568;
@text-light: #a0aec0;
@border-color: #e2e8f0;
@error-red: #e53e3e;

// Typography
@font-size-sm: 14px;
@font-size-base: 16px;
@font-size-xl: 24px;

// Spacing
@spacing-md: 16px;
@spacing-lg: 24px;

// Border Radius
@radius-sm: 8px;
@radius-md: 12px;
```

## 🚀 Enhancements & Optimizations

1. **SVG as Components** - Using vite-plugin-svgr for dynamic icon colors
2. **Click Outside Handler** - Custom hook for dropdown closing
3. **Auto-focus OTP** - Automatic focus on next input after digit entry
4. **Loading States** - Visual feedback during async operations
5. **Form Submission** - Enter key support for better UX
6. **Responsive Design** - Mobile-friendly layout
7. **Animation** - Smooth transitions for better feel

## 📦 Build & Deploy

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

Deploy to Vercel/Netlify by connecting your GitHub repository.

## 🧪 Testing

- Unit tests for components
- Integration tests for form flow
- Validation logic tests
