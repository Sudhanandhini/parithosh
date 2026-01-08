import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaPercentage, FaShieldAlt, FaPiggyBank, FaCreditCard, FaCheckCircle, FaFileAlt, FaUserCheck, FaRocket, } from 'react-icons/fa';
import aboutImage from "../assets/images/hero.png"
import profileImage from "../assets/images/back.png"
import whyChooseImage from '../assets/images/hero.png'; // Replace with your business person image
import bgPattern from '../assets/images/back.png';
import { FaAward, FaUser, FaBriefcase, FaHome } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft, FaPlus, FaMinus } from 'react-icons/fa';

// Import your images
import logo1 from '../assets/images/back.png';
import businessPerson from '../assets/images/hero.png';



// Custom Counter Hook - Moved outside component
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(start + (end - start) * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration, start]);

  return [count, countRef];
};

const Home = () => {


  const [openIndex, setOpenIndex] = useState(null);

  const partners = [
    {
      name: 'Partner 1',
      logo: logo1
    },
    {
      name: 'Partner 2',
      logo: logo1
    },
    {
      name: 'Partner 3',
      logo: logo1
    },
    {
      name: 'Partner 4',
      logo: logo1
    },
    {
      name: 'Partner 5',
      logo: logo1
    }
  ];

  const faqs = [
    {
      question: 'HOW DO I CREATE AN ACCOUNT WITH PARITHOSH SOUHARDA?',
      answer: 'Visit our nearest branch with your identification documents including Aadhaar card, PAN card, and address proof. Our staff will guide you through the simple account opening process. You can also download the application form from our website.'
    },
    {
      question: 'HOW TO SEND MONEY ONLINE?',
      answer: 'You can send money through our online banking portal or mobile app. Simply log in to your account, select the transfer option, enter the recipient details, and confirm the transaction. All transfers are secure and instant.'
    },
    {
      question: 'IS MY MONEY SAFE WITH PARITHOSH SOUHARDA?',
      answer: 'Yes, your deposits are completely safe with us. We are registered under the Karnataka Souharda Sahakari Act 1997 and follow all regulatory guidelines. We maintain strong security measures and regular audits to ensure the safety of your funds.'
    },
    {
      question: 'WHAT ARE THE INTEREST RATES ON SAVINGS ACCOUNTS?',
      answer: 'We offer competitive interest rates on all our savings accounts. The rates vary based on the account type and deposit amount. Please visit our branch or contact us for current interest rate details specific to your requirements.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };




  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Business Owner',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras phasellus faucibus provident occaecat praesent, iusto nunc cursus! Ac morbi architecto tincidunt curabitur.',
      shortText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, sed do eiusmod tempor incididunt, iusto nunc cursus.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      designation: 'Entrepreneur',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      testimonial: 'Exceptional service and great returns! The team at Parithosh Souharda has been instrumental in helping me achieve my financial goals. Their expertise and dedication are unmatched.',
      shortText: 'Professional service, excellent returns, and a team that truly cares about your financial success.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      designation: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      rating: 5,
      testimonial: 'I have been banking with them for over 5 years and have never been disappointed. The interest rates are competitive and the customer service is outstanding.',
      shortText: 'Reliable, trustworthy, and always puts customers first. Highly recommended for all your banking needs.'
    },
    {
      id: 4,
      name: 'Lisa Patinson',
      designation: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      testimonial: 'Outstanding experience with every interaction. The digital banking platform is user-friendly and makes managing finances incredibly easy.',
      shortText: 'Modern banking solutions with traditional values. Perfect combination for today\'s financial needs.'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Resume auto-play after 10 seconds
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Resume auto-play after 10 seconds
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Resume auto-play after 10 seconds
  };



  const [currentSlide, setCurrentSlide] = useState(0);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  // Counters for about section stats
  const [partnerCount, partnerRef] = useCounter(250);
  const [projectCount, projectRef] = useCounter(530);

  // Counters for main stats section
  const [count1, ref1] = useCounter(10000);
  const [count2, ref2] = useCounter(50);
  const [count3, ref3] = useCounter(15);
  const [count4, ref4] = useCounter(98);

  const features1 = [
    'Mobile app easy management & access',
    'Worldwide Network - International Bank.',
    'Specialist Team - 54 Employees.',
    'Lowest Interest - Credit & Debit Card 0 Interest.'
  ];

  const products = [
    {
      icon: <FaPiggyBank className="text-5xl" />,
      title: "Savings Account",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
      bgColor: "bg-red-700",
      hoverBgColor: "hover:bg-red-800",
      textColor: "text-white",
      iconColor: "text-white",
      linkColor: "text-white",
    },
    {
      icon: <FaPercentage className="text-5xl" />,
      title: "Low Interest Rate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
      bgColor: "bg-white",
      hoverBgColor: "hover:bg-gray-50",
      textColor: "text-gray-900",
      iconColor: "text-red-700",
      linkColor: "text-red-700",
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "Strong Security System",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
      bgColor: "bg-white",
      hoverBgColor: "hover:bg-gray-50",
      textColor: "text-gray-900",
      iconColor: "text-red-700",
      linkColor: "text-red-700",
    },
    {
      icon: <FaCreditCard className="text-5xl" />,
      title: "Multiple Cards",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
      bgColor: "bg-white",
      hoverBgColor: "hover:bg-gray-50",
      textColor: "text-gray-900",
      iconColor: "text-red-700",
      linkColor: "text-red-700",
    }
  ];

  const progressBars = [
    { label: 'INVESTMENT PLANS', percentage: 85 },
    { label: 'CONSULTING EXPERIENCE', percentage: 92 }
  ];

  const features = [
    {
      title: 'Mobile App Easy Management',
      description: 'Efficient problem-solving, insightful market analysis'
    },
    {
      title: "Ton's Features For Handle Card Easily",
      description: 'Efficient problem-solving, insightful market analysis'
    }
  ];




  const processSteps = [
    {
      step: "01",
      title: "Fill Application",
      description: "Complete our simple online application form",
      icon: <FaFileAlt />
    },
    {
      step: "02",
      title: "Submit Documents",
      description: "Upload required documents securely",
      icon: <FaCheckCircle />
    },
    {
      step: "03",
      title: "Quick Verification",
      description: "Our team verifies your application",
      icon: <FaUserCheck />
    },
    {
      step: "04",
      title: "Account Active",
      description: "Start banking with us immediately",
      icon: <FaRocket />
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Consult With Team',
      description: 'Phasellus venenatis turpis eget nulla porttitor varius'
    },
    {
      number: '02',
      title: 'Provide Your Document',
      description: 'Phasellus venenatis turpis eget nulla porttitor varius'
    },
    {
      number: '03',
      title: 'Bank Verification Process',
      description: 'Phasellus venenatis turpis eget nulla porttitor varius'
    },
    {
      number: '04',
      title: 'Start Using Account',
      description: 'Phasellus venenatis turpis eget nulla porttitor varius'
    }
  ];

  const loans = [
    {
      icon: <FaAward className="text-5xl" />,
      title: 'Education Loan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo',
      link: '/products'
    },
    {
      icon: <FaUser className="text-5xl" />,
      title: 'Personal Loan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo',
      link: '/products'
    },
    {
      icon: <FaBriefcase className="text-5xl" />,  // Changed here
      title: 'Business Loan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo',
      link: '/products'
    },
    {
      icon: <FaHome className="text-5xl" />,
      title: 'Mortgage Loans',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo',
      link: '/products'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Stats Section with Counter Animation */}

      {/* About Section with Stats */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-4 relative"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10">
                  <img
                    src={aboutImage}
                    alt="Professional Banking Representative"
                    className="w-full max-w-md mx-auto"
                  />
                </div>

                {/* Floating Elements */}
                {/* Top Left - Building Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  viewport={{ once: true }}
                  className="absolute top-8 left-0 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Top Right - Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  viewport={{ once: true }}
                  className="absolute top-16 right-0 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-end gap-1 h-12">
                    <div className="w-3 bg-red-700 rounded-t" style={{ height: '60%' }}></div>
                    <div className="w-3 bg-red-700 rounded-t" style={{ height: '80%' }}></div>
                    <div className="w-3 bg-red-700 rounded-t" style={{ height: '100%' }}></div>
                    <div className="w-3 bg-red-700 rounded-t" style={{ height: '70%' }}></div>
                  </div>
                </motion.div>

                {/* Bottom Left - Bar Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, type: 'spring' }}
                  viewport={{ once: true }}
                  className="absolute bottom-32 left-4 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-end gap-1 h-16">
                    <div className="w-4 bg-yellow-400 rounded-t" style={{ height: '50%' }}></div>
                    <div className="w-4 bg-yellow-400 rounded-t" style={{ height: '70%' }}></div>
                    <div className="w-4 bg-yellow-400 rounded-t" style={{ height: '90%' }}></div>
                    <div className="w-4 bg-yellow-400 rounded-t" style={{ height: '60%' }}></div>
                  </div>
                </motion.div>

                {/* Bottom - Review Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, type: 'spring' }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3"
                >
                  <img
                    src={profileImage}
                    alt="Lisa Patinson"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Lisa Patinson</h4>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Middle Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <p className="text-red-700 font-semibold text-sm tracking-wider mb-3">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building A More Compact Our Future Economy
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Parithosh Souharda Credit Co-operative Ltd is a member-centric financial co-operative institution established with the objective of promoting financial inclusion, savings culture, and self-reliance among its members. Registered under the Karnataka Souharda Sahakari Act, the society functions on the principles of co-operation, transparency, trust, and mutual growth.

              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                We provide reliable and accessible financial services such as savings schemes, group loans, personal loans, and business loans to meet the diverse needs of our members. Our focus is on empowering individuals, self-help groups, small entrepreneurs, and families by offering timely credit support at reasonable terms.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features1.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-red-700 text-lg flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Discover More Button */}
              <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group">
                DISCOVER MORE
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>

            {/* Right Stats Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              {/* Profile Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={profileImage}
                    alt="Nelson Mulk"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Nelson Mulk</h3>
                    <p className="text-gray-600 text-sm">CEO & Head of Wealthify.</p>
                  </div>
                </div>
                <p className="text-gray-500 italic text-sm border-t border-dashed border-gray-300 pt-4">
                  <span className="font-semibold text-gray-700">4.5m+</span> clients experience banking excellence by us. Trusted services, customer focused solutions, and a legacy of financial reliability.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="space-y-4">
                {/* Partner Count */}
                <div ref={partnerRef} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <h3 className="text-5xl font-bold text-red-700 mb-2">{partnerCount}+</h3>
                  <p className="text-gray-600 font-medium">Partner with us</p>
                </div>

                {/* Interest Rate */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <h3 className="text-5xl font-bold text-red-700 mb-2">$1.5%</h3>
                  <p className="text-gray-600 font-medium">Low interest rate</p>
                </div>

                {/* Successful Projects */}
                <div ref={projectRef} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <h3 className="text-5xl font-bold text-red-700 mb-2">{projectCount}+</h3>
                  <p className="text-gray-600 font-medium">Successful Projects</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/*3rd feature Section with Stats */}

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Column 1 - Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pt-8"
            >
              <p className="text-red-700 font-semibold text-sm tracking-wider mb-4">
                OUR SERVICES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Our Featured Products.
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 group"
              >
                MORE SERVICES
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>

            {/* Column 2 - First Card Column */}
            <div className="space-y-6">
              {/* Savings Account Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${products[0].bgColor} ${products[0].hoverBgColor} ${products[0].textColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`${products[0].iconColor} mb-6`}>
                  {products[0].icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {products[0].title}
                </h3>

                {/* Description */}
                <p className="mb-6 leading-relaxed opacity-90">
                  {products[0].description}
                </p>

                {/* Read More Link */}
                <Link
                  to="/products"
                  className={`inline-flex items-center gap-2 ${products[0].linkColor} font-semibold hover:gap-4 transition-all duration-300 text-sm uppercase tracking-wide`}
                >
                  READ MORE
                  <span>→</span>
                </Link>
              </motion.div>

              {/* Strong Security System Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${products[2].bgColor} ${products[2].hoverBgColor} ${products[2].textColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`${products[2].iconColor} mb-6`}>
                  {products[2].icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {products[2].title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {products[2].description}
                </p>

                {/* Read More Link */}
                <Link
                  to="/products"
                  className={`inline-flex items-center gap-2 ${products[2].linkColor} font-semibold hover:gap-4 transition-all duration-300 text-sm uppercase tracking-wide`}
                >
                  READ MORE
                  <span>→</span>
                </Link>
              </motion.div>
            </div>

            {/* Column 3 - Second Card Column (Smaller Cards) */}
            <div className="space-y-6 lg:max-w-sm">
              {/* Low Interest Rate Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${products[1].bgColor} ${products[1].hoverBgColor} ${products[1].textColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`${products[1].iconColor} mb-6`}>
                  {products[1].icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {products[1].title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {products[1].description}
                </p>

                {/* Read More Link */}
                <Link
                  to="/products"
                  className={`inline-flex items-center gap-2 ${products[1].linkColor} font-semibold hover:gap-4 transition-all duration-300 text-sm uppercase tracking-wide`}
                >
                  READ MORE
                  <span>→</span>
                </Link>
              </motion.div>

              {/* Multiple Cards Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${products[3].bgColor} ${products[3].hoverBgColor} ${products[3].textColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`${products[3].iconColor} mb-6`}>
                  {products[3].icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {products[3].title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {products[3].description}
                </p>

                {/* Read More Link */}
                <Link
                  to="/products"
                  className={`inline-flex items-center gap-2 ${products[3].linkColor} font-semibold hover:gap-4 transition-all duration-300 text-sm uppercase tracking-wide`}
                >
                  READ MORE
                  <span>→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* 4th Section with Stats */}
      <section className="py-20 relative overflow-hidden bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.25), rgba(17, 24, 39, 0.15)), url(${bgPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Section Title */}
              <p className="text-white font-semibold text-sm tracking-wider mb-4">
                WHY CHOOSE US?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
                Innovative Business Solutions For Financial Company
              </h2>

              {/* Progress Bars */}
              <div className="space-y-8 mb-12">
                {progressBars.map((bar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Label and Percentage */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold text-sm tracking-wide">
                        {bar.label}
                      </span>
                      <span className="text-red-400 font-bold text-sm bg-red-900 px-3 py-1 rounded-full">
                        {bar.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.percentage}%` }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-red-400 to-red-200 h-full rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Description Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-white font-semibold mb-10 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore inceptos per consectetur consequatur proin
              </p>

              {/* Features List */}
              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 pb-6 border-b border-dashed border-gray-700 last:border-0"
                  >
                    {/* Check Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>

                    {/* Feature Text */}
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-black text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Top Info Card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-gray-300 leading-relaxed mb-6">
                  Inceptos per consectetur consequatur proin.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 group"
                >
                  KNOW MORE
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Circular Background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-gray-700/50 -z-10"></div>

                {/* Business Person Image */}
                <img
                  src={whyChooseImage}
                  alt="Business Professional"
                  className="w-full max-w-md mx-auto relative z-10"
                />

                {/* Floating Chart Badge - Top Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  viewport={{ once: true }}
                  className="absolute top-8 right-8 bg-white/95 rounded-full p-6 shadow-2xl"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 flex items-end justify-center gap-1">
                      <div className="w-3 bg-red-700 h-10 rounded"></div>
                      <div className="w-3 bg-red-700 h-12 rounded"></div>
                      <div className="w-3 bg-red-700 h-14 rounded"></div>
                      <div className="w-3 bg-red-700 h-8 rounded"></div>
                    </div>
                    <p className="text-red-600 font-semibold text-xs">Financial Data</p>
                  </div>
                </motion.div>

                {/* Floating Card Badge - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  viewport={{ once: true }}
                  className="absolute bottom-12 left-8 bg-white/95 rounded-2xl p-4 shadow-2xl"
                >
                  <p className="text-red-600 font-semibold text-xs mb-2">Professional<br />Banking Plans</p>
                  <div className="flex items-end gap-1">
                    <div className="w-5 h-10 bg-red-700 rounded"></div>
                    <div className="w-5 h-12 bg-red-700 rounded"></div>
                    <div className="w-5 h-16 bg-red-700 rounded"></div>
                  </div>
                </motion.div>

                {/* Floating Graph Badge - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: 'spring' }}
                  viewport={{ once: true }}
                  className="absolute bottom-16 right-12 bg-white/95 rounded-2xl p-4 shadow-2xl w-36"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-1 bg-red-700 rounded"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="border-t-2 border-dashed border-gray-300 pt-2">
                    <div className="h-10 flex items-end">
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
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* 5th process Section with Stats */}
      <section className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <p className="text-red-700 font-semibold text-sm tracking-wider mb-4">
              HOW IT WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Fast & Easy Application Process Here
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Inceptos per consectetur consequatur proin.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`text-center px-8 py-12 relative ${index !== steps.length - 1 ? 'border-r border-gray-300' : ''
                  }`}
              >
                {/* Step Number with Outline */}
                <div className="mb-8">
                  <h3
                    className="text-7xl md:text-8xl font-bold inline-block"
                    style={{
                      WebkitTextStroke: '2px #b91c1c',
                      WebkitTextFillColor: 'transparent',
                      color: 'transparent'
                    }}
                  >
                    {step.number}
                    <span className="text-red-700">.</span>
                  </h3>
                </div>

                {/* Step Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h4>

                {/* Step Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 6th loan Section with Stats */}
      <section className="pt-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <p className="text-red-700 font-semibold text-sm tracking-wider mb-4">
                LOAN FEATURES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                We're Here To Help You Build, Manage & Protect Your Wealth.
              </h2>
            </motion.div>

            {/* Right Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 whitespace-nowrap group"
              >
                REVIEW LOAN
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Loans Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {loans.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-start gap-6"
              >
                {/* Icon */}
                <div className="flex-shrink-0 text-red-700">
                  {loan.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {loan.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {loan.description}
                  </p>

                  {/* Read More Link */}
                  <Link
                    to={loan.link}
                    className="inline-flex items-center gap-2 text-red-700 font-semibold hover:gap-4 transition-all duration-300 text-sm uppercase tracking-wide"
                  >
                    READ MORE
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7th testimonial Section with Stats */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Section Title */}
              <p className="text-white font-semibold text-sm tracking-wider mb-4">
                OUR TESTIMONIALS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Experience financial growth with us
              </h2>
              <p className="text-gray-200 mb-12 leading-relaxed text-lg">
                Cras phasellus faucibus provident occaecat praesentium, iusto nunc cursus! Ac morbi architecto tincidunt curabitur, porta orci mi doning.
              </p>

              {/* Testimonial Slider */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {/* Left Testimonial Card */}
                    <div className="bg-white/10 backdrop-blur-sm border border-black-400 rounded-2xl p-6 relative">
                      <FaQuoteLeft className="text-black-400 text-3xl mb-4 opacity-50" />
                      <p className="text-white text-sm mb-6 italic leading-relaxed">
                        {testimonials[currentIndex].shortText}
                      </p>
                    </div>

                    {/* Right Testimonial Card */}
                    <div className="bg-white/10 backdrop-blur-sm border border-black-400 rounded-2xl p-6 relative">
                      <FaQuoteLeft className="text-black-400 text-3xl mb-4 opacity-50" />
                      <p className="text-white text-sm mb-6 italic leading-relaxed">
                        {testimonials[currentIndex].testimonial}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-black">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-black"
                        />
                        <div>
                          <h4 className="text-white font-bold text-lg">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-red-400 text-sm">
                            {testimonials[currentIndex].designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 bg-black hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 bg-black hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Circular Background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-white/20"></div>

                {/* Decorative Circles */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border-2 border-white/10"></div>

                {/* Business Person Image */}
                <img
                  src={businessPerson}
                  alt="Business Professional"
                  className="w-full max-w-md mx-auto relative z-10"
                />

                {/* Floating Elements */}
                {/* Top Left - QR Code Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-12 left-8 bg-white rounded-2xl p-4 shadow-2xl"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm-2 8h8v8H3v-8zm2 2v4h4v-4H5zm8-12v8h8V3h-8zm2 2h4v4h-4V5zm4 8h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2-2h-2v4h2v-4zm6 0v2h2v-2h-2zm0 4h-2v2h2v-2zm2-4h-2v2h2v-2zm0 4v-2h-2v2h2zm0 0h2v2h-2v-2zm0 4h2v-2h-2v2z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Top Right - Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, type: 'spring' }}
                  viewport={{ once: true }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-16 right-8 bg-white rounded-2xl p-4 shadow-2xl"
                >
                  <p className="text-red-600 font-semibold text-xs mb-2">Data</p>
                  <div className="flex items-end gap-1 h-12">
                    <div className="w-3 bg-red-700 rounded-t" style={{ height: '60%' }}></div>
                    <div className="w-3 bg-red-700 rounded-t" style={{ height: '80%' }}></div>
                    <div className="w-3 bg-red-700 rounded-t" style={{ height: '100%' }}></div>
                    <div className="w-3 bg-red-700 rounded-t" style={{ height: '70%' }}></div>
                  </div>
                </motion.div>

                {/* Bottom Left - Bar Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: 'spring' }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute bottom-32 left-8 bg-white rounded-2xl p-4 shadow-2xl"
                >
                  <div className="flex items-end gap-1 h-16">
                    <div className="w-4 bg-yellow-400 rounded-t" style={{ height: '50%' }}></div>
                    <div className="w-4 bg-yellow-400 rounded-t" style={{ height: '70%' }}></div>
                    <div className="w-4 bg-yellow-400 rounded-t" style={{ height: '90%' }}></div>
                    <div className="w-4 bg-yellow-400 rounded-t" style={{ height: '60%' }}></div>
                  </div>
                </motion.div>

                {/* Bottom Center - Rating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, type: 'spring' }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3"
                >
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonials[currentIndex].name}
                    </h4>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xs" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Thumbnail Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mt-16"
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${currentIndex === index
                    ? 'ring-4 ring-white scale-110'
                    : 'opacity-60 hover:opacity-100'
                  }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-2xl object-cover bg-white"
                />
              </button>
            ))}
          </motion.div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>


      {/* 8th faq Section with Stats */}
      <div className="bg-gray-50">
        {/* Partners Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-red-700 font-semibold text-sm tracking-wider mb-4">
                OUR HAPPY PARTNERS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Trusted By More Than 75 Global Companies Have Worked With Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                Lorem ipsum dolor consectetur adipiscing tempor incididunt labore dolore magna aliqua. Sed augue lacus viverra vitae congue consequat felis.
              </p>
            </motion.div>

            {/* Partner Logos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-16"
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Wavy Divider */}
            <div className="flex justify-center">
              <svg
                className="w-full max-w-4xl h-8"
                viewBox="0 0 1200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10 Q 30 0, 60 10 T 120 10 T 180 10 T 240 10 T 300 10 T 360 10 T 420 10 T 480 10 T 540 10 T 600 10 T 660 10 T 720 10 T 780 10 T 840 10 T 900 10 T 960 10 T 1020 10 T 1080 10 T 1140 10 T 1200 10"
                  stroke="#d1d5db"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left - FAQ Accordion */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-300 pb-4"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-start gap-4 text-left group"
                    >
                      {/* Plus/Minus Icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-red-900 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-red-700">
                        {openIndex === index ? (
                          <FaMinus className="text-white text-lg" />
                        ) : (
                          <FaPlus className="text-white text-lg" />
                        )}
                      </div>

                      {/* Question Text */}
                      <div className="flex-1 pt-2">
                        <h3 className="text-gray-700 font-semibold text-base md:text-lg group-hover:text-red-700 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </button>

                    {/* Answer */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? 'auto' : 0,
                        opacity: openIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 pr-4 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right - FAQ Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:pt-8"
              >
                <p className="text-red-700 font-semibold text-sm tracking-wider mb-4">
                  READ FAQ
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 group"
                >
                  KNOW MORE
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>



      





      {/* CTA Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)' }}>
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Start Your Financial Journey?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl mb-10 opacity-95"
            >
              Join thousands of satisfied members who trust us with their financial needs. Open an account today and experience the difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact" className="bg-white text-red-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                Open Account Now
                <FaRocket />
              </Link>
              <Link to="/products" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1">
                Explore Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;