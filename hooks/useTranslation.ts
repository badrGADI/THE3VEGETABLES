"use client"

import { useState, useEffect } from "react"

type TranslationKey = string
type Translations = Record<string, Record<string, string>>

const translations: Translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.farm": "Our Farm",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Quote",

    // Hero Section
    "hero.badge": "Premium Moroccan Produce",
    "hero.title": "Bulk Export of",
    "hero.titleHighlight": "Fresh Moroccan",
    "hero.titleEnd": "Vegetables & Fruits",
    "hero.description":
      "Direct from our family farms to international markets. Supplying wholesalers, distributors, and importers worldwide with premium quality produce in container loads.",
    "hero.feature1Label": "Container Loads",
    "hero.feature1Description": "20-40ft containers",
    "hero.feature2Label": "Global Shipping",
    "hero.feature2Description": "Any port worldwide",
    "hero.feature3Label": "Quality Certified",
    "hero.feature3Description": "GlobalGAP & ISO",
    "hero.feature4Label": "15+ Years",
    "hero.feature4Description": "Export experience",
    "hero.viewProducts": "View Products",
    "hero.requestQuote": "Request Quote",
    "hero.stats1Value": "500+",
    "hero.stats1Label": "Tons/Month",
    "hero.stats2Value": "50+",
    "hero.stats2Label": "Countries",

    // Why Choose Us
    "whyChoose.title": "Why Choose MoroccoFresh?",
    "whyChoose.subtitle": "Your trusted partner for bulk agricultural exports from Morocco to international markets",
    "whyChoose.farmFresh": "Farm Fresh Quality",
    "whyChoose.farmFreshDesc": "Direct from our certified organic farms in Morocco's fertile regions",
    "whyChoose.international": "International Standards",
    "whyChoose.internationalDesc": "GlobalGAP, ISO 22000, and organic certifications for global markets",
    "whyChoose.worldwide": "Worldwide Export",
    "whyChoose.worldwideDesc": "Reliable shipping to any port with temperature-controlled logistics",
    "whyChoose.trusted": "Trusted Partner",
    "whyChoose.trustedDesc": "15+ years serving international importers and distributors",

    // Products Preview
    "productsPreview.title": "Our Export Products",
    "productsPreview.description":
      "Premium Moroccan produce available in bulk quantities for international distribution",
    "productsPreview.bulkExport": "Bulk Export",
    "productsPreview.capacity": "Capacity: ",
    "productsPreview.varieties": "Varieties: ",
    "productsPreview.viewDetails": "View Details",
    "productsPreview.viewAllProducts": "View All Products",

    // Export Experience
    "exportExperience.title": "Export Experience & Global Reach",
    "exportExperience.subtitle":
      "Trusted by international importers and distributors worldwide for consistent quality and reliable delivery",
    "exportExperience.countriesServed": "Countries Served",
    "exportExperience.countriesDesc": "Worldwide distribution network",
    "exportExperience.containersMonth": "Containers/Month",
    "exportExperience.containersDesc": "Reliable shipping capacity",
    "exportExperience.yearsExperience": "Years Experience",
    "exportExperience.yearsDesc": "Trusted export partner",
    "exportExperience.happyClients": "Happy Clients",
    "exportExperience.clientsDesc": "International partnerships",

    // Call to Action
    "callToAction.title": "Ready to Import Premium Moroccan Produce?",
    "callToAction.description":
      "Contact our export team for bulk quotations, shipping arrangements, and partnership opportunities. We're here to support your international sourcing needs.",
    "callToAction.requestBulkQuote": "Request Bulk Quote",
    "callToAction.scheduleCall": "Schedule Call",
    "callToAction.quickResponseTitle": "Quick Response",
    "callToAction.quickResponseDescription": "Get quotes within 24 hours for all bulk inquiries",
    "callToAction.directContactTitle": "Direct Contact",
    "callToAction.directContactDescription": "Speak directly with our export specialists",
    "callToAction.customSolutionsTitle": "Custom Solutions",
    "callToAction.customSolutionsDescription": "Tailored packaging and logistics for your needs",

    // Footer
    companyName: "The 3 Vegetabeles",
    companyDescription: "Agricultural Export",
    companyMission:
      "Leading Moroccan agricultural export company supplying premium fresh produce to international markets worldwide.",
    quickLinks: "Quick Links",
    ourProducts: "Our Products",
    ourFarm: "Our Farm",
    blogAndNews: "Blog & News",
    contactUs: "Contact Us",
    exportProducts: "Export Products",
    moroccanTomatoes: "Moroccan Tomatoes",
    organicCarrots: "Organic Carrots",
    bellPeppers: "Bell Peppers",
    redOnions: "Red Onions",
    contactInfo: "Contact Info",
    location: "Agadir, Morocco",
    phoneNumber: "+212 528 123 456",
    email: "export@moroccofresh.ma",
    copyright: "© 2024 MoroccoFresh Agricultural Export. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",

    // Products Page
    "productsPage.title": "Export Products",
    "productsPage.subtitle": "Catalog",
    "productsPage.description":
      "Premium Moroccan vegetables and fruits available in bulk quantities for international distribution and wholesale markets",
    "productsPage.containerLoads": "Container Loads",
    "productsPage.globalShipping": "Global Shipping",
    "productsPage.countries": "50+ Countries",

    // Product Categories
    "categories.vegetables": "Fresh Vegetables",
    "categories.vegetablesTitle": "Premium Moroccan Vegetables",
    "categories.vegetablesDesc":
      "High-quality vegetables grown in Morocco's fertile regions, available in bulk quantities for international distribution",
    "categories.fruits": "Fresh Fruits",
    "categories.fruitsTitle": "Premium Moroccan Fruits",
    "categories.fruitsDesc":
      "Sweet, nutritious fruits from Morocco's ideal climate conditions, perfect for global export markets",
    "categories.vegetable": "Vegetable",
    "categories.fruit": "Fruit",
    "categories.organic": "Organic",
    "categories.season": "Season",
    "categories.capacity": "Capacity",
    "categories.varieties": "Varieties",

    // Quality & Transparency
    "quality.title": "Quality & Transparency",
    "quality.subtitle":
      "We maintain the highest international standards and provide complete transparency throughout our supply chain to ensure you receive premium quality products every time",
    "quality.certifications": "International Certifications",
    "quality.transparency": "Complete Transparency",
    "quality.process": "Our Quality Process",
    "quality.certified": "Certified",
    "quality.organic": "Organic",
    "quality.compliant": "Compliant",
    "quality.farmSelection": "Farm Selection",
    "quality.farmSelectionDesc": "Careful selection of optimal harvest timing based on quality parameters",
    "quality.inspection": "Quality Inspection",
    "quality.inspectionDesc": "Rigorous quality control and grading by certified inspectors",
    "quality.coldChain": "Cold Chain",
    "quality.coldChainDesc": "Immediate cold storage and temperature-controlled handling",
    "quality.exportReady": "Export Ready",
    "quality.exportReadyDesc": "Final quality check and certification before international shipping",

    // Partnership
    "partnership.title": "Partnership Excellence",
    "partnership.subtitle":
      "We believe in building strong, mutually beneficial partnerships with our international clients. Join our network of successful partners worldwide",
    "partnership.whyPartner": "Why Partner With Us",
    "partnership.opportunities": "Partnership Opportunities",
    "partnership.successStories": "Success Stories",
    "partnership.becomePartner": "Become a Partner",
    "partnership.scheduleMeeting": "Schedule Meeting",
    "partnership.readyPartner": "Ready to Partner With Us?",
    "partnership.joinNetwork":
      "Join our network of successful international partners and grow your business with premium Moroccan produce",

    // About Page
    "about.title": "Our Family Farm Story",
    "about.subtitle": "Three generations of passion, tradition, and innovation in sustainable agriculture",
    "about.yearsExperience": "70+",
    "about.yearsLabel": "Years of Experience",
    "about.hectares": "500",
    "about.hectaresLabel": "Hectares of Land",
    "about.countriesServed": "50+",
    "about.countriesLabel": "Countries Served",

    // Contact Page
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Ready to start your fresh produce journey? Contact us for orders, partnerships, or any questions",
    "contact.quickResponse": "Quick Response",
    "contact.partnershipReady": "Partnership Ready",

    // Blog Page
    "blog.title": "Farm Blog & News",
    "blog.subtitle":
      "Stay updated with the latest from our farm, seasonal harvests, nutrition tips, and sustainable farming insights",
    "blog.farmingTips": "Farming Tips",
    "blog.latestUpdates": "Latest Updates",
    "blog.latestPosts": "Latest Posts",
    "blog.showingArticles": "Showing {count} articles",
    "blog.readMore": "Read More →",
    "blog.search": "Search",
    "blog.searchPlaceholder": "Search articles...",
    "blog.categories": "Categories",
    "blog.recentPosts": "Recent Posts",
    "blog.tags": "Tags",
    "blog.newsletter": "Newsletter",
    "blog.newsletterDesc": "Get the latest updates from our farm delivered to your inbox.",
    "blog.emailPlaceholder": "Your email address",
    "blog.subscribe": "Subscribe",
    "blog.readTime": "{time} min read",
    
    // Blog Posts Content
    "blog.post1.title": "The Benefits of Eating Seasonal Produce",
    "blog.post1.excerpt": "Discover why eating fruits and vegetables in season is better for your health, wallet, and the environment.",
    "blog.post2.title": "Our Organic Certification Journey",
    "blog.post2.excerpt": "Learn about the rigorous process we went through to achieve organic certification and what it means for our customers.",
    "blog.post3.title": "Sustainable Water Management in Agriculture",
    "blog.post3.excerpt": "How we use advanced irrigation techniques to conserve water while maintaining crop quality.",
    "blog.post4.title": "Recipe: Fresh Orange and Avocado Salad",
    "blog.post4.excerpt": "A refreshing and nutritious salad recipe using our farm-fresh oranges and creamy avocados.",
    "blog.post5.title": "Export Success: Reaching New Markets",
    "blog.post5.excerpt": "Our journey expanding to new international markets and the challenges we overcame.",
    "blog.post6.title": "Winter Harvest: What's Fresh This Season",
    "blog.post6.excerpt": "Explore the delicious winter produce available from our farm and their nutritional benefits.",
    
    // Blog Categories
    "blog.category.nutrition": "Nutrition",
    "blog.category.farming": "Farming",
    "blog.category.sustainability": "Sustainability",
    "blog.category.recipes": "Recipes",
    "blog.category.business": "Business",
    "blog.category.seasonal": "Seasonal",

    // Shop Page
    "shop.title": "Fresh Produce Shop",
    "shop.subtitle":
      "Browse our complete selection of premium organic fruits and vegetables, delivered fresh from our Moroccan farm to your doorstep",
    "shop.premiumQuality": "Premium Quality",
    "shop.fastDelivery": "Fast Delivery",
  },
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.products": "Produits",
    "nav.farm": "Notre Ferme",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.getQuote": "Devis",

    // Hero Section
    "hero.badge": "Produits Marocains Premium",
    "hero.title": "Export en Vrac de",
    "hero.titleHighlight": "Légumes et Fruits",
    "hero.titleEnd": "Marocains Frais",
    "hero.description":
      "Directement de nos fermes familiales vers les marchés internationaux. Approvisionnement des grossistes, distributeurs et importateurs du monde entier avec des produits de qualité premium en conteneurs complets.",
    "hero.feature1Label": "Conteneurs Complets",
    "hero.feature1Description": "Conteneurs 20-40 pieds",
    "hero.feature2Label": "Expédition Mondiale",
    "hero.feature2Description": "Vers tous les ports",
    "hero.feature3Label": "Qualité Certifiée",
    "hero.feature3Description": "GlobalGAP & ISO",
    "hero.feature4Label": "15+ Années",
    "hero.feature4Description": "Expérience export",
    "hero.viewProducts": "Voir Produits",
    "hero.requestQuote": "Demander Devis",
    "hero.stats1Value": "500+",
    "hero.stats1Label": "Tonnes/Mois",
    "hero.stats2Value": "50+",
    "hero.stats2Label": "Pays",

    // Why Choose Us
    "whyChoose.title": "Pourquoi Choisir MoroccoFresh?",
    "whyChoose.subtitle":
      "Votre partenaire de confiance pour les exportations agricoles en vrac du Maroc vers les marchés internationaux",
    "whyChoose.farmFresh": "Qualité Fraîche de la Ferme",
    "whyChoose.farmFreshDesc": "Directement de nos fermes biologiques certifiées dans les régions fertiles du Maroc",
    "whyChoose.international": "Standards Internationaux",
    "whyChoose.internationalDesc": "Certifications GlobalGAP, ISO 22000 et biologiques pour les marchés mondiaux",
    "whyChoose.worldwide": "Export Mondial",
    "whyChoose.worldwideDesc": "Expédition fiable vers tous les ports avec logistique à température contrôlée",
    "whyChoose.trusted": "Partenaire de Confiance",
    "whyChoose.trustedDesc": "15+ années au service des importateurs et distributeurs internationaux",

    // Products Preview
    "productsPreview.title": "Nos Produits d'Export",
    "productsPreview.description":
      "Produits marocains premium disponibles en quantités en vrac pour la distribution internationale",
    "productsPreview.bulkExport": "Export en Vrac",
    "productsPreview.capacity": "Capacité: ",
    "productsPreview.varieties": "Variétés: ",
    "productsPreview.viewDetails": "Voir Détails",
    "productsPreview.viewAllProducts": "Voir Tous les Produits",

    // Export Experience
    "exportExperience.title": "Expérience Export & Portée Mondiale",
    "exportExperience.subtitle":
      "Approuvé par les importateurs et distributeurs internationaux du monde entier pour une qualité constante et une livraison fiable",
    "exportExperience.countriesServed": "Pays Desservis",
    "exportExperience.countriesDesc": "Réseau de distribution mondial",
    "exportExperience.containersMonth": "Conteneurs/Mois",
    "exportExperience.containersDesc": "Capacité d'expédition fiable",
    "exportExperience.yearsExperience": "Années d'Expérience",
    "exportExperience.yearsDesc": "Partenaire export de confiance",
    "exportExperience.happyClients": "Clients Satisfaits",
    "exportExperience.clientsDesc": "Partenariats internationaux",

    // Call to Action
    "callToAction.title": "Prêt à Importer des Produits Marocains Premium?",
    "callToAction.description":
      "Contactez notre équipe export pour des devis en vrac, arrangements d'expédition et opportunités de partenariat. Nous sommes là pour soutenir vos besoins d'approvisionnement international.",
    "callToAction.requestBulkQuote": "Demander Devis en Vrac",
    "callToAction.scheduleCall": "Planifier Appel",
    "callToAction.quickResponseTitle": "Réponse Rapide",
    "callToAction.quickResponseDescription": "Obtenez des devis sous 24h pour toutes demandes en vrac",
    "callToAction.directContactTitle": "Contact Direct",
    "callToAction.directContactDescription": "Parlez directement avec nos spécialistes export",
    "callToAction.customSolutionsTitle": "Solutions Personnalisées",
    "callToAction.customSolutionsDescription": "Emballage et logistique adaptés à vos besoins",

    // Footer
    companyName: "The 3 Vegetabeles",
    companyDescription: "Export Agricole",
    companyMission:
      "Entreprise leader d'export agricole marocain fournissant des produits frais premium aux marchés internationaux du monde entier.",
    quickLinks: "Liens Rapides",
    ourProducts: "Nos Produits",
    ourFarm: "Notre Ferme",
    blogAndNews: "Blog & Actualités",
    contactUs: "Nous Contacter",
    exportProducts: "Produits d'Export",
    moroccanTomatoes: "Tomates Marocaines",
    organicCarrots: "Carottes Biologiques",
    bellPeppers: "Poivrons",
    redOnions: "Oignons Rouges",
    contactInfo: "Infos Contact",
    location: "Agadir, Maroc",
    phoneNumber: "+212 528 123 456",
    email: "export@moroccofresh.ma",
    copyright: "© 2024 MoroccoFresh Export Agricole. Tous droits réservés.",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions de Service",

    // Products Page
    "productsPage.title": "Produits d'Export",
    "productsPage.subtitle": "Catalogue",
    "productsPage.description":
      "Légumes et fruits marocains premium disponibles en quantités en vrac pour la distribution internationale et les marchés de gros",
    "productsPage.containerLoads": "Conteneurs Complets",
    "productsPage.globalShipping": "Expédition Mondiale",
    "productsPage.countries": "50+ Pays",

    // Product Categories
    "categories.vegetables": "Légumes Frais",
    "categories.vegetablesTitle": "Légumes Marocains Premium",
    "categories.vegetablesDesc":
      "Légumes de haute qualité cultivés dans les régions fertiles du Maroc, disponibles en quantités en vrac pour la distribution internationale",
    "categories.fruits": "Fruits Frais",
    "categories.fruitsTitle": "Fruits Marocains Premium",
    "categories.fruitsDesc":
      "Fruits sucrés et nutritifs des conditions climatiques idéales du Maroc, parfaits pour les marchés d'export mondiaux",
    "categories.vegetable": "Légume",
    "categories.fruit": "Fruit",
    "categories.organic": "Biologique",
    "categories.season": "Saison",
    "categories.capacity": "Capacité",
    "categories.varieties": "Variétés",

    // Quality & Transparency
    "quality.title": "Qualité & Transparence",
    "quality.subtitle":
      "Nous maintenons les plus hauts standards internationaux et fournissons une transparence complète tout au long de notre chaîne d'approvisionnement pour vous assurer de recevoir des produits de qualité premium à chaque fois",
    "quality.certifications": "Certifications Internationales",
    "quality.transparency": "Transparence Complète",
    "quality.process": "Notre Processus Qualité",
    "quality.certified": "Certifié",
    "quality.organic": "Biologique",
    "quality.compliant": "Conforme",
    "quality.farmSelection": "Sélection Ferme",
    "quality.farmSelectionDesc": "Sélection minutieuse du timing optimal de récolte basé sur les paramètres de qualité",
    "quality.inspection": "Inspection Qualité",
    "quality.inspectionDesc": "Contrôle qualité rigoureux et classement par inspecteurs certifiés",
    "quality.coldChain": "Chaîne du Froid",
    "quality.coldChainDesc": "Stockage frigorifique immédiat et manipulation à température contrôlée",
    "quality.exportReady": "Prêt Export",
    "quality.exportReadyDesc": "Contrôle qualité final et certification avant expédition internationale",

    // Partnership
    "partnership.title": "Excellence Partenariat",
    "partnership.subtitle":
      "Nous croyons en la construction de partenariats solides et mutuellement bénéfiques avec nos clients internationaux. Rejoignez notre réseau de partenaires prospères dans le monde entier",
    "partnership.whyPartner": "Pourquoi Nous Choisir Comme Partenaire",
    "partnership.opportunities": "Opportunités de Partenariat",
    "partnership.successStories": "Histoires de Succès",
    "partnership.becomePartner": "Devenir Partenaire",
    "partnership.scheduleMeeting": "Planifier Réunion",
    "partnership.readyPartner": "Prêt à Devenir Notre Partenaire?",
    "partnership.joinNetwork":
      "Rejoignez notre réseau de partenaires internationaux prospères et développez votre entreprise avec des produits marocains premium",

    // About Page
    "about.title": "L'Histoire de Notre Ferme Familiale",
    "about.subtitle": "Trois générations de passion, tradition et innovation en agriculture durable",
    "about.yearsExperience": "70+",
    "about.yearsLabel": "Années d'Expérience",
    "about.hectares": "500",
    "about.hectaresLabel": "Hectares de Terre",
    "about.countriesServed": "50+",
    "about.countriesLabel": "Pays Desservis",

    // Contact Page
    "contact.title": "Contactez-Nous",
    "contact.subtitle":
      "Prêt à commencer votre parcours de produits frais? Contactez-nous pour des commandes, partenariats ou toute question",
    "contact.quickResponse": "Réponse Rapide",
    "contact.partnershipReady": "Prêt pour Partenariat",

    // // Blog Page
    // "blog.title": "Blog & Actualités de la Ferme",
    // "blog.subtitle":
    //   "Restez informé des dernières nouvelles de notre ferme, récoltes saisonnières, conseils nutritionnels et perspectives d'agriculture durable",
    // "blog.farmingTips": "Conseils Agricoles",
    // "blog.latestUpdates": "Dernières Mises à Jour",

    // Blog Page
    "blog.title": "Blog & Actualités de la Ferme",
    "blog.subtitle":
      "Restez informé des dernières nouvelles de notre ferme, récoltes saisonnières, conseils nutritionnels et perspectives d'agriculture durable",
    "blog.farmingTips": "Conseils Agricoles",
    "blog.latestUpdates": "Dernières Mises à Jour",
    "blog.latestPosts": "Derniers Articles",
    "blog.showingArticles": "Affichage de {count} articles",
    "blog.readMore": "Lire Plus →",
    "blog.search": "Rechercher",
    "blog.searchPlaceholder": "Rechercher des articles...",
    "blog.categories": "Catégories",
    "blog.recentPosts": "Articles Récents",
    "blog.tags": "Tags",
    "blog.newsletter": "Newsletter",
    "blog.newsletterDesc": "Recevez les dernières mises à jour de notre ferme directement dans votre boîte mail.",
    "blog.emailPlaceholder": "Votre adresse email",
    "blog.subscribe": "S'abonner",
    "blog.readTime": "{time} min de lecture",
    
    // Blog Posts Content
    "blog.post1.title": "Les Avantages de Manger des Produits de Saison",
    "blog.post1.excerpt": "Découvrez pourquoi manger des fruits et légumes de saison est meilleur pour votre santé, votre portefeuille et l'environnement.",
    "blog.post2.title": "Notre Parcours de Certification Biologique",
    "blog.post2.excerpt": "Apprenez-en plus sur le processus rigoureux que nous avons suivi pour obtenir la certification biologique et ce que cela signifie pour nos clients.",
    "blog.post3.title": "Gestion Durable de l'Eau en Agriculture",
    "blog.post3.excerpt": "Comment nous utilisons des techniques d'irrigation avancées pour économiser l'eau tout en maintenant la qualité des cultures.",
    "blog.post4.title": "Recette: Salade d'Oranges et d'Avocats Frais",
    "blog.post4.excerpt": "Une recette de salade rafraîchissante et nutritive utilisant nos oranges fraîches de la ferme et nos avocats crémeux.",
    "blog.post5.title": "Succès Export: Atteindre de Nouveaux Marchés",
    "blog.post5.excerpt": "Notre parcours d'expansion vers de nouveaux marchés internationaux et les défis que nous avons surmontés.",
    "blog.post6.title": "Récolte d'Hiver: Ce qui est Frais Cette Saison",
    "blog.post6.excerpt": "Explorez les délicieux produits d'hiver disponibles de notre ferme et leurs bienfaits nutritionnels.",
    
    // Blog Categories
    "blog.category.nutrition": "Nutrition",
    "blog.category.farming": "Agriculture",
    "blog.category.sustainability": "Durabilité",
    "blog.category.recipes": "Recettes",
    "blog.category.business": "Entreprise",
    "blog.category.seasonal": "Saisonnier",

    // Shop Page
    "shop.title": "Boutique de Produits Frais",
    "shop.subtitle":
      "Parcourez notre sélection complète de fruits et légumes biologiques premium, livrés frais de notre ferme marocaine à votre porte",
    "shop.premiumQuality": "Qualité Premium",
    "shop.fastDelivery": "Livraison Rapide",
  },
}

export function useTranslation() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"
    setLanguage(savedLanguage)

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations["en"][key] || key
  }

  return { t, language }
}
