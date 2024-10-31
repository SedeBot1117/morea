import { motion } from 'framer-motion';
import { useState } from 'react';

function ReviewsAndStudies() {
  const [activeTab, setActiveTab] = useState('reviews');

  const reviews = [
    {
      name: "Dr. Sarah Johnson",
      role: "Physical Therapist",
      rating: 5,
      text: "As a physical therapist, I recommend this device to my patients. The results have been remarkable.",
      verified: true,
      image: "/testimonial1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Chronic Pain Patient",
      rating: 5,
      text: "After 3 weeks of use, my chronic neck pain has reduced significantly. Life-changing product!",
      verified: true,
      image: "/testimonial2.jpg"
    },
    {
      name: "Emma Williams",
      role: "Office Professional",
      rating: 5,
      text: "Perfect for long office hours. I use it daily and my posture has improved tremendously.",
      verified: true,
      image: "/testimonial3.jpg"
    }
  ];

  const studies = [
    {
      title: "Clinical Efficacy Study",
      institution: "European Journal of Physical Therapy",
      year: "2023",
      participants: 250,
      results: "70% reduction in chronic neck pain",
      details: "Double-blind randomized controlled trial showing significant improvement in neck mobility and pain reduction."
    },
    {
      title: "Stress Reduction Analysis",
      institution: "International Medical Research Center",
      year: "2023",
      participants: 180,
      results: "65% decrease in muscle tension",
      details: "6-month study demonstrating notable decrease in muscle tension and stress levels among participants."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-gray-600">Backed by science, loved by customers</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white rounded-full p-2 shadow-md">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'reviews' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Customer Reviews
            </button>
            <button
              onClick={() => setActiveTab('studies')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'studies' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Clinical Studies
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        {activeTab === 'reviews' && (
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-gray-600 text-sm">{review.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">{review.text}</p>
                {review.verified && (
                  <div className="mt-4 flex items-center text-green-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Purchase
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Studies Section */}
        {activeTab === 'studies' && (
          <div className="space-y-8">
            {studies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-gray-600">{study.institution} • {study.year}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">
                    {study.participants} Participants
                  </span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <h4 className="font-semibold mb-2">Key Results:</h4>
                  <p className="text-blue-600 font-semibold">{study.results}</p>
                </div>
                <p className="text-gray-600">{study.details}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ReviewsAndStudies;