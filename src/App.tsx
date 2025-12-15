import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Shield, Award, Users, Search } from 'lucide-react';

const ArtOfInvestigations = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState<'nl'|'fr'|'en'>('nl');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    privacy: false
  });

  const translations = {
    nl: {
      nav: {
        home: 'Home',
        services: 'Diensten',
        about: 'Over Ons',
        contact: 'Contact'
      },
      hero: {
        title: 'Discreet en doelgericht onderzoek',
        subtitle: 'Onderzoek vraagt helderheid, discretie en een feilloos oog voor detail. Het is een kunst — een subtiel spel van observatie, intuïtie en analytisch inzicht.',
        cta: 'Ontdek onze diensten'
      },
      services: {
        title: 'Onze Diensten',
        subtitle: 'Art of Investigations biedt een breed scala aan onderzoeken voor bedrijven, advocaten, verzekeraars en particulieren.',
        corporate: {
          title: 'Zakelijke & Corporate',
          description: 'Bescherm uw bedrijfsbelangen met professioneel onderzoek'
        },
        digital: {
          title: 'Digitale Onderzoeken',
          description: 'Moderne digitale opsporing en analyse'
        },
        private: {
          title: 'Particulieren & Privé',
          description: 'Discrete ondersteuning bij persoonlijke vraagstukken'
        }
      },
      about: {
        title: 'Over Ons',
        subtitle: 'Een scherp oog. Een heldere geest. Een integere aanpak.',
        description: 'Art of Investigations is een onafhankelijk onderzoeks- en recherchebureau dat complexe dossiers onderzoekt met analytische precisie en menselijke intuïtie. Vanuit Liedekerke werken we in heel België voor advocaten, bedrijven, verzekeraars en particulieren.',
        expertise: 'Expertise',
        discretion: 'Discretie',
        results: 'Resultaten'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Neem contact op voor een vertrouwelijke inschatting',
        form: {
          name: 'Naam',
          email: 'E-mailadres',
          phone: 'Telefoonnummer',
          company: 'Bedrijf',
          service: 'Dienst',
          message: 'Bericht',
          privacy: 'Ik ga akkoord met het privacy beleid',
          submit: 'Verzenden',
          selectService: 'Selecteer een dienst',
          emailOrPhone: 'E-mail of telefoon is verplicht'
        }
      },
      footer: {
        privacy: 'Privacy beleid',
        terms: 'Algemene voorwaarden'
      }
    },
    fr: {
      nav: {
        home: 'Accueil',
        services: 'Services',
        about: 'À Propos',
        contact: 'Contact'
      },
      hero: {
        title: 'Enquête discrète et ciblée',
        subtitle: 'Une enquête requiert clarté, discrétion et un œil infaillible pour les détails. C\'est un art — un jeu subtil d\'observation, d\'intuition et de perspicacité analytique.',
        cta: 'Découvrez nos services'
      },
      services: {
        title: 'Nos Services',
        subtitle: 'Art of Investigations offre une large gamme d\'enquêtes pour les entreprises, avocats, assureurs et particuliers.',
        corporate: {
          title: 'Entreprises & Corporate',
          description: 'Protégez vos intérêts commerciaux avec des enquêtes professionnelles'
        },
        digital: {
          title: 'Enquêtes Numériques',
          description: 'Détection et analyse numériques modernes'
        },
        private: {
          title: 'Particuliers & Privé',
          description: 'Support discret pour questions personnelles'
        }
      },
      about: {
        title: 'À Propos',
        subtitle: 'Un œil aiguisé. Un esprit clair. Une approche intègre.',
        description: 'Art of Investigations est un bureau d\'enquête indépendant qui examine des dossiers complexes avec précision analytique et intuition humaine. Depuis Liedekerke, nous travaillons dans toute la Belgique pour avocats, entreprises, assureurs et particuliers.',
        expertise: 'Expertise',
        discretion: 'Discrétion',
        results: 'Résultats'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Contactez-nous pour une estimation confidentielle',
        form: {
          name: 'Nom',
          email: 'Adresse e-mail',
          phone: 'Numéro de téléphone',
          company: 'Entreprise',
          service: 'Service',
          message: 'Message',
          privacy: 'J\'accepte la politique de confidentialité',
          submit: 'Envoyer',
          selectService: 'Sélectionnez un service',
          emailOrPhone: 'E-mail ou téléphone est requis'
        }
      },
      footer: {
        privacy: 'Politique de confidentialité',
        terms: 'Conditions générales'
      }
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About Us',
        contact: 'Contact'
      },
      hero: {
        title: 'Discreet and targeted investigation',
        subtitle: 'Investigation requires clarity, discretion and a flawless eye for detail. It is an art — a subtle play of observation, intuition and analytical insight.',
        cta: 'Discover our services'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Art of Investigations offers a wide range of investigations for businesses, lawyers, insurers and individuals.',
        corporate: {
          title: 'Business & Corporate',
          description: 'Protect your business interests with professional investigation'
        },
        digital: {
          title: 'Digital Investigations',
          description: 'Modern digital detection and analysis'
        },
        private: {
          title: 'Individuals & Private',
          description: 'Discreet support for personal matters'
        }
      },
      about: {
        title: 'About Us',
        subtitle: 'A sharp eye. A clear mind. An ethical approach.',
        description: 'Art of Investigations is an independent investigation agency that examines complex cases with analytical precision and human intuition. From Liedekerke, we work throughout Belgium for lawyers, businesses, insurers and individuals.',
        expertise: 'Expertise',
        discretion: 'Discretion',
        results: 'Results'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Contact us for a confidential assessment',
        form: {
          name: 'Name',
          email: 'Email address',
          phone: 'Phone number',
          company: 'Company',
          service: 'Service',
          message: 'Message',
          privacy: 'I agree to the privacy policy',
          submit: 'Submit',
          selectService: 'Select a service',
          emailOrPhone: 'Email or phone is required'
        }
      },
      footer: {
        privacy: 'Privacy policy',
        terms: 'Terms and conditions'
      }
    }
  };

  const services = {
    nl: {
      corporate: [
        'Bedrijfsrecherche',
        'Ziekteverzuim',
        'Contractbreuk',
        'Interne diefstal',
        'Bedrijfsspionage',
        'Screening & Due diligence',
        'Verzekeringsfraude',
        'Asset tracing',
        'Interne kwaliteitscontrole'
      ],
      digital: [
        'OSINT',
        'SOCMINT',
        'Digitale sporen',
        'Online fraude',
        'Reputatie & risicoanalyse',
        'Internationale tracering'
      ],
      private: [
        'Vermiste personen',
        'Schuldenaren',
        'Partner & Relatieonderzoek',
        'Erfeniskwesties',
        'Alimentatie',
        'Voorhuwelijksonderzoek',
        'Online belaging',
        'Stalking',
        'Vermogensdelicten'
      ]
    },
    fr: {
      corporate: [
        'Enquête d\'entreprise',
        'Absentéisme maladie',
        'Rupture de contrat',
        'Vol interne',
        'Espionnage industriel',
        'Screening & Due diligence',
        'Fraude d\'assurance',
        'Recherche d\'actifs',
        'Contrôle qualité interne'
      ],
      digital: [
        'OSINT',
        'SOCMINT',
        'Traces numériques',
        'Fraude en ligne',
        'Analyse réputation & risques',
        'Traçage international'
      ],
      private: [
        'Personnes disparues',
        'Débiteurs',
        'Enquête relationnelle',
        'Questions successorales',
        'Pension alimentaire',
        'Enquête prémaritale',
        'Harcèlement en ligne',
        'Harcèlement',
        'Délits patrimoniaux'
      ]
    },
    en: {
      corporate: [
        'Corporate investigation',
        'Sick leave verification',
        'Contract breach',
        'Internal theft',
        'Corporate espionage',
        'Screening & Due diligence',
        'Insurance fraud',
        'Asset tracing',
        'Internal quality control'
      ],
      digital: [
        'OSINT',
        'SOCMINT',
        'Digital traces',
        'Online fraud',
        'Reputation & risk analysis',
        'International tracing'
      ],
      private: [
        'Missing persons',
        'Debtors',
        'Partner & Relationship investigation',
        'Inheritance matters',
        'Alimony',
        'Pre-marital investigation',
        'Online harassment',
        'Stalking',
        'Property crimes'
      ]
    }
  };

  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.email && !formData.phone) {
      alert(t.contact.form.emailOrPhone);
      return;
    }
    if (!formData.privacy) {
      alert('Privacy policy agreement required');
      return;
    }
    alert('Formulier verzonden! (Demo versie)');
  };

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-700 to-yellow-900 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] rounded-full flex items-center justify-center shadow-2xl">
              <Search className="w-16 h-16 text-black" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#b9a55c] to-[#a98f3a] bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <button 
            onClick={() => setCurrentPage('services')}
            className="bg-gradient-to-r from-[#b9a55c] to-[#a98f3a] text-black px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.about.discretion}</h3>
              <p className="text-gray-600">Volledige vertrouwelijkheid en discrete werkwijze in elk onderzoek</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.about.expertise}</h3>
              <p className="text-gray-600">Erkend door FOD BiZa met jarenlange ervaring in complexe onderzoeken</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.about.results}</h3>
              <p className="text-gray-600">Juridisch bruikbaar bewijs en concrete resultaten voor uw dossier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">{t.services.title}</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">{t.services.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              onClick={() => setCurrentPage('corporate')}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#b9a55c] transition-colors">{t.services.corporate.title}</h3>
              <p className="text-gray-600 mb-6">{t.services.corporate.description}</p>
              <div className="text-[#b9a55c] font-semibold">Lees meer →</div>
            </div>
            
            <div 
              onClick={() => setCurrentPage('digital')}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#b9a55c] transition-colors">{t.services.digital.title}</h3>
              <p className="text-gray-600 mb-6">{t.services.digital.description}</p>
              <div className="text-[#b9a55c] font-semibold">Lees meer →</div>
            </div>
            
            <div 
              onClick={() => setCurrentPage('private')}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#b9a55c] transition-colors">{t.services.private.title}</h3>
              <p className="text-gray-600 mb-6">{t.services.private.description}</p>
              <div className="text-[#b9a55c] font-semibold">Lees meer →</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Transparante tarieven, onderzoek op maat</h2>
          <p className="text-xl text-gray-300 mb-8">
            Neem contact op voor een vertrouwelijke inschatting van uw dossier
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-gradient-to-r from-[#b9a55c] to-[#a98f3a] text-black px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t.nav.contact}
          </button>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">{t.services.title}</h1>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">{t.services.subtitle}</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            onClick={() => setCurrentPage('corporate')}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#b9a55c]">{t.services.corporate.title}</h2>
            <p className="text-gray-600 mb-6">{t.services.corporate.description}</p>
            <ul className="space-y-3">
              {services[language].corporate.map((service, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#b9a55c] mr-2">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 text-[#b9a55c] font-semibold hover:underline">Meer informatie →</button>
          </div>

          <div 
            onClick={() => setCurrentPage('digital')}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#b9a55c]">{t.services.digital.title}</h2>
            <p className="text-gray-600 mb-6">{t.services.digital.description}</p>
            <ul className="space-y-3">
              {services[language].digital.map((service, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#b9a55c] mr-2">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 text-[#b9a55c] font-semibold hover:underline">Meer informatie →</button>
          </div>

          <div 
            onClick={() => setCurrentPage('private')}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#b9a55c]">{t.services.private.title}</h2>
            <p className="text-gray-600 mb-6">{t.services.private.description}</p>
            <ul className="space-y-3">
              {services[language].private.map((service, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#b9a55c] mr-2">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 text-[#b9a55c] font-semibold hover:underline">Meer informatie →</button>
          </div>
        </div>
      </div>
    </div>
  );

  const ServiceDetailPage = ({ category, categoryKey }) => {
    const serviceDetails = {
      nl: {
        corporate: {
          items: [
            {
              title: 'Bedrijfsrecherche',
              description: 'Onderzoek naar interne incidenten zoals fraude, diefstal, belangenconflicten of contractuele overtredingen. AOI verzamelt feitelijk, objectief en juridisch bruikbaar bewijs voor interne beslissingen of gerechtelijke stappen.'
            },
            {
              title: 'Ziekteverzuim',
              description: 'Discreet verifiëren of ziekteverzuim terecht, rechtmatig en conform interne afspraken wordt toegepast. Observaties worden volgens de wettelijke regels uitgevoerd en zorgvuldig gedocumenteerd.'
            },
            {
              title: 'Contractbreuk',
              description: 'Opsporing en bewijsvoering bij overtreding van niet-concurrentiebedingen, vertrouwelijkheidsclausules of andere contractuele afspraken. Gericht op bescherming van bedrijfsbelangen.'
            },
            {
              title: 'Interne diefstal',
              description: 'Onderzoeken van vermoedens van diefstal van goederen, geld, materialen of vertrouwelijke informatie binnen een onderneming. AOI levert feitenmateriaal dat intern of juridisch kan worden gebruikt.'
            },
            {
              title: 'Bedrijfsspionage',
              description: 'Opsporen van ongeoorloofd delen van informatie, interne lekken of externe beïnvloeding. Gericht op het beschermen van bedrijfsgeheimen, intellectuele eigendom en strategische belangen.'
            },
            {
              title: 'Screening & Due diligence',
              description: 'Grondige verificatie van personen, partners en bedrijven via achtergrondonderzoek, reputatie-analyses en risico-inschatting. Cruciaal vóór aanwervingen, samenwerkingen of investeringsbeslissingen.'
            },
            {
              title: 'Verzekeringsfraude',
              description: 'Onderzoek naar onterechte schadeclaims, fictieve incidenten of misleidende verklaringen. AOI documenteert de feiten en levert rapporten geschikt voor verzekeraars en juridische procedures.'
            },
            {
              title: 'Asset tracing',
              description: 'Opsporen van voertuigen, materialen, apparatuur of andere bedrijfsgoederen die verdwenen, verduisterd of onvindbaar zijn. Zowel nationaal als internationaal.'
            },
            {
              title: 'Interne kwaliteitscontrole',
              description: 'Mystery shopping en interne controles brengen kwaliteit, naleving en klantbeleving objectief in kaart. AOI observeert discreet en volgens vooraf bepaalde criteria.'
            }
          ]
        },
        digital: {
          items: [
            {
              title: 'OSINT',
              description: 'Onderzoek via open bronnen, digitale sporen, databanken en online informatie om personen, netwerken, locaties of goederen in kaart te brengen. Efficiënt, discreet en volledig legaal.'
            },
            {
              title: 'SOCMINT',
              description: 'Analyse van informatie uit sociale media om gedrag, connecties, risico\'s of misleiding te detecteren. Een belangrijk onderdeel van moderne digitale opsporing.'
            },
            {
              title: 'Digitale sporen',
              description: 'Opsporing en analyse van online activiteiten, accounts, metadata en digitale aanwijzingen die inzicht geven in gedrag, locatie of identiteit.'
            },
            {
              title: 'Online fraude',
              description: 'Onderzoek naar oplichting via internet, phishing, identiteitsmisbruik, valse profielen of financiële digitale fraude. AOI onderzoekt de herkomst en verzamelt bruikbare bewijselementen.'
            },
            {
              title: 'Reputatie & risicoanalyse',
              description: 'Digitale screening van individu of bedrijf om reputatierisico\'s, misleiding, belangenconflicten of frauduleuze signalen in een vroeg stadium te ontdekken.'
            },
            {
              title: 'Internationale tracering',
              description: 'Opsporen van personen, schuldenaren of goederen over de grens via digitale middelen, internationale bronnen en gerichte informatieanalyse.'
            }
          ]
        },
        private: {
          items: [
            {
              title: 'Vermiste personen',
              description: 'Onderzoek naar de verblijfplaats of bewegingen van een vermiste volwassene of jongere. AOI werkt zorgvuldig, discreet en met respect voor alle betrokkenen.'
            },
            {
              title: 'Schuldenaren',
              description: 'Opsporen van personen die zich onvindbaar houden bij openstaande betalingen, verplichtingen of juridische procedures. Gericht op correcte identiteits- en locatievaststelling.'
            },
            {
              title: 'Partner & Relatieonderzoek',
              description: 'Onderzoek bij vermoedens van (on)trouw, misleiding, verborgen contacten of andere relatiegerelateerde bezorgdheden. Feitelijke observaties, neutraal en discreet.'
            },
            {
              title: 'Erfeniskwesties',
              description: 'Ondersteuning bij nalatenschapsdossiers, zoals opsporing van erfgenamen, feitenverificatie of het reconstrueren van relevante informatie in familiale situaties.'
            },
            {
              title: 'Alimentatie',
              description: 'Bewijs verzamelen bij vermoedens van onjuiste informatie, samenwoonfraude of gewijzigde omstandigheden die impact hebben op alimentatiebeslissingen.'
            },
            {
              title: 'Voorhuwelijksonderzoek',
              description: 'Discrete verificatie van achtergrond, gedrag, financiële situatie of mogelijke risico\'s bij een toekomstige partner. Gericht op zekerheid en gemoedsrust.'
            },
            {
              title: 'Online belaging',
              description: 'Onderzoek naar digitale intimidatie, online bedreigingen of herhaald ongewenst contact. AOI brengt digitale sporen, communicatiepatronen en betrokken profielen discreet en feitelijk in kaart.'
            },
            {
              title: 'Stalking',
              description: 'Bewijsmateriaal verzamelen bij intimidatie, belaging of ongewenst contact. AOI documenteert feiten voor aangifte, juridische stappen of veiligheidsadvies.'
            },
            {
              title: 'Vermogensdelicten',
              description: 'Onderzoek naar diefstal binnen de privéomgeving of kleine kring. AOI verzamelt feitelijke vaststellingen en relevante informatie ter ondersteuning van aangifte of juridische stappen.'
            }
          ]
        }
      },
      fr: {

      },
      en: {

      }
    };
  const details = serviceDetails[language][categoryKey];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={() => setCurrentPage('services')}
          className="text-[#b9a55c] mb-8 hover:underline flex items-center"
        >
          ← Terug naar diensten
        </button>
        
        <h1 className="text-5xl font-bold mb-8">{category}</h1>
        
        <div className="space-y-8">
          {details.items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#b9a55c]">{item.title}</h2>
              <p className="text-gray-700 mb-6">{item.description}</p>
              <button 
                onClick={() => {
                  setFormData({...formData, service: item.title});
                  setCurrentPage('contact');
                }}
                className="bg-gradient-to-r from-[#b9a55c] to-[#a98f3a] text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Neem contact op
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
<div className="py-20 bg-gray-50 min-h-screen">
<div className="max-w-4xl mx-auto px-6">
<h1 className="text-5xl font-bold text-center mb-4">{t.about.title}</h1>
<p className="text-2xl text-center text-gray-600 mb-12">{t.about.subtitle}</p>
    <div className="bg-white p-12 rounded-lg shadow-lg mb-12">
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        {t.about.description}
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Wij handelen discreet, wettelijk correct en met respect voor de gevoeligheid van elke situatie — altijd met het doel betrouwbare informatie te leveren waarop u verder kunt bouwen.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <Shield className="w-16 h-16 mx-auto mb-4 text-[#b9a55c]" />
        <h3 className="text-xl font-bold mb-3">{t.about.discretion}</h3>
        <p className="text-gray-600">Volledige vertrouwelijkheid in elk onderzoek</p>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <Award className="w-16 h-16 mx-auto mb-4 text-[#b9a55c]" />
        <h3 className="text-xl font-bold mb-3">{t.about.expertise}</h3>
        <p className="text-gray-600">Erkend door FOD BiZa 14.2073.11</p>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <Users className="w-16 h-16 mx-auto mb-4 text-[#b9a55c]" />
        <h3 className="text-xl font-bold mb-3">{t.about.results}</h3>
        <p className="text-gray-600">Juridisch bruikbaar bewijs</p>
      </div>
    </div>

    <div className="bg-gradient-to-r from-black to-gray-900 text-white p-12 rounded-lg shadow-2xl">
      <h2 className="text-3xl font-bold mb-6">Onze werkwijze</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-black">
            1
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Intake & Analyse</h3>
            <p className="text-gray-300">Vertrouwelijk gesprek om uw situatie en doelstellingen helder in kaart te brengen</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-black">
            2
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Onderzoek & Observatie</h3>
            <p className="text-gray-300">Discreet en professioneel onderzoek volgens wettelijke kaders en best practices</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-black">
            3
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Rapportage & Advies</h3>
            <p className="text-gray-300">Duidelijk rapport met feitelijke bevindingen en juridisch bruikbaar bewijs</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

const ContactPage = () => (
<div className="py-20 bg-gray-50 min-h-screen">
<div className="max-w-4xl mx-auto px-6">
<h1 className="text-5xl font-bold text-center mb-4">{t.contact.title}</h1>
<p className="text-center text-gray-600 mb-12 text-lg">{t.contact.subtitle}</p>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-6">Contactgegevens</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-[#b9a55c] mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:contact@artofinvestigations.be" className="text-gray-600 hover:text-[#b9a55c]">
                  contact@artofinvestigations.be
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-[#b9a55c] mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Locatie</p>
                <p className="text-gray-600">Liedekerke, België</p>
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="w-6 h-6 text-[#b9a55c] mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Erkenning</p>
                <p className="text-gray-600">FOD BiZa 14.2073.11</p>
                <p className="text-gray-600">KBO BE1020510274</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-black to-gray-900 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Transparante tarieven</h3>
          <p className="text-gray-300">
            De kostprijs van een onderzoek varieert afhankelijk van de aard van het dossier, 
            het benodigde tijdsverbruik en de inzet van gespecialiseerde middelen. 
            Elk dossier wordt afzonderlijk bekeken voor een passend voorstel.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Contactformulier</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">{t.contact.form.name} *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">{t.contact.form.email}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">{t.contact.form.phone}</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">{t.contact.form.company}</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">{t.contact.form.service}</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
            >
              <option value="">{t.contact.form.selectService}</option>
              <optgroup label={t.services.corporate.title}>
                {services[language].corporate.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </optgroup>
              <optgroup label={t.services.digital.title}>
                {services[language].digital.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </optgroup>
              <optgroup label={t.services.private.title}>
                {services[language].private.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </optgroup>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">{t.contact.form.message}</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
            ></textarea>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              required
              checked={formData.privacy}
              onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
              className="mt-1 mr-2"
            />
            <label className="text-sm">
              {t.contact.form.privacy} *
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#b9a55c] to-[#a98f3a] text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            {t.contact.form.submit}
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
);

return (
<div className="min-h-screen bg-white">
{/* Navigation */}
<nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
<div className="max-w-6xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div
onClick={() => setCurrentPage('home')}
className="flex items-center space-x-3 cursor-pointer"
>
<div className="w-12 h-12 bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] rounded-full flex items-center justify-center">
<Search className="w-6 h-6 text-black" />
</div>
<span className="text-xl font-bold">ART OF INVESTIGATIONS</span>
</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => setCurrentPage('home')} className="hover:text-[#b9a55c] transition-colors">
            {t.nav.home}
          </button>
          <button onClick={() => setCurrentPage('services')} className="hover:text-[#b9a55c] transition-colors">
            {t.nav.services}
          </button>
          <button onClick={() => setCurrentPage('about')} className="hover:text-[#b9a55c] transition-colors">
            {t.nav.about}
          </button>
          <button onClick={() => setCurrentPage('contact')} className="hover:text-[#b9a55c] transition-colors">
            {t.nav.contact}
          </button>
          
          <div className="flex items-center space-x-2 border-l border-gray-700 pl-6">
            <button 
              onClick={() => setLanguage('nl')}
              className={`px-2 py-1 rounded ${language === 'nl' ? 'bg-[#b9a55c] text-black' : 'hover:text-[#b9a55c]'}`}
            >
              NL
            </button>
            <button 
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 rounded ${language === 'fr' ? 'bg-[#b9a55c] text-black' : 'hover:text-[#b9a55c]'}`}
            >
              FR
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded ${language === 'en' ? 'bg-[#b9a55c] text-black' : 'hover:text-[#b9a55c]'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4">
          <button 
            onClick={() => {setCurrentPage('home'); setMobileMenuOpen(false);}}
            className="block w-full text-left hover:text-[#b9a55c]"
          >
            {t.nav.home}
          </button>
          <button 
            onClick={() => {setCurrentPage('services'); setMobileMenuOpen(false);}}
            className="block w-full text-left hover:text-[#b9a55c]"
          >
            {t.nav.services}
          </button>
          <button 
            onClick={() => {setCurrentPage('about'); setMobileMenuOpen(false);}}
            className="block w-full text-left hover:text-[#b9a55c]"
          >
            {t.nav.about}
          </button>
          <button 
            onClick={() => {setCurrentPage('contact'); setMobileMenuOpen(false);}}
            className="block w-full text-left hover:text-[#b9a55c]"
          >
            {t.nav.contact}
          </button>
          
          <div className="flex space-x-2 pt-4 border-t border-gray-700">
            <button 
              onClick={() => setLanguage('nl')}
              className={`px-3 py-1 rounded ${language === 'nl' ? 'bg-[#b9a55c] text-black' : 'border border-white'}`}
            >
              NL
            </button>
            <button 
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded ${language === 'fr' ? 'bg-[#b9a55c] text-black' : 'border border-white'}`}
            >
              FR
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded ${language === 'en' ? 'bg-[#b9a55c] text-black' : 'border border-white'}`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </div>
  </nav>

  {/* Page Content */}
  {currentPage === 'home' && <HomePage />}
  {currentPage === 'services' && <ServicesPage />}
  {currentPage === 'corporate' && <ServiceDetailPage category={t.services.corporate.title} categoryKey="corporate" />}
  {currentPage === 'digital' && <ServiceDetailPage category={t.services.digital.title} categoryKey="digital" />}
  {currentPage === 'private' && <ServiceDetailPage category={t.services.private.title} categoryKey="private" />}
  {currentPage === 'about' && <AboutPage />}
  {currentPage === 'contact' && <ContactPage />}

  {/* Footer */}
  <footer className="bg-black text-white py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] rounded-full flex items-center justify-center">
              <Search className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold">AOI</span>
          </div>
          <p className="text-gray-400 text-sm">
            Discreet en doelgericht onderzoek voor bedrijven, advocaten, verzekeraars en particulieren.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm mb-2">contact@artofinvestigations.be</p>
          <p className="text-gray-400 text-sm">Liedekerke, België</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Informatie</h4>
          <p className="text-gray-400 text-sm mb-2">KBO BE1020510274</p>
          <p className="text-gray-400 text-sm">FOD BiZa 14.2073.11</p>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Art of Investigations</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#b9a55c]">{t.footer.privacy}</a>
          <a href="#" className="hover:text-[#b9a55c]">{t.footer.terms}</a>
        </div>
      </div>
    </div>
  </footer>
</div>
);

export default ArtOfInvestigations;