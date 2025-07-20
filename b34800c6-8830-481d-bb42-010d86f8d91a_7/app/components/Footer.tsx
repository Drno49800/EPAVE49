
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-car-line text-white text-xl"></i>
              </div>
              <span className="text-white font-pacifico text-xl">EPAVE49</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre partenaire de confiance pour l'enlèvement de voitures sans tracas. 
              Nous fournissons des services d'enlèvement de véhicules gratuits, rapides 
              et professionnels dans toute la France.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Enlèvement d'Épaves</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Enlèvement de Camionnettes</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Enlèvement de 4x4</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Collecte de Voitures de Casse</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Véhicules Hors d'Usage</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Zones de Couverture</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Grand Paris</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Lyon</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Marseille</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Toulouse</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Voir Toutes les Zones</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Informations de Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <i className="ri-phone-fill text-blue-600 mt-1"></i>
                <div>
                  <p className="font-semibold text-white">Téléphone</p>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-mail-fill text-blue-600 mt-1"></i>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>info@epave49.fr</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-time-fill text-blue-600 mt-1"></i>
                <div>
                  <p className="font-semibold text-white">Horaires</p>
                  <p>7 Jours sur 7<br />8h - 20h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 EPAVE49. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Politique de Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Conditions de Service</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Politique Environnementale</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
