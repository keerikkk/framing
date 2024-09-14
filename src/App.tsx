import './App.css';
import BenefitsPage from './pages/BenefitsPage/BenefitsPage';
import HomePage from './pages/HomePage';
import PriceListPage from './pages/PriceListPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <div>
      <HomePage />
      <BenefitsPage />
      <TestimonialsPage />
      <PriceListPage />
    </div>
  );
}

export default App;
