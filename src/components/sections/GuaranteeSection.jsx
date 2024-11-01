import { motion } from 'framer-motion';

function GuaranteeSection() {
  const guarantees = [
    {
      title: "100% Money Back Guarantee",
      description: "Try it risk-free for 30 days. If you're not completely satisfied, we'll refund your purchase.",
      icon: "💰"
    },
    {
      title: "Free Worldwide Shipping",
      description: "Get free shipping on all orders. Your package will arrive within 5-7 business days.",
      icon: "🚚"
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated support team is here to help you with any questions or concerns.",
      icon: "🎧"
    },
    {
      title: "Secure Payment",
      description: "Shop with confidence using our secure payment system.",
      icon: "🔒"
    }
  ];

  return (
    <section className="py-20 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#4A4039]">Our Guarantee</h2>
          <p className="text-[#4A4039]/70">Shop with confidence with our customer-first policies</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm
                         border border-[#C3B29A]/10 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            >
              <span className="text-4xl mb-4 block">{guarantee.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-[#4A4039]">{guarantee.title}</h3>
              <p className="text-[#4A4039]/70">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuaranteeSection; 