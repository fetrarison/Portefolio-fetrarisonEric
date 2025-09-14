import React from 'react';
import { ExternalLink, Calendar, Code, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "SITE TAPAKILA EVENT",
      date: "FÉVRIER 2025",
      description: "Développement d'une plateforme de gestion d'événements et de réservation de billets, inspirée de TicketPlace. Mise en place d'un tableau de bord avec React, Next.js et React-Admin pour gérer efficacement événements, places et réservations.",
      technologies: ["React", "Next.js", "React-Admin"],
      category: "Plateforme Web",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "CHAMPIONNAT FOOT 2025",
      date: "MARS 2025", 
      description: "Développement d'une application complète en Spring Boot pour la gestion d'un championnat de football (joueurs, entraîneurs, clubs, transferts). Architecture divisée en modules synchronisés pour une meilleure organisation et évolutivité.",
      technologies: ["Spring Boot", "Java", "PostgreSQL"],
      category: "Application Back-end",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "GARAGE MOTO PIÈCES",
      date: "MARS 2025",
      description: "Création d'un site web en Symfony pour un garage à Fianarantsoa, intégrant la gestion des ventes de pièces détachées et la présentation des services pour motos et véhicules.",
      technologies: ["Symfony", "PHP", "MySQL"],
      category: "Site E-commerce",
      image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "ARC APP",
      date: "JUILLET 2025",
      description: "Développement d'une application web de gestion d'archives pour un client particulier. Fonctionnalités : création, modification, suppression et destruction d'archives selon les droits et rôles attribués aux utilisateurs (gestion des comptes avec permissions).",
      technologies: ["Spring Boot", "React", "PostgreSQL"],
      category: "Application Full-Stack",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "LOTUS BUNGALOW",
      date: "MAI 2024",
      description: "Conception d'un site vitrine pour un hôtel à Madagascar, réalisé entièrement en JavaScript. Projet issu d'un concours organisé par le propriétaire.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      category: "Site Vitrine",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Plateforme Web":
        return <Layers className="text-blue-600" size={20} />;
      case "Application Back-end":
        return <Code className="text-indigo-600" size={20} />;
      default:
        return <ExternalLink className="text-cyan-600" size={20} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Plateforme Web":
        return "bg-blue-100 text-blue-800";
      case "Application Back-end":
        return "bg-indigo-100 text-indigo-800";
      case "Site E-commerce":
        return "bg-green-100 text-green-800";
      case "Application Full-Stack":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-cyan-100 text-cyan-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Projets</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations récentes en développement web et applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={16} />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};