import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'opportunity', 'products', 'solutions', 'case-study', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <img src="/logo.png" alt="Organo Biotas Logo" className="logo" />
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#opportunity" 
              className={activeSection === 'opportunity' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('opportunity'); }}
            >
              Market Opportunity
            </a>
            <a 
              href="#products" 
              className={activeSection === 'products' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}
            >
              Products
            </a>
            <a 
              href="#solutions" 
              className={activeSection === 'solutions' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}
            >
              Solutions
            </a>
            <a 
              href="#case-study" 
              className={activeSection === 'case-study' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('case-study'); }}
            >
              Case Studies
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

