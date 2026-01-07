import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      content: "#319, 1st Floor, 59th Cross, 3rd Block Rajajinagar, Bengaluru 560010",
      link: "https://maps.google.com",
      color: "#dc2626"
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      content: "9071115946",
      link: "tel:9071115946",
      color: "#b91c1c"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      content: "info@psccl.com",
      link: "mailto:info@psccl.com",
      color: "#991b1b"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: null,
      color: "#dc2626"
    }
  ];

  const faqs = [
    {
      question: "What documents are required to open an account?",
      answer: "You'll need proof of identity (Aadhaar Card, PAN Card), proof of address, passport-size photographs, and completed application form."
    },
    {
      question: "How can I check my account balance?",
      answer: "You can check your account balance through our mobile app, internet banking, or by visiting any of our branches."
    },
    {
      question: "What is the minimum deposit for a savings account?",
      answer: "We have no minimum balance requirement for savings accounts, making it accessible for everyone."
    },
    {
      question: "How long does loan approval take?",
      answer: "Loan approval typically takes 3-5 working days, depending on the completeness of documentation and verification process."
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
                <FaEnvelope className="text-4xl text-black" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Get in Touch
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 opacity-95"
            >
              We're here to help! Reach out to us for any queries, support, or to learn more about our financial services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#contact-form" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                <FaPaperPlane />
                Send Message
              </a>
              <a href="tel:9071115946" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2">
                <FaPhone />
                Call Now
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

      {/* Contact Info Cards */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all"
                  style={{ backgroundColor: info.color + '20' }}
                >
                  <div className="text-3xl" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                </motion.div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>

                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-red-600 transition-colors text-sm block"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map Section */}
          <div className="grid lg:grid-cols-2 gap-12" id="contact-form">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <div className="mb-8">
                  <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
                    Send us a message
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    We'd Love to Hear From You
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-all duration-300 text-gray-800"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-all duration-300 text-gray-800"
                        placeholder="john@example.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-all duration-300 text-gray-800"
                        placeholder="9876543210"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-all duration-300 text-gray-800"
                      placeholder="How can we help you?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-all duration-300 resize-none text-gray-800"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5437744144696!2d77.55157931482148!3d13.007837490826955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d9f4f4f4f4f%3A0x4f4f4f4f4f4f4f4f!2sRajajinagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </motion.div>

              {/* Quick Contact Box */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -ml-20 -mb-20" />

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Need Immediate Assistance?
                  </h3>

                  <p className="opacity-90 mb-6 text-lg">
                    Our team is ready to help you with any questions or concerns you may have.
                  </p>

                  <div className="space-y-4 mb-8">
                    <motion.a
                      href="tel:9071115946"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 text-lg font-semibold hover:opacity-80 transition-all"
                    >
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                        <FaPhone className="text-xl text-black" />
                      </div>
                      <div>
                        <div className="text-sm opacity-75">Call Us</div>
                        <div>9071115946</div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="mailto:info@psccl.com"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 text-lg font-semibold hover:opacity-80 transition-all"
                    >
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                        <FaEnvelope className="text-xl text-black" />
                      </div>
                      <div>
                        <div className="text-sm opacity-75">Email Us</div>
                        <div>info@psccl.com</div>
                      </div>
                    </motion.a>
                  </div>

                  <div className="pt-6 border-t border-white border-opacity-20">
                    <p className="text-sm mb-4 opacity-75">Connect with us on social media:</p>
                    <div className="flex gap-3">
                      {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                        <motion.a
                          key={index}
                          href="#"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white text-black bg-opacity-20 rounded-xl flex items-center justify-center hover:bg-opacity-30 transition-all backdrop-blur-sm"
                        >
                          <Icon />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Have Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-red-600"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <FaCheckCircle className="text-red-600 text-xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <a href="#contact-form" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <FaPaperPlane />
              Contact Us Now
            </a>
          </motion.div> */}
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)' }}
          >
            <div className="absolute inset-0">
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
                className="absolute -top-20 -right-20 w-96 h-96 bg-white opacity-10 rounded-full"
              />
            </div>

            <div className="relative z-10 px-8 py-16 md:py-20 text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block mb-6"
              >
                <FaMapMarkerAlt className="text-6xl mx-auto" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Visit Our Office
              </h2>

              <p className="text-xl mb-4 opacity-95 max-w-2xl mx-auto">
                #319, 1st Floor, 59th Cross, 3rd Block Rajajinagar
              </p>

              <p className="text-lg mb-10 opacity-90">
                Bengaluru 560010, Karnataka
              </p>

              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-red-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              >
                <FaMapMarkerAlt />
                Get Directions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;