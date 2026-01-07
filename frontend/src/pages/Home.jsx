import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaHandshake, FaUsers, FaChartLine, FaShieldAlt, FaMoneyBillWave, FaPiggyBank, FaCreditCard, FaUserTie, FaArrowRight, FaCheckCircle, FaFileAlt, FaUserCheck, FaRocket } from 'react-icons/fa';
import hero from "../assets/images/hero.png"
import back from "../assets/images/back.png"

// Counter Hook
const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FaPiggyBank className="text-5xl text-red-600" />,
      title: "Savings Account",
      description: "Secure savings account with competitive interest rates for your financial growth.",
      color: "#dc2626"
    },
    {
      icon: <FaCreditCard className="text-5xl text-red-600" />,
      title: "Current Account",
      description: "Easy access to your funds with our flexible current account solutions.",
      color: "#b91c1c"
    },
    {
      icon: <FaMoneyBillWave className="text-5xl text-red-600" />,
      title: "Fixed Deposit",
      description: "Fixed deposits with attractive interest rates and flexible tenure options.",
      color: "#991b1b"
    },
    {
      icon: <FaChartLine className="text-5xl text-red-600" />,
      title: "Recurring Deposit",
      description: "Build your savings systematically with our recurring deposit schemes.",
      color: "#dc2626"
    },
    {
      icon: <FaUserTie className="text-5xl text-red-600" />,
      title: "Personal Loans",
      description: "Quick and hassle-free personal loans to meet your immediate financial needs.",
      color: "#b91c1c"
    },
    {
      icon: <FaHandshake className="text-5xl text-red-600" />,
      title: "Business Loans",
      description: "Empower your business with our flexible business loan options.",
      color: "#991b1b"
    }
  ];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure & Trustworthy",
      description: "Registered under Karnataka Souharda Sahakari Act 1997"
    },
    {
      icon: <FaUsers />,
      title: "Member-Centric",
      description: "Focused on member welfare and financial inclusion"
    },
    {
      icon: <FaChartLine />,
      title: "Competitive Rates",
      description: "Attractive interest rates on deposits and reasonable loan terms"
    },
    {
      icon: <FaHandshake />,
      title: "Transparent Operations",
      description: "Built on principles of co-operation and trust"
    }
  ];

  const stats = [
    { value: 10000, suffix: "+", label: "Active Members", prefix: "" },
    { value: 50, suffix: "Cr+", label: "Assets Under Management", prefix: "₹" },
    { value: 15, suffix: "+", label: "Years of Service", prefix: "" },
    { value: 98, suffix: "%", label: "Customer Satisfaction", prefix: "" }
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

  // Auto-slide for services carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(1, services.length - 3));
    }, 3000);
    return () => clearInterval(timer);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, services.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, services.length - 3)) % Math.max(1, services.length - 3));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-white min-h-[90vh] overflow-hidden"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Your Trusted Partner in Banking & Financial Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl mb-8 opacity-95"
              >
                Building a financially secure and socially responsible community through co-operative principles and member-centric services.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                  Open an Account
                  <FaArrowRight />
                </Link>
                <Link to="/products" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1">
                  View Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden md:flex items-end justify-end relative"
            >
              <img
                src={hero}
                alt="Hero"
                className="w-[420px] lg:w-[480px] xl:w-[520px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

     
      {/* Stats Section with Counter Animation */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const count = useCounter(stat.value, 2500, statsInView);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold text-red-600 mb-3"
                  >
                    {stat.prefix}{statsInView ? count : 0}{stat.suffix}
                  </motion.div>
                  <div className="text-gray-700 font-medium text-lg">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                About Us
              </motion.span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Building Our Future Economy Together
              </h2>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Parithosh Souharda Credit Co-operative Ltd is a member-centric financial co-operative institution established with the objective of promoting financial inclusion, savings culture, and self-reliance among its members.
              </p>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We provide reliable and accessible financial services such as savings schemes, group loans, personal loans, and business loans to meet the diverse needs of our members.
              </p>

              <Link to="/about" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Learn More About Us
                <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-4xl text-red-600 mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Products & Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to meet your diverse needs
            </p>
          </motion.div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: `-${currentSlide * 25}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex gap-6"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="flex-shrink-0 w-full md:w-[calc(25%-18px)] bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    style={{ minWidth: 'calc(25% - 18px)' }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="mb-6"
                    >
                      {service.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-4 transition-all duration-300"
                    >
                      Learn More
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                →
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(Math.max(1, services.length - 3))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-red-600' : 'w-2 bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Improved */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Fast & Easy Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started with your account in just four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center relative"
              >
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-red-200 z-0" />
                )}

                {/* Step Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-50 shadow-lg">
                    <div className="text-5xl font-bold text-red-600">{item.step}</div>
                  </div>
                </motion.div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <div className="text-3xl text-red-600">{item.icon}</div>
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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