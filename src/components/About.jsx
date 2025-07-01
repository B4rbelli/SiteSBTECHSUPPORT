import React from 'react';
import { motion } from 'framer-motion';
import { Code, ShieldCheck, Server, Database } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Criação de sites e sistemas personalizados com integração a banco de dados e soluções em nuvem."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Segurança da Informação",
      description: "Implementação de soluções EPP, antivírus, monitoramento e proteção de ambientes digitais."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infraestrutura de TI",
      description: "Instalação, configuração e gerenciamento de servidores, redes e estações de trabalho."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Gestão de Backup",
      description: "Estrutura de backup segura, com monitoramento e recuperação de dados para empresas."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="gradient-text">nós</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center px-4">
            Atuamos com responsabilidade e proximidade, entendendo as necessidades reais dos nossos clientes para oferecer soluções sob medida em infraestrutura, segurança e desenvolvimento.<br /><br />
            Nosso compromisso vai além da entrega: buscamos garantir ambientes de TI eficientes, protegidos e prontos para crescer junto com o seu negócio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-purple-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
