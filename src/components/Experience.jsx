import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Code, Database } from 'lucide-react';

const Experience = () => {
  const ferramentas = [
    {
      title: "Desenvolvimento Web",
      icon: <Code size={20} />,
      local: "Web e sistemas internos",
      descricao: "Tecnologias para criação de sites institucionais, APIs e sistemas web personalizados.",
      tecnologias: ["React", "Next.js", "Tailwind CSS", "Node.js", "FastAPI", "GitHub Actions"]
    },
    {
      title: "Segurança da Informação",
      icon: <ShieldCheck size={20} />,
      local: "Ambientes críticos",
      descricao: "Soluções voltadas à proteção de dados, dispositivos e usuários contra ameaças digitais.",
      tecnologias: ["FortiGate", "WithSecure", "ESET Protect", "VPN IPsec/OpenVPN", "Firewall UTM", "Wazuh", "Gerenciamento de agentes"]
    },
    {
      title: "Banco de Dados e Backup",
      icon: <Database size={20} />,
      local: "Servidores locais e cloud",
      descricao: "Ferramentas para estruturação, gestão e recuperação de dados de forma segura.",
      tecnologias: ["PostgreSQL", "SQL Server", "MySQL", "pgAdmin", "Veeam Backup", "NAS Storage", "Scripts agendados"]
    },
    {
      title: "Infraestrutura e Monitoramento",
      icon: <Wrench size={20} />,
      local: "Presencial e remoto",
      descricao: "Ferramentas utilizadas para gerenciamento de servidores, redes e monitoramento de ambientes em tempo real.",
      tecnologias: ["Windows Server", "Linux", "VMware ESXi", "Active Directory", "pfSense", "Unifi", "Zabbix", "Grafana"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossas <span className="gradient-text">Ferramentas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça as tecnologias que utilizamos para entregar soluções robustas, seguras e modernas aos nossos clientes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha da timeline */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            {ferramentas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Bolinha da timeline */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-dark-300 z-10"></div>

                {/* Conteúdo */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="card">
                    <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <span className="font-semibold">SB Tech&Support</span>
                      <span>•</span>
                      <span>{item.local}</span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.descricao}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tecnologias.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
