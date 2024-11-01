import { motion } from 'framer-motion';
import { useState } from 'react';
// Import all images
import mainProduct from '../../assets/product-images/main-product.jpg';
import detail1 from '../../assets/product-images/detail-1.jpg';
import detail2 from '../../assets/product-images/detail-2.jpg';
import controlPanel from '../../assets/product-images/control-panel.jpg';
import feature1 from '../../assets/product-images/feature-1.jpg';
import feature2 from '../../assets/product-images/feature-2.jpg';
import feature3 from '../../assets/product-images/feature-3.jpg';

function ProductSection() {
  const [isHovered, setIsHovered] = useState(false);

  const productFeatures = [
    { id: 1, text: "Removable and washable pillowcase", icon: "🧺" },
    { id: 2, text: "Buckle design frees hands", icon: "🔒" },
    { id: 3, text: "Compact and lightweight", icon: "🪶" },
    { id: 4, text: "Heating function with temperature control", icon: "🌡️" },
    { id: 5, text: "Multiple massage modes", icon: "💆" },
    { id: 6, text: "Battery indicator light", icon: "🔋" },
    { id: 7, text: "Versatile shoulder and neck targeting", icon: "🎯" },
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
      opacity: 1
    }
  };

  const handleBuyNow = () => {
    window.location.href = 'https://buy.stripe.com/28o17v99MbAo9yw4gg';
  };

  return (
    <div className="bg-[#F5F2EE] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-[#4A4039] bg-gradient-to-r from-[#C3B29A] to-[#8C7B66] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            MOREA Neck Massager Pro
          </motion.h2>
          
          {/* Main Product Display */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              className="space-y-6 relative"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <img 
                  src={mainProduct}
                  alt="MOREA Neck Massager"
                  className="w-full rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-[#C3B29A]/50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#C3B29A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.img 
                  src={detail1}
                  alt="Removable pillowcase"
                  className="w-full rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  whileHover={{ y: -5 }}
                />
                <motion.img 
                  src={detail2}
                  alt="Buckle design"
                  className="w-full rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  whileHover={{ y: -5 }}
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-semibold mb-4 text-[#4A4039]">Smart Neck Massager</h3>
                <p className="text-[#4A4039]/80 mb-4 text-lg">
                  Advanced neck and shoulder massager with heating function and intelligent controls.
                </p>
                <div className="text-4xl font-bold text-[#C3B29A] mb-6">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}yy
                  >
                    $89.99
                  </motion.span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBuyNow}
                  className="bg-gradient-to-r from-[#C3B29A] to-[#8C7B66] text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#C3B29A]/50 transition-all duration-300"
                >
                  Buy Now
                </motion.button>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <h4 className="text-xl font-semibold mb-4 text-[#4A4039]">Key Features</h4>
                <motion.ul className="space-y-3">
                  {productFeatures.map((feature, index) => (
                    <motion.li
                      key={feature.id}
                      className="flex items-center bg-white/50 p-3 rounded-xl hover:bg-[#C3B29A]/10 transition-colors duration-300"
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-2xl mr-3">{feature.icon}</span>
                      <span className="text-[#4A4039]">{feature.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Control Panel */}
          <motion.div 
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 mb-16 shadow-xl"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#4A4039]">Control Panel</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.img 
                src={controlPanel}
                alt="Control panel features"
                className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              />
              <div className="flex items-center">
                <motion.div variants={containerVariants}>
                  {[
                    "Power Button",
                    "Mode Selection",
                    "Intensity Control",
                    "Heat Settings"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center mb-4"
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                    >
                      <span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C3B29A] to-[#8C7B66] text-white flex items-center justify-center mr-4 shadow-lg">
                        {index + 1}
                      </span>
                      <span className="text-[#4A4039] text-lg">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                img: feature1,
                title: "Advanced Massage Technology",
                desc: "Multiple massage nodes target pressure points effectively"
              },
              {
                img: feature2,
                title: "Heat Therapy",
                desc: "Adjustable temperature settings for enhanced comfort"
              },
              {
                img: feature3,
                title: "Ergonomic Design",
                desc: "Comfortable fit for extended use"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.img 
                  src={feature.img}
                  alt={feature.title}
                  className="w-full rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h4 className="text-xl font-semibold mb-2 text-[#4A4039]">{feature.title}</h4>
                <p className="text-[#4A4039]/70">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductSection; 
