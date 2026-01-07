import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from  "../assets/images/logo.jpg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products & Services', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@psccl.com" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <FaEnvelope />
              <span>info@psccl.com</span>
            </a>
            <a href="tel:9071115946" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <FaPhone />
              <span>9071115946</span>
            </a>
          </div>
          <div className="text-xs">
            A Society registered under Karnataka Souharda Sahakari Act 1997
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center">
                <div className=" flex items-center justify-center">
                  <img src={logo} alt="Parithosh Souharda Logo" className="w-20 h-20 rounded-full" />
                </div>
                <div className="ml-3">
                  <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                    Parithosh Souharda
                  </h1>
                  <p className="text-xs text-gray-600">Credit Co-operative Ltd</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className={`block py-2 font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="btn-primary inline-block"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
