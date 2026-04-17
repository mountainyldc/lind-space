"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AI Doctor",
    description: "基于 LangChain4j 的 AI 助手项目，赋能医疗问诊场景",
    tech: ["LangChain4j", "Java", "Spring Boot"],
    github: "https://github.com/mountainyldc/java-ai-langchain4j",
  },
  {
    name: "Lind's Digital Space",
    description: "个人 IP 网站，展示项目与技术沉淀",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mountainyldc/lind-space",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            项目
          </h2>
          <p className="text-lg text-[#1d1d1f]/60">
            从概念到落地的技术实践
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#1d1d1f]">
                    {project.name}
                  </h3>
                  <ArrowUpRight
                    size={24}
                    className="text-[#1d1d1f]/40 group-hover:text-[#1d1d1f] transition-colors"
                  />
                </div>
                <p className="text-[#1d1d1f]/60 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-[#1d1d1f]/60 bg-[#1d1d1f]/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ExternalLink
                  size={20}
                  className="text-[#1d1d1f]/40 group-hover:text-[#1d1d1f] transition-colors"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
