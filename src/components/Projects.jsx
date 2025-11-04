import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "LPを簡単に作成できるツール",
      description: "誰でも直感的にLPが作れるツール（現在製作途中）",
      technologies: ["Figma", "EJS", "CSS", "JavaScript", "TailwindCSS", "Node.js"],
      category: "Design & Web Development",
      period: "現在制作中",
      // url: "https://css-style-maker.com/",
      image: "./images/projects/projects-03.webp"
    },
    {
      title: "Web制作者のための簡単CSSツール 「CSS Generator」",
      description: "よく使用するCSSを視覚的に生成できるツール",
      technologies: ["Figma", "EJS", "Sass", "JavaScript"],
      category: "Design & Web Development",
      period: "2025.05~2025.06",
      url: "https://sanada04.github.io/generator/",
      image: "./images/projects/projects-02.webp"
    },
    {
      title: "コーポレートサイト開発",
      description: "WordPressで運用も考えたサイト構築",
      technologies: ["WordPress", "PHP", "Sass", "JavaScript"],
      category: "Web Development",
      period: "2024.10~2025.01",
      url: "https://naitozouen.com/",
      image: "./images/projects/projects-01.webp"
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="projects" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-16 tracking-tight"
          >
            Selected Projects
          </motion.h2>
          <motion.div
            ref={ref}
            className="grid gap-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 }}
                className="group border-t border-zinc-800 pt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8">
                  <div className="space-y-4">
                    <p className="text-zinc-500">{project.category}</p>
                    <p className="text-zinc-500">{project.period}</p>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-zinc-400">{project.description}</p>
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ x: 10 }}
                      className="inline-flex items-center text-white hover:text-zinc-300 transition-colors"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-[90%] max-w-4xl max-h-[90vh] md:max-h-[85vh] bg-zinc-900 rounded-lg overflow-y-auto mx-4"
              >
                <div className="px-6 py-12 md:p-8">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <h3 className="text-2xl md:text-3xl font-bold mb-8">{selectedProject.title}</h3>

                  {selectedProject.image && (
                    <div className="mb-8 rounded-lg overflow-hidden">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-auto object-cover"
                        style={{ maxHeight: '400px' }}
                      />
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-zinc-400 mb-2">プロジェクト概要</h4>
                        <p className="text-zinc-300">{selectedProject.description}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-zinc-400 mb-2">使用技術</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-zinc-400 mb-2">開発期間</h4>
                        <p className="text-zinc-300">{selectedProject.period}</p>
                      </div>

                      {selectedProject.url && (
                        <div>
                          <h4 className="text-sm font-medium text-zinc-400 mb-2">URL</h4>
                          <a
                            href={selectedProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                          >
                            プロジェクトを見る
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}

                      {selectedProject.githubUrl && (
                        <div>
                          <h4 className="text-sm font-medium text-zinc-400 mb-2">GitHub</h4>
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                          >
                            リポジトリを見る
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
