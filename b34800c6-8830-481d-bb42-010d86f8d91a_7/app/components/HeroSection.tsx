
'use client';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20car%20towing%20service%20truck%20removing%20damaged%20vehicles%20from%20roadside%2C%20industrial%20automotive%20salvage%20yard%20with%20organized%20wrecked%20cars%2C%20clean%20modern%20professional%20setting%20with%20blue%20sky%20background%2C%20realistic%20photography%20style%20showing%20efficient%20vehicle%20removal%20process&width=1920&height=1080&seq=hero-car-removal&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <i className="ri-car-line text-white text-2xl"></i>
            </div>
            <span className="text-white font-pacifico text-2xl">EPAVE49</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            🚗 Service d'Enlèvement Gratuit d'Épaves
          </h1>
          
          <p className="text-xl text-white mb-4 font-semibold">
            Rapide, Gratuit et Sans Tracas !
          </p>
          
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Vous avez un véhicule ancien ou endommagé ? Nous nous en occupons – GRATUITEMENT ! 
            Nous nous spécialisons dans l'enlèvement gratuit de véhicules accidentés, en panne, 
            ou indésirables, qu'ils aient été dans un accident, abandonnés, ou qu'ils ne démarrent plus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Enlèvement Gratuit Maintenant
            </button>
            
            <button 
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Comment Ça Marche
            </button>
          </div>
          
          <div className="mt-8 flex items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <i className="ri-time-line text-blue-400"></i>
              <span>Collecte le jour même</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-phone-line text-blue-400"></i>
              <span>7 jours sur 7</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-money-dollar-circle-line text-blue-400"></i>
              <span>100% GRATUIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
