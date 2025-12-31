import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import MarketOpportunity from './components/MarketOpportunity';
import MarineDiseases from './components/MarineDiseases';
import AreasOfConcern from './components/AreasOfConcern';
import Products from './components/Products';
import CaseStudy from './components/CaseStudy';
import Partnership from './components/Partnership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Favicon from './components/Favicon';

function App() {
  return (
    <div className="App">
      <Favicon />
      <Navigation />
      <Hero />
      <ExecutiveSummary />
      <MarketOpportunity />
      <MarineDiseases />
      <AreasOfConcern />
      <Products />
      <CaseStudy />
      <Partnership />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

