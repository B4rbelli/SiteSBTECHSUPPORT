import React from 'react';
import { Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Tecnologia que Impulsiona Resultados</h3>
            <p className="text-gray-400 leading-relaxed">
              Na SB Tech & Support, entregamos soluções em TI, redes e automação com foco em performance, simplicidade e suporte eficiente. 🚀
            </p>
          </div>

          {/* Espaço reservado (vazio no meio) */}
          <div></div>

          {/* Social Links - agora alinhado à direita */}
          <div className="space-y-4 text-right">
            <h4 className="text-lg font-semibold text-white">Conecte-se</h4>
            <div className="flex justify-end space-x-4">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-300"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} SBTech&Support. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
            <ShieldCheck className="w-4 h-4 text-blue-600" /> Secure Bridge for Modern Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
