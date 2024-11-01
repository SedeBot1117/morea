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
    <section className="py-20 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C3B29A] font-semibold">CLINICALLY PROVEN</span>
          <h2 className="text-4xl font-bold mb-4 text-[#4A4039]">Medical Benefits</h2>
          <p className="text-[#4A4039]/70 max-w-2xl mx-auto">
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
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 
                         hover:shadow-xl transition-all duration-300
                         border border-[#C3B29A]/10"
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            >
              <span className="text-4xl mb-4 block">{benefit.icon}</span>
              <h3 className="text-xl font-bold mb-4 text-[#4A4039]">{benefit.title}</h3>
              <p className="text-[#4A4039]/70 mb-6">{benefit.description}</p>
              <ul className="space-y-3">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-[#4A4039]/70">
                    <svg 
                      className="w-5 h-5 mr-2 text-[#C3B29A]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
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
          <button className="bg-gradient-to-r from-[#C3B29A] to-[#8C7B66] 
                           text-white px-8 py-4 rounded-full text-lg font-semibold 
                           hover:shadow-lg hover:shadow-[#C3B29A]/50 transition-all duration-300"
          >
            Learn More About Clinical Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default MedicalBenefits; 