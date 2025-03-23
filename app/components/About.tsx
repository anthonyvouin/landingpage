"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white pt-40 border-t-[3px] border-black mb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="border-l-[6px] border-black pl-6 relative mt-3">
            <div className="absolute -left-3 -top-3 w-6 h-6 bg-black rounded-full"></div>
            <h2 className="text-7xl font-black uppercase tracking-tighter mb-4">
            À propos
            </h2>
            <p className="text-xl font-light text-gray-600 tracking-wide">
              Développeur Full Stack
            </p>
          </div>

          <div className="space-y-6 pr-12">
            <p className="text-lg leading-relaxed">
            Passionné par la création d'expériences web innovantes, je combine créativité et expertise technique pour donner vie à des projets ambitieux.
            </p>
            <p className="text-lg leading-relaxed">
            Spécialisé en Next.js et Nest.js, je crée des applications web performantes et élégantes.
            </p>

          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-8 py-8 border-t-[3px] border-b-[3px] border-black"
          >
            {[
              { number: '3', label: 'Années d\'expérience' },
              { number: '50+', label: 'Projets' },
              ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group cursor-default"
              >
                <span className="block text-4xl font-black group-hover:text-gray-700 transition-colors">
                  {stat.number}
                </span>
                <span className="text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[600px] border-[3px] border-black group"
        >
          <Image
            src="/moi.jpg"
            alt="Portrait du développeur"
            fill
            className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute -bottom-4 -right-4 bg-black text-white py-2 px-4">
            <span className="text-sm uppercase tracking-wider">2025</span>
          </div>
        </motion.div>
      </div>

      <div className="bg-black text-white py-8 mt-24 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee-left inline-block">
            <span className="text-4xl font-black uppercase tracking-widest mx-4">
              React • Next.js • TypeScript • Node.js • Nest.js • Angular.js • TypeScript •&nbsp;
            </span>
          </div>
          <div className="animate-marquee-left inline-block">
            <span className="text-4xl font-black uppercase tracking-widest mx-4">
              React • Next.js • TypeScript • Node.js • Nest.js • Angular.js • TypeScript •&nbsp;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 