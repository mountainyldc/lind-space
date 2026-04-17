"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#1d1d1f]/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-sm text-[#1d1d1f]/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2026 Lind. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card text-[#1d1d1f]/60 hover:text-[#1d1d1f] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              className="p-3 glass-card text-[#1d1d1f]/60 hover:text-[#1d1d1f] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="WeChat"
            >
              <MessageCircle size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
