import { motion } from 'framer-motion';

function Features() {
  const features = [
    {
      title: "4D Massage Technology",
      description: "Advanced nodes that simulate human massage techniques with precision",
      icon: "⚡",
      details: [
        "8 Massage Nodes",
        "3 Speed Levels",
        "Heat Therapy",
        "Magnetic Therapy"
      ]
    },
    {
      title: "Ergonomic Design",
      description: "Perfectly contoured to fit your neck and shoulders",
      icon: "🎯",
      details: [
        "Adjustable Fit",
        "Premium Materials",
        "Lightweight Design",
        "Travel-Friendly"
      ]
    },
    {
      title: "Smart Controls",
      description: "Intuitive control panel with LCD display",
      icon: "🎮",
      details: [
        "15-Minute Auto-Off",
        "Direction Control",
        "Temperature Settings",
        "Battery Indicator"
      ]
    },
    {
      title: "Medical Grade",
      description: "Certified for therapeutic use",
      icon: "🏥",
      details: [
        "CE Certified",
        "FDA Approved",
        "Clinical Testing",
        "Doctor Recommended"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#C3B29A] font-semibold block mb-2">INNOVATIVE TECHNOLOGY</span>
          <h2 className="text-4xl font-bold mb-4 text-[#4A4039]">Advanced Features</h2>
          <p className="text-xl text-[#4A4039]/70">
            Experience the perfect blend of technology and comfort
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm 
                         hover:bg-white hover:shadow-xl transition-all duration-300
                         border border-[#C3B29A]/10"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 20px 25px -5px rgba(195, 178, 154, 0.1), 0 10px 10px -5px rgba(195, 178, 154, 0.04)'
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4
                            bg-gradient-to-r from-[#C3B29A] to-[#8C7B66]
                            rounded-full text-white text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#4A4039]">{feature.title}</h3>
              <p className="text-[#4A4039]/70 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-[#4A4039]/70">
                    <svg 
                      className="w-4 h-4 mr-2 text-[#C3B29A]" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-[#C3B29A] to-[#8C7B66] 
                           text-white px-8 py-4 rounded-full text-lg font-semibold
                           hover:shadow-lg hover:shadow-[#C3B29A]/50 transition-all duration-300">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Features; 