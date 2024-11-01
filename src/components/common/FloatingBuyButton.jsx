import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function FloatingBuyButton() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToProducts: true }});
    } else {
      const productSection = document.querySelector('#products');
      if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#F5F2EE] to-transparent z-50 md:hidden"
        >
          <motion.button
            onClick={handleClick}
            className="w-full bg-gradient-to-r from-[#F5F2EE] to-[#FFFFFF] text-black font-bold py-2 px-4 rounded-full"
          >
            Buy Now
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingBuyButton; 