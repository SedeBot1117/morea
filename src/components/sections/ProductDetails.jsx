import { motion } from 'framer-motion';

function ProductDetails() {
  const features = [
    {
      title: "Premium Quality",
      description: "Made with high-quality materials for lasting durability",
      icon: "🌟"
    },
    {
      title: "Adjustable Size",
      description: "One size fits all with our adjustable design",
      icon: "📏"
    },
    {
      title: "Waterproof",
      description: "Wear it anywhere, completely waterproof",
      icon: "💧"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Images */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/product-1.jpg" className="rounded-lg shadow-lg" alt="Product view 1" />
            <img src="/product-2.jpg" className="rounded-lg shadow-lg" alt="Product view 2" />
            <img src="/product-3.jpg" className="rounded-lg shadow-lg" alt="Product view 3" />
            <img src="/product-4.jpg" className="rounded-lg shadow-lg" alt="Product view 4" />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Premium Design, Unmatched Quality</h2>
            <p className="text-gray-600 mb-8">
              Experience the perfect blend of style and durability with our premium bracelets.
              Each piece is carefully crafted to ensure maximum comfort and lasting quality.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold"
            >
              Shop Now - $29.99
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails; 