import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from  "../assets/images/logo.webp"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className=" flex items-center justify-center">
                <img src={logo} alt="Parithosh Souharda Logo" className="w-25 h-25" />
              </div>
              <div className="ml-3">
                <h3 className="text-white font-bold text-lg leading-tight">Parithosh Souharda</h3>
                <p className="text-xs text-gray-400">Credit Co-operative Ltd</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              A member-centric financial co-operative institution promoting financial inclusion and self-reliance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-red-600 font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-primary-400 transition-colors">Products & Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-red-600 font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-sm">Savings Account</li>
              <li className="text-sm">Current Account</li>
              <li className="text-sm">Fixed Deposit</li>
              <li className="text-sm">Recurring Deposit</li>
              <li className="text-sm">Personal Loans</li>
              <li className="text-sm">Business Loans</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-red-600 font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span>#319, 1st Floor, 59th Cross, 3rd Block Rajajinagar, Bengaluru 560010</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a href="tel:9071115946" className="hover:text-primary-400 transition-colors">9071115946</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@psccl.com" className="hover:text-primary-400 transition-colors">info@psccl.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Parithosh Souharda Credit Co-operative Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
             <p className="text-sm text-gray-400">
            Developed by <a href="https://sunsys.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Sunsys Technologies</a>
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
