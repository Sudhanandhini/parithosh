import { motion } from 'framer-motion';
import { FaPiggyBank, FaCreditCard, FaMoneyBillWave, FaChartLine, FaUserTie, FaHandshake, FaPercentage, FaClock, FaShieldAlt, FaCheckCircle, FaArrowRight, FaPhone, FaStar } from 'react-icons/fa';

const Products = () => {
  const products = [
    {
      icon: <FaPiggyBank className="text-6xl text-red-600" />,
      title: "Savings Account",
      description: "Build your wealth with our secure savings account featuring competitive interest rates and easy access to your funds.",
      features: [
        "Competitive interest rates",
        "No minimum balance required",
        "Online banking facility",
        "Passbook facility",
        "Nomination facility"
      ],
      benefits: [
        "Safe and secure deposits",
        "Regular interest credits",
        "Easy withdrawal process"
      ],
      color: "#dc2626",
      gradient: "from-red-50 to-red-100"
    },
    {
      icon: <FaCreditCard className="text-6xl text-red-600" />,
      title: "Current Account",
      description: "Perfect for businesses and professionals who need frequent access to their funds with unlimited transactions.",
      features: [
        "Unlimited transactions",
        "Overdraft facility available",
        "Online statement access",
        "Cheque book facility",
        "Mobile banking"
      ],
      benefits: [
        "No transaction limits",
        "Business-friendly services",
        "Efficient fund management"
      ],
      color: "#b91c1c",
      gradient: "from-red-50 to-red-100"
    },
    {
      icon: <FaMoneyBillWave className="text-6xl text-red-600" />,
      title: "Fixed Deposit",
      description: "Secure your financial future with our fixed deposit schemes offering attractive interest rates and flexible tenure options.",
      features: [
        "Flexible tenure options (1-5 years)",
        "Attractive interest rates",
        "Loan against FD available",
        "Auto-renewal facility",
        "Premature withdrawal option"
      ],
      benefits: [
        "Guaranteed returns",
        "Higher interest rates",
        "Tax benefits available"
      ],
      color: "#991b1b",
      gradient: "from-red-50 to-red-100"
    },
    {
      icon: <FaChartLine className="text-6xl text-red-600" />,
      title: "Recurring Deposit",
      description: "Inculcate a regular saving habit with our recurring deposit scheme and watch your savings grow steadily.",
      features: [
        "Monthly deposits from ₹500",
        "Flexible tenure (1-5 years)",
        "Competitive interest rates",
        "Loan facility available",
        "Auto-debit facility"
      ],
      benefits: [
        "Disciplined savings",
        "Attractive returns",
        "Low monthly commitment"
      ],
      color: "#dc2626",
      gradient: "from-red-50 to-red-100"
    },
    {
      icon: <FaUserTie className="text-6xl text-red-600" />,
      title: "Personal Loans",
      description: "Quick and hassle-free personal loans to meet your immediate financial needs with minimal documentation.",
      features: [
        "Loan amount up to ₹5 lakhs",
        "Flexible repayment tenure",
        "Minimal documentation",
        "Quick processing",
        "Competitive interest rates"
      ],
      benefits: [
        "Fast approval process",
        "No hidden charges",
        "Flexible EMI options"
      ],
      color: "#b91c1c",
      gradient: "from-red-50 to-red-100"
    },
    {
      icon: <FaHandshake className="text-6xl text-red-600" />,
      title: "Business Loans",
      description: "Empower your business with our flexible business loan options designed for entrepreneurs and small businesses.",
      features: [
        "Loan amount up to ₹25 lakhs",
        "Working capital support",
        "Business expansion loans",
        "Flexible repayment options",
        "Competitive rates"
      ],
      benefits: [
        "Business growth support",
        "Quick disbursement",
        "Minimal collateral required"
      ],
      color: "#991b1b",
      gradient: "from-red-50 to-red-100"
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaPercentage />,
      title: "Competitive Interest Rates",
      description: "We offer some of the best interest rates in the market for both deposits and loans.",
      color: "#dc2626"
    },
    {
      icon: <FaClock />,
      title: "Quick Processing",
      description: "Fast approval and processing times to meet your urgent financial needs.",
      color: "#b91c1c"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable",
      description: "Your deposits are safe with us, backed by strong governance and compliance.",
      color: "#991b1b"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}

      <section className="relative text-white py-32 md:py-40 overflow-hidden" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
            className="absolute -top-20 -left-20 w-96 h-96 bg-white opacity-5 rounded-full"
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
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-white opacity-5 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FaStar className="text-4xl text-black" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
                Products & Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 opacity-95"
            >
               Comprehensive financial solutions tailored to meet your diverse needs and help you achieve your financial goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="/contact" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Become a Member
              </a>
              <a href="/about" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1">
                Explore More
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>



      {/* Products Grid */}
      <section className="py-20 -mt-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Choose Your Product
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Financial Solutions for Everyone
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From savings to loans, we have the perfect product for your needs
            </p>
          </motion.div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`bg-white rounded-3xl shadow-2xl overflow-hidden ${index % 2 === 0 ? '' : ''
                  }`}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}>
                  {/* Content Side */}
                  <div className={`p-8 md:p-12 lg:p-16 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      className="mb-8"
                    >
                      {product.icon}
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      {product.title}
                    </h2>

                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaStar className="text-red-600" />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                      Apply Now
                      <FaArrowRight />
                    </motion.a>
                  </div>

                  {/* Benefits Side */}
                  <div className={`bg-gradient-to-br ${product.gradient} p-8 md:p-12 lg:p-16 flex flex-col justify-center ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'
                    }`}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <FaCheckCircle className="text-red-600" />
                      Benefits
                    </h3>

                    <div className="space-y-4 mb-8">
                      {product.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="bg-white p-6 rounded-2xl shadow-lg"
                        >
                          <p className="text-gray-800 font-semibold flex items-center gap-3">
                            <span className="w-2 h-2 bg-red-600 rounded-full" />
                            {benefit}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-red-600"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <FaPhone className="text-2xl text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Need more information?</p>
                          <p className="text-xl font-bold text-gray-800">9071115946</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional financial services with your best interests at heart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all"
                  style={{ backgroundColor: item.color + '20' }}
                >
                  <div className="text-4xl" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Rates CTA Section */}
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <FaPercentage className="text-6xl mx-auto" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Current Interest Rates & Service Charges?
            </h2>

            <p className="text-xl mb-10 opacity-95">
              Contact us to get the latest information on interest rates, service charges, and other important details about our products and services.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
              >
                Contact Us
                <FaArrowRight />
              </motion.a>
              <motion.a
                href="tel:9071115946"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <FaPhone />
                Call: 9071115946
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;