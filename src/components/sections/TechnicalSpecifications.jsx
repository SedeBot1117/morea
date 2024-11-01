import { motion } from 'framer-motion';

function TechnicalSpecifications() {
  const specs = [
    {
      category: "Physical",
      items: [
        { label: "Weight", value: "0.8 kg" },
        { label: "Dimensions", value: "38 x 15 x 12 cm" },
        { label: "Material", value: "Premium Memory Foam" }
      ]
    },
    {
      category: "Performance",
      items: [
        { label: "Battery Life", value: "Up to 4 hours" },
        { label: "Charging Time", value: "2 hours" },
        { label: "Heat Settings", value: "3 levels (38-45°C)" }
      ]
    },
    {
      category: "Features",
      items: [
        { label: "Massage Modes", value: "8 different patterns" },
        { label: "Intensity Levels", value: "5 settings" },
        { label: "Auto Shutoff", value: "15 minutes" }
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
          <span className="text-[#C3B29A] font-semibold">DETAILED SPECS</span>
          <h2 className="text-4xl font-bold mb-4 text-[#4A4039]">Technical Specifications</h2>
          <p className="text-[#4A4039]/70 max-w-2xl mx-auto">
            Advanced technology meets ergonomic design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {specs.map((category, index) => (
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
              <h3 className="text-xl font-bold mb-6 text-[#4A4039]">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-[#4A4039]/70">{item.label}</span>
                    <span className="font-semibold text-[#8C7B66]">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-[#C3B29A] to-[#8C7B66] rounded-2xl text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Need More Details?</h3>
          <p className="mb-6">Download our complete technical documentation</p>
          <button className="bg-white text-[#4A4039] px-8 py-3 rounded-full
                           hover:shadow-lg transition-all duration-300
                           hover:bg-opacity-90">
            Download Specs PDF
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default TechnicalSpecifications; 