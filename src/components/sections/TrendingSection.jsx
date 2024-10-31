import { motion } from 'framer-motion';

function TrendingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">#1 TRENDING ON SOCIAL MEDIA</h2>
        </motion.div>

        <div className="aspect-video rounded-2xl overflow-hidden">
          {/* Add your video component here */}
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
            <span className="text-gray-500">Featured Video</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingSection; 