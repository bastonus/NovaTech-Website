// NovaTech Website - Language Switcher
document.addEventListener('DOMContentLoaded', function() {
    // Textes disponibles en français et en anglais
    const translations = {
        'fr': {
            'hero_title': 'Créez votre présence en ligne avec NovaTech',
            'hero_subtitle': 'Des sites web sur mesure, performants et abordables',
            'cta_quote': 'Obtenir un devis gratuit',
            'cta_learn_more': 'En savoir plus',
            'about_title': 'Qui sommes-nous ?',
            'about_content': 'NovaTech est une agence web spécialisée dans la création de sites internet sur mesure pour les entreprises. Notre approche combine design moderne, performances techniques et tarifs compétitifs.',
            'services_title': 'Nos services',
            'service_web_creation': 'Création de sites web',
            'service_web_creation_desc': 'Des sites modernes, responsives et optimisés pour tous vos besoins.',
            'service_maintenance': 'Maintenance',
            'service_maintenance_desc': 'Service de maintenance standard ou premium pour garder votre site à jour.',
            'service_hosting': 'Hébergement',
            'service_hosting_desc': 'Solutions d\'hébergement fiables et performantes adaptées à vos besoins.',
            'service_seo': 'Référencement SEO',
            'service_seo_desc': 'Optimisation pour les moteurs de recherche pour améliorer votre visibilité.',
            'services_detail_title': 'Création de sites web',
            'static_sites_title': 'Sites statiques',
            'static_sites_desc': 'Idéals pour les sites vitrines ou à contenu fixe, nos sites statiques sont rapides, sécurisés et optimisés pour le référencement.',
            'dynamic_sites_title': 'Sites dynamiques',
            'dynamic_sites_desc': 'Parfaits pour les sites nécessitant des mises à jour fréquentes ou des fonctionnalités avancées. Avec ou sans WordPress, selon vos besoins.',
            'site_types_title': 'Types de sites que nous proposons',
            'site_type_onepage': 'Site one-page',
            'site_type_onepage_desc': 'Pour une présentation concise de votre activité',
            'site_type_multipages': 'Site multi-pages',
            'site_type_multipages_desc': 'Pour présenter votre activité de manière détaillée',
            'site_type_ecommerce': 'E-commerce',
            'site_type_ecommerce_desc': 'Pour vendre vos produits ou services en ligne',
            'advantages_title': 'Pourquoi choisir NovaTech ?',
            'advantage_personalized': 'Service personnalisé',
            'advantage_personalized_desc': 'Chaque projet est unique et reçoit une attention personnalisée.',
            'advantage_pricing': 'Prix compétitifs',
            'advantage_pricing_desc': 'Des tarifs transparents et abordables sans compromis sur la qualité.',
            'advantage_responsive': 'Réactivité',
            'advantage_responsive_desc': 'Un service client réactif 7j/7 avec différentes options de maintenance.',
            'testimonials_title': 'Ce que disent nos clients',
            'pricing_title': 'Nos tarifs et formules',
            'pricing_subtitle': 'Des offres claires et transparentes, sans mauvaise surprise',
            'plan_essential': 'Essentiel',
            'plan_business': 'Business',
            'plan_premium': 'Premium',
            'starting_at': 'À partir de',
            'choose': 'Choisir',
            'pricing_includes': '✓ Tous nos forfaits incluent : Hébergement pour 1 an, nom de domaine, certificat SSL, et 1 mois de maintenance',
            'get_custom_quote': 'Obtenir un devis personnalisé',
            'contact_title': 'Contactez-nous',
            'name': 'Nom',
            'email': 'Email',
            'phone': 'Téléphone',
            'message': 'Message',
            'send': 'Envoyer',
            'address_title': 'Adresse',
            'phone_title': 'Téléphone',
            'email_title': 'Email',
            'hours_title': 'Horaires',
            'hours_content': 'Lun - Ven: 9h - 18h',
            'cta_ready': 'Prêt à lancer votre projet ?',
            'cta_contact_today': 'Contactez-nous dès aujourd\'hui pour un devis gratuit et sans engagement.',
            'request_quote': 'Demander un devis',
            'navigation': 'Navigation',
            'services': 'Services',
            'creation': 'Création',
            'maintenance_link': 'Maintenance',
            'hosting_link': 'Hébergement',
            'seo_link': 'SEO',
            'contact': 'Contact',
            'stay_informed': 'Restez informé',
            'subscribe': 'S\'inscrire',
            'legal': 'Mentions légales',
            'privacy': 'Politique de confidentialité',
            'terms': 'Conditions générales',
            'copyright': '© 2023 NovaTech. Tous droits réservés.',
            'menu_home': 'Accueil',
            'menu_about': 'À propos',
            'menu_services': 'Services',
            'menu_pricing': 'Tarifs',
            'menu_contact': 'Contact'
        },
        'en': {
            'hero_title': 'Create your online presence with NovaTech',
            'hero_subtitle': 'Custom, high-performance and affordable websites',
            'cta_quote': 'Get a free quote',
            'cta_learn_more': 'Learn more',
            'about_title': 'Who we are',
            'about_content': 'NovaTech is a web agency specializing in custom website creation for businesses. Our approach combines modern design, technical performance, and competitive pricing.',
            'services_title': 'Our services',
            'service_web_creation': 'Website Creation',
            'service_web_creation_desc': 'Modern, responsive, and optimized sites for all your needs.',
            'service_maintenance': 'Maintenance',
            'service_maintenance_desc': 'Standard or premium maintenance service to keep your site up to date.',
            'service_hosting': 'Hosting',
            'service_hosting_desc': 'Reliable and high-performance hosting solutions tailored to your needs.',
            'service_seo': 'SEO Optimization',
            'service_seo_desc': 'Search engine optimization to improve your visibility.',
            'services_detail_title': 'Website Creation',
            'static_sites_title': 'Static Websites',
            'static_sites_desc': 'Ideal for showcase or fixed-content sites, our static websites are fast, secure, and optimized for search engines.',
            'dynamic_sites_title': 'Dynamic Websites',
            'dynamic_sites_desc': 'Perfect for sites requiring frequent updates or advanced features. With or without WordPress, depending on your needs.',
            'site_types_title': 'Types of websites we offer',
            'site_type_onepage': 'One-page website',
            'site_type_onepage_desc': 'For a concise presentation of your business',
            'site_type_multipages': 'Multi-page website',
            'site_type_multipages_desc': 'To present your business in detail',
            'site_type_ecommerce': 'E-commerce',
            'site_type_ecommerce_desc': 'To sell your products or services online',
            'advantages_title': 'Why choose NovaTech?',
            'advantage_personalized': 'Personalized service',
            'advantage_personalized_desc': 'Each project is unique and receives personalized attention.',
            'advantage_pricing': 'Competitive pricing',
            'advantage_pricing_desc': 'Transparent and affordable rates without compromising on quality.',
            'advantage_responsive': 'Responsiveness',
            'advantage_responsive_desc': 'A responsive customer service 7 days a week with different maintenance options.',
            'testimonials_title': 'What our clients say',
            'pricing_title': 'Our pricing and packages',
            'pricing_subtitle': 'Clear and transparent offers, with no surprises',
            'plan_essential': 'Essential',
            'plan_business': 'Business',
            'plan_premium': 'Premium',
            'starting_at': 'Starting at',
            'choose': 'Choose',
            'pricing_includes': '✓ All our packages include: 1-year hosting, domain name, SSL certificate, and 1 month of maintenance',
            'get_custom_quote': 'Get a custom quote',
            'contact_title': 'Contact us',
            'name': 'Name',
            'email': 'Email',
            'phone': 'Phone',
            'message': 'Message',
            'send': 'Send',
            'address_title': 'Address',
            'phone_title': 'Phone',
            'email_title': 'Email',
            'hours_title': 'Hours',
            'hours_content': 'Mon - Fri: 9am - 6pm',
            'cta_ready': 'Ready to launch your project?',
            'cta_contact_today': 'Contact us today for a free, no-obligation quote.',
            'request_quote': 'Request a quote',
            'navigation': 'Navigation',
            'services': 'Services',
            'creation': 'Creation',
            'maintenance_link': 'Maintenance',
            'hosting_link': 'Hosting',
            'seo_link': 'SEO',
            'contact': 'Contact',
            'stay_informed': 'Stay informed',
            'subscribe': 'Subscribe',
            'legal': 'Legal notice',
            'privacy': 'Privacy policy',
            'terms': 'Terms and conditions',
            'copyright': '© 2023 NovaTech. All rights reserved.',
            'menu_home': 'Home',
            'menu_about': 'About',
            'menu_services': 'Services',
            'menu_pricing': 'Pricing',
            'menu_contact': 'Contact'
        }
    };
    
    // Fonction pour changer la langue
    function switchLanguage(lang) {
        // Sauvegarder la préférence de langue
        localStorage.setItem('preferred_language', lang);
        
        // Mettre à jour tous les éléments avec des attributs data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                // Vérifier le type d'élément
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.hasAttribute('data-lang-attribute') && element.getAttribute('data-lang-attribute') === 'value') {
                    element.value = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Mettre à jour les liens et attributs alt
        document.querySelectorAll('[data-lang-attr]').forEach(element => {
            const attrName = element.getAttribute('data-lang-attr');
            const key = element.getAttribute('data-lang-key');
            
            if (translations[lang][key]) {
                element.setAttribute(attrName, translations[lang][key]);
            }
        });
        
        // Mettre à jour les méta-tags pour SEO
        if (document.querySelector('html')) {
            document.querySelector('html').setAttribute('lang', lang);
        }
        
        // Activer le bouton de langue correspondant
        document.querySelectorAll('.language-switcher button').forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            }
        });
        
        // Événement personnalisé pour notifier d'autres scripts
        const event = new CustomEvent('languageChanged', { detail: { language: lang } });
        document.dispatchEvent(event);
    }
    
    // Exportation de la fonction pour l'utiliser dans d'autres fichiers
    window.switchLanguage = switchLanguage;
    
    // Initialisation : vérifier la langue préférée stockée
    const storedLanguage = localStorage.getItem('preferred_language');
    
    // Si une préférence existe, l'utiliser
    if (storedLanguage && (storedLanguage === 'fr' || storedLanguage === 'en')) {
        switchLanguage(storedLanguage);
    }
    
    // Ajouter des écouteurs d'événements aux boutons de langue
    document.querySelectorAll('.language-switcher button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}); 