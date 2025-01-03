"use client"

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      id: 1,
      title: "EMAIL & PHONE",
      items: [
        {
          icon: <FaEnvelope className="text-2xl" />,
          label: "EMAIL",
          value: "anthony.vouin@outlook.fr"
        },
        {
          icon: <FaPhone className="text-2xl" />,
          label: "PHONE",
          value: "+33 6 60 05 38 88"
        }
      ]
    },
    
    {
      id: 3,
      title: "LOCATION",
      items: [
        {
          icon: <FaMapMarkerAlt className="text-2xl" />,
          label: "BASED IN",
          value: "Rouen, France"
        }
      ]
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border-l-[6px] border-black pl-6 relative mb-12 sm:mb-16"
        >
          <div className="absolute -left-3 top-0 w-6 h-6 bg-black rounded-full" />
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-4">
            Contact
          </h2>
          <p className="text-lg sm:text-xl font-light text-gray-600 tracking-wide">
            Let's Connect & Create
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {contacts.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border-[3px] border-black p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-3 border-2 border-black">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm uppercase tracking-wider text-gray-500">
                        {item.label}
                      </span>
                      <span className="text-lg font-medium">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;