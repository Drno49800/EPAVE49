
'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Enlèvement d\'épaves 100% GRATUIT',
      description: 'Aucun frais caché, aucune charge - service entièrement gratuit'
    },
    {
      icon: 'ri-timer-flash-line',
      title: 'Collecte le jour même disponible',
      description: 'Réponse rapide et service d\'enlèvement express'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Nous gérons toute la paperasse',
      description: 'Désenregistrement complet et documentation prise en charge'
    },
    {
      icon: 'ri-car-line',
      title: 'Tous types de véhicules acceptés',
      description: 'Voitures, camionnettes, 4x4 - tout état, toute marque'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Élimination écologique',
      description: 'Recyclage responsable et élimination environnementale'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Large zone de couverture',
      description: 'Disponible dans plusieurs régions et villes'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ✅ Pourquoi Choisir EPAVE49 ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous rendons l\'enlèvement de voitures simple, rapide et entièrement gratuit. 
            Voici ce qui nous distingue de la concurrence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-blue-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ouvert 7 Jours sur 7
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Notre équipe est prête à vous aider à enlever votre véhicule indésirable 
              tous les jours de la semaine. Nous comprenons que les problèmes de voiture 
              n\'attendent pas les heures d\'ouverture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                Lundi - Dimanche
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                Réponse Rapide
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                Service Professionnel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
