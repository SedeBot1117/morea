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
const ProductSection = lazy(() => import('./components/sections/ProductSection'));

function MainContent() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        
        <main className="pt-16">
          <section id="hero">
            <Hero />
          </section>

          <section id="products">
            <ProductSection />
          </section>

          <section id="features">
            <Features />
          </section>

          <section id="specs">
            <TechnicalSpecs />
          </section>

          <section id="benefits">
            <MedicalBenefits />
          </section>

          <section id="reviews">
            <ReviewsAndStudies />
          </section>
        </main>

        <Footer />
      </Suspense>
    </div>
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