import { motion, AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/layout/Navbar'));
const Hero = lazy(() => import('./components/sections/Hero'));
const Features = lazy(() => import('./components/sections/Features'));
const TechnicalSpecs = lazy(() => import('./components/sections/TechnicalSpecs'));
const MedicalBenefits = lazy(() => import('./components/sections/MedicalBenefits'));
const ReviewsAndStudies = lazy(() => import('./components/sections/ReviewsAndStudies'));
const PurchaseOptions = lazy(() => import('./components/sections/PurchaseOptions'));
const Footer = lazy(() => import('./components/layout/Footer'));
const CustomizerSection = lazy(() => import('./components/sections/CustomizerSection'));
const FeaturedProducts = lazy(() => import('./components/sections/FeaturedProducts'));
const GuaranteeSection = lazy(() => import('./components/sections/GuaranteeSection'));
const ProductDetails = lazy(() => import('./components/sections/ProductDetails'));
const TestimonialsSection = lazy(() => import('./components/sections/TestimonialsSection'));
const TrendingSection = lazy(() => import('./components/sections/TrendingSection'));

function MainContent() {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className="min-h-screen bg-gradient-to-b from-white to-gray-50"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          
          <motion.main className="overflow-hidden">
            <Hero />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Features />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FeaturedProducts />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TechnicalSpecs />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <MedicalBenefits />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GuaranteeSection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ReviewsAndStudies />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TestimonialsSection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CustomizerSection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TrendingSection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <PurchaseOptions />
            </motion.div>
          </motion.main>

          <Footer />
        </Suspense>

        {/* Scroll to top button */}
        <motion.button
          className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/features" element={<Features />} />
        <Route path="/specs" element={<TechnicalSpecs />} />
        <Route path="/benefits" element={<MedicalBenefits />} />
        <Route path="/reviews" element={<ReviewsAndStudies />} />
        <Route path="/customize" element={<CustomizerSection />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
