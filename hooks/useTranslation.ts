"use client";

import { useState, useEffect } from "react";

type TranslationKey = string;
type Translations = Record<string, Record<string, string>>;

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
    "hero.stats2Value": "18+",
    "hero.stats2Label": "Countries",

    // Why Choose Us
    "whyChoose.title": "Why Choose MoroccoFresh?",
    "whyChoose.subtitle":
      "Your trusted partner for bulk agricultural exports from Morocco to international markets",
    "whyChoose.farmFresh": "Farm Fresh Quality",
    "whyChoose.farmFreshDesc":
      "Direct from our certified organic farms in Morocco's fertile regions",
    "whyChoose.international": "International Standards",
    "whyChoose.internationalDesc":
      "GlobalGAP, ISO 22000, and organic certifications for global markets",
    "whyChoose.worldwide": "Worldwide Export",
    "whyChoose.worldwideDesc":
      "Reliable shipping to any port with temperature-controlled logistics",
    "whyChoose.trusted": "Trusted Partner",
    "whyChoose.trustedDesc":
      "15+ years serving international importers and distributors",

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
    "callToAction.quickResponseDescription":
      "Get quotes within 24 hours for all bulk inquiries",
    "callToAction.directContactTitle": "Direct Contact",
    "callToAction.directContactDescription":
      "Speak directly with our export specialists",
    "callToAction.customSolutionsTitle": "Custom Solutions",
    "callToAction.customSolutionsDescription":
      "Tailored packaging and logistics for your needs",

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
    "quality.farmSelectionDesc":
      "Careful selection of optimal harvest timing based on quality parameters",
    "quality.inspection": "Quality Inspection",
    "quality.inspectionDesc":
      "Rigorous quality control and grading by certified inspectors",
    "quality.coldChain": "Cold Chain",
    "quality.coldChainDesc":
      "Immediate cold storage and temperature-controlled handling",
    "quality.exportReady": "Export Ready",
    "quality.exportReadyDesc":
      "Final quality check and certification before international shipping",

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
    "about.subtitle":
      "Three generations of passion, tradition, and innovation in sustainable agriculture",
    "about.yearsExperience": "70+",
    "about.yearsLabel": "Years of Experience",
    "about.hectares": "500",
    "about.hectaresLabel": "Hectares of Land",
    "about.countriesServed": "50+",
    "about.countriesLabel": "Countries Served",
    "about.fromHumbleBeginnings": "From Humble Beginnings to Global Reach",
    "about.storyParagraph1": "Our journey began in 1952 when my grandfather, Hassan, started cultivating a small plot of land in the fertile valleys of Morocco. With nothing but determination and a deep love for the earth, he grew the finest fruits and vegetables the region had ever seen.",
    "about.storyParagraph2": "Today, three generations later, we continue his legacy while embracing modern sustainable practices. Our 500-hectare farm now supplies premium organic produce to customers across 50 countries, but we've never forgotten our roots or compromised on quality.",
    "about.storyParagraph3": "Every fruit and vegetable that leaves our farm carries with it the same care, attention, and love that Hassan put into his first harvest over 70 years ago.",
    "about.threeGenerationsAlt": "Three generations of our farming family",
    "about.coreValues": "Our Core Values",
    "about.coreValuesDesc": "These principles guide everything we do, from seed to harvest to your table",
    "about.sustainability": "Sustainability",
    "about.sustainabilityDesc": "We use eco-friendly farming practices that protect our soil, water, and biodiversity for future generations.",
    "about.familyTradition": "Family Tradition",
    "about.familyTraditionDesc": "Every decision we make honors our family's legacy while embracing innovation and modern best practices.",
    "about.qualityExcellence": "Quality Excellence",
    "about.qualityExcellenceDesc": "We never compromise on quality. Every product meets the highest international standards before it reaches our customers.",
    "about.communityCare": "Community Care",
    "about.communityCareDesc": "We support our local community by providing fair employment and investing in local infrastructure and education.",
    "about.globalResponsibility": "Global Responsibility",
    "about.globalResponsibilityDesc": "We believe in responsible global trade that benefits both our customers and our local farming community.",
    "about.reliableService": "Reliable Service",
    "about.reliableServiceDesc": "We guarantee timely delivery and consistent quality, building long-term partnerships with our customers worldwide.",
    "about.sustainablePractices": "Sustainable Farming Practices",
    "about.sustainablePracticesDesc": "We're committed to farming methods that protect our environment while producing the highest quality fruits and vegetables.",
    "about.waterConservation": "Water Conservation",
    "about.waterConservationDesc": "Advanced drip irrigation systems reduce water usage by 40% while ensuring optimal plant hydration.",
    "about.organicCertification": "Organic Certification",
    "about.organicCertificationDesc": "100% certified organic practices with no synthetic pesticides or fertilizers.",
    "about.solarEnergy": "Solar Energy",
    "about.solarEnergyDesc": "Solar panels power 80% of our farm operations, reducing our carbon footprint significantly.",
    "about.soilHealth": "Soil Health",
    "about.soilHealthDesc": "Crop rotation and natural composting maintain soil fertility and prevent erosion.",
    "about.sustainablePracticesAlt": "Sustainable farming practices on our farm",
    "about.meetOurTeam": "Meet Our Team",
    "about.teamDesc": "The passionate people behind our farm's success",
    "about.ahmedHassan": "Badr GADI",
    "about.ahmedRole": "Farm Owner & CEO",
    "about.ahmedDesc": "Third-generation farmer leading our sustainable agriculture initiatives and global expansion.",
    "about.ahmedAlt": "Badr GADI - Farm Owner",
    "about.fatimaBenali": "Ayoub ELOUAZZANI",
    "about.fatimaRole": "Agricultural Engineer",
    "about.fatimaDesc": "Expert in sustainable farming practices and organic certification processes.",
    "about.fatimaAlt": "Ayoub ELOUAZZANI - Agricultural Engineer",
    "about.omarAlami": "Ahmed GADI",
    "about.omarRole": "Export Manager",
    "about.omarDesc": "Manages international logistics and ensures quality delivery to customers worldwide.",
    "about.omarAlt": "Ahmed GADI - Export Manager",

    // Contact Page
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Ready to start your fresh produce journey? Contact us for orders, partnerships, or any questions",
    "contact.quickResponse": "Quick Response",
    "contact.partnershipReady": "Partnership Ready",
    "contact.requestB2BQuote": "Request a B2B Quote",
    "contact.bulkOrdersDescription": "Looking for bulk orders or regular supply? Get a customized quote for your business needs",
    "contact.visitOurFarm": "Visit Our Farm",
    "contact.farmLocation": "Located in the fertile valleys of Agadir, Morocco",
    "contact.mapPlaceholder": "Google Maps integration would go here",

    // Contact Form
    "contactForm.sendMessage": "Send us a Message",
    "contactForm.fullName": "Full Name *",
    "contactForm.emailAddress": "Email Address *",
    "contactForm.phoneNumber": "Phone Number",
    "contactForm.companyName": "Company Name",
    "contactForm.subject": "Subject *",
    "contactForm.selectSubject": "Select a subject",
    "contactForm.generalInquiry": "General Inquiry",
    "contactForm.productOrder": "Product Order",
    "contactForm.partnershipOpportunity": "Partnership Opportunity",
    "contactForm.exportInformation": "Export Information",
    "contactForm.qualityConcern": "Quality Concern",
    "contactForm.other": "Other",
    "contactForm.message": "Message *",
    "contactForm.messagePlaceholder": "Please provide details about your inquiry...",
    "contactForm.sendMessageButton": "Send Message",

    // Contact Info
    "contactInfo.contactInformation": "Contact Information",
    "contactInfo.helpDescription": "We're here to help with all your fresh produce needs. Reach out to us through any of these channels.",
    "contactInfo.farmLocation": "Farm Location",
    "contactInfo.farmAddress": "Route de Taroudant, Km 15\nAgadir 80000, Morocco",
    "contactInfo.phoneNumbers": "Phone Numbers",
    "contactInfo.mainPhone": "Main: +212 528 123 456",
    "contactInfo.exportPhone": "Export: +212 661 234 567",
    "contactInfo.whatsapp": "WhatsApp",
    "contactInfo.whatsappNumber": "+212 661 234 567",
    "contactInfo.whatsappAvailable": "Available 24/7 for urgent inquiries",
    "contactInfo.emailAddresses": "Email Addresses",
    "contactInfo.generalEmail": "General: info@freshfarm.ma",
    "contactInfo.salesEmail": "Sales: sales@freshfarm.ma",
    "contactInfo.exportEmail": "Export: export@freshfarm.ma",
    "contactInfo.businessHours": "Business Hours",
    "contactInfo.weekdays": "Monday - Friday: 8:00 AM - 6:00 PM",
    "contactInfo.saturday": "Saturday: 9:00 AM - 4:00 PM",
    "contactInfo.sunday": "Sunday: Closed",
    "contactInfo.languages": "Languages",
    "contactInfo.languagesList": "Arabic, French, English",
    "contactInfo.spanishExport": "Spanish (Export team)",

    // Quote Form
    "quoteForm.b2bQuoteRequest": "B2B Quote Request",
    "quoteForm.companyName": "Company Name *",
    "quoteForm.contactPerson": "Contact Person *",
    "quoteForm.businessEmail": "Business Email *",
    "quoteForm.phoneNumber": "Phone Number *",
    "quoteForm.deliveryCountry": "Delivery Country *",
    "quoteForm.selectDeliveryCountry": "Select delivery country",
    "quoteForm.france": "France",
    "quoteForm.spain": "Spain",
    "quoteForm.germany": "Germany",
    "quoteForm.uk": "United Kingdom",
    "quoteForm.netherlands": "Netherlands",
    "quoteForm.uae": "United Arab Emirates",
    "quoteForm.other": "Other",
    "quoteForm.productsOfInterest": "Products of Interest *",
    "quoteForm.freshOranges": "Fresh Oranges",
    "quoteForm.organicTomatoes": "Organic Tomatoes",
    "quoteForm.freshAvocados": "Fresh Avocados",
    "quoteForm.bellPeppers": "Bell Peppers",
    "quoteForm.freshLemons": "Fresh Lemons",
    "quoteForm.organicCarrots": "Organic Carrots",
    "quoteForm.seasonalFruits": "Seasonal Fruits",
    "quoteForm.mixedVegetables": "Mixed Vegetables",
    "quoteForm.expectedQuantity": "Expected Quantity (kg/month)",
    "quoteForm.selectQuantityRange": "Select quantity range",
    "quoteForm.quantity100500": "100 - 500 kg",
    "quoteForm.quantity5001000": "500 - 1,000 kg",
    "quoteForm.quantity10005000": "1,000 - 5,000 kg",
    "quoteForm.quantity500010000": "5,000 - 10,000 kg",
    "quoteForm.quantity10000plus": "10,000+ kg",
    "quoteForm.deliveryFrequency": "Delivery Frequency",
    "quoteForm.selectFrequency": "Select frequency",
    "quoteForm.weekly": "Weekly",
    "quoteForm.biweekly": "Bi-weekly",
    "quoteForm.monthly": "Monthly",
    "quoteForm.seasonal": "Seasonal",
    "quoteForm.oneTime": "One-time order",
    "quoteForm.specialRequirements": "Special Requirements",
    "quoteForm.requirementsPlaceholder": "Please specify any special packaging, certification, or delivery requirements...",
    "quoteForm.agreeTerms": "I agree to the terms and conditions and privacy policy *",
    "quoteForm.requestQuote": "Request Quote",

    // Blog Page
    "blog.title": "Farm Blog & News",
    "blog.subtitle":
      "Stay updated with the latest from our farm, seasonal harvests, nutrition tips, and sustainable farming insights",
    "blog.farmingTips": "Farming Tips",
    "blog.latestUpdates": "Latest Updates",
    "blog.latestPosts": "Latest Posts",
    "blog.showingArticles": "Showing {start}-{end} of {count} articles",
    "blog.readMore": "Read More →",
    "blog.pageInfo": "Page {current} of {total}",
    "blog.previous": "Previous",
    "blog.next": "Next",
    "blog.search": "Search",
    "blog.searchPlaceholder": "Search articles...",
    "blog.categories": "Categories",
    "blog.recentPosts": "Recent Posts",
    "blog.tags": "Tags",
    "blog.newsletter": "Newsletter",
    "blog.newsletterDesc":
      "Get the latest updates from our farm delivered to your inbox.",
    "blog.emailPlaceholder": "Your email address",
    "blog.subscribe": "Subscribe",
    "blog.readTime": "{time} min read",
    "blog.backToBlog": "Back to Blog",
    "blog.backToAllPosts": "Back to All Posts",
    "blog.blogPostNotFound": "Blog Post Not Found",
    "blog.postNotFoundMessage": "The blog post you're looking for doesn't exist.",
    "blog.relatedPosts": "Related Posts",
    "blog.keyPoints": "Key Points",
    "blog.loading": "Loading...",
    
    // Blog Posts Content
// Blog Posts Content (English)
// // Blog Posts Content (English - SEO Optimized & Detailed)

// Exceptional Rainfall in 2024
"blog.rainfall_impact_2024.title": "Exceptional Rainfall in 2024: A 41% Boost in Morocco’s Cereal Harvest and Food Security",
"blog.rainfall_impact_2024.excerpt":
  "In 2024, Morocco experienced record-breaking rainfall, increasing cereal production by 41%. This exceptional agricultural season not only strengthened national food security but also revived hope for farmers after years of drought. Discover the regions that benefited most, the economic impact, and how this climate event may influence the next planting season.",

// Regenerative Farming in the Moroccan Desert
"blog.sand_to_green_oasis.title": "From Sand to Orchards: Regenerative Farming Transforms Morocco’s Desert into Green Oases",
"blog.sand_to_green_oasis.excerpt":
  "Thanks to regenerative agriculture techniques such as solar-powered water pumping, precision drip irrigation, and biochar soil enrichment, the 'Sand to Green' project is turning Morocco’s arid desert into fertile orchards. Learn how this sustainable approach is combating desertification, creating jobs, and supporting rural communities.",

// No-Till Farming
"blog.no_till_expansion.title": "No-Till Farming in Morocco: A Strategic Step Toward Water Conservation and Climate Resilience",
"blog.no_till_expansion.excerpt":
  "Morocco is scaling up no-till farming practices to preserve soil moisture, prevent erosion, and reduce fuel consumption in agriculture. This climate-smart approach not only improves crop yields but also plays a vital role in adapting to water scarcity and increasing long-term agricultural sustainability.",

// European Green Deal
"blog.green_deal_opportunity.title": "European Green Deal: A Historic Opportunity to Modernize and Sustain Morocco’s Agriculture",
"blog.green_deal_opportunity.excerpt":
  "The European Green Deal opens new horizons for Moroccan agriculture by promoting sustainable practices, renewable energy integration, and eco-friendly exports. Morocco’s Minister of Agriculture views this as a chance to strengthen competitiveness in EU markets while enhancing environmental protection.",

// Food Quality Standards
"blog.food_quality_standards.title": "Food Quality Standards in Morocco: Guaranteeing Safety, Sustainability, and Global Competitiveness",
"blog.food_quality_standards.excerpt":
  "Morocco is committed to meeting international food safety standards through ISO certifications, traceability systems, and Good Agricultural Practices (GAP). These measures not only ensure the safety of exports but also build trust among global consumers and open new trade opportunities.",

// Oasis Irrigation Innovation
"blog.oasis_irrigation_innovation.title": "Oasis Irrigation Innovation in Morocco: Combining Tradition and Technology for a Sustainable Future",
"blog.oasis_irrigation_innovation.excerpt":
  "Morocco’s oases are adopting innovative irrigation systems—such as solar pumping, automated water distribution, and water-saving sensors—while preserving centuries-old techniques. This blend of tradition and technology protects biodiversity, supports local livelihoods, and strengthens climate resilience.",


    // Blog Categories
    "blog.category.nutrition": "Nutrition",
    "blog.category.farming": "Farming",
    "blog.category.sustainability": "Sustainability",
    "blog.category.recipes": "Recipes",
    "blog.category.business": "Business",
    "blog.category.seasonal": "Seasonal",
    
    // News Categories
    "news.category.trade": "Trade",
    "news.category.agriculture": "Agriculture",
    "news.category.economy": "Economy",
    
    // Morocco News Blog Posts
    "news.morocco.export.spain.q1_2025": "Morocco's Vegetable Exports to Spain Surge 24% in Q1 2025",
    "news.morocco.export.spain.q1_2025.excerpt": "Spanish imports of Moroccan fruits and vegetables surged by 24% in volume and 23% in value during Q1 2025 compared to Q1 2024, reaching 188,076 tons worth €481 million.",
    "news.morocco.global_export_growth.strategy": "Morocco Strengthens Global Position with Advanced Farming Strategy",
    "news.morocco.global_export_growth.strategy.excerpt": "Morocco ranks among the three fastest-growing agricultural exporters globally, driven by strategic adoption of advanced technologies that boost both productivity and sustainability.",
    "news.morocco.exports.rebound.2024_25": "Strong Recovery: Morocco's Exports Rebound 18% in 2024-2025 Season",
    "news.morocco.exports.rebound.2024_25.excerpt": "Morocco's fruit and vegetable exports rebounded strongly in the 2024-2025 season, climbing 18% year-on-year to reach 1.6 million tons with EU and UK accounting for 86% of exports.",
    "news.morocco.zucchini.switzerland": "Record Zucchini Exports: Morocco Strengthens Swiss Market Presence",
    "news.morocco.zucchini.switzerland.excerpt": "Morocco achieved a milestone in the Swiss market with zucchini exports surpassing 1,000 tons this season—a 25% increase over last year, now ranking among Switzerland's top seven suppliers.",

    // Blog Post Content (English)
    "blog.rainfall_impact_2024.content": "The exceptional rainfall of 2024 has transformed Morocco’s agricultural landscape, delivering a spectacular 41% increase in cereal harvest compared to the previous year. This remarkable achievement marks a turning point for Moroccan agriculture, coming after several consecutive years of severe drought that had tested farmers’ resilience and placed national food security at risk. The abundant precipitation was especially beneficial for Morocco’s traditional cereal-growing regions, including Gharb, Saïss, and Chaouia, where fertile soils and well-timed rainfall created ideal growing conditions. Reservoirs and dams reached historic filling levels, exceeding 80% of their capacity, ensuring optimal irrigation for agricultural lands throughout the growing season. Beyond the fields, the effects of this record harvest are already evident in both domestic and international markets. Locally, cereal prices have stabilized, providing direct relief to Moroccan consumers. On the global stage, the production surplus has enabled Morocco to increase cereal exports, strengthening its position in international trade and improving the country’s agricultural trade balance. Experts believe that this exceptional year offers valuable lessons for future agricultural policy. While favorable weather played a decisive role, the integration of modern irrigation systems, climate-resilient crop varieties, and sustainable farming practices will be crucial to maintaining productivity in the face of climate uncertainty. The 2024 season stands as proof that Morocco, with the right combination of natural conditions and strategic agricultural planning, can achieve both economic growth and food security. For farmers, policymakers, and traders, this year represents not only a milestone but also a call to invest in long-term resilience to ensure such successes can be repeated despite future climate challenges.",
    "blog.rainfall_impact_2024.keyPoints": "41% boost in cereal harvest compared to 2023, Record dam filling exceeding 80% of capacity, Significant strengthening of national food security, Stabilization of cereal prices in local markets, Improvement of Morocco's export position, Reduction in cereal import dependency",

    "blog.sand_to_green_oasis.content": "The revolutionary “From Sand to Orchards” project is radically transforming Morocco’s arid deserts into productive and sustainable agricultural zones. This ambitious regenerative agriculture initiative proves that even the most hostile lands can be converted into fertile oases, creating new economic and environmental opportunities for rural communities. At the heart of this transformation lies a sophisticated solar-powered pumping system paired with precision drip irrigation. Photovoltaic panels generate clean energy to extract water from deep aquifers, while drip systems deliver it directly to plant roots, drastically reducing waste. This efficient combination makes it possible to cultivate fruit trees and vegetables in regions where traditional farming methods were once unthinkable. Another key innovation is the use of biochar, a form of plant-based charcoal made from agricultural waste. This porous, nutrient-rich material improves desert soils by retaining water, enhancing nutrient availability, and creating a favorable environment for root development. Over time, biochar helps rebuild soil fertility and resilience, enabling crops to thrive even under extreme climatic conditions. The results have been nothing short of spectacular. Lush orchards and green landscapes now stand where only barren sand existed, restoring biodiversity, reducing desertification, and boosting local food production. Farmers benefit from increased yields, stable incomes, and access to new markets, while communities gain sustainable livelihoods.Beyond its agricultural impact, the “From Sand to Orchards” project serves as a model for climate adaptation in water-scarce regions worldwide. By integrating renewable energy, water-efficient irrigation, and soil regeneration, Morocco is proving that innovative farming techniques can turn environmental challenges into opportunities for growth and resilience.",
    "blog.sand_to_green_oasis.keyPoints": "Transformation of 100 hectares of desert into productive orchards, Solar pumping system powering drip irrigation, Use of biochar to regenerate desert soils, Creation of local jobs in disadvantaged rural areas, Production of high-quality organic fruits and vegetables, Reproducible model for other arid regions of Morocco",

    "blog.no_till_expansion.content": "Morocco is making a resolute commitment to the adoption of no-till farming, an innovative agricultural practice poised to transform the country’s farming landscape. Also known as conservation agriculture, this method involves cultivating crops without plowing or turning the soil, thereby preserving its natural structure and protecting beneficial microorganisms that are essential for healthy plant growth.In the Moroccan context, the benefits are particularly significant. By avoiding tillage, farmers greatly reduce soil erosion, a persistent challenge in mountainous and semi-arid regions. No-till practices also improve water retention, which is critical in a country where water scarcity is a growing concern due to climate change. These improvements not only protect agricultural land but also increase long-term productivity. Recognizing its potential, the Moroccan government has launched an ambitious national program to accelerate adoption. This includes subsidies for the purchase of specialized seeders adapted to no-till farming, as well as training programs delivered through regional agricultural centers. Farmers receive hands-on instruction in soil management, residue retention, and crop rotation techniques that enhance the effectiveness of no-till systems.The results are already promising. In pilot areas where no-till farming has been implemented, yields have increased by up to 15%, while input costs—such as fuel and labor—have been reduced. Moreover, the practice contributes to carbon sequestration, making it an important tool in Morocco’s strategy for climate change mitigation.As more farmers embrace this sustainable approach, Morocco positions itself as a regional leader in conservation agriculture. No-till farming not only offers a path toward greater food security but also helps safeguard the country’s natural resources for future generations.",
    "blog.no_till_expansion.keyPoints": "70% reduction in soil erosion due to absence of tillage, 30% water savings through better soil retention, 15% increase in yields in pilot areas, 25% reduction in production costs, Improvement of soil biodiversity, Training of 500 farmers in new techniques",

    "blog.green_deal_opportunity.content": "The European Green Deal offers Morocco a unique opportunity to modernize its agricultural sector and strengthen its competitive position in European markets. This ambitious European Union initiative aims to make Europe climate-neutral by 2050, introducing strict environmental standards for imports while also providing financial and technical support to trading partners willing to adapt.The Moroccan Minister of Agriculture has welcomed the Green Deal as a chance to transform the national agricultural model, aligning it with the highest international sustainability standards. While these new rules will require adjustments, they also open the door to premium market segments in Europe where consumers increasingly favor eco-certified and responsibly produced goods. Morocco is already recognized as a leader in sustainable agriculture in Africa, and the momentum is growing. Investments in green technologies, organic farming, and renewable energy are accelerating. Solar-powered irrigation systems, integrated pest management, and water-efficient farming techniques are becoming more widespread. Environmental certification is also gaining traction, with more Moroccan producers obtaining EU organic certification and other eco-labels that enhance trust and market access. This transition not only improves competitiveness but also stimulates rural employment, as green farming methods often require specialized skills. Beyond direct economic benefits, the alignment with the Green Deal strengthens Morocco’s trade relationship with the European Union, its largest export market for agricultural products. By embracing sustainable production, Morocco is well-positioned to capture a larger share of the EU’s growing demand for responsibly produced fruits, vegetables, and cereals.The European Green Deal is not just a regulatory challenge—it is a strategic opportunity for Morocco to secure long-term agricultural growth, enhance food security, and become a benchmark for sustainable farming in the Mediterranean region.",
    "blog.green_deal_opportunity.keyPoints": "40% increase in agricultural exports to the EU since 2020, 2 billion euro investment in sustainable agriculture, Organic certification of 15% of agricultural land, Creation of 50,000 green jobs in the agricultural sector, 30% reduction in CO2 emissions from the agricultural sector, Partnership agreements with 10 European countries",

    "blog.food_quality_standards.content": "In today’s competitive agri-food market, standards and quality have become essential to guaranteeing the safety and reliability of Moroccan food products. Morocco has implemented a comprehensive quality control system aligned with the strictest international requirements, including ISO standards and Good Agricultural Practices (GAP). The certification process begins at the very first stage of production. Farmers undergo strict controls on the use of pesticides, fertilizers, and seeds to ensure sustainable and safe farming. Continuous training programs help agricultural producers adopt best practices in crop management, irrigation efficiency, and pest control. Farms are subject to regular audits, allowing potential issues to be identified and addressed before they affect product quality. Morocco’s food safety infrastructure is backed by state-of-the-art laboratories equipped with advanced technology to detect contaminants, pesticide residues, and harmful pathogens. Every batch of exported products is tested under rigorous protocols, ensuring full compliance with the quality and safety standards required by global markets. Thanks to this proactive approach, Morocco has achieved a 99.5% compliance rate in its food exports—one of the highest in the region. This track record has strengthened trust among international buyers, positioning Moroccan products as high-quality and reliable in markets such as the European Union, the Middle East, and North America. The country’s commitment to quality also supports its broader strategy for agricultural competitiveness. By maintaining world-class standards, Morocco not only safeguards public health but also ensures the long-term sustainability and reputation of its agricultural exports. With global demand for safe, traceable, and eco-friendly food on the rise, Morocco’s rigorous approach to quality control stands as a competitive advantage, opening new opportunities in premium markets worldwide.",
    "blog.food_quality_standards.keyPoints": "99.5% compliance rate on export markets, ISO 22000 certification for 80% of exporting companies, Training of 10,000 farmers in good practices, 15 internationally accredited analysis laboratories, Complete traceability from farm to table, Mutual recognition agreements with 25 countries",

    "blog.oasis_irrigation_innovation.content": "Moroccan oases, emblematic treasures of the desert, are facing unprecedented threats due to climate change, dwindling water resources, and increasing demographic pressure, prompting the country to adopt an innovative preservation strategy that harmoniously blends advanced technology with ancestral know-how. At the heart of this transformation lies smart irrigation, a cutting-edge solution that employs soil sensors to monitor humidity, temperature, and salinity in real time, enabling precise water allocation according to the exact needs of each plant, thereby reducing consumption by up to 50% while boosting yields. This modern approach is complemented by the revival and modernization of traditional water management systems such as khettaras—ingenious underground galleries that capture and convey water—and seguias, open irrigation canals that distribute it to agricultural plots, now enhanced with filtration and flow-control mechanisms. Farmers, equipped with mobile applications, can remotely manage irrigation schedules and adjust water distribution instantly, ensuring optimal use of this vital resource while preventing waste. By integrating photovoltaic-powered pumping systems, these oases further embrace renewable energy, reducing their reliance on fossil fuels and ensuring a sustainable water supply. In addition, reforestation programs focusing on native drought-resistant species help stabilize soils, prevent desertification, and create microclimates conducive to biodiversity revival. Training programs and cooperative models empower local communities to adopt these innovations, fostering resilience while preserving the cultural heritage embedded in oasis agriculture. This hybrid approach—respecting time-tested traditions while leveraging modern science—has transformed once-vulnerable oases into resilient hubs of productivity, offering a model for arid-land agriculture worldwide and securing the future of Morocco’s desert jewels against the mounting pressures of the 21st century.",
    "blog.oasis_irrigation_innovation.keyPoints": "50% reduction in water consumption through smart irrigation, Modernization of 200 traditional khettaras, Installation of 1000 IoT sensors in oases, Training of 500 farmers in new technologies, Preservation of 50,000 hectares of oases, 30% increase in agricultural yields",

    "news.morocco.zucchini.switzerland.content": "In 2024, Morocco achieved a historic milestone in its agricultural export sector by recording unprecedented zucchini exports to Switzerland, a success that underlines the growing influence of Moroccan horticultural products in some of the most demanding European markets, driven by a powerful combination of superior quality, competitive pricing, and rigorous adherence to international health and safety standards; according to the latest figures from the Ministry of Agriculture, the volume of zucchinis shipped to Switzerland experienced robust double-digit growth, firmly positioning Morocco as one of the most reliable and preferred suppliers in this niche, a performance made possible through strategic investments in the modernization of cultivation techniques, the widespread adoption of optimized drip irrigation systems, and the strengthening of advanced traceability mechanisms designed to meet and exceed Switzerland’s stringent import criteria; Moroccan zucchinis, prized by Swiss distributors for their exceptional freshness, uniform sizing, and authentic flavor profile, also align perfectly with the surging consumer demand for sustainably produced and eco-friendly agricultural goods, a segment in which Morocco has been carving out a competitive advantage by increasingly integrating agroecological practices and environmentally responsible farming methods; beyond their commercial success, these exports carry profound socio-economic implications, particularly for key production regions such as Souss-Massa and Doukkala, where zucchini cultivation forms a central pillar of local agriculture, supporting thousands of livelihoods, stimulating rural economies, and contributing to the development of vital infrastructure; the sector’s expansion has also spurred the creation of numerous seasonal jobs, offering income opportunities for rural communities and fostering skills transfer in modern farming techniques; looking ahead, the outlook for 2025 remains highly promising, buoyed by rising European demand for off-season fresh vegetables and ongoing enhancements in Morocco’s cold chain logistics, transport efficiency, and export coordination, with the nation setting its sights on not only consolidating its already strong foothold in Switzerland but also diversifying its customer base across new high-value markets such as Germany and the Nordic countries, thereby reinforcing its role as a trusted year-round supplier of premium vegetables while simultaneously advancing its commitment to sustainable, high-performance agriculture that benefits both producers and consumers.",
    "news.morocco.zucchini.switzerland.keyPoints": "Record zucchini exports to Switzerland in 2024, Double-digit growth in exported volume, Positioning among the most reliable suppliers in the Swiss market, Investments in modernizing cultivation techniques, Optimization of drip irrigation and traceability, Economic opportunities for Souss-Massa and Doukkala regions",

    // Shop Page
    "shop.title": "Fresh Produce Shop",
    "shop.subtitle":
      "Browse our complete selection of premium organic fruits and vegetables, delivered fresh from our Moroccan farm to your doorstep",
    "shop.premiumQuality": "Premium Quality",
    "shop.fastDelivery": "Fast Delivery",
    "shop.freshProduce": "Fresh Produce",
    "shop.shop": "Shop",
    "shop.browseSelection": "Browse our complete selection of premium organic fruits and vegetables, delivered fresh from our Moroccan farm to your doorstep",
    "shop.categories": "Categories",
    "shop.priceRange": "Price Range",
    "shop.fruits": "Fruits",
    "shop.vegetables": "Vegetables",
    "shop.organic": "Organic",
    "shop.seasonal": "Seasonal",
    "shop.under5": "Under $5/kg",
    "shop.5to10": "$5 - $10/kg",
    "shop.10to20": "$10 - $20/kg",
    "shop.over20": "Over $20/kg",


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
    "hero.stats2Value": "18+",
    "hero.stats2Label": "Pays",

    // Why Choose Us
    "whyChoose.title": "Pourquoi Choisir MoroccoFresh?",
    "whyChoose.subtitle":
      "Votre partenaire de confiance pour les exportations agricoles en vrac du Maroc vers les marchés internationaux",
    "whyChoose.farmFresh": "Qualité Fraîche de la Ferme",
    "whyChoose.farmFreshDesc":
      "Directement de nos fermes biologiques certifiées dans les régions fertiles du Maroc",
    "whyChoose.international": "Standards Internationaux",
    "whyChoose.internationalDesc":
      "Certifications GlobalGAP, ISO 22000 et biologiques pour les marchés mondiaux",
    "whyChoose.worldwide": "Export Mondial",
    "whyChoose.worldwideDesc":
      "Expédition fiable vers tous les ports avec logistique à température contrôlée",
    "whyChoose.trusted": "Partenaire de Confiance",
    "whyChoose.trustedDesc":
      "15+ années au service des importateurs et distributeurs internationaux",

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
    "callToAction.quickResponseDescription":
      "Obtenez des devis sous 24h pour toutes demandes en vrac",
    "callToAction.directContactTitle": "Contact Direct",
    "callToAction.directContactDescription":
      "Parlez directement avec nos spécialistes export",
    "callToAction.customSolutionsTitle": "Solutions Personnalisées",
    "callToAction.customSolutionsDescription":
      "Emballage et logistique adaptés à vos besoins",

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
    "quality.farmSelectionDesc":
      "Sélection minutieuse du timing optimal de récolte basé sur les paramètres de qualité",
    "quality.inspection": "Inspection Qualité",
    "quality.inspectionDesc":
      "Contrôle qualité rigoureux et classement par inspecteurs certifiés",
    "quality.coldChain": "Chaîne du Froid",
    "quality.coldChainDesc":
      "Stockage frigorifique immédiat et manipulation à température contrôlée",
    "quality.exportReady": "Prêt Export",
    "quality.exportReadyDesc":
      "Contrôle qualité final et certification avant expédition internationale",

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
    "about.subtitle":
      "Trois générations de passion, tradition et innovation en agriculture durable",
    "about.yearsExperience": "70+",
    "about.yearsLabel": "Années d'Expérience",
    "about.hectares": "500",
    "about.hectaresLabel": "Hectares de Terre",
    "about.countriesServed": "50+",
    "about.countriesLabel": "Pays Desservis",
    "about.fromHumbleBeginnings": "Des Débuts Humbles à la Portée Mondiale",
    "about.storyParagraph1": "Notre parcours a commencé en 1952 lorsque mon grand-père, Hassan, a commencé à cultiver une petite parcelle de terre dans les vallées fertiles du Maroc. Avec rien d'autre que la détermination et un profond amour pour la terre, il a cultivé les meilleurs fruits et légumes que la région ait jamais vus.",
    "about.storyParagraph2": "Aujourd'hui, trois générations plus tard, nous continuons son héritage tout en adoptant des pratiques durables modernes. Notre ferme de 500 hectares fournit maintenant des produits biologiques premium aux clients de 50 pays, mais nous n'avons jamais oublié nos racines ou compromis la qualité.",
    "about.storyParagraph3": "Chaque fruit et légume qui quitte notre ferme porte avec lui le même soin, attention et amour que Hassan a mis dans sa première récolte il y a plus de 70 ans.",
    "about.threeGenerationsAlt": "Trois générations de notre famille agricole",
    "about.coreValues": "Nos Valeurs Fondamentales",
    "about.coreValuesDesc": "Ces principes guident tout ce que nous faisons, de la graine à la récolte jusqu'à votre table",
    "about.sustainability": "Durabilité",
    "about.sustainabilityDesc": "Nous utilisons des pratiques agricoles respectueuses de l'environnement qui protègent notre sol, notre eau et notre biodiversité pour les générations futures.",
    "about.familyTradition": "Tradition Familiale",
    "about.familyTraditionDesc": "Chaque décision que nous prenons honore l'héritage de notre famille tout en adoptant l'innovation et les meilleures pratiques modernes.",
    "about.qualityExcellence": "Excellence Qualité",
    "about.qualityExcellenceDesc": "Nous ne compromettons jamais la qualité. Chaque produit répond aux plus hauts standards internationaux avant d'atteindre nos clients.",
    "about.communityCare": "Soin Communautaire",
    "about.communityCareDesc": "Nous soutenons notre communauté locale en fournissant un emploi équitable et en investissant dans les infrastructures et l'éducation locales.",
    "about.globalResponsibility": "Responsabilité Mondiale",
    "about.globalResponsibilityDesc": "Nous croyons en un commerce mondial responsable qui profite à la fois à nos clients et à notre communauté agricole locale.",
    "about.reliableService": "Service Fiable",
    "about.reliableServiceDesc": "Nous garantissons une livraison ponctuelle et une qualité constante, construisant des partenariats à long terme avec nos clients du monde entier.",
    "about.sustainablePractices": "Pratiques Agricoles Durables",
    "about.sustainablePracticesDesc": "Nous nous engageons dans des méthodes agricoles qui protègent notre environnement tout en produisant les fruits et légumes de la plus haute qualité.",
    "about.waterConservation": "Conservation de l'Eau",
    "about.waterConservationDesc": "Les systèmes d'irrigation goutte à goutte avancés réduisent l'utilisation d'eau de 40% tout en assurant une hydratation optimale des plantes.",
    "about.organicCertification": "Certification Biologique",
    "about.organicCertificationDesc": "100% de pratiques biologiques certifiées sans pesticides ou engrais synthétiques.",
    "about.solarEnergy": "Énergie Solaire",
    "about.solarEnergyDesc": "Les panneaux solaires alimentent 80% de nos opérations agricoles, réduisant significativement notre empreinte carbone.",
    "about.soilHealth": "Santé du Sol",
    "about.soilHealthDesc": "La rotation des cultures et le compostage naturel maintiennent la fertilité du sol et préviennent l'érosion.",
    "about.sustainablePracticesAlt": "Pratiques agricoles durables sur notre ferme",
    "about.meetOurTeam": "Rencontrez Notre Équipe",
    "about.teamDesc": "Les personnes passionnées derrière le succès de notre ferme",
    "about.ahmedHassan": "Ahmed Hassan",
    "about.ahmedRole": "Propriétaire de Ferme & PDG",
    "about.ahmedDesc": "Agriculteur de troisième génération dirigeant nos initiatives d'agriculture durable et d'expansion mondiale.",
    "about.ahmedAlt": "Ahmed Hassan - Propriétaire de Ferme",
    "about.fatimaBenali": "Fatima Benali",
    "about.fatimaRole": "Ingénieure Agricole",
    "about.fatimaDesc": "Experte en pratiques agricoles durables et processus de certification biologique.",
    "about.fatimaAlt": "Fatima Benali - Ingénieure Agricole",
    "about.omarAlami": "Omar Alami",
    "about.omarRole": "Gestionnaire Export",
    "about.omarDesc": "Gère la logistique internationale et assure la livraison de qualité aux clients du monde entier.",
    "about.omarAlt": "Omar Alami - Gestionnaire Export",

    // Contact Page
    "contact.title": "Contactez-Nous",
    "contact.subtitle":
      "Prêt à commencer votre parcours de produits frais? Contactez-nous pour des commandes, partenariats ou toute question",
    "contact.quickResponse": "Réponse Rapide",
    "contact.partnershipReady": "Prêt pour Partenariat",
    "contact.requestB2BQuote": "Demander un Devis B2B",
    "contact.bulkOrdersDescription": "Vous cherchez des commandes en vrac ou un approvisionnement régulier? Obtenez un devis personnalisé pour vos besoins professionnels",
    "contact.visitOurFarm": "Visitez Notre Ferme",
    "contact.farmLocation": "Située dans les vallées fertiles d'Agadir, Maroc",
    "contact.mapPlaceholder": "L'intégration Google Maps irait ici",

    // Contact Form
    "contactForm.sendMessage": "Envoyez-nous un Message",
    "contactForm.fullName": "Nom Complet *",
    "contactForm.emailAddress": "Adresse Email *",
    "contactForm.phoneNumber": "Numéro de Téléphone",
    "contactForm.companyName": "Nom de l'Entreprise",
    "contactForm.subject": "Sujet *",
    "contactForm.selectSubject": "Sélectionnez un sujet",
    "contactForm.generalInquiry": "Demande Générale",
    "contactForm.productOrder": "Commande de Produit",
    "contactForm.partnershipOpportunity": "Opportunité de Partenariat",
    "contactForm.exportInformation": "Information Export",
    "contactForm.qualityConcern": "Problème de Qualité",
    "contactForm.other": "Autre",
    "contactForm.message": "Message *",
    "contactForm.messagePlaceholder": "Veuillez fournir des détails sur votre demande...",
    "contactForm.sendMessageButton": "Envoyer Message",

    // Contact Info
    "contactInfo.contactInformation": "Informations de Contact",
    "contactInfo.helpDescription": "Nous sommes là pour vous aider avec tous vos besoins en produits frais. Contactez-nous par l'un de ces canaux.",
    "contactInfo.farmLocation": "Emplacement de la Ferme",
    "contactInfo.farmAddress": "Route de Taroudant, Km 15\nAgadir 80000, Maroc",
    "contactInfo.phoneNumbers": "Numéros de Téléphone",
    "contactInfo.mainPhone": "Principal: +212 528 123 456",
    "contactInfo.exportPhone": "Export: +212 661 234 567",
    "contactInfo.whatsapp": "WhatsApp",
    "contactInfo.whatsappNumber": "+212 661 234 567",
    "contactInfo.whatsappAvailable": "Disponible 24h/24 pour les demandes urgentes",
    "contactInfo.emailAddresses": "Adresses Email",
    "contactInfo.generalEmail": "Général: info@freshfarm.ma",
    "contactInfo.salesEmail": "Ventes: sales@freshfarm.ma",
    "contactInfo.exportEmail": "Export: export@freshfarm.ma",
    "contactInfo.businessHours": "Heures d'Ouverture",
    "contactInfo.weekdays": "Lundi - Vendredi: 8h00 - 18h00",
    "contactInfo.saturday": "Samedi: 9h00 - 16h00",
    "contactInfo.sunday": "Dimanche: Fermé",
    "contactInfo.languages": "Langues",
    "contactInfo.languagesList": "Arabe, Français, Anglais",
    "contactInfo.spanishExport": "Espagnol (équipe export)",

    // Quote Form
    "quoteForm.b2bQuoteRequest": "Demande de Devis B2B",
    "quoteForm.companyName": "Nom de l'Entreprise *",
    "quoteForm.contactPerson": "Personne de Contact *",
    "quoteForm.businessEmail": "Email Professionnel *",
    "quoteForm.phoneNumber": "Numéro de Téléphone *",
    "quoteForm.deliveryCountry": "Pays de Livraison *",
    "quoteForm.selectDeliveryCountry": "Sélectionnez le pays de livraison",
    "quoteForm.france": "France",
    "quoteForm.spain": "Espagne",
    "quoteForm.germany": "Allemagne",
    "quoteForm.uk": "Royaume-Uni",
    "quoteForm.netherlands": "Pays-Bas",
    "quoteForm.uae": "Émirats Arabes Unis",
    "quoteForm.other": "Autre",
    "quoteForm.productsOfInterest": "Produits d'Intérêt *",
    "quoteForm.freshOranges": "Oranges Fraîches",
    "quoteForm.organicTomatoes": "Tomates Biologiques",
    "quoteForm.freshAvocados": "Avocats Frais",
    "quoteForm.bellPeppers": "Poivrons",
    "quoteForm.freshLemons": "Citrons Frais",
    "quoteForm.organicCarrots": "Carottes Biologiques",
    "quoteForm.seasonalFruits": "Fruits de Saison",
    "quoteForm.mixedVegetables": "Légumes Mixtes",
    "quoteForm.expectedQuantity": "Quantité Attendue (kg/mois)",
    "quoteForm.selectQuantityRange": "Sélectionnez la plage de quantité",
    "quoteForm.quantity100500": "100 - 500 kg",
    "quoteForm.quantity5001000": "500 - 1 000 kg",
    "quoteForm.quantity10005000": "1 000 - 5 000 kg",
    "quoteForm.quantity500010000": "5 000 - 10 000 kg",
    "quoteForm.quantity10000plus": "10 000+ kg",
    "quoteForm.deliveryFrequency": "Fréquence de Livraison",
    "quoteForm.selectFrequency": "Sélectionnez la fréquence",
    "quoteForm.weekly": "Hebdomadaire",
    "quoteForm.biweekly": "Bi-hebdomadaire",
    "quoteForm.monthly": "Mensuel",
    "quoteForm.seasonal": "Saisonnier",
    "quoteForm.oneTime": "Commande unique",
    "quoteForm.specialRequirements": "Exigences Spéciales",
    "quoteForm.requirementsPlaceholder": "Veuillez spécifier tout emballage spécial, certification ou exigences de livraison...",
    "quoteForm.agreeTerms": "J'accepte les conditions générales et la politique de confidentialité *",
    "quoteForm.requestQuote": "Demander Devis",

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
    "blog.showingArticles": "Affichage de {start}-{end} sur {count} articles",
    "blog.readMore": "Lire Plus →",
    "blog.pageInfo": "Page {current} sur {total}",
    "blog.previous": "Précédent",
    "blog.next": "Suivant",
    "blog.search": "Rechercher",
    "blog.searchPlaceholder": "Rechercher des articles...",
    "blog.categories": "Catégories",
    "blog.recentPosts": "Articles Récents",
    "blog.tags": "Tags",
    "blog.newsletter": "Newsletter",
    "blog.newsletterDesc":
      "Recevez les dernières mises à jour de notre ferme directement dans votre boîte mail.",
    "blog.emailPlaceholder": "Votre adresse email",
    "blog.subscribe": "S'abonner",
    "blog.readTime": "{time} min de lecture",
    "blog.backToBlog": "Retour au Blog",
    "blog.backToAllPosts": "Retour à Tous les Articles",
    "blog.blogPostNotFound": "Article de Blog Non Trouvé",
    "blog.postNotFoundMessage": "L'article de blog que vous recherchez n'existe pas.",
    "blog.relatedPosts": "Articles Connexes",
    "blog.keyPoints": "Points Clés",
    "blog.loading": "Chargement...",
    
    // Blog Posts Content
    "blog.rainfall_impact_2024.title": "Pluies exceptionnelles 2024 : un bond de 41 % dans la récolte de céréales au Maroc",
    "blog.rainfall_impact_2024.excerpt":
      "Découvrez comment les pluies abondantes de 2024 ont stimulé la production céréalière marocaine, renforçant la sécurité alimentaire et redonnant espoir aux agriculteurs.",

    "blog.sand_to_green_oasis.title": "Du sable aux vergers : l’agriculture régénérative transforme le désert marocain",
    "blog.sand_to_green_oasis.excerpt":
      "Pompage solaire, irrigation goutte à goutte et biochar : comment le projet Sand to Green redonne vie aux terres arides du Maroc.",

    "blog.no_till_expansion.title": "Agriculture sans labour : le Maroc s’engage pour la résilience climatique",
    "blog.no_till_expansion.excerpt":
      "Le Maroc investit dans l’agriculture sans labour pour économiser l’eau, réduire l’érosion et accroître la productivité durablement.",

    "blog.green_deal_opportunity.title": "Green Deal européen : une opportunité pour moderniser l’agriculture marocaine",
    "blog.green_deal_opportunity.excerpt":
      "Le ministre marocain de l’Agriculture voit dans le Green Deal une chance de renforcer la durabilité et la compétitivité sur les marchés de l’UE.",

    "blog.food_quality_standards.title": "Normes et qualité : garantir la sécurité des produits alimentaires marocains",
    "blog.food_quality_standards.excerpt":
      "Des normes ISO aux bonnes pratiques agricoles, découvrez comment le Maroc assure la conformité de ses exportations aux standards mondiaux.",

    "blog.oasis_irrigation_innovation.title": "Oasis et innovation : l’irrigation intelligente au service de la durabilité",
    "blog.oasis_irrigation_innovation.excerpt":
      "Nouvelles techniques d’irrigation et savoir-faire traditionnel se combinent pour préserver les oasis marocaines face au changement climatique.",


    // Blog Categories
    "blog.category.nutrition": "Nutrition",
    "blog.category.farming": "Agriculture",
    "blog.category.sustainability": "Durabilité",
    "blog.category.recipes": "Recettes",
    "blog.category.business": "Entreprise",
    "blog.category.seasonal": "Saisonnier",
    
    // News Categories
    "news.category.trade": "Commerce",
    "news.category.agriculture": "Agriculture",
    "news.category.economy": "Économie",
    
    // Morocco News Blog Posts
    "news.morocco.export.spain.q1_2025": "Les Exportations Marocaines de Légumes vers l'Espagne Augmentent de 24% au T1 2025",
    "news.morocco.export.spain.q1_2025.excerpt": "Les importations espagnoles de fruits et légumes marocains ont augmenté de 24% en volume et 23% en valeur au T1 2025 par rapport au T1 2024, atteignant 188 076 tonnes pour 481 millions d'euros.",
    "news.morocco.global_export_growth.strategy": "Le Maroc Renforce sa Position Mondiale avec une Stratégie Agricole Avancée",
    "news.morocco.global_export_growth.strategy.excerpt": "Le Maroc se classe parmi les trois exportateurs agricoles à la croissance la plus rapide au monde, grâce à l'adoption stratégique de technologies avancées qui stimulent productivité et durabilité.",
    "news.morocco.exports.rebound.2024_25": "Forte Reprise: Les Exportations Marocaines Rebondissent de 18% en 2024-2025",
    "news.morocco.exports.rebound.2024_25.excerpt": "Les exportations marocaines de fruits et légumes ont rebondi fortement en 2024-2025, augmentant de 18% en glissement annuel pour atteindre 1,6 million de tonnes, l'UE et le Royaume-Uni représentant 86% des exportations.",
    "news.morocco.zucchini.switzerland": "Exportations Record de Courgettes: Le Maroc Renforce sa Présence sur le Marché Suisse",
    "news.morocco.zucchini.switzerland.excerpt": "Le Maroc a atteint un jalon sur le marché suisse avec des exportations de courgettes dépassant 1 000 tonnes cette saison—une augmentation de 25% par rapport à l'année dernière, se classant maintenant parmi les sept premiers fournisseurs de la Suisse.",

    // Blog Post Content (French)
    "blog.rainfall_impact_2024.content": "Les pluies exceptionnelles de 2024 ont transformé le paysage agricole marocain, apportant un bond spectaculaire de 41% dans la récolte de céréales. Cette année record a marqué un tournant majeur pour l'agriculture nationale, après plusieurs années de sécheresse qui avaient mis à rude épreuve les agriculteurs et menacé la sécurité alimentaire du pays. Les précipitations abondantes ont particulièrement bénéficié aux régions céréalières traditionnelles du Maroc : le Gharb, le Saïss, et la Chaouia. Les barrages ont atteint des niveaux de remplissage historiques, dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.",
    "blog.rainfall_impact_2024.keyPoints": "Bond de 41% dans la récolte de céréales par rapport à 2023, Remplissage record des barrages à plus de 80% de leur capacité, Renforcement significatif de la sécurité alimentaire nationale, Stabilisation des prix des céréales sur les marchés locaux, Amélioration de la position d'exportation du Maroc, Réduction de la dépendance aux importations de céréales",

    "blog.sand_to_green_oasis.content": "Le projet révolutionnaire 'Du sable aux vergers' transforme radicalement le désert marocain grâce à l'agriculture régénérative. Cette initiative innovante démontre comment les terres arides peuvent être converties en vergers productifs, créant ainsi de nouvelles opportunités agricoles dans des zones autrefois considérées comme stériles. Au cœur de cette transformation se trouve un système de pompage solaire sophistiqué qui alimente une irrigation goutte à goutte de précision. Les panneaux photovoltaïques fournissent l'énergie nécessaire pour extraire l'eau des nappes phréatiques profondes, tandis que l'irrigation goutte à goutte optimise l'utilisation de cette ressource précieuse. Cette combinaison technologique permet de cultiver des arbres fruitiers et des légumes dans des zones où l'agriculture traditionnelle était impossible. L'utilisation innovante du biochar, un charbon végétal produit à partir de déchets agricoles, améliore considérablement la qualité des sols désertiques. Ce matériau poreux retient l'eau et les nutriments, créant un environnement favorable au développement des racines et à la croissance des plantes. Les résultats sont spectaculaires : des oasis verdoyantes émergent là où il n'y avait que du sable, redonnant vie aux terres arides du Maroc.",
    "blog.sand_to_green_oasis.keyPoints": "Transformation de 100 hectares de désert en vergers productifs, Système de pompage solaire alimentant l'irrigation goutte à goutte, Utilisation du biochar pour régénérer les sols désertiques, Création d'emplois locaux dans les zones rurales défavorisées, Production de fruits et légumes biologiques de haute qualité, Modèle reproductible pour d'autres régions arides du Maroc",

    "blog.no_till_expansion.content": "Le Maroc s'engage résolument dans l'adoption de l'agriculture sans labour, une pratique innovante qui promet de révolutionner le secteur agricole national. Cette approche, également connue sous le nom de 'no-till farming', consiste à cultiver sans retourner le sol, préservant ainsi sa structure naturelle et ses micro-organismes bénéfiques. Les avantages de cette méthode sont multiples et particulièrement pertinents dans le contexte marocain. En évitant le labour, les agriculteurs réduisent considérablement l'érosion des sols, un problème majeur dans les régions montagneuses et semi-arides du pays. De plus, cette pratique améliore la rétention d'eau dans le sol, un facteur crucial dans un pays où les ressources hydriques sont limitées. Le gouvernement marocain a lancé un programme ambitieux de formation et d'équipement pour accompagner les agriculteurs dans cette transition. Des subventions sont accordées pour l'achat de semoirs spécialisés, et des centres de formation régionaux dispensent des cours sur les techniques de l'agriculture sans labour. Les premiers résultats sont encourageants, avec une augmentation de 15% des rendements dans les zones pilotes.",
    "blog.no_till_expansion.keyPoints": "Réduction de 70% de l'érosion des sols grâce à l'absence de labour, Économie d'eau de 30% grâce à une meilleure rétention dans le sol, Augmentation de 15% des rendements dans les zones pilotes, Réduction des coûts de production de 25%, Amélioration de la biodiversité des sols, Formation de 500 agriculteurs aux nouvelles techniques",

    "blog.green_deal_opportunity.content": "Le Green Deal européen représente une opportunité unique pour le Maroc de moderniser son secteur agricole et de renforcer sa position sur les marchés européens. Cette initiative ambitieuse de l'Union européenne vise à rendre l'Europe climatiquement neutre d'ici 2050, créant ainsi de nouvelles exigences et opportunités pour les partenaires commerciaux. Le ministre marocain de l'Agriculture a salué cette initiative comme une chance de transformer le secteur agricole national. Le Green Deal impose des standards environnementaux stricts pour les importations, mais offre également un soutien financier et technique pour aider les pays partenaires à s'adapter à ces nouvelles exigences. Le Maroc, déjà leader dans l'agriculture durable en Afrique, est bien positionné pour bénéficier de ces opportunités. Les investissements dans les technologies vertes, l'agriculture biologique et les énergies renouvelables s'accélèrent au Maroc. Les agriculteurs adoptent des pratiques plus durables, et les entreprises investissent dans la certification environnementale. Cette transition crée de nouveaux emplois et améliore la compétitivité des produits marocains sur les marchés européens.",
    "blog.green_deal_opportunity.keyPoints": "Augmentation de 40% des exportations agricoles vers l'UE depuis 2020, Investissement de 2 milliards d'euros dans l'agriculture durable, Certification biologique de 15% des terres agricoles, Création de 50 000 emplois verts dans le secteur agricole, Réduction de 30% des émissions de CO2 du secteur agricole, Accords de partenariat avec 10 pays européens",

    "blog.food_quality_standards.content": "Les normes et la qualité sont devenues des priorités absolues pour garantir la sécurité des produits alimentaires marocains. Le Maroc a mis en place un système rigoureux de contrôle qualité qui s'appuie sur les normes internationales les plus strictes, notamment les normes ISO et les bonnes pratiques agricoles (GAP). Le processus de certification commence dès la production, avec des contrôles stricts sur l'utilisation des pesticides, des engrais et des semences. Les agriculteurs reçoivent une formation continue sur les bonnes pratiques agricoles, et leurs exploitations font l'objet d'audits réguliers. Cette approche proactive permet d'identifier et de corriger les problèmes avant qu'ils n'affectent la qualité des produits. Les laboratoires d'analyse alimentaire du Maroc sont équipés des technologies les plus avancées pour détecter les contaminants, les résidus de pesticides et les agents pathogènes. Chaque lot de produits exportés est analysé selon des protocoles stricts, garantissant la conformité aux standards internationaux. Cette rigueur a permis au Maroc de maintenir un taux de conformité de 99,5% sur les marchés d'exportation.",
    "blog.food_quality_standards.keyPoints": "Taux de conformité de 99,5% sur les marchés d'exportation, Certification ISO 22000 pour 80% des entreprises exportatrices, Formation de 10 000 agriculteurs aux bonnes pratiques, 15 laboratoires d'analyse accrédités internationalement, Traçabilité complète de la ferme à la table, Accords de reconnaissance mutuelle avec 25 pays",

    "blog.oasis_irrigation_innovation.content": "Les oasis marocaines, véritables joyaux du désert, font face à des défis sans précédent liés au changement climatique et à la pression démographique. Pour préserver ces écosystèmes uniques, le Maroc développe des solutions innovantes qui combinent technologies modernes et savoir-faire traditionnel séculaire. L'irrigation intelligente représente l'innovation la plus prometteuse pour la survie des oasis. Des capteurs installés dans le sol mesurent en temps réel l'humidité, la température et la salinité, permettant d'optimiser l'utilisation de l'eau selon les besoins précis de chaque plante. Cette technologie, couplée à l'irrigation goutte à goutte, réduit la consommation d'eau de 50% tout en améliorant les rendements. Les techniques traditionnelles d'irrigation, comme les khettaras (galeries souterraines) et les seguias (canaux d'irrigation), sont modernisées et intégrées dans un système de gestion intelligente de l'eau. Les agriculteurs utilisent des applications mobiles pour contrôler l'irrigation à distance, optimisant ainsi l'utilisation de cette ressource précieuse. Cette approche hybride respecte les traditions tout en adoptant les innovations modernes.",
    "blog.oasis_irrigation_innovation.keyPoints": "Réduction de 50% de la consommation d'eau grâce à l'irrigation intelligente, Modernisation de 200 khettaras traditionnelles, Installation de 1000 capteurs IoT dans les oasis, Formation de 500 agriculteurs aux nouvelles technologies, Préservation de 50 000 hectares d'oasis, Augmentation de 30% des rendements agricoles",

    "news.morocco.zucchini.switzerland.content": "En 2024, le Maroc a franchi une nouvelle étape dans le secteur des exportations agricoles en réalisant des exportations record de courgettes vers la Suisse. Cette performance confirme la montée en puissance des produits maraîchers marocains sur les marchés européens exigeants, grâce à une combinaison gagnante : qualité, compétitivité et respect des normes sanitaires internationales. Selon les dernières données du ministère de l'Agriculture, le volume exporté vers la Suisse a connu une croissance à deux chiffres, positionnant le Maroc parmi les fournisseurs les plus fiables de ce marché. Cette progression est le résultat d'investissements stratégiques dans la modernisation des techniques de culture, l'optimisation de l'irrigation goutte-à-goutte et le renforcement des systèmes de traçabilité pour répondre aux critères stricts helvétiques. Les courgettes marocaines séduisent les distributeurs suisses par leur fraîcheur, leur calibre régulier et leur saveur authentique. Elles répondent aussi à une demande croissante pour des produits cultivés de manière durable, un segment où le Maroc se distingue de plus en plus grâce à l'intégration de pratiques agroécologiques et éco-responsables. Au-delà de la performance commerciale, ces exportations représentent une opportunité économique majeure pour les producteurs marocains, notamment dans les régions du Souss-Massa et de Doukkala, où la culture de la courgette est un pilier agricole. Elles contribuent également à la création d'emplois saisonniers et au développement des infrastructures rurales. Les perspectives pour 2025 s'annoncent prometteuses. Avec la hausse de la demande en Europe pour des légumes frais hors saison, et l'amélioration continue des chaînes logistiques, le Maroc ambitionne de consolider sa position et de diversifier ses débouchés, notamment vers l'Allemagne et les pays nordiques.",
    "news.morocco.zucchini.switzerland.keyPoints": "Exportations record de courgettes vers la Suisse en 2024, Croissance à deux chiffres du volume exporté, Positionnement parmi les fournisseurs les plus fiables du marché suisse, Investissements dans la modernisation des techniques de culture, Optimisation de l'irrigation goutte-à-goutte et traçabilité, Opportunités économiques pour les régions du Souss-Massa et Doukkala",

    // Shop Page
    "shop.title": "Boutique de Produits Frais",
    "shop.subtitle":
      "Parcourez notre sélection complète de fruits et légumes biologiques premium, livrés frais de notre ferme marocaine à votre porte",
    "shop.premiumQuality": "Qualité Premium",
    "shop.fastDelivery": "Livraison Rapide",
    "shop.freshProduce": "Produits Frais",
    "shop.shop": "Boutique",
    "shop.browseSelection": "Parcourez notre sélection complète de fruits et légumes biologiques premium, livrés frais de notre ferme marocaine à votre porte",
    "shop.categories": "Catégories",
    "shop.priceRange": "Fourchette de Prix",
    "shop.fruits": "Fruits",
    "shop.vegetables": "Légumes",
    "shop.organic": "Biologique",
    "shop.seasonal": "Saisonnier",
    "shop.under5": "Moins de 5€/kg",
    "shop.5to10": "5€ - 10€/kg",
    "shop.10to20": "10€ - 20€/kg",
    "shop.over20": "Plus de 20€/kg",


  },
};

// Server-side translation function
export function getTranslation(key: TranslationKey, language: string = "en"): string {
  return translations[language]?.[key] || translations["en"][key] || key
}

export function useTranslation() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener(
      "languageChange",
      handleLanguageChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "languageChange",
        handleLanguageChange as EventListener
      );
    };
  }, []);

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations["en"][key] || key;
  };

  return { t, language };
}
