import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="pt-[104px] pb-16 bg-gradient-to-b from-[#F5F2EE] to-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-[#C3B29A] font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            MEDICAL-GRADE TECHNOLOGY
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Revolutionary
            <br />
            <span className="bg-gradient-to-r from-[#C3B29A] to-[#8C7B66] bg-clip-text text-transparent">
              Neck Therapy
            </span>
            <br />
            At Home
          </motion.h1>
          {/* Rest of your Hero content */}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero; 