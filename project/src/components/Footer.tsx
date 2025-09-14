import React from 'react';
import { Mail, Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ERIC FETRARISON</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Développeur Full-Stack passionné, spécialisé dans la création 
              d'applications web modernes et performantes.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">À propos</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Compétences</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projets</a>
              <a href="#education" className="text-gray-300 hover:text-blue-400 transition-colors">Formation</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:fetrarison5@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                <Mail size={16} />
                fetrarison5@gmail.com
              </a>
              <a 
                href="https://github.com/fetrarison"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                <Github size={16} />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Eric Fetrarison. Tous droits réservés.
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              Créé avec <Heart className="text-red-500" size={16} /> et React
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};