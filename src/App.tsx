import { Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Onboarding from './screens/Onboarding';
import './components/components.less';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
