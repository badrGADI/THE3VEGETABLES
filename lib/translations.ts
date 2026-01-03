
export type TranslationKey = string;
export type Translations = Record<string, Record<string, string>>;



export const translations: Translations = {
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
    "whyChoose.title": "Why Choose The 3 Vegetables?",
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
    companyName: "The 3 Vegetables",
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
    phoneNumber: "+212 654 352 802",
    email: "info@the-3rocks.com",
    copyright: "© 2025 MoroccoFresh Agricultural Export. All rights reserved.",
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
    "about.storyParagraph1":
      "Our journey began in 1952 when my grandfather, Molay Ahmed, started cultivating a small plot of land in the fertile valleys of Morocco. With nothing but determination and a deep love for the earth, he grew the finest fruits and vegetables the region had ever seen.",
    "about.storyParagraph2":
      "Today, three generations later, we continue his legacy while embracing modern sustainable practices. Our 500-hectare farm now supplies premium organic produce to customers across 50 countries, but we've never forgotten our roots or compromised on quality.",
    "about.storyParagraph3":
      "Every fruit and vegetable that leaves our farm carries with it the same care, attention, and love that Molay Ahmed put into his first harvest over 70 years ago.",
    "about.threeGenerationsAlt": "Three generations of our farming family",
    "about.coreValues": "Our Core Values",
    "about.coreValuesDesc":
      "These principles guide everything we do, from seed to harvest to your table",
    "about.sustainability": "Sustainability",
    "about.sustainabilityDesc":
      "We use eco-friendly farming practices that protect our soil, water, and biodiversity for future generations.",
    "about.familyTradition": "Family Tradition",
    "about.familyTraditionDesc":
      "Every decision we make honors our family's legacy while embracing innovation and modern best practices.",
    "about.qualityExcellence": "Quality Excellence",
    "about.qualityExcellenceDesc":
      "We never compromise on quality. Every product meets the highest international standards before it reaches our customers.",
    "about.communityCare": "Community Care",
    "about.communityCareDesc":
      "We support our local community by providing fair employment and investing in local infrastructure and education.",
    "about.globalResponsibility": "Global Responsibility",
    "about.globalResponsibilityDesc":
      "We believe in responsible global trade that benefits both our customers and our local farming community.",
    "about.reliableService": "Reliable Service",
    "about.reliableServiceDesc":
      "We guarantee timely delivery and consistent quality, building long-term partnerships with our customers worldwide.",
    "about.sustainablePractices": "Sustainable Farming Practices",
    "about.sustainablePracticesDesc":
      "We're committed to farming methods that protect our environment while producing the highest quality fruits and vegetables.",
    "about.waterConservation": "Water Conservation",
    "about.waterConservationDesc":
      "Advanced drip irrigation systems reduce water usage by 40% while ensuring optimal plant hydration.",
    "about.organicCertification": "Organic Certification",
    "about.organicCertificationDesc":
      "100% certified organic practices with no synthetic pesticides or fertilizers.",
    "about.solarEnergy": "Solar Energy",
    "about.solarEnergyDesc":
      "Solar panels power 80% of our farm operations, reducing our carbon footprint significantly.",
    "about.soilHealth": "Soil Health",
    "about.soilHealthDesc":
      "Crop rotation and natural composting maintain soil fertility and prevent erosion.",
    "about.sustainablePracticesAlt":
      "Sustainable farming practices on our farm",
    "about.meetOurTeam": "Meet Our Team",
    "about.teamDesc": "The passionate people behind our farm's success",
    "about.badrGadi": "Badr GADI",
    "about.ahmedRole": "Farm Owner & CEO",
    "about.ahmedDesc":
      "Third-generation farmer leading our sustainable agriculture initiatives and global expansion.",
    "about.ahmedAlt": "Badr GADI - Farm Owner",
    "about.ayoubElouazzani": "Ayoub ELOUAZZANI",
    "about.ayoubRole": "Agricultural Engineer",
    "about.ayoubDesc":
      "Expert in sustainable farming practices and organic certification processes.",
    "about.ayoubAlt": "Ayoub ELOUAZZANI - Agricultural Engineer",
    "about.ahmedGadi": "Ahmed GADI",
    "about.ahmedGadiRole": "Export Manager",
    "about.ahmedGadiDesc":
      "Manages international logistics and ensures quality delivery to customers worldwide.",
    "about.ahmedGadiAlt": "Ahmed GADI - Export Manager",

    // Contact Page
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Ready to start your fresh produce journey? Contact us for orders, partnerships, or any questions",
    "contact.quickResponse": "Quick Response",
    "contact.partnershipReady": "Partnership Ready",
    "contact.requestB2BQuote": "Request a B2B Quote",
    "contact.bulkOrdersDescription":
      "Looking for bulk orders or regular supply? Get a customized quote for your business needs",
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
    "contactForm.messagePlaceholder":
      "Please provide details about your inquiry...",
    "contactForm.sendMessageButton": "Send Message",

    // Contact Info
    "contactInfo.contactInformation": "Contact Information",
    "contactInfo.helpDescription":
      "We're here to help with all your fresh produce needs. Reach out to us through any of these channels.",
    "contactInfo.farmLocation": "Farm Location",
    "contactInfo.farmAddress":
      "Route de Taroudant, Km 15\nAgadir 80000, Morocco",
    "contactInfo.phoneNumbers": "Phone Numbers",
    "contactInfo.mainPhone": "Main: +212 654 352 802",
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
    "quoteForm.requirementsPlaceholder":
      "Please specify any special packaging, certification, or delivery requirements...",
    "quoteForm.agreeTerms":
      "I agree to the terms and conditions and privacy policy *",
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
    "blog.postNotFoundMessage":
      "The blog post you're looking for doesn't exist.",
    "blog.relatedPosts": "Related Posts",
    "blog.keyPoints": "Key Points",
    "blog.loading": "Loading...",

    // Blog Posts Content
    // Blog Posts Content (English)
    // // Blog Posts Content (English - SEO Optimized & Detailed)

    // Exceptional Rainfall in 2024
    "blog.rainfall_impact_2024.title":
      "Exceptional Rainfall in 2024: A 41% Boost in Morocco’s Cereal Harvest and Food Security",
    "blog.rainfall_impact_2024.excerpt":
      "In 2024, Morocco experienced record-breaking rainfall, increasing cereal production by 41%. This exceptional agricultural season not only strengthened national food security but also revived hope for farmers after years of drought. Discover the regions that benefited most, the economic impact, and how this climate event may influence the next planting season.",

    // Regenerative Farming in the Moroccan Desert
    "blog.sand_to_green_oasis.title":
      "From Sand to Orchards: Regenerative Farming Transforms Morocco’s Desert into Green Oases",
    "blog.sand_to_green_oasis.excerpt":
      "Thanks to regenerative agriculture techniques such as solar-powered water pumping, precision drip irrigation, and biochar soil enrichment, the 'Sand to Green' project is turning Morocco’s arid desert into fertile orchards. Learn how this sustainable approach is combating desertification, creating jobs, and supporting rural communities.",

    // No-Till Farming
    "blog.no_till_expansion.title":
      "No-Till Farming in Morocco: A Strategic Step Toward Water Conservation and Climate Resilience",
    "blog.no_till_expansion.excerpt":
      "Morocco is scaling up no-till farming practices to preserve soil moisture, prevent erosion, and reduce fuel consumption in agriculture. This climate-smart approach not only improves crop yields but also plays a vital role in adapting to water scarcity and increasing long-term agricultural sustainability.",

    // European Green Deal
    "blog.green_deal_opportunity.title":
      "European Green Deal: A Historic Opportunity to Modernize and Sustain Morocco’s Agriculture",
    "blog.green_deal_opportunity.excerpt":
      "The European Green Deal opens new horizons for Moroccan agriculture by promoting sustainable practices, renewable energy integration, and eco-friendly exports. Morocco’s Minister of Agriculture views this as a chance to strengthen competitiveness in EU markets while enhancing environmental protection.",

    // Food Quality Standards
    "blog.food_quality_standards.title":
      "Food Quality Standards in Morocco: Guaranteeing Safety, Sustainability, and Global Competitiveness",
    "blog.food_quality_standards.excerpt":
      "Morocco is committed to meeting international food safety standards through ISO certifications, traceability systems, and Good Agricultural Practices (GAP). These measures not only ensure the safety of exports but also build trust among global consumers and open new trade opportunities.",

    // Oasis Irrigation Innovation
    "blog.oasis_irrigation_innovation.title":
      "Oasis Irrigation Innovation in Morocco: Combining Tradition and Technology for a Sustainable Future",
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
    "news.morocco.export.spain.q1_2025":
      "Morocco's Vegetable Exports to Spain Surge 24% in Q1 2025",
    "news.morocco.export.spain.q1_2025.excerpt":
      "Spanish imports of Moroccan fruits and vegetables surged by 24% in volume and 23% in value during Q1 2025 compared to Q1 2024, reaching 188,076 tons worth €481 million.",
    "news.morocco.global_export_growth.strategy":
      "Morocco Strengthens Global Position with Advanced Farming Strategy",
    "news.morocco.global_export_growth.strategy.excerpt":
      "Morocco ranks among the three fastest-growing agricultural exporters globally, driven by strategic adoption of advanced technologies that boost both productivity and sustainability.",
    "news.morocco.exports.rebound.2024_25":
      "Strong Recovery: Morocco's Exports Rebound 18% in 2024-2025 Season",
    "news.morocco.exports.rebound.2024_25.excerpt":
      "Morocco's fruit and vegetable exports rebounded strongly in the 2024-2025 season, climbing 18% year-on-year to reach 1.6 million tons with EU and UK accounting for 86% of exports.",

    // Blog 7 Full Content & Key Points
    "news.morocco.export.spain.q1_2025.content":
      "In the first quarter of 2025, Morocco’s fruit and vegetable exports to Spain experienced exceptional momentum, solidifying the Kingdom’s position as a key player in the European fresh produce market. Spanish imports of Moroccan produce reached 188,076 tons worth €481 million, representing a 24% increase in volume and a 23% rise in value compared to Q1 2024. This performance is part of a steady upward trend since 2021, when exports stood at 156,229 tons valued at €311 million, marking a four-year growth of over 20% in volume and 54% in value.\n\nTomatoes emerged as the star product, with exports surging 34% in volume to 32,313 tons and their value jumping more than 57% to over €52 million. Peppers maintained strong performance, with exports exceeding 32,000 tons (down just 2% in volume) but gaining 4% in value to reach €42 million. Green beans, however, saw a downturn, falling 17% in volume and 12% in value to €42 million.\n\nAt the European Union level, Morocco’s exports also rose significantly, reaching 512,689 tons (+9%) and a record €1.121 billion in value (+14%) in Q1 2025. While tomato shipments to the EU fell 10% in volume to about 188,000 tons, their value remained steady at €369 million thanks to higher prices. Peppers recorded a 7% increase in value despite a slight decline in tonnage, and avocados achieved an exceptional leap — volumes doubled to 62,368 tons and value soared by 79% to €176.7 million.\n\nThe surge is fueled by Morocco’s geographical proximity, efficient logistics, and competitive pricing, combined with an increasing focus on quality and compliance with EU standards. Between January and May 2025, Morocco became Spain’s top supplier by value, delivering €834 million worth of fresh produce — a 30% year-on-year increase — even though France remained ahead in total volume.\n\nHowever, this success is not without challenges. Spanish farmers have expressed growing concerns over what they view as unfair competition stemming from the EU-Morocco trade agreement, claiming it puts downward pressure on local prices. These tensions have led to protests, lobbying for stricter import controls, and even incidents of vandalism targeting Moroccan delivery trucks in Spain. On the Moroccan side, the rapid expansion of agricultural exports is adding pressure on water resources, as the country continues to face severe droughts and declining reservoir levels. Policymakers and producers are therefore being urged to invest in modern irrigation systems, desalination projects, and sustainable farming practices to ensure that export growth does not come at the expense of long-term environmental stability.\n\nOverall, the Q1 2025 figures highlight Morocco’s growing dominance in Spain’s and the EU’s fresh produce markets, with tomatoes, peppers, and an emerging avocado sector driving much of the momentum. If Morocco can manage environmental risks and navigate political tensions with EU partners, it stands to strengthen its position as one of Europe’s indispensable suppliers of fresh agricultural products in the years ahead.",
    "news.morocco.export.spain.q1_2025.keyPoints":
      "24% increase in volume to 188,076 tons, 23% rise in value to €481 million, Tomatoes up 34% in volume and 57% in value, Peppers steady, Green beans down, EU exports up 9% in volume and 14% in value, Avocado exports doubled, Spain's top supplier by value, Challenges: competition, water, protests, Need for sustainable practices",

    // Blog 8 Full Content & Key Points
    "news.morocco.global_export_growth.strategy.content":
      "Morocco has emerged as one of the top three fastest-growing agricultural exporters in the world, achieving this status through a deliberate blend of technological innovation, sustainable farming practices, and strategic market diversification. Over the past decade, the country has transformed its agricultural sector into a global competitor, even while facing some of the harshest climate conditions in North Africa. Prolonged droughts, reduced rainfall, and mounting water scarcity have not slowed its progress; instead, they have accelerated the adoption of climate-smart agricultural techniques. Farmers and agri-businesses across Morocco are increasingly turning to precision irrigation systems, which deliver water directly to plant roots with minimal waste, alongside advanced soil fertility management, climate-resilient seed varieties, greenhouse production, and controlled-environment farming.\n\nThese efforts have translated into remarkable results. Tomatoes, Morocco’s leading agricultural export, reached 690,000 tons in annual shipments, a 19% increase from the previous year, with non-round tomato varieties now making up 58% of the export mix—a shift that reflects growing global demand for specialty products. Blueberry exports have tripled in just five years, marking Morocco as one of the most dynamic players in the global berry market, while crops such as avocados, cucumbers, peppers, and strawberries are seeing strong year-on-year growth. This product diversification not only strengthens Morocco’s competitive position but also reduces its reliance on any single commodity, making the sector more resilient to market fluctuations.\n\nA key factor in Morocco’s rise is the strategic mindset of its agricultural companies. Industry leaders operate with a long-term vision, investing heavily in sustainability and efficiency. Many companies have appointed dedicated sustainability managers to oversee environmental compliance, resource optimization, and adaptation strategies to climate change. This commitment to responsible production has helped Morocco meet and often exceed the stringent quality and safety standards of major export markets, particularly in the European Union.\n\nAt the same time, Morocco is broadening its reach beyond traditional buyers in Europe. In collaboration with the Food and Agriculture Organization (FAO) and the European Bank for Reconstruction and Development (EBRD), the country is actively promoting its produce in emerging markets in Southeast Asia, such as Singapore and Malaysia. These trade missions aim to establish Morocco as a reliable supplier of high-quality, sustainably produced fruits and vegetables in regions where demand for fresh produce is rising rapidly.\n\nThis approach—rooted in technology adoption, sustainability, and market diversification—has allowed Morocco to grow its agricultural exports at one of the fastest rates globally. It demonstrates that even in an era of climate stress and intense international competition, a well-planned, innovation-driven agricultural strategy can deliver strong economic results, create jobs, strengthen food security, and enhance a nation’s global standing. If Morocco maintains this momentum, it is poised not only to consolidate its position in Europe but also to become a leading supplier to Asia, the Middle East, and beyond, shaping global fresh produce trade for years to come.",
    "news.morocco.global_export_growth.strategy.keyPoints":
      "Top 3 fastest-growing exporters, Tech innovation and sustainability, 19% increase in tomato exports, Blueberry exports tripled, Diversification: avocados, cucumbers, peppers, strawberries, Strategic mindset and sustainability managers, Expansion to Asia (Singapore, Malaysia), Collaboration with FAO and EBRD",

    // Blog 9 Full Content & Key Points
    "news.morocco.exports.rebound.2024_25.content":
      "Morocco’s fruit and vegetable exports experienced a remarkable rebound in the 2024–2025 season, registering an 18% year-on-year increase to reach 1.6 million tons. This surge marked a significant recovery after the previous season’s slowdown, which had been hindered by adverse weather conditions, rising production costs, and logistical disruptions in global trade. The rebound reflects both structural resilience in Morocco’s agricultural sector and the impact of targeted government measures to support farmers and exporters.\n\nThe European Union and the United Kingdom remained the backbone of Morocco’s export market, together absorbing 86% of total shipments. The EU’s proximity, well-established trade agreements, and high demand for off-season produce make it a natural partner, while the UK’s growing reliance on Moroccan imports—especially after Brexit—has further strengthened bilateral trade flows. Beyond these core destinations, Morocco has been steadily expanding into emerging markets in the Middle East, North America, and parts of Asia, aiming to diversify its customer base and reduce vulnerability to fluctuations in European demand.\n\nSeveral key crops powered this recovery. Tomatoes maintained their status as Morocco’s flagship export, with increased greenhouse production enabling consistent supply even during colder months in Europe. Peppers, cucumbers, citrus fruits, berries, and avocados also contributed strongly, benefitting from improvements in post-harvest handling, packaging, and cold chain logistics. Advances in greenhouse technology, drip irrigation, and climate-resilient crop varieties helped boost yields and maintain quality despite ongoing water scarcity challenges in some regions.\n\nThis rebound was not just a matter of favorable weather—it was the result of strategic policy interventions and private-sector investment. The Moroccan government has continued to roll out modernization programs, including subsidies for irrigation efficiency, training for farmers on sustainable practices, and incentives for exporters to comply with stringent European phytosanitary standards. Larger agribusinesses have embraced precision agriculture tools, data-driven crop management, and renewable energy integration, making production more efficient and environmentally responsible.\n\nThe 2024–2025 performance has reassured stakeholders that Morocco can withstand global market turbulence and climate pressures while continuing to grow its agri-food exports. By blending traditional agricultural know-how with modern production and logistics systems, the country has positioned itself as a competitive year-round supplier to Europe and an increasingly important player in global fresh produce trade. Looking forward, sustaining this momentum will require balancing export growth with the urgent need for water conservation, ensuring that economic gains do not come at the expense of long-term environmental sustainability.\n\nIf this trajectory continues, Morocco could not only solidify its dominance in the European fresh produce market but also emerge as a global benchmark for resilient, innovation-driven agricultural export strategies.",
    "news.morocco.exports.rebound.2024_25.keyPoints":
      "18% increase to 1.6 million tons, EU and UK absorb 86% of exports, Expansion to Middle East, North America, Asia, Tomatoes, peppers, citrus, berries, avocados lead, Greenhouse and irrigation advances, Government modernization programs, Need for water conservation and sustainability",
    "news.morocco.zucchini.switzerland":
      "Record Zucchini Exports: Morocco Strengthens Swiss Market Presence",
    "news.morocco.zucchini.switzerland.excerpt":
      "Morocco achieved a milestone in the Swiss market with zucchini exports surpassing 1,000 tons this season—a 25% increase over last year, now ranking among Switzerland's top seven suppliers.",

    // Blog Post Content (English)
    "blog.rainfall_impact_2024.content":
      "The exceptional rainfall of 2024 has transformed Morocco’s agricultural landscape, delivering a spectacular 41% increase in cereal harvest compared to the previous year. This remarkable achievement marks a turning point for Moroccan agriculture, coming after several consecutive years of severe drought that had tested farmers’ resilience and placed national food security at risk. The abundant precipitation was especially beneficial for Morocco’s traditional cereal-growing regions, including Gharb, Saïss, and Chaouia, where fertile soils and well-timed rainfall created ideal growing conditions. Reservoirs and dams reached historic filling levels, exceeding 80% of their capacity, ensuring optimal irrigation for agricultural lands throughout the growing season. Beyond the fields, the effects of this record harvest are already evident in both domestic and international markets. Locally, cereal prices have stabilized, providing direct relief to Moroccan consumers. On the global stage, the production surplus has enabled Morocco to increase cereal exports, strengthening its position in international trade and improving the country’s agricultural trade balance. Experts believe that this exceptional year offers valuable lessons for future agricultural policy. While favorable weather played a decisive role, the integration of modern irrigation systems, climate-resilient crop varieties, and sustainable farming practices will be crucial to maintaining productivity in the face of climate uncertainty. The 2024 season stands as proof that Morocco, with the right combination of natural conditions and strategic agricultural planning, can achieve both economic growth and food security. For farmers, policymakers, and traders, this year represents not only a milestone but also a call to invest in long-term resilience to ensure such successes can be repeated despite future climate challenges.",
    "blog.rainfall_impact_2024.keyPoints":
      "41% boost in cereal harvest compared to 2023, Record dam filling exceeding 80% of capacity, Significant strengthening of national food security, Stabilization of cereal prices in local markets, Improvement of Morocco's export position, Reduction in cereal import dependency",

    "blog.sand_to_green_oasis.content":
      "The revolutionary “From Sand to Orchards” project is radically transforming Morocco’s arid deserts into productive and sustainable agricultural zones. This ambitious regenerative agriculture initiative proves that even the most hostile lands can be converted into fertile oases, creating new economic and environmental opportunities for rural communities. At the heart of this transformation lies a sophisticated solar-powered pumping system paired with precision drip irrigation. Photovoltaic panels generate clean energy to extract water from deep aquifers, while drip systems deliver it directly to plant roots, drastically reducing waste. This efficient combination makes it possible to cultivate fruit trees and vegetables in regions where traditional farming methods were once unthinkable. Another key innovation is the use of biochar, a form of plant-based charcoal made from agricultural waste. This porous, nutrient-rich material improves desert soils by retaining water, enhancing nutrient availability, and creating a favorable environment for root development. Over time, biochar helps rebuild soil fertility and resilience, enabling crops to thrive even under extreme climatic conditions. The results have been nothing short of spectacular. Lush orchards and green landscapes now stand where only barren sand existed, restoring biodiversity, reducing desertification, and boosting local food production. Farmers benefit from increased yields, stable incomes, and access to new markets, while communities gain sustainable livelihoods.Beyond its agricultural impact, the “From Sand to Orchards” project serves as a model for climate adaptation in water-scarce regions worldwide. By integrating renewable energy, water-efficient irrigation, and soil regeneration, Morocco is proving that innovative farming techniques can turn environmental challenges into opportunities for growth and resilience.",
    "blog.sand_to_green_oasis.keyPoints":
      "Transformation of 100 hectares of desert into productive orchards, Solar pumping system powering drip irrigation, Use of biochar to regenerate desert soils, Creation of local jobs in disadvantaged rural areas, Production of high-quality organic fruits and vegetables, Reproducible model for other arid regions of Morocco",

    "blog.no_till_expansion.content":
      "Morocco is making a resolute commitment to the adoption of no-till farming, an innovative agricultural practice poised to transform the country’s farming landscape. Also known as conservation agriculture, this method involves cultivating crops without plowing or turning the soil, thereby preserving its natural structure and protecting beneficial microorganisms that are essential for healthy plant growth.In the Moroccan context, the benefits are particularly significant. By avoiding tillage, farmers greatly reduce soil erosion, a persistent challenge in mountainous and semi-arid regions. No-till practices also improve water retention, which is critical in a country where water scarcity is a growing concern due to climate change. These improvements not only protect agricultural land but also increase long-term productivity. Recognizing its potential, the Moroccan government has launched an ambitious national program to accelerate adoption. This includes subsidies for the purchase of specialized seeders adapted to no-till farming, as well as training programs delivered through regional agricultural centers. Farmers receive hands-on instruction in soil management, residue retention, and crop rotation techniques that enhance the effectiveness of no-till systems.The results are already promising. In pilot areas where no-till farming has been implemented, yields have increased by up to 15%, while input costs—such as fuel and labor—have been reduced. Moreover, the practice contributes to carbon sequestration, making it an important tool in Morocco’s strategy for climate change mitigation.As more farmers embrace this sustainable approach, Morocco positions itself as a regional leader in conservation agriculture. No-till farming not only offers a path toward greater food security but also helps safeguard the country’s natural resources for future generations.",
    "blog.no_till_expansion.keyPoints":
      "70% reduction in soil erosion due to absence of tillage, 30% water savings through better soil retention, 15% increase in yields in pilot areas, 25% reduction in production costs, Improvement of soil biodiversity, Training of 500 farmers in new techniques",

    "blog.green_deal_opportunity.content":
      "The European Green Deal offers Morocco a unique opportunity to modernize its agricultural sector and strengthen its competitive position in European markets. This ambitious European Union initiative aims to make Europe climate-neutral by 2050, introducing strict environmental standards for imports while also providing financial and technical support to trading partners willing to adapt.The Moroccan Minister of Agriculture has welcomed the Green Deal as a chance to transform the national agricultural model, aligning it with the highest international sustainability standards. While these new rules will require adjustments, they also open the door to premium market segments in Europe where consumers increasingly favor eco-certified and responsibly produced goods. Morocco is already recognized as a leader in sustainable agriculture in Africa, and the momentum is growing. Investments in green technologies, organic farming, and renewable energy are accelerating. Solar-powered irrigation systems, integrated pest management, and water-efficient farming techniques are becoming more widespread. Environmental certification is also gaining traction, with more Moroccan producers obtaining EU organic certification and other eco-labels that enhance trust and market access. This transition not only improves competitiveness but also stimulates rural employment, as green farming methods often require specialized skills. Beyond direct economic benefits, the alignment with the Green Deal strengthens Morocco’s trade relationship with the European Union, its largest export market for agricultural products. By embracing sustainable production, Morocco is well-positioned to capture a larger share of the EU’s growing demand for responsibly produced fruits, vegetables, and cereals.The European Green Deal is not just a regulatory challenge—it is a strategic opportunity for Morocco to secure long-term agricultural growth, enhance food security, and become a benchmark for sustainable farming in the Mediterranean region.",
    "blog.green_deal_opportunity.keyPoints":
      "40% increase in agricultural exports to the EU since 2020, 2 billion euro investment in sustainable agriculture, Organic certification of 15% of agricultural land, Creation of 50,000 green jobs in the agricultural sector, 30% reduction in CO2 emissions from the agricultural sector, Partnership agreements with 10 European countries",

    "blog.food_quality_standards.content":
      "In today’s competitive agri-food market, standards and quality have become essential to guaranteeing the safety and reliability of Moroccan food products. Morocco has implemented a comprehensive quality control system aligned with the strictest international requirements, including ISO standards and Good Agricultural Practices (GAP). The certification process begins at the very first stage of production. Farmers undergo strict controls on the use of pesticides, fertilizers, and seeds to ensure sustainable and safe farming. Continuous training programs help agricultural producers adopt best practices in crop management, irrigation efficiency, and pest control. Farms are subject to regular audits, allowing potential issues to be identified and addressed before they affect product quality. Morocco’s food safety infrastructure is backed by state-of-the-art laboratories equipped with advanced technology to detect contaminants, pesticide residues, and harmful pathogens. Every batch of exported products is tested under rigorous protocols, ensuring full compliance with the quality and safety standards required by global markets. Thanks to this proactive approach, Morocco has achieved a 99.5% compliance rate in its food exports—one of the highest in the region. This track record has strengthened trust among international buyers, positioning Moroccan products as high-quality and reliable in markets such as the European Union, the Middle East, and North America. The country’s commitment to quality also supports its broader strategy for agricultural competitiveness. By maintaining world-class standards, Morocco not only safeguards public health but also ensures the long-term sustainability and reputation of its agricultural exports. With global demand for safe, traceable, and eco-friendly food on the rise, Morocco’s rigorous approach to quality control stands as a competitive advantage, opening new opportunities in premium markets worldwide.",
    "blog.food_quality_standards.keyPoints":
      "99.5% compliance rate on export markets, ISO 22000 certification for 80% of exporting companies, Training of 10,000 farmers in good practices, 15 internationally accredited analysis laboratories, Complete traceability from farm to table, Mutual recognition agreements with 25 countries",

    "blog.oasis_irrigation_innovation.content":
      "Moroccan oases, emblematic treasures of the desert, are facing unprecedented threats due to climate change, dwindling water resources, and increasing demographic pressure, prompting the country to adopt an innovative preservation strategy that harmoniously blends advanced technology with ancestral know-how. At the heart of this transformation lies smart irrigation, a cutting-edge solution that employs soil sensors to monitor humidity, temperature, and salinity in real time, enabling precise water allocation according to the exact needs of each plant, thereby reducing consumption by up to 50% while boosting yields. This modern approach is complemented by the revival and modernization of traditional water management systems such as khettaras—ingenious underground galleries that capture and convey water—and seguias, open irrigation canals that distribute it to agricultural plots, now enhanced with filtration and flow-control mechanisms. Farmers, equipped with mobile applications, can remotely manage irrigation schedules and adjust water distribution instantly, ensuring optimal use of this vital resource while preventing waste. By integrating photovoltaic-powered pumping systems, these oases further embrace renewable energy, reducing their reliance on fossil fuels and ensuring a sustainable water supply. In addition, reforestation programs focusing on native drought-resistant species help stabilize soils, prevent desertification, and create microclimates conducive to biodiversity revival. Training programs and cooperative models empower local communities to adopt these innovations, fostering resilience while preserving the cultural heritage embedded in oasis agriculture. This hybrid approach—respecting time-tested traditions while leveraging modern science—has transformed once-vulnerable oases into resilient hubs of productivity, offering a model for arid-land agriculture worldwide and securing the future of Morocco’s desert jewels against the mounting pressures of the 21st century.",
    "blog.oasis_irrigation_innovation.keyPoints":
      "50% reduction in water consumption through smart irrigation, Modernization of 200 traditional khettaras, Installation of 1000 IoT sensors in oases, Training of 500 farmers in new technologies, Preservation of 50,000 hectares of oases, 30% increase in agricultural yields",

    "news.morocco.zucchini.switzerland.content":
      "In 2024, Morocco achieved a historic milestone in its agricultural export sector by recording unprecedented zucchini exports to Switzerland, a success that underlines the growing influence of Moroccan horticultural products in some of the most demanding European markets, driven by a powerful combination of superior quality, competitive pricing, and rigorous adherence to international health and safety standards; according to the latest figures from the Ministry of Agriculture, the volume of zucchinis shipped to Switzerland experienced robust double-digit growth, firmly positioning Morocco as one of the most reliable and preferred suppliers in this niche, a performance made possible through strategic investments in the modernization of cultivation techniques, the widespread adoption of optimized drip irrigation systems, and the strengthening of advanced traceability mechanisms designed to meet and exceed Switzerland’s stringent import criteria; Moroccan zucchinis, prized by Swiss distributors for their exceptional freshness, uniform sizing, and authentic flavor profile, also align perfectly with the surging consumer demand for sustainably produced and eco-friendly agricultural goods, a segment in which Morocco has been carving out a competitive advantage by increasingly integrating agroecological practices and environmentally responsible farming methods; beyond their commercial success, these exports carry profound socio-economic implications, particularly for key production regions such as Souss-Massa and Doukkala, where zucchini cultivation forms a central pillar of local agriculture, supporting thousands of livelihoods, stimulating rural economies, and contributing to the development of vital infrastructure; the sector’s expansion has also spurred the creation of numerous seasonal jobs, offering income opportunities for rural communities and fostering skills transfer in modern farming techniques; looking ahead, the outlook for 2025 remains highly promising, buoyed by rising European demand for off-season fresh vegetables and ongoing enhancements in Morocco’s cold chain logistics, transport efficiency, and export coordination, with the nation setting its sights on not only consolidating its already strong foothold in Switzerland but also diversifying its customer base across new high-value markets such as Germany and the Nordic countries, thereby reinforcing its role as a trusted year-round supplier of premium vegetables while simultaneously advancing its commitment to sustainable, high-performance agriculture that benefits both producers and consumers.",
    "news.morocco.zucchini.switzerland.keyPoints":
      "Record zucchini exports to Switzerland in 2024, Double-digit growth in exported volume, Positioning among the most reliable suppliers in the Swiss market, Investments in modernizing cultivation techniques, Optimization of drip irrigation and traceability, Economic opportunities for Souss-Massa and Doukkala regions",

    // Shop Page
    "shop.title": "Fresh Produce Shop",
    "shop.subtitle":
      "Browse our complete selection of premium organic fruits and vegetables, delivered fresh from our Moroccan farm to your doorstep",
    "shop.premiumQuality": "Premium Quality",
    "shop.fastDelivery": "Fast Delivery",
    "shop.freshProduce": "Fresh Produce",
    "shop.shop": "Shop",
    "shop.browseSelection":
      "Browse our complete selection of premium organic fruits and vegetables, delivered fresh from our Moroccan farm to your doorstep",
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

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.subtitle": "Your privacy is important to us. This privacy policy explains the types of information we collect, how we use it, and your rights regarding your information.",
    "privacy.informationCollection.title": "Information Collection",
    "privacy.informationCollection.description": "We collect various types of information in connection with the services we provide. This includes:",
    "privacy.informationCollection.contactForm": "Information you provide directly to us through our contact form, such as your first name, last name, company name, phone number, country, and the products you are interested in.",
    "privacy.informationCollection.catalog": "Information we collect when you download our product catalog, including your email address.",
    "privacy.useOfInformation.title": "Use of Information",
    "privacy.useOfInformation.description": "We use the information we collect to:",
    "privacy.useOfInformation.maintain": "Provide, maintain, and improve our services.",
    "privacy.useOfInformation.analyze": "Understand and analyze how you use our services.",
    "privacy.useOfInformation.communicate": "Communicate with you about our products, services, and offers.",
    "privacy.useOfInformation.support": "Respond to your inquiries and provide customer support.",
    "privacy.dataStorage.title": "Data Storage",
    "privacy.dataStorage.description": "All collected information is securely stored in our Firebase database. We take appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.",
    "privacy.yourRights.title": "Your Rights",
    "privacy.yourRights.description": "You have the right to:",
    "privacy.yourRights.access": "Access, correct, or delete your personal information.",
    "privacy.yourRights.object": "Object to or restrict the processing of your information.",
    "privacy.yourRights.withdraw": "Withdraw your consent at any time.",
    "privacy.contactUs.title": "Contact Us",
    "privacy.contactUs.description": "If you have any questions about this privacy policy or our data practices, please contact us at",

    // Terms and Conditions
    "terms.title": "Terms and Conditions",
    "terms.subtitle": "Please read these terms and conditions carefully before using our website.",
    "terms.introduction.title": "Introduction",
    "terms.introduction.content": "Welcome to our website. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.",
    "terms.intellectualProperty.title": "Intellectual Property",
    "terms.intellectualProperty.content": "The content, layout, design, data, databases, and graphics on this website are protected by intellectual property laws and are owned by or licensed to us. You may not reproduce, distribute, or transmit any of the content on this website without our prior written permission.",
    "terms.useOfWebsite.title": "Use of the Website",
    "terms.useOfWebsite.content": "You agree to use this website for lawful purposes only. You must not use this website to engage in any activity that is unlawful, harmful, or fraudulent.",
    "terms.privacy.title": "Privacy",
    "terms.privacy.content": "Your use of our website is also subject to our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information.",
    "terms.limitationOfLiability.title": "Limitation of Liability",
    "terms.limitationOfLiability.content": "We will not be liable for any damages arising out of or in connection with the use of this website. This limitation of liability applies to all damages of any kind, including but not limited to direct, indirect, incidental, punitive, or consequential damages.",
    "terms.changesToTerms.title": "Changes to the Terms",
    "terms.changesToTerms.content": "We may update these terms and conditions from time to time. Any changes will be posted on this page, and it is your responsibility to review these terms regularly to ensure you are aware of any changes.",
    "terms.governingLaw.title": "Governing Law",
    "terms.governingLaw.content": "These terms and conditions are governed by and construed in accordance with the laws of Morocco. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Morocco.",
    "terms.contactUs.title": "Contact Us",
    "terms.contactUs.description": "If you have any questions about these terms and conditions, please contact us at",
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
    "whyChoose.title": "Pourquoi Choisir The 3 Vegetables?",
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
    companyName: "The 3 Vegetables",
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
    phoneNumber: "+212 654 352 802",
    email: "info@the-3rocks.com",
    copyright: "© 2025 MoroccoFresh Export Agricole. Tous droits réservés.",
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
    "about.storyParagraph1":
      "Notre parcours a commencé en 1952 lorsque mon grand-père, Molay Ahmed, a commencé à cultiver une petite parcelle de terre dans les vallées fertiles du Maroc. Avec rien d'autre que la détermination et un profond amour pour la terre, il a cultivé les meilleurs fruits et légumes que la région ait jamais vus.",
    "about.storyParagraph2":
      "Aujourd'hui, trois générations plus tard, nous continuons son héritage tout en adoptant des pratiques durables modernes. Notre ferme de 500 hectares fournit maintenant des produits biologiques premium aux clients de 50 pays, mais nous n'avons jamais oublié nos racines ou compromis la qualité.",
    "about.storyParagraph3":
      "Chaque fruit et légume qui quitte notre ferme porte avec lui le même soin, attention et amour que Molay Ahmed a mis dans sa première récolte il y a plus de 70 ans.",
    "about.threeGenerationsAlt": "Trois générations de notre famille agricole",
    "about.coreValues": "Nos Valeurs Fondamentales",
    "about.coreValuesDesc":
      "Ces principes guident tout ce que nous faisons, de la graine à la récolte jusqu'à votre table",
    "about.sustainability": "Durabilité",
    "about.sustainabilityDesc":
      "Nous utilisons des pratiques agricoles respectueuses de l'environnement qui protègent notre sol, notre eau et notre biodiversité pour les générations futures.",
    "about.familyTradition": "Tradition Familiale",
    "about.familyTraditionDesc":
      "Chaque décision que nous prenons honore l'héritage de notre famille tout en adoptant l'innovation et les meilleures pratiques modernes.",
    "about.qualityExcellence": "Excellence Qualité",
    "about.qualityExcellenceDesc":
      "Nous ne compromettons jamais la qualité. Chaque produit répond aux plus hauts standards internationaux avant d'atteindre nos clients.",
    "about.communityCare": "Soin Communautaire",
    "about.communityCareDesc":
      "Nous soutenons notre communauté locale en fournissant un emploi équitable et en investissant dans les infrastructures et l'éducation locales.",
    "about.globalResponsibility": "Responsabilité Mondiale",
    "about.globalResponsibilityDesc":
      "Nous croyons en un commerce mondial responsable qui profite à la fois à nos clients et à notre communauté agricole locale.",
    "about.reliableService": "Service Fiable",
    "about.reliableServiceDesc":
      "Nous garantissons une livraison ponctuelle et une qualité constante, construisant des partenariats à long terme avec nos clients du monde entier.",
    "about.sustainablePractices": "Pratiques Agricoles Durables",
    "about.sustainablePracticesDesc":
      "Nous nous engageons dans des méthodes agricoles qui protègent notre environnement tout en produisant les fruits et légumes de la plus haute qualité.",
    "about.waterConservation": "Conservation de l'Eau",
    "about.waterConservationDesc":
      "Les systèmes d'irrigation goutte à goutte avancés réduisent l'utilisation d'eau de 40% tout en assurant une hydratation optimale des plantes.",
    "about.organicCertification": "Certification Biologique",
    "about.organicCertificationDesc":
      "100% de pratiques biologiques certifiées sans pesticides ou engrais synthétiques.",
    "about.solarEnergy": "Énergie Solaire",
    "about.solarEnergyDesc":
      "Les panneaux solaires alimentent 80% de nos opérations agricoles, réduisant significativement notre empreinte carbone.",
    "about.soilHealth": "Santé du Sol",
    "about.soilHealthDesc":
      "La rotation des cultures et le compostage naturel maintiennent la fertilité du sol et préviennent l'érosion.",
    "about.sustainablePracticesAlt":
      "Pratiques agricoles durables sur notre ferme",
    "about.meetOurTeam": "Rencontrez Notre Équipe",
    "about.teamDesc":
      "Les personnes passionnées derrière le succès de notre ferme",
    "about.badrGadi": "Badr GADI",
    "about.ahmedRole": "Propriétaire de Ferme & PDG",
    "about.ahmedDesc":
      "Agriculteur de troisième génération dirigeant nos initiatives d'agriculture durable et d'expansion mondiale.",
    "about.ahmedAlt": "Ahmed Hassan - Propriétaire de Ferme",
    "about.ayoubElouazzani": "Ayoub ELOUAZZANI",
    "about.ayoubRole": "Ingénieure Agricole",
    "about.ayoubDesc":
      "Experte en pratiques agricoles durables et processus de certification biologique.",
    "about.ayoubAlt": "Fatima Benali - Ingénieure Agricole",
    "about.ahmedGadi": "Ahmed GADI",
    "about.ahmedGadiRole": "Gestionnaire Export",
    "about.ahmedGadiDesc":
      "Gère la logistique internationale et assure la livraison de qualité aux clients du monde entier.",
    "about.ahmedGadiAlt": "Ahmed GADI - Gestionnaire Export",

    // Contact Page
    "contact.title": "Contactez-Nous",
    "contact.subtitle":
      "Prêt à commencer votre parcours de produits frais? Contactez-nous pour des commandes, partenariats ou toute question",
    "contact.quickResponse": "Réponse Rapide",
    "contact.partnershipReady": "Prêt pour Partenariat",
    "contact.requestB2BQuote": "Demander un Devis B2B",
    "contact.bulkOrdersDescription":
      "Vous cherchez des commandes en vrac ou un approvisionnement régulier? Obtenez un devis personnalisé pour vos besoins professionnels",
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
    "contactForm.messagePlaceholder":
      "Veuillez fournir des détails sur votre demande...",
    "contactForm.sendMessageButton": "Envoyer Message",

    // Contact Info
    "contactInfo.contactInformation": "Informations de Contact",
    "contactInfo.helpDescription":
      "Nous sommes là pour vous aider avec tous vos besoins en produits frais. Contactez-nous par l'un de ces canaux.",
    "contactInfo.farmLocation": "Emplacement de la Ferme",
    "contactInfo.farmAddress": "Route de Taroudant, Km 15\nAgadir 80000, Maroc",
    "contactInfo.phoneNumbers": "Numéros de Téléphone",
    "contactInfo.mainPhone": "Principal: +212 654 352 802",
    "contactInfo.exportPhone": "Export: +212 661 234 567",
    "contactInfo.whatsapp": "WhatsApp",
    "contactInfo.whatsappNumber": "+212 661 234 567",
    "contactInfo.whatsappAvailable":
      "Disponible 24h/24 pour les demandes urgentes",
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
    "quoteForm.requirementsPlaceholder":
      "Veuillez spécifier tout emballage spécial, certification ou exigences de livraison...",
    "quoteForm.agreeTerms":
      "J'accepte les conditions générales et la politique de confidentialité *",
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
    "blog.postNotFoundMessage":
      "L'article de blog que vous recherchez n'existe pas.",
    "blog.relatedPosts": "Articles Connexes",
    "blog.keyPoints": "Points Clés",
    "blog.loading": "Chargement...",

    // Blog Posts Content
    "blog.rainfall_impact_2024.title":
      "Pluies exceptionnelles 2024 : un bond de 41 % dans la récolte de céréales au Maroc",
    "blog.rainfall_impact_2024.excerpt":
      "Découvrez comment les pluies abondantes de 2024 ont stimulé la production céréalière marocaine, renforçant la sécurité alimentaire et redonnant espoir aux agriculteurs.",

    "blog.sand_to_green_oasis.title":
      "Du sable aux vergers : l’agriculture régénérative transforme le désert marocain",
    "blog.sand_to_green_oasis.excerpt":
      "Pompage solaire, irrigation goutte à goutte et biochar : comment le projet Sand to Green redonne vie aux terres arides du Maroc.",

    "blog.no_till_expansion.title":
      "Agriculture sans labour : le Maroc s’engage pour la résilience climatique",
    "blog.no_till_expansion.excerpt":
      "Le Maroc investit dans l’agriculture sans labour pour économiser l’eau, réduire l’érosion et accroître la productivité durablement.",

    "blog.green_deal_opportunity.title":
      "Green Deal européen : une opportunité pour moderniser l’agriculture marocaine",
    "blog.green_deal_opportunity.excerpt":
      "Le ministre marocain de l’Agriculture voit dans le Green Deal une chance de renforcer la durabilité et la compétitivité sur les marchés de l’UE.",

    "blog.food_quality_standards.title":
      "Normes et qualité : garantir la sécurité des produits alimentaires marocains",
    "blog.food_quality_standards.excerpt":
      "Des normes ISO aux bonnes pratiques agricoles, découvrez comment le Maroc assure la conformité de ses exportations aux standards mondiaux.",

    "blog.oasis_irrigation_innovation.title":
      "Oasis et innovation : l’irrigation intelligente au service de la durabilité",
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
    "news.morocco.export.spain.q1_2025":
      "Les Exportations Marocaines de Légumes vers l'Espagne Augmentent de 24% au T1 2025",
    "news.morocco.export.spain.q1_2025.excerpt":
      "Les importations espagnoles de fruits et légumes marocains ont augmenté de 24% en volume et 23% en valeur au T1 2025 par rapport au T1 2024, atteignant 188 076 tonnes pour 481 millions d'euros.",
    "news.morocco.global_export_growth.strategy":
      "Le Maroc Renforce sa Position Mondiale avec une Stratégie Agricole Avancée",
    "news.morocco.global_export_growth.strategy.excerpt":
      "Le Maroc se classe parmi les trois exportateurs agricoles à la croissance la plus rapide au monde, grâce à l'adoption stratégique de technologies avancées qui stimulent productivité et durabilité.",
    "news.morocco.exports.rebound.2024_25":
      "Forte Reprise: Les Exportations Marocaines Rebondissent de 18% en 2024-2025",
    "news.morocco.exports.rebound.2024_25.excerpt":
      "Les exportations marocaines de fruits et légumes ont rebondi fortement en 2024-2025, augmentant de 18% en glissement annuel pour atteindre 1,6 million de tonnes, l'UE et le Royaume-Uni représentant 86% des exportations.",
    "news.morocco.zucchini.switzerland":
      "Exportations Record de Courgettes: Le Maroc Renforce sa Présence sur le Marché Suisse",
    "news.morocco.zucchini.switzerland.excerpt":
      "Le Maroc a atteint un jalon sur le marché suisse avec des exportations de courgettes dépassant 1 000 tonnes cette saison—une augmentation de 25% par rapport à l'année dernière, se classant maintenant parmi les sept premiers fournisseurs de la Suisse.",

    // Blog Post Content (French)
    "blog.rainfall_impact_2024.content":
      "Les pluies exceptionnelles de 2024 ont transformé le paysage agricole marocain, apportant un bond spectaculaire de 41% dans la récolte de céréales. Cette année record a marqué un tournant majeur pour l'agriculture nationale, après plusieurs années de sécheresse qui avaient mis à rude épreuve les agriculteurs et menacé la sécurité alimentaire du pays. Les précipitations abondantes ont particulièrement bénéficié aux régions céréalières traditionnelles du Maroc : le Gharb, le Saïss, et la Chaouia. Les barrages ont atteint des niveaux de remplissage historiques, dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.dépassant 80% de leur capacité, permettant une irrigation optimale des terres agricoles tout au long de la saison de croissance. L'impact de cette récolte exceptionnelle se manifeste déjà dans les marchés locaux et internationaux. Les prix des céréales se sont stabilisés, bénéficiant directement aux consommateurs marocains. L'excédent de production a également permis au Maroc de renforcer sa position sur les marchés d'exportation, améliorant significativement la balance commerciale agricole du pays.",
    "blog.rainfall_impact_2024.keyPoints":
      "Bond de 41% dans la récolte de céréales par rapport à 2023, Remplissage record des barrages à plus de 80% de leur capacité, Renforcement significatif de la sécurité alimentaire nationale, Stabilisation des prix des céréales sur les marchés locaux, Amélioration de la position d'exportation du Maroc, Réduction de la dépendance aux importations de céréales",

    "blog.sand_to_green_oasis.content":
      "Le projet révolutionnaire 'Du sable aux vergers' transforme radicalement le désert marocain grâce à l'agriculture régénérative. Cette initiative innovante démontre comment les terres arides peuvent être converties en vergers productifs, créant ainsi de nouvelles opportunités agricoles dans des zones autrefois considérées comme stériles. Au cœur de cette transformation se trouve un système de pompage solaire sophistiqué qui alimente une irrigation goutte à goutte de précision. Les panneaux photovoltaïques fournissent l'énergie nécessaire pour extraire l'eau des nappes phréatiques profondes, tandis que l'irrigation goutte à goutte optimise l'utilisation de cette ressource précieuse. Cette combinaison technologique permet de cultiver des arbres fruitiers et des légumes dans des zones où l'agriculture traditionnelle était impossible. L'utilisation innovante du biochar, un charbon végétal produit à partir de déchets agricoles, améliore considérablement la qualité des sols désertiques. Ce matériau poreux retient l'eau et les nutriments, créant un environnement favorable au développement des racines et à la croissance des plantes. Les résultats sont spectaculaires : des oasis verdoyantes émergent là où il n'y avait que du sable, redonnant vie aux terres arides du Maroc.",
    "blog.sand_to_green_oasis.keyPoints":
      "Transformation de 100 hectares de désert en vergers productifs, Système de pompage solaire alimentant l'irrigation goutte à goutte, Utilisation du biochar pour régénérer les sols désertiques, Création d'emplois locaux dans les zones rurales défavorisées, Production de fruits et légumes biologiques de haute qualité, Modèle reproductible pour d'autres régions arides du Maroc",

    "blog.no_till_expansion.content":
      "Le Maroc s'engage résolument dans l'adoption de l'agriculture sans labour, une pratique innovante qui promet de révolutionner le secteur agricole national. Cette approche, également connue sous le nom de 'no-till farming', consiste à cultiver sans retourner le sol, préservant ainsi sa structure naturelle et ses micro-organismes bénéfiques. Les avantages de cette méthode sont multiples et particulièrement pertinents dans le contexte marocain. En évitant le labour, les agriculteurs réduisent considérablement l'érosion des sols, un problème majeur dans les régions montagneuses et semi-arides du pays. De plus, cette pratique améliore la rétention d'eau dans le sol, un facteur crucial dans un pays où les ressources hydriques sont limitées. Le gouvernement marocain a lancé un programme ambitieux de formation et d'équipement pour accompagner les agriculteurs dans cette transition. Des subventions sont accordées pour l'achat de semoirs spécialisés, et des centres de formation régionaux dispensent des cours sur les techniques de l'agriculture sans labour. Les premiers résultats sont encourageants, avec une augmentation de 15% des rendements dans les zones pilotes.",
    "blog.no_till_expansion.keyPoints":
      "Réduction de 70% de l'érosion des sols grâce à l'absence de labour, Économie d'eau de 30% grâce à une meilleure rétention dans le sol, Augmentation de 15% des rendements dans les zones pilotes, Réduction des coûts de production de 25%, Amélioration de la biodiversité des sols, Formation de 500 agriculteurs aux nouvelles techniques",

    "blog.green_deal_opportunity.content":
      "Le Green Deal européen représente une opportunité unique pour le Maroc de moderniser son secteur agricole et de renforcer sa position sur les marchés européens. Cette initiative ambitieuse de l'Union européenne vise à rendre l'Europe climatiquement neutre d'ici 2050, créant ainsi de nouvelles exigences et opportunités pour les partenaires commerciaux. Le ministre marocain de l'Agriculture a salué cette initiative comme une chance de transformer le secteur agricole national. Le Green Deal impose des standards environnementaux stricts pour les importations, mais offre également un soutien financier et technique pour aider les pays partenaires à s'adapter à ces nouvelles exigences. Le Maroc, déjà leader dans l'agriculture durable en Afrique, est bien positionné pour bénéficier de ces opportunités. Les investissements dans les technologies vertes, l'agriculture biologique et les énergies renouvelables s'accélèrent au Maroc. Les agriculteurs adoptent des pratiques plus durables, et les entreprises investissent dans la certification environnementale. Cette transition crée de nouveaux emplois et améliore la compétitivité des produits marocains sur les marchés européens.",
    "blog.green_deal_opportunity.keyPoints":
      "Augmentation de 40% des exportations agricoles vers l'UE depuis 2020, Investissement de 2 milliards d'euros dans l'agriculture durable, Certification biologique de 15% des terres agricoles, Création de 50 000 emplois verts dans le secteur agricole, Réduction de 30% des émissions de CO2 du secteur agricole, Accords de partenariat avec 10 pays européens",

    "blog.food_quality_standards.content":
      "Les normes et la qualité sont devenues des priorités absolues pour garantir la sécurité des produits alimentaires marocains. Le Maroc a mis en place un système rigoureux de contrôle qualité qui s'appuie sur les normes internationales les plus strictes, notamment les normes ISO et les bonnes pratiques agricoles (GAP). Le processus de certification commence dès la production, avec des contrôles stricts sur l'utilisation des pesticides, des engrais et des semences. Les agriculteurs reçoivent une formation continue sur les bonnes pratiques agricoles, et leurs exploitations font l'objet d'audits réguliers. Cette approche proactive permet d'identifier et de corriger les problèmes avant qu'ils n'affectent la qualité des produits. Les laboratoires d'analyse alimentaire du Maroc sont équipés des technologies les plus avancées pour détecter les contaminants, les résidus de pesticides et les agents pathogènes. Chaque lot de produits exportés est analysé selon des protocoles stricts, garantissant la conformité aux standards internationaux. Cette rigueur a permis au Maroc de maintenir un taux de conformité de 99,5% sur les marchés d'exportation.",
    "blog.food_quality_standards.keyPoints":
      "Taux de conformité de 99,5% sur les marchés d'exportation, Certification ISO 22000 pour 80% des entreprises exportatrices, Formation de 10 000 agriculteurs aux bonnes pratiques, 15 laboratoires d'analyse accrédités internationalement, Traçabilité complète de la ferme à la table, Accords de reconnaissance mutuelle avec 25 pays",

    "blog.oasis_irrigation_innovation.content":
      "Les oasis marocaines, véritables joyaux du désert, font face à des défis sans précédent liés au changement climatique et à la pression démographique. Pour préserver ces écosystèmes uniques, le Maroc développe des solutions innovantes qui combinent technologies modernes et savoir-faire traditionnel séculaire. L'irrigation intelligente représente l'innovation la plus prometteuse pour la survie des oasis. Des capteurs installés dans le sol mesurent en temps réel l'humidité, la température et la salinité, permettant d'optimiser l'utilisation de l'eau selon les besoins précis de chaque plante. Cette technologie, couplée à l'irrigation goutte à goutte, réduit la consommation d'eau de 50% tout en améliorant les rendements. Les techniques traditionnelles d'irrigation, comme les khettaras (galeries souterraines) et les seguias (canaux d'irrigation), sont modernisées et intégrées dans un système de gestion intelligente de l'eau. Les agriculteurs utilisent des applications mobiles pour contrôler l'irrigation à distance, optimisant ainsi l'utilisation de cette ressource précieuse. Cette approche hybride respecte les traditions tout en adoptant les innovations modernes.",
    "blog.oasis_irrigation_innovation.keyPoints":
      "Réduction de 50% de la consommation d'eau grâce à l'irrigation intelligente, Modernisation de 200 khettaras traditionnelles, Installation de 1000 capteurs IoT dans les oasis, Formation de 500 agriculteurs aux nouvelles technologies, Préservation de 50 000 hectares d'oasis, Augmentation de 30% des rendements agricoles",

    "news.morocco.zucchini.switzerland.content":
      "En 2024, le Maroc a franchi une nouvelle étape dans le secteur des exportations agricoles en réalisant des exportations record de courgettes vers la Suisse. Cette performance confirme la montée en puissance des produits maraîchers marocains sur les marchés européens exigeants, grâce à une combinaison gagnante : qualité, compétitivité et respect des normes sanitaires internationales. Selon les dernières données du ministère de l'Agriculture, le volume exporté vers la Suisse a connu une croissance à deux chiffres, positionnant le Maroc parmi les fournisseurs les plus fiables de ce marché. Cette progression est le résultat d'investissements stratégiques dans la modernisation des techniques de culture, l'optimisation de l'irrigation goutte-à-goutte et le renforcement des systèmes de traçabilité pour répondre aux critères stricts helvétiques. Les courgettes marocaines séduisent les distributeurs suisses par leur fraîcheur, leur calibre régulier et leur saveur authentique. Elles répondent aussi à une demande croissante pour des produits cultivés de manière durable, un segment où le Maroc se distingue de plus en plus grâce à l'intégration de pratiques agroécologiques et éco-responsables. Au-delà de la performance commerciale, ces exportations représentent une opportunité économique majeure pour les producteurs marocains, notamment dans les régions du Souss-Massa et de Doukkala, où la culture de la courgette est un pilier agricole. Elles contribuent également à la création d'emplois saisonniers et au développement des infrastructures rurales. Les perspectives pour 2025 s'annoncent prometteuses. Avec la hausse de la demande en Europe pour des légumes frais hors saison, et l'amélioration continue des chaînes logistiques, le Maroc ambitionne de consolider sa position et de diversifier ses débouchés, notamment vers l'Allemagne et les pays nordiques.",
    "news.morocco.zucchini.switzerland.keyPoints":
      "Exportations record de courgettes vers la Suisse en 2024, Croissance à deux chiffres du volume exporté, Positionnement parmi les fournisseurs les plus fiables du marché suisse, Investissements dans la modernisation des techniques de culture, Optimisation de l'irrigation goutte-à-goutte et traçabilité, Opportunités économiques pour les régions du Souss-Massa et Doukkala",

    // Shop Page
    "shop.title": "Boutique de Produits Frais",
    "shop.subtitle":
      "Parcourez notre sélection complète de fruits et légumes biologiques premium, livrés frais de notre ferme marocaine à votre porte",
    "shop.premiumQuality": "Qualité Premium",
    "shop.fastDelivery": "Livraison Rapide",
    "shop.freshProduce": "Produits Frais",
    "shop.shop": "Boutique",
    "shop.browseSelection":
      "Parcourez notre sélection complète de fruits et légumes biologiques premium, livrés frais de notre ferme marocaine à votre porte",
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

    // Privacy Policy (French)
    "privacy.title": "Politique de Confidentialité",
    "privacy.subtitle": "Votre vie privée est importante pour nous. Cette politique de confidentialité explique les types d'informations que nous collectons, comment nous les utilisons et vos droits concernant vos informations.",
    "privacy.informationCollection.title": "Collecte d'Informations",
    "privacy.informationCollection.description": "Nous collectons divers types d'informations dans le cadre des services que nous fournissons. Cela comprend:",
    "privacy.informationCollection.contactForm": "Les informations que vous nous fournissez directement via notre formulaire de contact, telles que votre prénom, nom, nom de l'entreprise, numéro de téléphone, pays et les produits qui vous intéressent.",
    "privacy.informationCollection.catalog": "Les informations que nous collectons lorsque vous téléchargez notre catalogue de produits, y compris votre adresse e-mail.",
    "privacy.useOfInformation.title": "Utilisation des Informations",
    "privacy.useOfInformation.description": "Nous utilisons les informations que nous collectons pour:",
    "privacy.useOfInformation.maintain": "Fournir, maintenir et améliorer nos services.",
    "privacy.useOfInformation.analyze": "Comprendre et analyser comment vous utilisez nos services.",
    "privacy.useOfInformation.communicate": "Communiquer avec vous concernant nos produits, services et offres.",
    "privacy.useOfInformation.support": "Répondre à vos demandes et fournir un support client.",
    "privacy.dataStorage.title": "Stockage des Données",
    "privacy.dataStorage.description": "Toutes les informations collectées sont stockées de manière sécurisée dans notre base de données Firebase. Nous prenons des mesures de sécurité appropriées pour protéger contre l'accès non autorisé, l'altération, la divulgation ou la destruction de vos informations personnelles.",
    "privacy.yourRights.title": "Vos Droits",
    "privacy.yourRights.description": "Vous avez le droit de:",
    "privacy.yourRights.access": "Accéder, corriger ou supprimer vos informations personnelles.",
    "privacy.yourRights.object": "Vous opposer ou restreindre le traitement de vos informations.",
    "privacy.yourRights.withdraw": "Retirer votre consentement à tout moment.",
    "privacy.contactUs.title": "Contactez-Nous",
    "privacy.contactUs.description": "Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques de données, veuillez nous contacter à",

    // Terms and Conditions (French)
    "terms.title": "Conditions Générales d'Utilisation",
    "terms.subtitle": "Veuillez lire attentivement ces conditions générales d'utilisation avant d'utiliser notre site web.",
    "terms.introduction.title": "Introduction",
    "terms.introduction.content": "Bienvenue sur notre site web. En accédant et en utilisant notre site web, vous acceptez de respecter et d'être lié par les conditions générales suivantes.",
    "terms.intellectualProperty.title": "Propriété Intellectuelle",
    "terms.intellectualProperty.content": "Le contenu, la mise en page, le design, les données, les bases de données et les graphiques de ce site web sont protégés par les lois sur la propriété intellectuelle et appartiennent à nous ou sont sous licence. Vous ne pouvez pas reproduire, distribuer ou transmettre le contenu de ce site web sans notre autorisation écrite préalable.",
    "terms.useOfWebsite.title": "Utilisation du Site Web",
    "terms.useOfWebsite.content": "Vous acceptez d'utiliser ce site web uniquement à des fins légales. Vous ne devez pas utiliser ce site web pour vous livrer à des activités illégales, nuisibles ou frauduleuses.",
    "terms.privacy.title": "Confidentialité",
    "terms.privacy.content": "Votre utilisation de notre site web est également soumise à notre Politique de Confidentialité. Veuillez consulter notre Politique de Confidentialité pour comprendre nos pratiques concernant vos informations personnelles.",
    "terms.limitationOfLiability.title": "Limitation de Responsabilité",
    "terms.limitationOfLiability.content": "Nous ne serons pas responsables de tout dommage résultant de ou lié à l'utilisation de ce site web. Cette limitation de responsabilité s'applique à tous les dommages de quelque nature que ce soit, y compris, mais sans s'y limiter, les dommages directs, indirects, accessoires, punitifs ou consécutifs.",
    "terms.changesToTerms.title": "Modifications des Conditions",
    "terms.changesToTerms.content": "Nous pouvons mettre à jour ces conditions générales de temps à autre. Toute modification sera publiée sur cette page, et il est de votre responsabilité de consulter régulièrement ces conditions pour vous assurer que vous êtes informé de tout changement.",
    "terms.governingLaw.title": "Loi Applicable",
    "terms.governingLaw.content": "Ces conditions générales sont régies par et interprétées conformément aux lois du Maroc. Tout litige relatif à ces conditions générales sera soumis à la juridiction exclusive des tribunaux du Maroc.",
    "terms.contactUs.title": "Contactez-Nous",
    "terms.contactUs.description": "Si vous avez des questions concernant ces conditions générales, veuillez nous contacter à",

    // Blog 8 Full Content (French)
    "news.morocco.global_export_growth.strategy.content":
      "Le Maroc s’impose désormais parmi les trois exportateurs agricoles connaissant la plus forte croissance au monde, un statut acquis grâce à une combinaison réfléchie d’innovation technologique, de pratiques agricoles durables et de diversification stratégique des marchés. Au cours de la dernière décennie, le pays a transformé son secteur agricole en un compétiteur de rang mondial, et ce malgré certaines des conditions climatiques les plus difficiles d’Afrique du Nord. Les sécheresses prolongées, la baisse des précipitations et la raréfaction de l’eau n’ont pas freiné son avancée ; au contraire, ces défis ont accéléré l’adoption de techniques agricoles intelligentes face au climat. Partout dans le Royaume, agriculteurs et entreprises agroalimentaires adoptent de plus en plus les systèmes d’irrigation de précision, qui apportent l’eau directement aux racines des plantes avec un minimum de pertes, ainsi que des méthodes avancées de gestion de la fertilité des sols, des variétés de semences résistantes au climat, la culture sous serre et l’agriculture en environnement contrôlé.\n\nCes efforts portent leurs fruits de manière remarquable. La tomate, premier produit d’exportation agricole du Maroc, a atteint 690 000 tonnes de livraisons annuelles, soit une hausse de 19 % par rapport à l’année précédente, les variétés non rondes représentant désormais 58 % du volume exporté – un changement qui reflète la demande mondiale croissante pour des produits spécialisés. Les exportations de myrtilles ont triplé en seulement cinq ans, positionnant le Maroc comme l’un des acteurs les plus dynamiques du marché mondial des baies, tandis que des cultures comme l’avocat, le concombre, le poivron et la fraise enregistrent également une croissance annuelle soutenue. Cette diversification renforce non seulement la compétitivité du Maroc mais réduit aussi sa dépendance à un seul produit, rendant ainsi le secteur plus résilient face aux fluctuations du marché.\n\nUn facteur clé de cette ascension réside dans la vision stratégique des entreprises agricoles marocaines. Les leaders du secteur travaillent avec une perspective à long terme, investissant massivement dans la durabilité et l’efficacité. Nombre d’entre elles ont désigné des responsables dédiés au développement durable, chargés de superviser la conformité environnementale, l’optimisation des ressources et l’adaptation au changement climatique. Cet engagement envers une production responsable a permis au Maroc de respecter, et souvent même de dépasser, les normes strictes de qualité et de sécurité exigées par ses principaux marchés d’exportation, notamment l’Union européenne.\n\nParallèlement, le Royaume élargit sa présence au-delà de ses acheteurs traditionnels en Europe. En collaboration avec l’Organisation des Nations unies pour l’alimentation et l’agriculture (FAO) et la Banque européenne pour la reconstruction et le développement (BERD), il promeut activement ses produits sur les marchés émergents d’Asie du Sud-Est, comme Singapour et la Malaisie. Ces missions commerciales visent à établir le Maroc comme fournisseur fiable de fruits et légumes de haute qualité, cultivés de manière durable, dans des régions où la demande de produits frais croît rapidement.\n\nCette stratégie – fondée sur l’adoption de technologies, la durabilité et la diversification des marchés – a permis au Maroc de faire croître ses exportations agricoles à l’un des rythmes les plus rapides au monde. Elle démontre que, même dans une ère marquée par la pression climatique et une concurrence internationale intense, une approche agricole bien planifiée et axée sur l’innovation peut générer des résultats économiques solides, créer des emplois, renforcer la sécurité alimentaire et améliorer la position internationale d’un pays. Si le Maroc maintient cette dynamique, il est en bonne voie non seulement de consolider sa place en Europe, mais aussi de devenir un fournisseur majeur pour l’Asie, le Moyen-Orient et au-delà, influençant le commerce mondial des produits frais pour les années à venir.",
    // Blog 9 Full Content (French)
    "news.morocco.exports.rebound.2024_25.content":
      "Les exportations marocaines de fruits et légumes ont connu un rebond remarquable lors de la campagne 2024–2025, enregistrant une hausse annuelle de 18 % pour atteindre 1,6 million de tonnes. Cette progression marque une reprise significative après le ralentissement de la saison précédente, freiné par des conditions météorologiques défavorables, la hausse des coûts de production et des perturbations logistiques dans le commerce mondial. Ce rebond témoigne à la fois de la résilience structurelle du secteur agricole marocain et de l’impact de mesures gouvernementales ciblées visant à soutenir les agriculteurs et les exportateurs.\n\nL’Union européenne et le Royaume-Uni sont restés les piliers du marché d’exportation du Maroc, absorbant ensemble 86 % des expéditions totales. La proximité géographique, les accords commerciaux bien établis et la forte demande de produits hors saison font de l’UE un partenaire naturel, tandis que la dépendance croissante du Royaume-Uni vis-à-vis des importations marocaines — en particulier après le Brexit — a renforcé les échanges bilatéraux. Au-delà de ces destinations clés, le Maroc poursuit une expansion vers les marchés émergents du Moyen-Orient, d’Amérique du Nord et de certaines régions d’Asie, afin de diversifier sa clientèle et de réduire sa vulnérabilité face aux fluctuations de la demande européenne.\n\nPlusieurs cultures phares ont alimenté cette reprise. La tomate a conservé son statut de produit d’exportation emblématique, la production sous serre ayant permis d’assurer un approvisionnement régulier, même pendant les mois les plus froids en Europe. Les poivrons, concombres, agrumes, fruits rouges et avocats ont également fortement contribué, bénéficiant d’améliorations dans la manutention post-récolte, le conditionnement et la logistique de la chaîne du froid. Les avancées en matière de technologie de serre, de micro-irrigation et de variétés résistantes aux conditions climatiques ont permis d’augmenter les rendements et de maintenir la qualité malgré les défis persistants liés à la rareté de l’eau dans certaines régions.\n\nCe rebond ne résulte pas uniquement de conditions climatiques favorables, mais aussi d’interventions stratégiques et d’investissements privés. Le gouvernement marocain a poursuivi ses programmes de modernisation, incluant des subventions pour améliorer l’efficacité de l’irrigation, des formations à destination des agriculteurs sur les pratiques durables, ainsi que des incitations pour que les exportateurs respectent les normes phytosanitaires strictes imposées par l’Europe. Les grandes entreprises agroalimentaires ont adopté des outils d’agriculture de précision, la gestion des cultures basée sur les données et l’intégration d’énergies renouvelables, rendant la production plus efficace et plus respectueuse de l’environnement.\n\nLa performance de 2024–2025 a rassuré les acteurs du secteur quant à la capacité du Maroc à résister aux turbulences des marchés mondiaux et aux pressions climatiques tout en poursuivant la croissance de ses exportations agroalimentaires. En combinant savoir-faire agricole traditionnel et systèmes modernes de production et de logistique, le pays s’est positionné comme un fournisseur compétitif tout au long de l’année pour l’Europe, et un acteur de plus en plus important du commerce mondial des produits frais. À l’avenir, maintenir cette dynamique exigera de concilier la croissance des exportations avec l’impératif de préservation de l’eau, afin que les gains économiques ne se fassent pas au détriment de la durabilité environnementale à long terme.\n\nSi cette trajectoire se poursuit, le Maroc pourrait non seulement consolider sa domination sur le marché européen des produits frais, mais aussi s’imposer comme une référence mondiale en matière de stratégies d’exportation agricoles résilientes et axées sur l’innovation.",

    // Blog 7 Full Content (French)
    "news.morocco.export.spain.q1_2025.content":
      "Au premier trimestre 2025, les exportations marocaines de fruits et légumes vers l’Espagne ont connu un élan exceptionnel, consolidant la position du Royaume comme acteur clé sur le marché européen des produits frais. Les importations espagnoles en provenance du Maroc ont atteint 188 076 tonnes, pour une valeur de 481 millions d’euros, soit une hausse de 24 % en volume et de 23 % en valeur par rapport au premier trimestre 2024. Cette performance s’inscrit dans une tendance haussière continue depuis 2021, année où les exportations s’élevaient à 156 229 tonnes pour 311 millions d’euros — représentant en quatre ans une progression de plus de 20 % en volume et de 54 % en valeur.\n\nLa tomate s’est imposée comme le produit phare, avec une progression de 34 % en volume pour atteindre 32 313 tonnes, et une augmentation de plus de 57 % en valeur dépassant 52 millions d’euros. Les poivrons ont maintenu de solides résultats, avec plus de 32 000 tonnes exportées (en léger recul de 2 % en volume), mais un gain de 4 % en valeur pour atteindre 42 millions d’euros. Les haricots verts, en revanche, ont enregistré un recul, chutant de 17 % en volume et de 12 % en valeur à 42 millions d’euros.\n\nÀ l’échelle de l’Union européenne, les exportations marocaines ont également progressé de manière significative, atteignant 512 689 tonnes (+9 %) et un record de 1,121 milliard d’euros (+14 %) au premier trimestre 2025. Si les expéditions de tomates vers l’UE ont reculé de 10 % en volume (environ 188 000 tonnes), leur valeur est restée stable à 369 millions d’euros grâce à la hausse des prix. Les poivrons ont affiché une hausse de 7 % en valeur malgré un léger recul en tonnage, tandis que les avocats ont connu un essor spectaculaire — les volumes ont doublé pour atteindre 62 368 tonnes et la valeur a bondi de 79 % à 176,7 millions d’euros.\n\nCette dynamique est portée par la proximité géographique du Maroc, ses chaînes logistiques efficaces et ses prix compétitifs, conjugués à un accent croissant sur la qualité et le respect des normes européennes. Entre janvier et mai 2025, le Maroc est devenu le premier fournisseur de l’Espagne en valeur, avec 834 millions d’euros de produits frais livrés — une hausse annuelle de 30 % — même si la France reste en tête en volume total.\n\nCependant, ce succès s’accompagne de tensions. Les agriculteurs espagnols expriment une inquiétude croissante face à ce qu’ils perçoivent comme une concurrence déloyale liée à l’accord commercial UE–Maroc, accusé de faire pression à la baisse sur les prix locaux. Ces tensions ont entraîné des manifestations, des actions de lobbying en faveur de contrôles d’importation plus stricts et même des actes de vandalisme visant des camions marocains en Espagne. Du côté marocain, la croissance rapide des exportations agricoles accentue la pression sur les ressources en eau, alors que le pays fait face à une grave sécheresse et à une baisse des niveaux de ses barrages. Les autorités et producteurs sont donc appelés à investir dans des systèmes d’irrigation modernes, des projets de dessalement et des pratiques agricoles durables afin de concilier croissance des exportations et préservation de l’environnement à long terme.\n\nDans l’ensemble, les chiffres du premier trimestre 2025 confirment la montée en puissance du Maroc sur les marchés espagnol et européen des produits frais, avec les tomates, les poivrons et un secteur de l’avocat en plein essor comme moteurs principaux. Si le Royaume parvient à gérer les risques environnementaux et à apaiser les tensions politiques avec ses partenaires européens, il pourrait consolider son statut de fournisseur incontournable de l’Europe en produits agricoles frais dans les années à venir.",
  },
};

// Server-side translation function
export function getTranslation(
  key: TranslationKey,
  language: string = "en"
): string {
  return translations[language]?.[key] || translations["en"][key] || key;
}

