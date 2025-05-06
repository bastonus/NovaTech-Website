// NovaTech Website - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navigation mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Changement de langue
    const languageButtons = document.querySelectorAll('.language-switcher button');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Enlever la classe 'active' de tous les boutons
            languageButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe 'active' au bouton cliqué
            this.classList.add('active');
            
            // Appeler la fonction de changement de langue
            const lang = this.getAttribute('data-lang');
            if (typeof window.switchLanguage === 'function') {
                window.switchLanguage(lang);
            }
        });
    });
    
    // Animation témoignages
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    
    testimonialDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = this.getAttribute('data-slide');
            
            // Masquer tous les slides
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            
            // Afficher le slide sélectionné
            testimonialSlides[slideIndex].classList.add('active');
            
            // Mise à jour des dots
            testimonialDots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Animation des stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Fonction pour animer un compteur
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50; // Diviser l'animation en 50 étapes
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    }
    
    // Fonction pour vérifier si un élément est visible dans la fenêtre
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Vérifier si la section de stats est visible et lancer l'animation
    function checkStatsVisibility() {
        statNumbers.forEach(stat => {
            if (isElementInViewport(stat) && !stat.classList.contains('animated')) {
                const target = parseInt(stat.getAttribute('data-count'));
                animateCounter(stat, target);
                stat.classList.add('animated');
            }
        });
    }
    
    // Vérifier lors du défilement
    window.addEventListener('scroll', checkStatsVisibility);
    
    // Vérifier au chargement initial
    checkStatsVisibility();
    
    // Bouton retour en haut
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Soumission du formulaire
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Logique de validation et d'envoi à implémenter
            console.log('Formulaire de contact soumis');
            alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            this.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Logique d'inscription à la newsletter à implémenter
            console.log('Inscription newsletter');
            alert('Merci pour votre inscription à notre newsletter !');
            this.reset();
        });
    }
    
    // Animation du header au défilement
    const header = document.getElementById('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                header.style.padding = '0.5rem 0';
                header.style.boxShadow = 'var(--shadow-medium)';
            } else {
                header.style.padding = '1rem 0';
                header.style.boxShadow = 'var(--shadow-small)';
            }
        });
    }
}); 