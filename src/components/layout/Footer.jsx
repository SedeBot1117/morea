import { motion } from 'framer-motion';

function Footer() {
  const footerLinks = {
    Product: ['Features', 'Specifications', 'Reviews', 'FAQ'],
    Company: ['About Us', 'Contact', 'Blog', 'Press'],
    Support: ['Help Center', 'Shipping', 'Returns', 'Warranty'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Patents', 'Compliance']
  };

  return (
    <footer className="bg-gradient-to-b from-[#F5F2EE] to-[#E5DED4]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-[#4A4039] font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#4A4039]/70 hover:text-[#C3B29A] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-12
                     border border-[#C3B29A]/10"
        >
          <h3 className="text-[#4A4039] font-semibold mb-4">Stay Updated</h3>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full border border-[#C3B29A]/20
                       focus:outline-none focus:border-[#C3B29A] transition-colors"
            />
            <button
              className="bg-gradient-to-r from-[#C3B29A] to-[#8C7B66] text-white
                       px-6 py-2 rounded-full hover:shadow-lg
                       hover:shadow-[#C3B29A]/50 transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#C3B29A]/20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#4A4039]/70 mb-4 md:mb-0"
          >
            © 2024 MOREA. All rights reserved.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[#4A4039]/70 hover:text-[#C3B29A] transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 