import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const education = [
    {
      degree: "Licence en Informatique",
      school: "Haute École d'Informatique",
      location: "Ivandry, Madagascar", 
      description: "Formation complète en développement logiciel, programmation orientée objet, bases de données et architecture système.",
      highlight: true
    },
    {
      degree: "Baccalauréat",
      school: "Lycée Saint Jean",
      location: "Ambohijanaka, Madagascar",
      highlight: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Formation</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Parcours académique et formation en informatique
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    item.highlight ? 'bg-blue-600' : 'bg-gray-400'
                  } shadow-lg`}>
                    <GraduationCap className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className={`bg-white rounded-xl shadow-lg p-6 ${
                      item.highlight ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
                        <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                          <Calendar size={16} />
                          {}
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="text-gray-500" size={16} />
                          <span className="font-semibold text-gray-800">{item.school}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="text-gray-500" size={16} />
                          <span className="text-gray-600">{item.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};