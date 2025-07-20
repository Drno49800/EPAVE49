
'use client';

export default function CoverageArea() {
  const areas = [
    'Allonnes', 'Angers', 'Angrie', 'Antoigné', 'Armaillé', 'Artannes-sur-Thouet',
    'Aubigné-sur-Layon', 'Avrillé', 'Baracé', 'Baugé-en-Anjou', 'Beaucouzé',
    'Beaufort-en-Anjou', 'Beaulieu-sur-Layon', 'Beaupréau-en-Mauges', 'Bécon-les-Granits',
    'Bégrolles-en-Mauges', 'Béhuard', 'Bellevigne-en-Layon', 'Bellevigne-les-Châteaux',
    'Blaison-Saint-Sulpice', 'Blou', 'Bouchemaine', 'Bouillé-Ménard', 'Bourg-l\'Évêque',
    'Brain-sur-Allonnes', 'Briollay', 'Brissac Loire Aubance', 'Brossay', 'Candé',
    'Cantenay-Épinard', 'Carbay', 'Cernusson', 'Challain-la-Potherie', 'Chalonnes-sur-Loire',
    'Chambellay', 'Champtocé-sur-Loire', 'Chanteloup-les-Bois', 'Chaudefonds-sur-Layon',
    'Chazé-sur-Argos', 'Cheffes', 'Chemillé-en-Anjou', 'Chenillé-Champteussé', 'Cholet',
    'Cizay-la-Madeleine', 'Cléré-sur-Layon', 'Cornillé-les-Caves', 'Coron', 'Corzé',
    'Courchamps', 'Courléon', 'Denée', 'Dénezé-sous-Doué', 'Distré', 'Doué-en-Anjou',
    'Durtal', 'Écouflant', 'Écuillé', 'Épieds', 'Erdre-en-Anjou', 'Étriché', 'Feneu',
    'Fontevraud-l\'Abbaye', 'Gennes-Val-de-Loire', 'Grez-Neuville', 'Huillé-Lézigné',
    'Ingrandes-Le Fresne sur Loire', 'Jarzé Villages', 'Juvardeil', 'La Breille-les-Pins',
    'La Chapelle-Saint-Laud', 'La Jaille-Yvon', 'La Lande-Chasles', 'La Ménitré',
    'La Pellerine', 'La Plaine', 'La Possonnière', 'La Romagne', 'La Séguinière',
    'La Tessoualle', 'Le Coudray-Macouard', 'Le Lion-d\'Angers', 'Le May-sur-Èvre',
    'Le Plessis-Grammoire', 'Le Puy-Notre-Dame', 'Les Bois d\'Anjou', 'Les Cerqueux',
    'Les Garennes sur Loire', 'Les Hauts-d\'Anjou', 'Les Ponts-de-Cé', 'Les Rairies',
    'Les Ulmes', 'Loiré', 'Loire-Authion', 'Longué-Jumelles', 'Longuenée-en-Anjou',
    'Louresse-Rochemenier', 'Lys-Haut-Layon', 'Marcé', 'Mauges-sur-Loire', 'Maulévrier',
    'Mazé-Milon', 'Mazières-en-Mauges', 'Miré', 'Montigné-lès-Rairies', 'Montilliers',
    'Montreuil-Bellay', 'Montreuil-Juigné', 'Montreuil-sur-Loir', 'Montreuil-sur-Maine',
    'Montrevault-sur-Èvre', 'Montsoreau', 'Morannes sur Sarthe-Daumeray', 'Mouliherne',
    'Mozé-sur-Louet', 'Mûrs-Erigné', 'Neuillé', 'Noyant-Villages', 'Nuaillé',
    'Ombrée d\'Anjou', 'Orée d\'Anjou', 'Parnay', 'Passavant-sur-Layon', 'Rives-du-Loir-en-Anjou',
    'Rochefort-sur-Loire', 'Rou-Marson', 'Saint-Augustin-des-Bois', 'Saint-Barthélemy-d\'Anjou',
    'Saint-Christophe-du-Bois', 'Saint-Clément-de-la-Place', 'Saint-Clément-des-Levées',
    'Segré-en-Anjou Bleu', 'Seiches-sur-le-Loir', 'Sermaise', 'Sèvremoine', 'Somloire',
    'Soulaines-sur-Aubance', 'Soulaire-et-Bourg', 'Souzay-Champigny', 'Terranjou',
    'Thorigné-d\'Anjou', 'Tiercé', 'Toutlemonde', 'Trélazé', 'Trémentines', 'TRELAZE',
    'Tuffalun', 'Turquant', 'Val d\'Erdre-Auxence', 'Val-du-Layon', 'Varennes-sur-Loire',
    'Varrains', 'Vaudelnay', 'Vernantes', 'Vernoil-le-Fourrier', 'Verrie',
    'Verrières-en-Anjou', 'Vezins', 'Villebernier', 'Vivy', 'Yzernay'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📍 Zones que Nous Couvrons
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous opérons dans toutes les communes du Maine-et-Loire et régions avoisinantes. 
            Pas sûr que nous desservions votre région ? Contactez-nous !
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-12">
          {areas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg p-3 shadow-md text-center">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-map-pin-fill text-blue-600 text-sm"></i>
              </div>
              <span className="font-semibold text-gray-900 text-sm">{area}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <i className="ri-map-2-line text-green-600 text-2xl"></i>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900">
                Couverture Complète du Maine-et-Loire
              </h3>
              <p className="text-gray-600">
                Service dans plus de 130+ communes
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-6">
            Notre service couvre l'intégralité du département du Maine-et-Loire. 
            Que vous soyez dans une grande ville ou une petite commune, 
            nous pouvons venir récupérer votre véhicule gratuitement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Vérifier Ma Zone
            </button>
            <a 
              href="tel:+33123456789" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Nous Appeler Directement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
