import { motion } from 'framer-motion';

function Features() {
  const features = [
    {
      title: "4D Massage Technology",
      description: "Advanced nodes that simulate human massage techniques with precision",
      icon: "⚡",
      details: [
        "8 Massage Nodes",
        "3 Speed Levels",
        "Heat Therapy",
        "Magnetic Therapy"
      ]
    },
    {
      title: "Ergonomic Design",
      description: "Perfectly contoured to fit your neck and shoulders",
      icon: "🎯",
      details: [
        "Adjustable Fit",
        "Premium Materials",
        "Lightweight Design",
        "Travel-Friendly"
      ]
    },
    {
      title: "Smart Controls",
      description: "Intuitive control panel with LCD display",
      icon: "🎮",
      details: [
        "15-Minute Auto-Off",
        "Direction Control",
        "Temperature Settings",
        "Battery Indicator"
      ]
    },
    {
      title: "Medical Grade",
      description: "Certified for therapeutic use",
      icon: "🏥",
      details: [
        "CE Certified",
        "FDA Approved",
        "Clinical Testing",
        "Doctor Recommended"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
          <p className="text-xl text-gray-600">
            Experience the perfect blend of technology and comfort
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features; 