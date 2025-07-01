import React from 'react';

const techIcons = [
  { name: "Apache Cordova", src: "/icons/apachecordova.svg" },
  { name: "C++", src: "/icons/cplusplus.svg" },
  { name: "Dell", src: "/icons/dell.svg" },
  { name: "Docker", src: "/icons/docker.svg" },
  { name: "DotNet", src: "/icons/dotnet.svg" },
  { name: "Elasticsearch", src: "/icons/elasticsearch.svg" },
  { name: "Fortinet", src: "/icons/fortinet.svg" },
  { name: "Git for Windows", src: "/icons/gitforwindows.svg" },
  { name: "GitHub", src: "/icons/github.svg" },
  { name: "Google Cloud", src: "/icons/googlecloudstorage.svg" },
  { name: "Grafana", src: "/icons/grafana.svg" },
  { name: "HP", src: "/icons/hp.svg" },
  { name: "HTML5", src: "/icons/html5.svg" },
  { name: "JavaScript", src: "/icons/javascript.svg" },
  { name: "Linux", src: "/icons/linux.svg" },
  { name: "MariaDB", src: "/icons/mariadbfoundation.svg" },
  { name: "MongoDB", src: "/icons/mysql.svg" }, // corrigido para seu MySQL local
  { name: "Next.js", src: "/icons/nextdotjs.svg" },
  { name: "n8n", src: "/icons/n8n.svg" },
  { name: "NGINX", src: "/icons/nginx.svg" },
  { name: "PHP", src: "/icons/php.svg" },
  { name: "pfSense", src: "/icons/pfsense.svg" },
  { name: "phpMyAdmin", src: "/icons/phpmyadmin.svg" },
  { name: "PostgreSQL", src: "/icons/postgresql.svg" },
  { name: "Prometheus", src: "/icons/prometheus.svg" },
  { name: "React", src: "/icons/react.svg" },
  { name: "Tailwind CSS", src: "/icons/tailwindcss.svg" },
  { name: "Ubiquiti", src: "/icons/ubiquiti.svg" },
  { name: "Veeam", src: "/icons/veeam.svg" },
  { name: "Vite", src: "/icons/vite.svg" },
  { name: "XAMPP", src: "/icons/xampp.svg" },
  { name: "Zendesk", src: "/icons/zendesk.svg" }
];

const TechCarousel = () => {
  return (
    <section className="overflow-hidden bg-dark-200/50 py-12">
      <div className="whitespace-nowrap animate-scroll flex items-center gap-12 px-8">
        {techIcons.concat(techIcons).map((icon, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center w-24">
            <img
              src={icon.src}
              alt={icon.name}
              className="w-12 h-12 object-contain mb-2 drop-shadow-md"
            />
            <span className="text-xs text-gray-300 text-center">{icon.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechCarousel;
