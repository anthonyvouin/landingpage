"use client"

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 80 },
        { name: "Next.js", level: 80 },
        { name: "Angular", level: 80 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Nest", level: 80 },
        { name: "Express", level: 80 },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 }, 
        { name: "MySQL", level: 70 },
      ]
    },
  ];

  return (
    <section id="skills" className="mb-20 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border-l-[6px] border-black pl-6 relative mb-12 sm:mb-16"
        >
          <div className="absolute -left-3 top-0 w-6 h-6 bg-black rounded-full" />
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-4">
            Skills
          </h2>
          <p className="text-lg sm:text-xl font-light text-gray-600 tracking-wide">
            Technologies & Outils
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="border-[3px] border-black p-4 sm:p-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm uppercase tracking-wider">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[3px] bg-gray-200">
                      <div 
                        className="h-full bg-black"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24 text-center border-t-[3px] border-b-[3px] border-black py-8 sm:py-12"
        >
          <p className="text-xl sm:text-2xl font-light italic px-4">
            "Technical mastery is the basis of creativity"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 