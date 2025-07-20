
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleInfo: '',
    location: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-id': 'car-removal-contact-fr',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          vehicleInfo: '',
          location: '',
          additionalNotes: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📬 Obtenez un Rappel Gratuit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à vous débarrasser de votre voiture aujourd'hui ? Remplissez le formulaire 
            ci-dessous et nous vous rappellerons avec un devis gratuit et un horaire de collecte 
            rapide dans les 30 minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📞 Informations de Contact
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-phone-fill text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Téléphone</h4>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <i className="ri-mail-fill text-blue-600 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@epave49.fr</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-time-fill text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Heures d'Ouverture</h4>
                    <p className="text-gray-600">7 Jours sur 7, 8h - 20h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-fill text-white"></i>
                </div>
                <h4 className="font-bold text-gray-900">Confiance & Sécurité</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  Entièrement licencié et assuré
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  Personnel professionnel formé
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  Tarification transparente (GRATUIT !)
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  Élimination écologique
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <form id="car-removal-contact-fr" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Votre Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Entrez votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Numéro de Téléphone 📞 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Votre numéro de contact"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Adresse Email ✉️ *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="votre@email.fr"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-900 mb-2">
                  Localisation du Véhicule *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Ville ou code postal où se trouve le véhicule"
                />
              </div>

              <div>
                <label htmlFor="vehicleInfo" className="block text-sm font-semibold text-gray-900 mb-2">
                  Infos Véhicule (Marque/Modèle/État) *
                </label>
                <textarea
                  id="vehicleInfo"
                  name="vehicleInfo"
                  value={formData.vehicleInfo}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                  placeholder="ex: Peugeot 207 2010, dommages d'accident, ne démarre pas"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.vehicleInfo.length}/500 caractères</p>
              </div>

              <div>
                <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-900 mb-2">
                  Notes Supplémentaires (Optionnel)
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={2}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                  placeholder="Exigences particulières ou informations supplémentaires"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.additionalNotes.length}/500 caractères</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Obtenez un Rappel Gratuit Maintenant'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <i className="ri-check-circle-fill text-green-600 text-xl"></i>
                    <div>
                      <h4 className="font-semibold text-green-800">Demande Envoyée !</h4>
                      <p className="text-green-600 text-sm">Nous vous rappellerons dans les 30 minutes pendant les heures d'ouverture.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <i className="ri-error-warning-fill text-red-600 text-xl"></i>
                    <div>
                      <h4 className="font-semibold text-red-800">Échec de l'Envoi</h4>
                      <p className="text-red-600 text-sm">Veuillez réessayer ou nous appeler directement.</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
