import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import BenefitsPage from './pages/BenefitsPage/BenefitsPage';
import ContactPage from './pages/ContactPage';
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
      <ContactPage />
    </div>
  );
}

export default App;
