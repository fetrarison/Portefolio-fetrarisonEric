import React from 'react';
import { MapPin, Phone, Mail, Github } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À propos de moi</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                Développeur Full-Stack passionné, je me spécialise dans la création d'applications 
                web modernes et performantes. Mon expertise couvre l'ensemble du développement, 
                du front-end interactif aux architectures back-end robustes.
              </p>
              
              <p className="text-lg leading-relaxed">
                Diplômé en informatique de la Haute École d'Informatique de Madagascar, 
                j'apporte une approche méthodique et créative à chaque projet, en mettant 
                l'accent sur la qualité du code et l'expérience utilisateur.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">Nanisana, Madagascar</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">0344319587</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600 flex-shrink-0" size={20} />
                <a 
                  href="mailto:fetrarison5@gmail.com" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  fetrarison5@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Github className="text-blue-600 flex-shrink-0" size={20} />
                <a 
                  href="https://github.com/fetrarison" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Centres d'intérêt</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Basketball</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Jeux vidéo</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">La passion mécanique</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Langues</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>Malagasy : langue maternelle</div>
                    <div>Français : niveau intermédiaire</div>
                    <div>Anglais : niveau normal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};