"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const diaryEntries = [
  {
    date: "2026.04",
    title: "开启个人 IP 之路",
    content: "决定构建自己的数字空间，记录技术成长与创业思考。",
  },
  {
    date: "2026.03",
    title: "AI 赋能实践",
    content: "深入研究 LangChain4j，探索 AI 在垂直领域的应用落地。",
  },
  {
    date: "2026.01",
    title: "技术深度整合",
    content: "完成从 Java 全栈到前后端技术的全面整合，形成完整技术闭环。",
  },
];

export default function DiarySection() {
  return (
    <section id="diary" className="py-32 px-6 bg-white/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            日记
          </h2>
          <p className="text-lg text-[#1d1d1f]/60">
            学习轨迹与思考沉淀
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[#1d1d1f]/10" />

          {diaryEntries.map((entry, index) => (
            <motion.div
              key={entry.date}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative pl-12 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full glass flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#1d1d1f]/20" />
              </div>

              <div className="glass-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={14} className="text-[#1d1d1f]/40" />
                  <span className="text-sm text-[#1d1d1f]/50 font-medium">
                    {entry.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                  {entry.title}
                </h3>
                <p className="text-[#1d1d1f]/60 leading-relaxed">
                  {entry.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
