import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaEnvelope, FaPhone, FaSearch, FaChevronDown } from 'react-icons/fa';
import hero from "../assets/images/hero.png";
import back from "../assets/images/back.png";
import logo from "../assets/images/logo.jpg"

const HomeHeader = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/products', hasDropdown: true },

    { name: 'CONTACT', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  const text = "Your Trusted Partner In  Banking Success";

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // delay between letters
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };


  return (
    <div className="relative min-h-screen "
      style={{ backgroundImage: `url(${back})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      {/* Top Bar */}
      <div className=" py-2 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            {/* Social Icons */}
            {/* <div className="flex gap-2">
              {[FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-[#991b1b] hover:bg-[#701a1a] flex items-center justify-center text-white transition-colors duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div> */}

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-6 text-white">
              <a href="mailto:info@psccl.com" className="flex items-center gap-2 hover:text-gray-200 transition-colors text-xs">
                <FaEnvelope className="text-sm" />
                <span>info@psccl.com</span>
              </a>
              <a href="tel:+919071115946" className="flex items-center gap-2 hover:text-gray-200 transition-colors text-xs">
                <FaPhone className="text-sm" />
                <span>+91 9071115946</span>
              </a>
            </div>
            <div className="text-xs text-white">
              #319, 1st Floor, 59th Cross, 3rd Block Rajajinagar, Bengaluru 560010
            </div>


          </div>
        </div>
      </div>



      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 
  ${isScrolled ? 'bg-[#991b1b] shadow-lg' : 'bg-transparent'}`}
      >

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
              <div className="flex items-center">
                <div className=" flex items-center justify-center">
                  <img src={logo} alt="Parithosh Souharda Logo" className="w-20 h-20 rounded-full" />
                </div>
                <div className="ml-3">
                  <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    Parithosh Souharda
                  </h1>
                  <p className="text-xs text-white">Credit Co-operative Ltd</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`text-white font-medium text-sm tracking-wide hover:text-gray-200 transition-colors flex items-center gap-1 ${isActive(link.path) ? 'text-gray-100' : ''
                      }`}
                  >
                    {link.name}
                    {link.hasDropdown && <FaChevronDown className="text-xs" />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* <button className="text-white hover:text-gray-200 transition-colors">
                <FaSearch className="text-lg" />
              </button> */}
              <Link
                to="/contact"
                className="bg-white text-[#701a1a] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                GET STARTED
                <span>→</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-white hover:text-gray-200 transition-colors border-b border-white/10 ${isActive(link.path) ? 'text-gray-100' : ''
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 bg-white text-[#4a6741] px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-100 transition-all"
              >
                GET STARTED →
              </Link>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-sm md:text-base mb-4 tracking-wide"
            >
              Smart Banking Solutions for a Digital World
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.04 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight flex flex-wrap"
            >
              {text.split(" ").map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="whitespace-nowrap mr-3 flex"
                >
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, ease: "easeOut" },
                        },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>



            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-red-700 text-base md:text-lg mb-8 leading-relaxed italic"
            >
              Experience seamless online banking with advanced security, instant access, and tools designed to simplify your financial life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#4a6741] transition-all duration-300 flex items-center gap-2">
                LEARN MORE
                <span>→</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Circular Background */}
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border-4 border-white/20"></div>

            {/* Main Image Container */}
            <div className="relative z-10">
              <img
                src={hero}
                alt="Banking Professional"
                className="w-[280px] md:w-[380px] lg:w-[480px] object-contain"
              />
            </div>

            {/* Financial Data Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute top-8 right-4 md:top-12 md:right-8 bg-white/95 rounded-full p-4 md:p-6 shadow-2xl"
            >
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 flex items-end justify-center gap-1">
                  <div className="w-2 md:w-3 bg-[#991b1b] h-8 md:h-10 rounded"></div>
                  <div className="w-2 md:w-3 bg-[#ef4444] h-10 md:h-12 rounded"></div>
                  <div className="w-2 md:w-3 bg-[#fecaca] h-12 md:h-14 rounded"></div>
                  <div className="w-2 md:w-3 bg-[#701a1a] h-6 md:h-8 rounded"></div>
                </div>
                <p className="text-[#ef4444] font-semibold text-xs">Financial Data</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute bottom-12 left-4 md:bottom-16 md:left-8 bg-white/95 rounded-2xl p-3 md:p-4 shadow-2xl"
            >
              <p className="text-[#ef4444] font-semibold text-xs mb-2">Professional<br />Banking Plans</p>
              <div className="flex items-end gap-1">
                <div className="w-4 md:w-5 h-8 md:h-10 bg-[#b91c1c] rounded"></div>
                <div className="w-4 md:w-5 h-10 md:h-12 bg-[#b91c1c] rounded"></div>
                <div className="w-4 md:w-5 h-12 md:h-16 bg-[#b91c1c] rounded"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute bottom-12 right-4 md:bottom-20 md:right-12 bg-white/95 rounded-2xl p-3 md:p-4 shadow-2xl w-28 md:w-36"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-1 bg-[#b91c1c] rounded"></div>
                <div className="w-2 h-2 bg-[#f87171] rounded-full"></div>
              </div>
              <div className="border-t-2 border-dashed border-gray-300 pt-2">
                <div className="h-8 md:h-10 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <polyline
                      points="0,35 20,28 40,30 60,20 80,25 100,15"
                      fill="none"
                      stroke="#fca5a5"
                      strokeWidth="2"
                    />
                    <circle cx="100" cy="15" r="3" fill="#ef4444" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HomeHeader;
