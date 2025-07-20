
'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Remplissez le formulaire',
      description: 'Fournissez votre nom, téléphone, email et informations de base sur le véhicule',
      icon: 'ri-file-edit-line'
    },
    {
      number: '2',
      title: 'Nous vous rappelons',
      description: 'Notre équipe vous contacte en quelques minutes avec un devis gratuit',
      icon: 'ri-phone-line'
    },
    {
      number: '3',
      title: 'Nous récupérons votre véhicule',
      description: 'Enlèvement rapide et gratuit - nous nous occupons de tout le reste',
      icon: 'ri-truck-line'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            👉 Faites Enlever Votre Voiture en 3 Étapes Simples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre processus rationalisé rend l'enlèvement de voiture rapide et sans tracas. 
            Du contact initial à la récupération du véhicule, nous gérons tout.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto -mt-10 mb-6">
                  <i className={`${step.icon} text-blue-600 text-2xl`}></i>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blue-200 -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-time-line text-white text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🕘 Temps de Réponse Rapide
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Nous répondons dans les 30 minutes pendant les heures d'ouverture. 
            Votre demande d'enlèvement de voiture est notre priorité.
          </p>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Commencez Votre Enlèvement Gratuit Maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
