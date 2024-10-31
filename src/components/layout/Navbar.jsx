import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AnnouncementBanner from './AnnouncementBanner';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/features', label: 'Features' },
    { path: '/specs', label: 'Specs' },
    { path: '/benefits', label: 'Benefits' },
    { path: '/reviews', label: 'Reviews' },
  ];

  return (
    <div className="fixed w-full z-50">
      <AnnouncementBanner />
      
      <motion.header
        className={`w-full bg-white ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold">MOREA</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600 font-semibold' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Order Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>
    </div>
  );
}

export default Navbar; 