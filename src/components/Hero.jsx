import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-purple-400 text-lg font-mono"
          >
            Somos à:
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="gradient-text">SB Tech&Support</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-4xl font-light text-gray-300"
          >
            Tecnologia que funciona, <span className="gradient-text-secondary">Suporte que resolve!</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Soluções digitais seguras e eficientes.
            Unimos infraestrutura, segurança e desenvolvimento web para impulsionar seu negócio com tecnologia de ponta.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#contact" className="btn-primary">
              Contatos
            </a>
            <a
              href="/portfolio-sbtech.pdf"
              download
              className="btn-secondary"
            >
              Download Portfólio
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ArrowDown className="text-purple-400" size={24} />
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;
