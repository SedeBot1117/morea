import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function AnnouncementBanner() {
  const announcements = [
    "🌍 FREE WORLDWIDE SHIPPING ON ALL ORDERS",
    "✨ 30-DAY MONEY BACK GUARANTEE",
    "💫 100% SATISFACTION GUARANTEED"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000); // Change announcement every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#C3B29A] text-white overflow-hidden h-10">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="relative h-full flex items-center justify-center">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute text-center text-sm md:text-base font-medium tracking-wide"
            >
              {announcements[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBanner; 