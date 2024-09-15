import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import BenefitsPage from './pages/BenefitsPage/BenefitsPage';
import HomePage from './pages/HomePage';
import PriceListPage from './pages/PriceListPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <BenefitsPage />
      <TestimonialsPage />
      <PriceListPage />
    </div>
  );
}

export default App;
