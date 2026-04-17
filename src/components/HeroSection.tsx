"use client";

import { motion } from "framer-motion";

function GeometricShape({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

function FloatingOrb({
  size,
  top,
  left,
  delay,
  gradient,
}: {
  size: string;
  top: string;
  left: string;
  delay: number;
  gradient: string;
}) {
  return (
    <motion.div
      className={`absolute rounded-full ${gradient} blur-3xl`}
      style={{
        width: size,
        height: size,
        top,
        left,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-widest text-[#1d1d1f]/60 uppercase glass-card">
              Full Stack Engineer & Designer
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-tighter text-[#1d1d1f] mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Lind
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#1d1d1f]/60 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            这里是Lind，我的起点
          </motion.p>

          <motion.div
            className="mt-10 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-[#1d1d1f] text-white rounded-full text-sm font-medium tracking-wide hover:bg-[#1d1d1f]/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              查看项目
            </motion.a>
            <motion.a
              href="#diary"
              className="px-8 py-4 glass-card text-[#1d1d1f] rounded-full text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              阅读日记
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 relative w-full h-[400px] md:h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <FloatingOrb
              size="200px"
              top="10%"
              left="20%"
              delay={0}
              gradient="bg-gradient-to-br from-[#a3b1c6]/40 to-[#627594]/30"
            />
            <FloatingOrb
              size="150px"
              top="50%"
              left="60%"
              delay={2}
              gradient="bg-gradient-to-br from-[#c4b5a4]/40 to-[#8a7a6a]/30"
            />
            <FloatingOrb
              size="180px"
              top="60%"
              left="25%"
              delay={4}
              gradient="bg-gradient-to-br from-[#b1c4a3]/40 to-[#6a8a62]/30"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <GeometricShape
              className="w-32 h-32 border-2 border-[#1d1d1f]/10 rounded-2xl"
              delay={0}
            />
            <GeometricShape
              className="w-48 h-48 border border-[#1d1d1f]/15 rounded-3xl"
              delay={2}
            />
            <GeometricShape
              className="w-64 h-64 border border-[#1d1d1f]/8 rounded-full"
              delay={4}
            />
            <GeometricShape
              className="w-20 h-20 bg-gradient-to-br from-[#1d1d1f]/5 to-[#1d1d1f]/10 rounded-xl"
              delay={1}
            />
          </div>

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#1d1d1f]/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
