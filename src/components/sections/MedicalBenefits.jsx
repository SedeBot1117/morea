import { motion } from 'framer-motion';

function MedicalBenefits() {
  const benefits = [
    {
      title: "Pain Relief",
      description: "Clinically proven to reduce chronic neck pain by up to 70%",
      icon: "🎯",
      details: [
        "Reduces muscle tension",
        "Alleviates cervical strain",
        "Improves mobility",
        "Instant pain relief"
      ]
    },
    {
      title: "Stress Reduction",
      description: "Promotes relaxation and reduces stress levels",
      icon: "🧘",
      details: [
        "Lowers cortisol levels",
        "Improves sleep quality",
        "Reduces anxiety",
        "Promotes relaxation"
      ]
    },
    {
      title: "Circulation",
      description: "Enhances blood flow and promotes healing",
      icon: "❤️",
      details: [
        "Increases blood flow",
        "Reduces inflammation",
        "Promotes healing",
        "Oxygenates tissues"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold">CLINICALLY PROVEN</span>
          <h2 className="text-4xl font-bold mb-4">Medical Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Backed by clinical studies and recommended by healthcare professionals worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <span className="text-4xl mb-4 block">{benefit.icon}</span>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <ul className="space-y-3">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Learn More About Clinical Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default MedicalBenefits; 