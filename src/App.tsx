import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import logo from "./assets/logo.svg";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import ServiceDetailPage from "./components/ServiceDetailPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

const ArtOfInvestigations = () => {
  const [language, setLanguage] = useState<"nl" | "fr" | "en">("nl");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    privacy: false,
  });

  const translations = {
    nl: {
      nav: {
        home: "Home",
        services: "Diensten",
        about: "Over Ons",
        contact: "Contact",
      },
      hero: {
        title: "Discreet en doelgericht onderzoek",
        subtitle:
          "Onderzoek vraagt helderheid, discretie en een feilloos oog voor detail. Het is een kunst — een subtiel spel van observatie, intuïtie en analytisch inzicht.",
        cta: "Ontdek onze diensten",
      },
      usp: {
        discretion:
          "Volledige vertrouwelijkheid en discrete werkwijze in elk onderzoek",
        expertise:
          "Erkend door FOD BiZa met jarenlange ervaring in complexe onderzoeken",
        results:
          "Juridisch bruikbaar bewijs en concrete resultaten voor uw dossier",
      },
      services: {
        title: "Onze Diensten",
        subtitle:
          "Art of Investigations biedt een breed scala aan onderzoeken voor bedrijven, advocaten, verzekeraars en particulieren.",
        corporate: {
          title: "Zakelijke & Corporate",
          description:
            "Bescherm uw bedrijfsbelangen met professioneel onderzoek",
        },
        digital: {
          title: "Digitale Onderzoeken",
          description: "Moderne digitale opsporing en analyse",
        },
        private: {
          title: "Particulieren & Privé",
          description: "Discrete ondersteuning bij persoonlijke vraagstukken",
        },
        readMore: "Lees meer →",
        moreInfo: "Meer informatie →",
        backToServices: "← Terug naar diensten",
        contactUs: "Neem contact op",
      },
      cta: {
        title: "Transparante tarieven, onderzoek op maat",
        subtitle:
          "Neem contact op voor een vertrouwelijke inschatting van uw dossier",
      },
      about: {
        title: "Over Ons",
        subtitle: "Een scherp oog. Een heldere geest. Een integere aanpak.",
        description:
          "Art of Investigations is een onafhankelijk onderzoeks- en recherchebureau dat complexe dossiers onderzoekt met analytische precisie en menselijke intuïtie. Vanuit Liedekerke werken we in heel België voor advocaten, bedrijven, verzekeraars en particulieren.",
        extra:
          "Wij handelen discreet, wettelijk correct en met respect voor de gevoeligheid van elke situatie — altijd met het doel betrouwbare informatie te leveren waarop u verder kunt bouwen.",
        discretion: "Discretie",
        discretionText: "Volledige vertrouwelijkheid in elk onderzoek",
        expertise: "Expertise",
        expertiseText: "Erkend door FOD BiZa 14.2073.11",
        results: "Resultaten",
        resultsText: "Juridisch bruikbaar bewijs",
        method: "Onze werkwijze",
        step1: "Intake & Analyse",
        step1Text:
          "Vertrouwelijk gesprek om uw situatie en doelstellingen helder in kaart te brengen",
        step2: "Onderzoek & Observatie",
        step2Text:
          "Discreet en professioneel onderzoek volgens wettelijke kaders en best practices",
        step3: "Rapportage & Advies",
        step3Text:
          "Duidelijk rapport met feitelijke bevindingen en juridisch bruikbaar bewijs",
      },
      contact: {
        title: "Contact",
        subtitle: "Neem contact op voor een vertrouwelijke inschatting",
        details: "Contactgegevens",
        email: "Email",
        location: "Locatie",
        locationText: "Liedekerke, België",
        recognition: "Erkenning",
        recognitionText1: "FOD BiZa 14.2073.11",
        recognitionText2: "KBO BE1020510274",
        rates: "Transparante tarieven",
        ratesText:
          "De kostprijs van een onderzoek varieert afhankelijk van de aard van het dossier, het benodigde tijdsverbruik en de inzet van gespecialiseerde middelen. Elk dossier wordt afzonderlijk bekeken voor een passend voorstel.",
        form: {
          title: "Contactformulier",
          name: "Naam",
          email: "E-mailadres",
          phone: "Telefoonnummer",
          company: "Bedrijf",
          service: "Dienst",
          message: "Bericht",
          privacy: "Ik ga akkoord met het privacy beleid",
          submit: "Verzenden",
          selectService: "Selecteer een dienst",
          emailOrPhone: "E-mail of telefoon is verplicht",
          privacyRequired: "Privacy policy akkoord is verplicht",
          formSent: "Formulier verzonden! (Demo versie)",
        },
      },
      footer: {
        tagline:
          "Discreet en doelgericht onderzoek voor bedrijven, advocaten, verzekeraars en particulieren.",
        contact: "Contact",
        info: "Informatie",
        copyright: "© 2024 Art of Investigations",
        privacy: "Privacy beleid",
        terms: "Algemene voorwaarden",
      },
      serviceDetails: {
        corporate: [
          {
            title: "Bedrijfsrecherche",
            description:
              "Onderzoek naar interne incidenten zoals fraude, diefstal, belangenconflicten of contractuele overtredingen. AOI verzamelt feitelijk, objectief en juridisch bruikbaar bewijs voor interne beslissingen of gerechtelijke stappen.",
          },
          {
            title: "Ziekteverzuim",
            description:
              "Discreet verifiëren of ziekteverzuim terecht, rechtmatig en conform interne afspraken wordt toegepast. Observaties worden volgens de wettelijke regels uitgevoerd en zorgvuldig gedocumenteerd.",
          },
          {
            title: "Contractbreuk",
            description:
              "Opsporing en bewijsvoering bij overtreding van niet-concurrentiebedingen, vertrouwelijkheidsclausules of andere contractuele afspraken. Gericht op bescherming van bedrijfsbelangen.",
          },
          {
            title: "Interne diefstal",
            description:
              "Onderzoeken van vermoedens van diefstal van goederen, geld, materialen of vertrouwelijke informatie binnen een onderneming. AOI levert feitenmateriaal dat intern of juridisch kan worden gebruikt.",
          },
          {
            title: "Bedrijfsspionage",
            description:
              "Opsporen van ongeoorloofd delen van informatie, interne lekken of externe beïnvloeding. Gericht op het beschermen van bedrijfsgeheimen, intellectuele eigendom en strategische belangen.",
          },
          {
            title: "Screening & Due diligence",
            description:
              "Grondige verificatie van personen, partners en bedrijven via achtergrondonderzoek, reputatie-analyses en risico-inschatting. Cruciaal vóór aanwervingen, samenwerkingen of investeringsbeslissingen.",
          },
          {
            title: "Verzekeringsfraude",
            description:
              "Onderzoek naar onterechte schadeclaims, fictieve incidenten of misleidende verklaringen. AOI documenteert de feiten en levert rapporten geschikt voor verzekeraars en juridische procedures.",
          },
          {
            title: "Asset tracing",
            description:
              "Opsporen van voertuigen, materialen, apparatuur of andere bedrijfsgoederen die verdwenen, verduisterd of onvindbaar zijn. Zowel nationaal als internationaal.",
          },
          {
            title: "Interne kwaliteitscontrole",
            description:
              "Mystery shopping en interne controles brengen kwaliteit, naleving en klantbeleving objectief in kaart. AOI observeert discreet en volgens vooraf bepaalde criteria.",
          },
        ],
        digital: [
          {
            title: "OSINT",
            description:
              "Onderzoek via open bronnen, digitale sporen, databanken en online informatie om personen, netwerken, locaties of goederen in kaart te brengen. Efficiënt, discreet en volledig legaal.",
          },
          {
            title: "SOCMINT",
            description:
              "Analyse van informatie uit sociale media om gedrag, connecties, risico's of misleiding te detecteren. Een belangrijk onderdeel van moderne digitale opsporing.",
          },
          {
            title: "Digitale sporen",
            description:
              "Opsporing en analyse van online activiteiten, accounts, metadata en digitale aanwijzingen die inzicht geven in gedrag, locatie of identiteit.",
          },
          {
            title: "Online fraude",
            description:
              "Onderzoek naar oplichting via internet, phishing, identiteitsmisbruik, valse profielen of financiële digitale fraude. AOI onderzoekt de herkomst en verzamelt bruikbare bewijselementen.",
          },
          {
            title: "Reputatie & risicoanalyse",
            description:
              "Digitale screening van individu of bedrijf om reputatierisico's, misleiding, belangenconflicten of frauduleuze signalen in een vroeg stadium te ontdekken.",
          },
          {
            title: "Internationale tracering",
            description:
              "Opsporen van personen, schuldenaren of goederen over de grens via digitale middelen, internationale bronnen en gerichte informatieanalyse.",
          },
        ],
        private: [
          {
            title: "Vermiste personen",
            description:
              "Onderzoek naar de verblijfplaats of bewegingen van een vermiste volwassene of jongere. AOI werkt zorgvuldig, discreet en met respect voor alle betrokkenen.",
          },
          {
            title: "Schuldenaren",
            description:
              "Opsporen van personen die zich onvindbaar houden bij openstaande betalingen, verplichtingen of juridische procedures. Gericht op correcte identiteits- en locatievaststelling.",
          },
          {
            title: "Partner & Relatieonderzoek",
            description:
              "Onderzoek bij vermoedens van (on)trouw, misleiding, verborgen contacten of andere relatiegerelateerde bezorgdheden. Feitelijke observaties, neutraal en discreet.",
          },
          {
            title: "Erfeniskwesties",
            description:
              "Ondersteuning bij nalatenschapsdossiers, zoals opsporing van erfgenamen, feitenverificatie of het reconstrueren van relevante informatie in familiale situaties.",
          },
          {
            title: "Alimentatie",
            description:
              "Bewijs verzamelen bij vermoedens van onjuiste informatie, samenwoonfraude of gewijzigde omstandigheden die impact hebben op alimentatiebeslissingen.",
          },
          {
            title: "Voorhuwelijksonderzoek",
            description:
              "Discrete verificatie van achtergrond, gedrag, financiële situatie of mogelijke risico's bij een toekomstige partner. Gericht op zekerheid en gemoedsrust.",
          },
          {
            title: "Online belaging",
            description:
              "Onderzoek naar digitale intimidatie, online bedreigingen of herhaald ongewenst contact. AOI brengt digitale sporen, communicatiepatronen en betrokken profielen discreet en feitelijk in kaart.",
          },
          {
            title: "Stalking",
            description:
              "Bewijsmateriaal verzamelen bij intimidatie, belaging of ongewenst contact. AOI documenteert feiten voor aangifte, juridische stappen of veiligheidsadvies.",
          },
          {
            title: "Vermogensdelicten",
            description:
              "Onderzoek naar diefstal binnen de privéomgeving of kleine kring. AOI verzamelt feitelijke vaststellingen en relevante informatie ter ondersteuning van aangifte of juridische stappen.",
          },
        ],
      },
    },
    fr: {
      nav: {
        home: "Accueil",
        services: "Services",
        about: "À Propos",
        contact: "Contact",
      },
      hero: {
        title: "Enquête discrète et ciblée",
        subtitle:
          "Une enquête requiert clarté, discrétion et un œil infaillible pour les détails. C'est un art — un jeu subtil d'observation, d'intuition et de perspicacité analytique.",
        cta: "Découvrez nos services",
      },
      usp: {
        discretion:
          "Confidentialité totale et approche discrète dans chaque enquête",
        expertise:
          "Agréé par le SPF Intérieur avec des années d'expérience dans des enquêtes complexes",
        results:
          "Preuves juridiquement valables et résultats concrets pour votre dossier",
      },
      services: {
        title: "Nos Services",
        subtitle:
          "Art of Investigations offre une large gamme d'enquêtes pour les entreprises, avocats, assureurs et particuliers.",
        corporate: {
          title: "Entreprises & Corporate",
          description:
            "Protégez vos intérêts commerciaux avec des enquêtes professionnelles",
        },
        digital: {
          title: "Enquêtes Numériques",
          description: "Détection et analyse numériques modernes",
        },
        private: {
          title: "Particuliers & Privé",
          description: "Support discret pour questions personnelles",
        },
        readMore: "En savoir plus →",
        moreInfo: "Plus d'informations →",
        backToServices: "← Retour aux services",
        contactUs: "Contactez-nous",
      },
      cta: {
        title: "Tarifs transparents, enquêtes sur mesure",
        subtitle:
          "Contactez-nous pour une estimation confidentielle de votre dossier",
      },
      about: {
        title: "À Propos",
        subtitle: "Un œil aiguisé. Un esprit clair. Une approche intègre.",
        description:
          "Art of Investigations est un bureau d'enquête indépendant qui examine des dossiers complexes avec précision analytique et intuition humaine. Depuis Liedekerke, nous travaillons dans toute la Belgique pour avocats, entreprises, assureurs et particuliers.",
        extra:
          "Nous agissons avec discrétion, en conformité avec la loi et dans le respect de la sensibilité de chaque situation — toujours dans le but de fournir des informations fiables sur lesquelles vous pouvez vous appuyer.",
        discretion: "Discrétion",
        discretionText: "Confidentialité totale dans chaque enquête",
        expertise: "Expertise",
        expertiseText: "Agréé par le SPF Intérieur 14.2073.11",
        results: "Résultats",
        resultsText: "Preuves juridiquement valables",
        method: "Notre méthode de travail",
        step1: "Prise de contact & Analyse",
        step1Text:
          "Entretien confidentiel pour clarifier votre situation et vos objectifs",
        step2: "Enquête & Observation",
        step2Text:
          "Enquête discrète et professionnelle dans le respect des cadres légaux et des meilleures pratiques",
        step3: "Rapport & Conseil",
        step3Text:
          "Rapport clair avec des conclusions factuelles et des preuves juridiquement valables",
      },
      contact: {
        title: "Contact",
        subtitle: "Contactez-nous pour une estimation confidentielle",
        details: "Coordonnées",
        email: "Email",
        location: "Lieu",
        locationText: "Liedekerke, Belgique",
        recognition: "Agrégation",
        recognitionText1: "SPF Intérieur 14.2073.11",
        recognitionText2: "BCE BE1020510274",
        rates: "Tarifs transparents",
        ratesText:
          "Le coût d'une enquête varie en fonction de la nature du dossier, du temps nécessaire et de l'utilisation de moyens spécialisés. Chaque dossier est examiné individuellement pour une proposition adaptée.",
        form: {
          title: "Formulaire de contact",
          name: "Nom",
          email: "Adresse e-mail",
          phone: "Numéro de téléphone",
          company: "Entreprise",
          service: "Service",
          message: "Message",
          privacy: "J'accepte la politique de confidentialité",
          submit: "Envoyer",
          selectService: "Sélectionnez un service",
          emailOrPhone: "E-mail ou téléphone est requis",
          privacyRequired:
            "L'accord de la politique de confidentialité est requis",
          formSent: "Formulaire envoyé ! (Version démo)",
        },
      },
      footer: {
        tagline:
          "Enquête discrète et ciblée pour entreprises, avocats, assureurs et particuliers.",
        contact: "Contact",
        info: "Informations",
        copyright: "© 2024 Art of Investigations",
        privacy: "Politique de confidentialité",
        terms: "Conditions générales",
      },
      serviceDetails: {
        corporate: [
          {
            title: "Enquête d'entreprise",
            description:
              "Enquête sur les incidents internes tels que la fraude, le vol, les conflits d'intérêts ou les violations contractuelles. AOI recueille des preuves factuelles, objectives et juridiquement valables pour les décisions internes ou les poursuites judiciaires.",
          },
          {
            title: "Absentéisme maladie",
            description:
              "Vérification discrète de la légitimité de l'absentéisme pour maladie et de sa conformité avec les accords internes. Les observations sont menées dans le respect des règles légales et soigneusement documentées.",
          },
          {
            title: "Rupture de contrat",
            description:
              "Détection et collecte de preuves en cas de violation de clauses de non-concurrence, de confidentialité ou d'autres accords contractuels. Visant à protéger les intérêts de l'entreprise.",
          },
          {
            title: "Vol interne",
            description:
              "Enquête sur les soupçons de vol de biens, d'argent, de matériel ou d'informations confidentielles au sein d'une entreprise. AOI fournit des preuves factuelles pouvant être utilisées en interne ou en justice.",
          },
          {
            title: "Espionnage industriel",
            description:
              "Détection du partage non autorisé d'informations, des fuites internes ou de l'influence externe. Visant à protéger les secrets commerciaux, la propriété intellectuelle et les intérêts stratégiques.",
          },
          {
            title: "Screening & Due diligence",
            description:
              "Vérification approfondie des personnes, partenaires et entreprises par le biais d'enquêtes de fond, d'analyses de réputation et d'évaluations des risques. Crucial avant les embauches, les collaborations ou les décisions d'investissement.",
          },
          {
            title: "Fraude à l'assurance",
            description:
              "Enquête sur les demandes d'indemnisation injustifiées, les incidents fictifs ou les déclarations trompeuses. AOI documente les faits et fournit des rapports adaptés aux assureurs et aux procédures judiciaires.",
          },
          {
            title: "Recherche d'actifs",
            description:
              "Localisation de véhicules, de matériel, d'équipements ou d'autres biens d'entreprise disparus, détournés ou introuvables. Tant au niveau national qu'international.",
          },
          {
            title: "Contrôle qualité interne",
            description:
              "Le mystery shopping et les contrôles internes permettent d'évaluer objectivement la qualité, la conformité et l'expérience client. AOI observe discrètement et selon des critères prédéfinis.",
          },
        ],
        digital: [
          {
            title: "OSINT",
            description:
              "Enquête via des sources ouvertes, des traces numériques, des bases de données et des informations en ligne pour cartographier des personnes, des réseaux, des lieux ou des biens. Efficace, discret et entièrement légal.",
          },
          {
            title: "SOCMINT",
            description:
              "Analyse des informations des médias sociaux pour détecter des comportements, des connexions, des risques ou des tromperies. Un élément important de la détection numérique moderne.",
          },
          {
            title: "Traces numériques",
            description:
              "Détection et analyse des activités en ligne, des comptes, des métadonnées et des indices numériques qui donnent un aperçu du comportement, de la localisation ou de l'identité.",
          },
          {
            title: "Fraude en ligne",
            description:
              "Enquête sur les escroqueries sur Internet, le phishing, l'usurpation d'identité, les faux profils ou la fraude financière numérique. AOI enquête sur l'origine et recueille des preuves utiles.",
          },
          {
            title: "Analyse de réputation & risques",
            description:
              "Analyse numérique d'un individu ou d'une entreprise pour découvrir à un stade précoce les risques de réputation, la tromperie, les conflits d'intérêts ou les signaux frauduleux.",
          },
          {
            title: "Traçage international",
            description:
              "Localisation de personnes, de débiteurs ou de biens à l'étranger par des moyens numériques, des sources internationales et une analyse ciblée de l'information.",
          },
        ],
        private: [
          {
            title: "Personnes disparues",
            description:
              "Enquête sur le lieu de séjour ou les déplacements d'un adulte ou d'un jeune disparu. AOI travaille avec soin, discrétion et respect pour toutes les personnes impliquées.",
          },
          {
            title: "Débiteurs",
            description:
              "Localisation de personnes qui se cachent pour des paiements en suspens, des obligations ou des procédures judiciaires. Axé sur une identification et une localisation correctes.",
          },
          {
            title: "Enquête partenaire & relationnelle",
            description:
              "Enquête en cas de soupçons d'(in)fidélité, de tromperie, de contacts cachés ou d'autres préoccupations relationnelles. Observations factuelles, neutres et discrètes.",
          },
          {
            title: "Questions successorales",
            description:
              "Soutien dans les dossiers de succession, tels que la recherche d'héritiers, la vérification des faits ou la reconstitution d'informations pertinentes dans des situations familiales.",
          },
          {
            title: "Pension alimentaire",
            description:
              "Collecte de preuves en cas de soupçons d'informations incorrectes, de fraude à la cohabitation ou de circonstances modifiées ayant un impact sur les décisions de pension alimentaire.",
          },
          {
            title: "Enquête prénuptiale",
            description:
              "Vérification discrète des antécédents, du comportement, de la situation financière ou des risques potentiels d'un futur partenaire. Axé sur la sécurité et la tranquillité d'esprit.",
          },
          {
            title: "Harcèlement en ligne",
            description:
              "Enquête sur l'intimidation numérique, les menaces en ligne ou les contacts indésirables répétés. AOI cartographie discrètement et factuellement les traces numériques, les modèles de communication et les profils impliqués.",
          },
          {
            title: "Harcèlement",
            description:
              "Collecte de preuves en cas d'intimidation, de harcèlement ou de contact indésirable. AOI documente les faits pour les déclarations, les poursuites judiciaires ou les conseils de sécurité.",
          },
          {
            title: "Délits patrimoniaux",
            description:
              "Enquête sur le vol dans la sphère privée ou le cercle restreint. AOI recueille des constatations factuelles et des informations pertinentes pour appuyer une déclaration ou des poursuites judiciaires.",
          },
        ],
      },
    },
    en: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About Us",
        contact: "Contact",
      },
      hero: {
        title: "Discreet and targeted investigation",
        subtitle:
          "Investigation requires clarity, discretion and a flawless eye for detail. It is an art — a subtle play of observation, intuition and analytical insight.",
        cta: "Discover our services",
      },
      usp: {
        discretion:
          "Complete confidentiality and discreet methods in every investigation",
        expertise:
          "Licensed by FPS Home Affairs with years of experience in complex cases",
        results:
          "Legally admissible evidence and concrete results for your case",
      },
      services: {
        title: "Our Services",
        subtitle:
          "Art of Investigations offers a wide range of investigations for businesses, lawyers, insurers and individuals.",
        corporate: {
          title: "Business & Corporate",
          description:
            "Protect your business interests with professional investigation",
        },
        digital: {
          title: "Digital Investigations",
          description: "Modern digital detection and analysis",
        },
        private: {
          title: "Individuals & Private",
          description: "Discreet support for personal matters",
        },
        readMore: "Read more →",
        moreInfo: "More information →",
        backToServices: "← Back to services",
        contactUs: "Contact us",
      },
      cta: {
        title: "Transparent rates, customized investigation",
        subtitle: "Contact us for a confidential assessment of your case",
      },
      about: {
        title: "About Us",
        subtitle: "A sharp eye. A clear mind. An ethical approach.",
        description:
          "Art of Investigations is an independent investigation agency that examines complex cases with analytical precision and human intuition. From Liedekerke, we work throughout Belgium for lawyers, businesses, insurers and individuals.",
        extra:
          "We act discreetly, legally correct, and with respect for the sensitivity of each situation — always with the goal of providing reliable information on which you can build.",
        discretion: "Discretion",
        discretionText: "Complete confidentiality in every investigation",
        expertise: "Expertise",
        expertiseText: "Licensed by FPS Home Affairs 14.2073.11",
        results: "Results",
        resultsText: "Legally admissible evidence",
        method: "Our approach",
        step1: "Intake & Analysis",
        step1Text:
          "Confidential conversation to clearly map out your situation and objectives",
        step2: "Investigation & Observation",
        step2Text:
          "Discreet and professional investigation according to legal frameworks and best practices",
        step3: "Reporting & Advice",
        step3Text:
          "Clear report with factual findings and legally admissible evidence",
      },
      contact: {
        title: "Contact",
        subtitle: "Contact us for a confidential assessment",
        details: "Contact details",
        email: "Email",
        location: "Location",
        locationText: "Liedekerke, Belgium",
        recognition: "License",
        recognitionText1: "FPS Home Affairs 14.2073.11",
        recognitionText2: "CBE BE1020510274",
        rates: "Transparent rates",
        ratesText:
          "The cost of an investigation varies depending on the nature of the case, the time required, and the use of specialized resources. Each case is reviewed individually for a suitable proposal.",
        form: {
          title: "Contact form",
          name: "Name",
          email: "Email address",
          phone: "Phone number",
          company: "Company",
          service: "Service",
          message: "Message",
          privacy: "I agree to the privacy policy",
          submit: "Submit",
          selectService: "Select a service",
          emailOrPhone: "Email or phone is required",
          privacyRequired: "Privacy policy agreement is required",
          formSent: "Form sent! (Demo version)",
        },
      },
      footer: {
        tagline:
          "Discreet and targeted investigation for businesses, lawyers, insurers, and individuals.",
        contact: "Contact",
        info: "Information",
        copyright: "© 2024 Art of Investigations",
        privacy: "Privacy policy",
        terms: "Terms and conditions",
      },
      serviceDetails: {
        corporate: [
          {
            title: "Corporate investigation",
            description:
              "Investigation into internal incidents such as fraud, theft, conflicts of interest, or contractual violations. AOI gathers factual, objective, and legally admissible evidence for internal decisions or legal action.",
          },
          {
            title: "Sick leave verification",
            description:
              "Discreet verification of whether sick leave is justified, lawful, and in accordance with internal agreements. Observations are conducted according to legal regulations and meticulously documented.",
          },
          {
            title: "Contract breach",
            description:
              "Detection and evidence gathering in cases of violation of non-compete clauses, confidentiality agreements, or other contractual arrangements. Aimed at protecting business interests.",
          },
          {
            title: "Internal theft",
            description:
              "Investigation of suspected theft of goods, money, materials, or confidential information within a company. AOI provides factual material that can be used internally or legally.",
          },
          {
            title: "Corporate espionage",
            description:
              "Detection of unauthorized sharing of information, internal leaks, or external influence. Aimed at protecting trade secrets, intellectual property, and strategic interests.",
          },
          {
            title: "Screening & Due diligence",
            description:
              "Thorough verification of individuals, partners, and companies through background checks, reputation analysis, and risk assessment. Crucial before hiring, collaborations, or investment decisions.",
          },
          {
            title: "Insurance fraud",
            description:
              "Investigation into fraudulent insurance claims, fictitious incidents, or misleading statements. AOI documents the facts and provides reports suitable for insurers and legal proceedings.",
          },
          {
            title: "Asset tracing",
            description:
              "Locating vehicles, materials, equipment, or other company assets that are missing, misappropriated, or untraceable. Both nationally and internationally.",
          },
          {
            title: "Internal quality control",
            description:
              "Mystery shopping and internal audits objectively map out quality, compliance, and customer experience. AOI observes discreetly and according to predetermined criteria.",
          },
        ],
        digital: [
          {
            title: "OSINT",
            description:
              "Investigation via open sources, digital footprints, databases, and online information to map out individuals, networks, locations, or assets. Efficient, discreet, and completely legal.",
          },
          {
            title: "SOCMINT",
            description:
              "Analysis of social media information to detect behavior, connections, risks, or deception. An important part of modern digital investigation.",
          },
          {
            title: "Digital traces",
            description:
              "Detection and analysis of online activities, accounts, metadata, and digital clues that provide insight into behavior, location, or identity.",
          },
          {
            title: "Online fraud",
            description:
              "Investigation into internet scams, phishing, identity theft, fake profiles, or financial digital fraud. AOI investigates the origin and collects usable evidence.",
          },
          {
            title: "Reputation & risk analysis",
            description:
              "Digital screening of an individual or company to uncover reputational risks, deception, conflicts of interest, or fraudulent signals at an early stage.",
          },
          {
            title: "International tracing",
            description:
              "Locating individuals, debtors, or assets across borders through digital means, international sources, and targeted information analysis.",
          },
        ],
        private: [
          {
            title: "Missing persons",
            description:
              "Investigation into the whereabouts or movements of a missing adult or youth. AOI works carefully, discreetly, and with respect for all involved.",
          },
          {
            title: "Debtors",
            description:
              "Locating individuals who are untraceable for outstanding payments, obligations, or legal proceedings. Focused on correct identification and location determination.",
          },
          {
            title: "Partner & Relationship investigation",
            description:
              "Investigation into suspicions of (un)faithfulness, deception, hidden contacts, or other relationship-related concerns. Factual, neutral, and discreet observations.",
          },
          {
            title: "Inheritance matters",
            description:
              "Support in inheritance cases, such as locating heirs, fact-finding, or reconstructing relevant information in family situations.",
          },
          {
            title: "Alimony",
            description:
              "Gathering evidence in cases of suspected incorrect information, cohabitation fraud, or changed circumstances that impact alimony decisions.",
          },
          {
            title: "Pre-marital investigation",
            description:
              "Discreet verification of background, behavior, financial situation, or potential risks of a future partner. Aimed at providing certainty and peace of mind.",
          },
          {
            title: "Online harassment",
            description:
              "Investigation into digital intimidation, online threats, or repeated unwanted contact. AOI discreetly and factually maps out digital footprints, communication patterns, and involved profiles.",
          },
          {
            title: "Stalking",
            description:
              "Gathering evidence in cases of intimidation, harassment, or unwanted contact. AOI documents facts for reporting, legal action, or safety advice.",
          },
          {
            title: "Property crimes",
            description:
              "Investigation into theft within the private sphere or small circle. AOI collects factual findings and relevant information to support a report or legal action.",
          },
        ],
      },
    },
  };

  const services = {
    nl: {
      corporate: [
        "Bedrijfsrecherche",
        "Ziekteverzuim",
        "Contractbreuk",
        "Interne diefstal",
        "Bedrijfsspionage",
        "Screening & Due diligence",
        "Verzekeringsfraude",
        "Asset tracing",
        "Interne kwaliteitscontrole",
      ],
      digital: [
        "OSINT",
        "SOCMINT",
        "Digitale sporen",
        "Online fraude",
        "Reputatie & risicoanalyse",
        "Internationale tracering",
      ],
      private: [
        "Vermiste personen",
        "Schuldenaren",
        "Partner & Relatieonderzoek",
        "Erfeniskwesties",
        "Alimentatie",
        "Voorhuwelijksonderzoek",
        "Online belaging",
        "Stalking",
        "Vermogensdelicten",
      ],
    },
    fr: {
      corporate: [
        "Enquête d'entreprise",
        "Absentéisme maladie",
        "Rupture de contrat",
        "Vol interne",
        "Espionnage industriel",
        "Screening & Due diligence",
        "Fraude d'assurance",
        "Recherche d'actifs",
        "Contrôle qualité interne",
      ],
      digital: [
        "OSINT",
        "SOCMINT",
        "Traces numériques",
        "Fraude en ligne",
        "Analyse réputation & risques",
        "Traçage international",
      ],
      private: [
        "Personnes disparues",
        "Débiteurs",
        "Enquête relationnelle",
        "Questions successorales",
        "Pension alimentaire",
        "Enquête prémaritale",
        "Harcèlement en ligne",
        "Harcèlement",
        "Délits patrimoniaux",
      ],
    },
    en: {
      corporate: [
        "Corporate investigation",
        "Sick leave verification",
        "Contract breach",
        "Internal theft",
        "Corporate espionage",
        "Screening & Due diligence",
        "Insurance fraud",
        "Asset tracing",
        "Internal quality control",
      ],
      digital: [
        "OSINT",
        "SOCMINT",
        "Digital traces",
        "Online fraud",
        "Reputation & risk analysis",
        "International tracing",
      ],
      private: [
        "Missing persons",
        "Debtors",
        "Partner & Relationship investigation",
        "Inheritance matters",
        "Alimony",
        "Pre-marital investigation",
        "Online harassment",
        "Stalking",
        "Property crimes",
      ],
    },
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email && !formData.phone) {
      alert(t.contact.form.emailOrPhone);
      return;
    }
    if (!formData.privacy) {
      alert(t.contact.form.privacyRequired);
      return;
    }
    alert(t.contact.form.formSent);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      privacy: false,
    });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3 cursor-pointer">
                <img src={logo} alt="logo" className="w-12 h-12" />
                <div>
                  <p className="text-xl font-bold font-pt-serif">ART <span className="font-dancing-script font-normal">of</span> INVESTIGATIONS</p>
                </div>
              </Link>
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="hover:text-[#b9a55c] transition-colors">
                  {t.nav.home}
                </Link>
                <Link to="/services" className="hover:text-[#b9a55c] transition-colors">
                  {t.nav.services}
                </Link>
                <Link to="/about" className="hover:text-[#b9a55c] transition-colors">
                  {t.nav.about}
                </Link>
                <Link to="/contact" className="hover:text-[#b9a55c] transition-colors">
                  {t.nav.contact}
                </Link>

                <div className="flex items-center space-x-2 border-l border-gray-700 pl-6">
                  <button
                    onClick={() => setLanguage("nl")}
                    className={`px-2 py-1 rounded ${
                      language === "nl"
                        ? "bg-[#b9a55c] text-black"
                        : "hover:text-[#b9a55c]"
                    }`}
                  >
                    NL
                  </button>
                  <button
                    onClick={() => setLanguage("fr")}
                    className={`px-2 py-1 rounded ${
                      language === "fr"
                        ? "bg-[#b9a55c] text-black"
                        : "hover:text-[#b9a55c]"
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-2 py-1 rounded ${
                      language === "en"
                        ? "bg-[#b9a55c] text-black"
                        : "hover:text-[#b9a55c]"
                    }`}
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
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left hover:text-[#b9a55c]">
                  {t.nav.home}
                </Link>
                <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left hover:text-[#b9a55c]">
                  {t.nav.services}
                </Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left hover:text-[#b9a55c]">
                  {t.nav.about}
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left hover:text-[#b9a55c]">
                  {t.nav.contact}
                </Link>

                <div className="flex space-x-2 pt-4 border-t border-gray-700">
                  <button
                    onClick={() => setLanguage("nl")}
                    className={`px-3 py-1 rounded ${
                      language === "nl"
                        ? "bg-[#b9a55c] text-black"
                        : "border border-white"
                    }`}
                  >
                    NL
                  </button>
                  <button
                    onClick={() => setLanguage("fr")}
                    className={`px-3 py-1 rounded ${
                      language === "fr"
                        ? "bg-[#b9a55c] text-black"
                        : "border border-white"
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 rounded ${
                      language === "en"
                        ? "bg-[#b9a55c] text-black"
                        : "border border-white"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
          <Route path="/services" element={<ServicesPage t={t} services={services} language={language} />} />
          <Route path="/services/:categoryKey" element={<ServiceDetailPage t={t} setFormData={setFormData} formData={formData} />} />
          <Route path="/about" element={<AboutPage t={t} />} />
          <Route path="/contact" element={<ContactPage t={t} formData={formData} setFormData={setFormData} services={services} language={language} handleSubmit={handleSubmit} />} />
        </Routes>

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
                <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
              </div>

              <div>
                <h4 className="font-bold mb-4">{t.footer.contact}</h4>
                <p className="text-gray-400 text-sm mb-2">
                  contact@artofinvestigations.be
                </p>
                <p className="text-gray-400 text-sm">{t.contact.locationText}</p>
              </div>

              <div>
                <h4 className="font-bold mb-4">{t.footer.info}</h4>
                <p className="text-gray-400 text-sm mb-2">
                  {t.contact.recognitionText2}
                </p>
                <p className="text-gray-400 text-sm">
                  {t.contact.recognitionText1}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>{t.footer.copyright}</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-[#b9a55c]">
                  {t.footer.privacy}
                </a>
                <a href="#" className="hover:text-[#b9a55c]">
                  {t.footer.terms}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default ArtOfInvestigations;