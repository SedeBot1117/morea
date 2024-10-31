import { motion } from 'framer-motion';

function TechnicalSpecs() {
  const specifications = [
    {
      category: "Massage Technology",
      specs: [
        { label: "Massage Nodes", value: "8 Bi-directional 4D Nodes" },
        { label: "Speed Levels", value: "3 Adjustable Speeds" },
        { label: "Heat Function", value: "40-45°C (104-113°F)" },
        { label: "Auto Programs", value: "4 Pre-set Programs" }
      ]
    },
    {
      category: "Device Specifications",
      specs: [
        { label: "Battery", value: "2500mAh Lithium-ion" },
        { label: "Usage Time", value: "Up to 3 hours" },
        { label: "Charging Time", value: "2 hours" },
        { label: "Weight", value: "560g (1.23 lbs)" }
      ]
    },
    {
      category: "Materials & Design",
      specs: [
        { label: "Outer Material", value: "Premium PU Leather" },
        { label: "Inner Material", value: "Memory Foam Padding" },
        { label: "Strap Length", value: "Adjustable (40-50cm)" },
        { label: "Waterproof Rating", value: "IPX4" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-gray-600">Advanced technology meets precision engineering</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {specifications.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-600">{category.category}</h3>
              <div className="space-y-4">
                {category.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalSpecs; 