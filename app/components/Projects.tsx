"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    title: "Portfolio NextJS",
    description: "Portfolio moderne développé avec Next.js 15, Tailwind CSS et Framer Motion. Inclut une expérience utilisateur fluide et un design responsive.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/code.jpg",
    github: [
      { url: "https://github.com/anthonyvouin/landingpage" }
    ],
    site: "https://anthony-vouin.com"
  },
  {
    title: "Snap&Shop",
    description: "C'est une plateforme de livraison de produits de consommation courante développée avec Next.js, PostgreSQL, Tailwind CSS et PrimeReact pour les composants. L'intégration de Stripe et de ses webhooks permet une gestion fluide des paiements. Une partie DevOps est également incluse pour le déploiement et l'automatisation. Ce projet, réalisé dans un cadre scolaire, intègre aussi de l'intelligence artificielle pour recommander des produits aux utilisateurs, améliorant ainsi l'expérience d'achat. Le design est responsive, moderne et agrémenté d'animations engageantes pour une navigation optimale.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PrimeReact", "Postgres"],
    image: "/code.jpg",
    github: [
      { url: "https://github.com/anthonyvouin/MarketPlaceFood" },
    ],
  }, 
  {
    title: "Quiz app",
    description: "Quiz application développée pour une freelancer Anna Girard, conçue pour sensibiliser aux bonnes pratiques de cybersécurité parmi ses clients. Interface interactive et engageante pour tester et améliorer les connaissances sur les bonnes pratiques de cybersécurité.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/code.jpg",
    github: [
      { url: "https://github.com/anthonyvouin/quiz"}
    ],
  },
  {
    title: "OnlyFlick",
    description: "OnlyFlick est une plateforme d’abonnement permettant aux créateurs de partager du contenu exclusif autour des animaux. Développée avec Flutter pour l'application mobile et Golang pour le backend, elle s’appuie sur PostgreSQL pour la gestion des données. L’intégration de Stripe et de ses webhooks assure une gestion fiable des paiements récurrents. Le projet inclut également une infrastructure DevOps pour le déploiement automatisé. Le design est moderne, responsive et centré sur l’expérience utilisateur, avec des suggestions de contenus basées sur les préférences des abonnés.",
    technologies: ["Flutter", "Golang", "PostgreSQL", "Stripe", "Docker"],
    image: "/code.jpg",
    github: [
      { url: "https://github.com/anthonyvouin/pec2-frontend" , label: "Front - Mobile"},
      { url: "https://github.com/anthonyvouin/pec2-backend/" , label: "Back - API"},
    ],
  }
  
];

const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [clamped, setClamped] = useState<{ [key: number]: boolean }>({});
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const newClamped: { [key: number]: boolean } = {};
    descRefs.current.forEach((el, idx) => {
      if (el) {
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 24;
        const maxHeight = 3 * lineHeight;
        newClamped[idx] = el.scrollHeight > maxHeight + 1;
      }
    });
    setClamped(newClamped);
  }, []);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

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
                <p
                  ref={el => { descRefs.current[index] = el; }}
                  className={`text-gray-600 mb-4 ${expanded === index ? '' : 'line-clamp-3'}`}
                >
                  {project.description}
                </p>
                {clamped[index] && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-gray-800 font-semibold text-sm mb-4 flex items-center gap-1 hover:underline focus:outline-none transition-colors"
                  >
                    {expanded === index ? 'Voir moins' : 'Voir plus'}
                    <span className={`transition-transform duration-200 ${expanded === index ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                )}

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
                  {project.github.map((repo, i) => (
                    <a
                      key={i}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-200"
                    >
                      <FaGithub className="text-xl" />
                      <span className="font-medium">Code{'label' in repo && repo.label ? ` ${repo.label}` : ''}</span>
                    </a>
                  ))}
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="font-medium">Demo</span>
                    </a>
                  )}
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