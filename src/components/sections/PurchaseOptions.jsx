import { motion } from 'framer-motion';
import { useState } from 'react';

function PurchaseOptions() {
  const [selectedPlan, setSelectedPlan] = useState('single');

  const plans = {
    single: {
      title: "Single Device",
      price: "€60",
      features: [
        "1 Neck Massager",
        "2-Year Warranty",
        "30-Day Money Back",
        "Free Shipping",
        "User Manual",
        "Travel Case"
      ]
    },
    double: {
      title: "Family Pack",
      price: "€110",
      features: [
        "2 Neck Massagers",
        "2-Year Warranty",
        "30-Day Money Back",
        "Free Priority Shipping",
        "User Manual",
        "2 Travel Cases",
        "Extended Support"
      ],
      savings: "Save €10"
    }
  };

  const warranty = {
    title: "Premium 2-Year Warranty",
    features: [
      "Full coverage for manufacturing defects",
      "Free repairs or replacement",
      "48-hour support response",
      "Easy return process",
      "Worldwide coverage"
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Choose Your Package</h2>
          <p className="text-gray-600">Risk-free purchase with our satisfaction guarantee</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(plans).map(([key, plan], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-8 cursor-pointer transition-all ${
                selectedPlan === key 
                  ? 'bg-blue-600 text-white shadow-xl' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedPlan(key)}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <div className="text-3xl font-bold mb-6">
                {plan.price}
                {plan.savings && (
                  <span className="ml-3 text-sm font-normal bg-green-500 text-white px-3 py-1 rounded-full">
                    {plan.savings}
                  </span>
                )}
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className={`w-5 h-5 mr-3 ${
                      selectedPlan === key ? 'text-white' : 'text-blue-600'
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Warranty Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="flex items-center mb-6">
            <svg className="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-2xl font-bold">{warranty.title}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {warranty.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Purchase Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors">
            Purchase Now - {plans[selectedPlan].price}
          </button>
          <p className="mt-4 text-gray-600">
            30-Day Money-Back Guarantee • Free Worldwide Shipping
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PurchaseOptions;
 