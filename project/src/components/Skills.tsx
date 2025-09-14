import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Front-end",
      color: "bg-blue-500",
      skills: ["HTML5", "JavaScript (ES6+)", "React", "Next.js", "React-Admin"]
    },
    {
      icon: Server,
      title: "Back-end",
      color: "bg-indigo-500",
      skills: ["Java / Spring Boot", "PHP / Symfony"]
    },
    {
      icon: Database,
      title: "Bases de données",
      color: "bg-cyan-500",
      skills: ["PostgreSQL", "MySQL", "Firebird"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Expertise technique couvrant l'ensemble de la stack de développement web moderne
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center mb-6">
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? category.color : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Code className="text-blue-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Technologies & Outils</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {["React", "Next.js", "Spring Boot", "Symfony", "PostgreSQL", "MySQL", "JavaScript", "Java", "PHP", "HTML5", "CSS3", "Git"].map((tech) => (
                <div 
                  key={tech}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg text-center text-sm font-medium text-gray-700 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};