"use client"

import { motion } from 'framer-motion';

const Education = () => {
  const educations = [
    {
      id: 1,
      period: "2023 - 2025",
      title: "Mastère Tech Lead Full Stack bac + 5",
      school: "EEMI Paris",
      skills: ["Full Stack", "Dev ops", "Cybersecurity", "Gestion de projet"]
    },
    {
      id: 2,
      period: "2020 - 2023",
      title: "Bachelor développeur full stack web et mobile bac + 3",
      school: "Normandie Web School",
      skills: ["Développement web", "Développement Full Stack", "Développement mobile"]
    },
   
  ];

  return (
    <section id="education" className="mb-20 bg-white  mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border-l-[6px] border-black pl-6 relative mb-12 sm:mb-16 mt-3"
        >
          <div className="absolute -left-3 -top-3 w-6 h-6 bg-black rounded-full" />
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-4">
            Formations
          </h2>
          <p className="text-lg sm:text-xl font-light text-gray-600 tracking-wide">
            Parcours académique 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {educations.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border-[3px] border-black p-6 sm:p-8"
            >
              <span className="text-sm uppercase tracking-wider text-gray-500">
                {education.period}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 mb-3 uppercase tracking-wider">
                {education.title}
              </h3>
              <p className="text-lg font-medium mb-2">{education.school}</p>
            
              <div className="flex flex-wrap gap-2">
                {education.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm border border-current rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24 text-center border-t-[3px] border-b-[3px] border-black py-8 sm:py-12"
        >
          <p className="text-xl sm:text-2xl font-light italic px-4">
            "L'éducation n'est pas une préparation à la vie ; l'éducation est la vie elle-même"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 