"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio NextJS",
      description: "Portfolio moderne développé avec Next.js 15, Tailwind CSS et Framer Motion. Inclut une expérience utilisateur fluide et un design responsive.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/code.jpg",
      github: "https://github.com/anthonyvouin/landingpage",
      site: "https://anthony-vouin.com"
    },
    {
      title: "Snap&Shop",
      description: "C'est une plateforme de livraison de produits de consommation courante développée avec Next.js, PostgreSQL, Tailwind CSS et PrimeReact pour les composants. L'intégration de Stripe et de ses webhooks permet une gestion fluide des paiements. Une partie DevOps est également incluse pour le déploiement et l'automatisation. Ce projet, réalisé dans un cadre scolaire, intègre aussi de l'intelligence artificielle pour recommander des produits aux utilisateurs, améliorant ainsi l'expérience d'achat. Le design est responsive, moderne et agrémenté d'animations engageantes pour une navigation optimale.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PrimeReact", "Postgres"],
      image: "/code.jpg",
      github: "https://github.com/anthonyvouin/MarketPlaceFood",
      site: ""
    }, 
    {
        title: "Quiz app",
        description: "Quiz application développée pour une freelancer Anna Girard, conçue pour sensibiliser aux bonnes pratiques de cybersécurité parmi ses clients. Interface interactive et engageante pour tester et améliorer les connaissances sur les bonnes pratiques de cybersécurité.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/code.jpg",
      github: "https://github.com/anthonyvouin/quiz",
      site: ""
    },
  ];

  return (
    <section id="projects" className=" bg-white mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border-l-[6px] border-black pl-6 relative mb-12 sm:mb-16 mt-3"
        >
          <div className="absolute -left-3 -top-3 w-6 h-6 bg-black rounded-full" />
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-4">
            Projets
          </h2>
          <p className="text-lg sm:text-xl font-light text-gray-600 tracking-wide">
            Mes projets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                    <span>Demo</span>
                  </a>
                </div>
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
            "Chaque projet est une nouvelle histoire à raconter, un nouveau défi à relever"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 