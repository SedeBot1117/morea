import { motion } from 'framer-motion';

function CustomizerSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="flex-1 p-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Create Your Pack</h3>
              <p className="text-gray-600 mb-8">
                Build your own custom bracelet pack and save:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  '17% Off 3 or more',
                  '20% Off 5 or more',
                  '30% Off 10 or more'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Creating
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex-1 bg-gradient-to-br from-purple-600 to-blue-500 p-12 text-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full">
                {/* Add your customizer preview here */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomizerSection; 