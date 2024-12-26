import './App.css';
import ScrollToTopButton from './components/UI/ScrollToTop';
import AboutUsPage from './pages/AboutUsPage';
import BenefitsPage from './pages/BenefitsPage/BenefitsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PriceListPage from './pages/PriceListPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <div>
      <HomePage />
      <AboutUsPage />
      <BenefitsPage />
      <TestimonialsPage />
      <PriceListPage />
      <ContactPage />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
