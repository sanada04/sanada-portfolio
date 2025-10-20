import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Skills() {
  const skills = [
    { name: "Frontend Development", items: ["TypeScript", "TailwindCSS", "Sass"] },
    { name: "UI/UX Design", items: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Responsive Design"] },
    { name: "CMS", items: ["Wordpress", "Adobe Experience Manager（AEM）"] },
    { name: "Other Tools & Expertise", items: ["Git", "Accessibility", "SEO"] }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="skills" className="py-32 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-16 tracking-tight"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-zinc-800 pt-8"
              >
                <h3 className="text-xl font-medium mb-6">{category.name}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-zinc-400 flex items-center">
                      <span className="w-2 h-2 bg-white mr-4"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
