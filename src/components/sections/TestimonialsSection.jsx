import { motion } from 'framer-motion';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "These bracelets have become part of my daily inspiration routine!",
      author: "Sarah J.",
      role: "Yoga Instructor"
    },
    // Add more testimonials...
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-4">What Our Customers Say</h3>
          <p className="text-gray-600">Join thousands of satisfied customers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection; 