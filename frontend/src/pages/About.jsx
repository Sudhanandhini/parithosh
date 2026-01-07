import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaHandshake, FaUsers, FaChartLine, FaShieldAlt, FaRocket, FaHeart, FaStar, FaTrophy } from 'react-icons/fa';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: <FaHandshake />,
      title: "Co-operation",
      description: "Working together for mutual benefit and collective growth",
      color: "#dc2626"
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparency",
      description: "Open and honest communication in all our dealings",
      color: "#b91c1c"
    },
    {
      icon: <FaUsers />,
      title: "Trust",
      description: "Building lasting relationships based on reliability and integrity",
      color: "#991b1b"
    },
    {
      icon: <FaChartLine />,
      title: "Mutual Growth",
      description: "Ensuring sustainable progress for all our members",
      color: "#dc2626"
    }
  ];

  const purposes = [
    {
      step: "01",
      title: "Consult With Team",
      description: "Schedule a meeting with our financial experts to discuss your needs and explore the best solutions for you",
      icon: <FaUsers />
    },
    {
      step: "02",
      title: "Provide Your Document",
      description: "Submit necessary documents including ID proof, address proof, and photographs for account verification",
      icon: <FaShieldAlt />
    },
    {
      step: "03",
      title: "Bank Verification Process",
      description: "Our team verifies your documents and processes your application within 3-5 working days",
      icon: <FaChartLine />
    },
    {
      step: "04",
      title: "Start Using Account",
      description: "Once approved, start enjoying all our financial services and benefits immediately",
      icon: <FaRocket />
    }
  ];

  const achievements = [
    { icon: <FaUsers />, value: "10,000+", label: "Happy Members" },
    { icon: <FaTrophy />, value: "15+", label: "Years Experience" },
    { icon: <FaStar />, value: "98%", label: "Satisfaction Rate" },
    { icon: <FaHeart />, value: "₹50Cr+", label: "Assets Managed" }
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
                <FaUsers className="text-4xl text-black"  />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              About Us
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 opacity-95"
            >
              Empowering communities through financial inclusion and co-operative principles
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
              <a href="/products" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1">
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl text-center"
              >
                <div className="text-4xl text-red-600 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{item.value}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20">
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
                className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Our Story
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Who We Are
              </h2>
              
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
               Parithosh Souharda Credit Co-operative Ltd is a member-centric financial co-operative institution established with the objective of promoting financial inclusion, savings culture, and self-reliance among its members. Registered under the Karnataka Souharda Sahakari Act, the society functions on the principles of co-operation, transparency, trust, and mutual growth.



            </p>
              
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
               We provide reliable and accessible financial services such as savings schemes, group loans, personal loans, and business loans to meet the diverse needs of our members. Our focus is on empowering individuals, self-help groups, small entrepreneurs, and families by offering timely credit support at reasonable terms.
              </p>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At Parithosh Souharda Credit Co-operative Ltd, we believe that sustainable financial growth is possible only when every member progresses together. With strong governance, ethical practices, and a customer-friendly approach, we strive to build a financially secure and socially responsible community.
              </p>

              <div className="flex gap-4">
                <div className="flex-1 bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                  <div className="text-2xl font-bold text-red-600">18-60</div>
                  <div className="text-sm text-gray-600">Age Group Served</div>
                </div>
                <div className="flex-1 bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                  <div className="text-2xl font-bold text-red-600">1997</div>
                  <div className="text-sm text-gray-600">Registered Under Act</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-8 text-white shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)' }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-7xl mb-6"
                >
                  <FaUsers />
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-4">Serving Citizens of Karnataka</h3>
                
                <p className="opacity-90 mb-6 text-lg">
              A cooperative society registered under the Karnataka Souharda Sahakari Act, 1997.
Dedicated to customer-centric financial services.
Supporting the economic growth of Karnataka’s citizens.
                </p>
                
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2 text-black">10,000+</div>
                  <div className="text-lg opacity-90 text-black">Satisfied Members</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Direction
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Vision & Mission
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16" />
              
              <div className="relative">
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <FaEye className="text-4xl text-red-600" />
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become a leading co-operative financial institution that empowers every member with accessible, reliable, and sustainable financial solutions, fostering a community of financial independence and collective prosperity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16" />
              
              <div className="relative">
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <FaBullseye className="text-4xl text-red-600" />
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide member-centric financial services with transparency, trust, and integrity while promoting savings habits, offering timely credit support, and contributing to the social and economic development of our community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purpose Section - Redesigned */}
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
              HOW IT WORKS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Fast & Easy Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started with your account in just four simple steps. Our streamlined process ensures quick verification and activation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Step Number with Outline */}
                <div className="mb-6">
                  <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-800" style={{ 
                    WebkitTextStroke: '2px #dc2626',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {purpose.step}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-3xl text-red-600">
                    {purpose.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {purpose.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {purpose.description}
                </p>

                {/* Connecting Line (except last item) */}
                {index < purposes.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-red-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all"
                  style={{ backgroundColor: value.color + '20' }}
                >
                  <div className="text-4xl" style={{ color: value.color }}>
                    {value.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <FaHeart className="text-6xl mx-auto" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Growing Community
            </h2>
            
            <p className="text-xl mb-10 opacity-95">
              Be part of a financial institution that truly cares about your growth and prosperity. Start your journey with us today!
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="/contact" className="bg-white text-red-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                Become a Member Today
                <FaRocket />
              </a>
              <a href="tel:9071115946" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1">
                Call: 9071115946
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;