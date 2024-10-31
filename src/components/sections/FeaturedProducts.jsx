import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Positivity Bracelet",
    price: "$29.99",
    image: "/bracelet1.jpg",
    tag: "Bestseller"
  },
  // Add more products...
];

function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-4">Featured Collection</h3>
          <p className="text-gray-600">Discover our most popular designs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-xl font-semibold">{product.name}</h4>
                <p className="text-gray-600">{product.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-black text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts; 