import React from 'react';
import { ChevronDown, Mail, Github } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                ERIC
                <span className="block text-blue-300">FETRARISON</span>
              </h1>
              
              <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-blue-100">
                DÉVELOPPEUR FULL-STACK
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              En tant que développeur passionné par la programmation, mon parcours se focalise sur 
              l'univers dynamique du développement web, les technologies et la conception de logiciels.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="mailto:fetrarison5@gmail.com"
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} />
                Me contacter
              </a>
              
              <a
                href="https://github.com/fetrarison"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 border border-white/30 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                <Github size={20} />
                Voir mes projets
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};