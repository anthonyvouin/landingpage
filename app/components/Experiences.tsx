"use client"

import { motion } from 'framer-motion';

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      period: "MARS 2025 - OCTOBRE 2025",
      title: "Développeur Full Stack web et mobile",
      company: "IRESTORE",
      location: "Télétravail",
      description: "Développement d'un front-end en Next.js, d'une API en Nest.js et d'une application mobile en React Native.",
      skills: ["Php", "JavaScript", "MySQL"]
    },
    {
      id: 2,
      period: "Janvier 2025 - MARS 2025",
      title: "Développeur Full Stack web",
      company: "Anna Giraud",
      location: "Télétravail",
      description: "Développement d'un site web pour la société Anna Giraud.",
      skills: ["Next.js", "Typescript", "PostgreSQL"]
    } 
    ,{
      id: 3,
      period: "2022 - 2023",
      title: "Intervenant pédagogique",
      company: "Normandie Web School",
      location: "Rouen, France",
      description: "Cours de PHP, JavaScript et MySQL destinés aux étudiants de la première année de l'école.",
      skills: ["Php", "JavaScript", "MySQL"]
    },
    {
      id: 4,
      period: "2021 - 2023",
      title: "Développeur Full Stack web",
      company: "Regional Gymnastics Committee",
      location: "Rouen, France",
      description: "Création de sites web pour le Comité Régional de Gymnastique.",
      skills: ["Symfony", "JavaScript", "MySQL", "REST API"]
    },
 
  ];

  return (
    <section id="experiences" className="mb-20 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border-l-[6px] border-black pl-6 relative mb-12 sm:mb-16 mt-3"
        >
          <div className="absolute -left-3 -top-3 w-6 h-6 bg-black rounded-full" />
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-4">
            Expériences
          </h2>
          <p className="text-lg sm:text-xl font-light text-gray-600 tracking-wide">
            Parcours Professionnel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border-[3px] border-black p-6 sm:p-8"
            >
              <span className="text-sm uppercase tracking-wider text-gray-500">
                {experience.period}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 mb-1 uppercase tracking-wider">
                {experience.title}
              </h3>
              <p className="text-lg font-medium mb-2">{experience.company}</p>
              <p className="text-gray-600 mb-4">{experience.location}</p>
              <p className="text-gray-600 mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
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
            "L'expérience est la meilleure des formations"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences; 