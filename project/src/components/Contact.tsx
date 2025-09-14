import React from 'react';
import { Mail, Phone, MapPin, Github, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "fetrarison5@gmail.com", href: "mailto:fetrarison5@gmail.com", color: "text-blue-600" },
    { icon: Phone, label: "Téléphone", value: "0344319587", href: "tel:0344319587", color: "text-green-600" },
    { icon: MapPin, label: "Localisation", value: "Nanisana, Madagascar", href: null, color: "text-red-600" },
    { icon: Github, label: "GitHub", value: "github.com/fetrarison", href: "https://github.com/fetrarison", color: "text-gray-700" }
  ];

  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<null | { ok: boolean; msg: string }>(null);

  // ⚠️ Remplace par TON endpoint Formspree
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvgbdybe';

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      // Optionnel : custom subject si "subject" est vide
      if (!formData.get('subject')) {
        formData.set('subject', `Message de ${formData.get('name') || 'Visiteur'}`);
      }

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (res.ok) {
        setStatus({ ok: true, msg: 'Message envoyé ! Merci ' });
        e.currentTarget.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus({ ok: false, msg: data?.errors?.[0]?.message || "Échec de l'envoi. Réessayez plus tard." });
      }
    }  finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Infos */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Restons en contact</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations.
                Que vous ayez un projet en tête ou souhaitiez simplement discuter de technologie,
                je serais ravi d'échanger avec vous.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <contact.icon className={contact.color} size={24} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-sm text-gray-500 font-medium">{contact.label}</div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-900 hover:text-blue-600 transition-colors font-medium"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 font-medium">{contact.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire connecté à Formspree */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h3>
              </div>

              {/* Honeypot anti-bot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input type="text" id="website" name="website" autoComplete="off" tabIndex={-1} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                  <input
                    type="text" id="name" name="name" required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email" id="email" name="email" required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                <input
                  type="text" id="subject" name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message" name="message" rows={5} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
              >
                <Send size={20} />
                {loading ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>

              {status && (
                <p className={`text-sm mt-2 ${status.ok ? 'text-green-700' : 'text-red-700'}`} role="status" aria-live="polite">
                  {status.msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
