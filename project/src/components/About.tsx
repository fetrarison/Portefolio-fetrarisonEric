import React from 'react';
import { MapPin, Phone, Mail, Github } from 'lucide-react';

 import fetraimg from '../img/fetraimg.jpeg'; 

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* décor doux */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/15 via-indigo-500/15 to-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-10 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-400/15 via-purple-500/15 to-blue-400/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            À propos de <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche — contenu inchangé, style modernisé */}
          <div className="space-y-6">
            <div className="prose prose-lg text-slate-700 max-w-none bg-white/70 backdrop-blur-xl border border-white/50 ring-1 ring-slate-200/60 rounded-3xl p-6 shadow-xl">
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

            {/* Grille de contacts — mêmes infos, design en "chips" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 group">
                <span className="grid place-items-center h-9 w-9 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <MapPin className="text-blue-600" size={18} />
                </span>
                <span className="text-slate-700 group-hover:text-slate-900 transition-colors">Nanisana, Madagascar</span>
              </div>
              
              <div className="flex items-center gap-3 group">
                <span className="grid place-items-center h-9 w-9 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Phone className="text-blue-600" size={18} />
                </span>
                <span className="text-slate-700 group-hover:text-slate-900 transition-colors">0344319587</span>
              </div>
              
              <div className="flex items-center gap-3 group">
                <span className="grid place-items-center h-9 w-9 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Mail className="text-blue-600" size={18} />
                </span>
                <a 
                  href="mailto:fetrarison5@gmail.com" 
                  className="text-blue-700 hover:text-blue-800 font-medium transition-colors"
                >
                  fetrarison5@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 group">
                <span className="grid place-items-center h-9 w-9 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Github className="text-blue-600" size={18} />
                </span>
                <a 
                  href="https://github.com/fetrarison" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 font-medium transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="relative">

<div
  className="mb-4 aspect-[16/9] rounded-2xl overflow-hidden border border-white/40 ring-1 ring-slate-200 bg-center bg-cover shadow-2xl"
  style={{ backgroundImage: `url(${fetraimg})` }}
/>

            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl border border-white/50 ring-1 ring-slate-200/60 backdrop-blur-xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Centres d'intérêt</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                    <span className="text-slate-700 font-medium">Basketball</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                    <span className="text-slate-700 font-medium">Jeux vidéo</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                    <span className="text-slate-700 font-medium">La passion mécanique</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-blue-200/60">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Langues</h4>
                  <div className="space-y-2 text-sm text-slate-700">
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
