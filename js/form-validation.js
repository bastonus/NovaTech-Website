// NovaTech Website - Form Validation
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les formulaires
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    // Validation du formulaire de contact
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs des champs
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Vérifier que les champs requis sont remplis
            let isValid = true;
            let errorMessages = [];
            
            // Validation du nom
            if (name === '') {
                isValid = false;
                errorMessages.push('Le nom est requis');
                highlightError('name');
            } else {
                removeHighlight('name');
            }
            
            // Validation de l'email
            if (email === '') {
                isValid = false;
                errorMessages.push('L\'email est requis');
                highlightError('email');
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessages.push('Veuillez saisir un email valide');
                highlightError('email');
            } else {
                removeHighlight('email');
            }
            
            // Validation du téléphone (optionnel mais doit être valide si fourni)
            if (phone !== '' && !isValidPhone(phone)) {
                isValid = false;
                errorMessages.push('Veuillez saisir un numéro de téléphone valide');
                highlightError('phone');
            } else {
                removeHighlight('phone');
            }
            
            // Validation du message
            if (message === '') {
                isValid = false;
                errorMessages.push('Le message est requis');
                highlightError('message');
            } else if (message.length < 10) {
                isValid = false;
                errorMessages.push('Le message doit contenir au moins 10 caractères');
                highlightError('message');
            } else {
                removeHighlight('message');
            }
            
            // Si le formulaire est valide, l'envoyer (simulé)
            if (isValid) {
                // Simuler l'envoi du formulaire (à remplacer par un vrai envoi AJAX)
                setTimeout(function() {
                    // Réinitialiser le formulaire
                    contactForm.reset();
                    
                    // Afficher un message de succès
                    showSuccessMessage(contactForm, 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
                }, 1000);
            } else {
                // Afficher les erreurs
                showErrorMessages(contactForm, errorMessages);
            }
        });
    }
    
    // Validation du formulaire de newsletter
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer l'email
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            // Vérifier que l'email est valide
            if (email === '' || !isValidEmail(email)) {
                // Mettre en évidence l'erreur
                emailInput.classList.add('error');
                emailInput.focus();
            } else {
                // Réinitialiser le style
                emailInput.classList.remove('error');
                
                // Simuler l'inscription (à remplacer par un vrai envoi AJAX)
                setTimeout(function() {
                    // Réinitialiser le formulaire
                    newsletterForm.reset();
                    
                    // Afficher un message de succès
                    showSuccessMessage(newsletterForm, 'Merci pour votre inscription à notre newsletter !');
                }, 1000);
            }
        });
    }
    
    // Fonction pour valider un email
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Fonction pour valider un numéro de téléphone (format international simplifié)
    function isValidPhone(phone) {
        // Accepte les formats: +XX X XX XX XX XX, +XXXXXXXXXXXX, 0X XX XX XX XX, etc.
        const regex = /^(\+\d{1,3})?[-. ]?(\d{1,3})?[-. ]?\d{1,3}[-. ]?\d{1,3}[-. ]?\d{1,4}$/;
        return regex.test(phone);
    }
    
    // Fonction pour mettre en évidence un champ en erreur
    function highlightError(fieldId) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.classList.add('error');
        }
    }
    
    // Fonction pour supprimer la mise en évidence d'erreur
    function removeHighlight(fieldId) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.classList.remove('error');
        }
    }
    
    // Fonction pour afficher un message d'erreur
    function showErrorMessages(form, messages) {
        // Supprimer les anciens messages
        const oldMessages = form.querySelector('.form-messages');
        if (oldMessages) {
            oldMessages.remove();
        }
        
        // Créer un conteneur pour les messages
        const messageContainer = document.createElement('div');
        messageContainer.className = 'form-messages error';
        
        // Ajouter chaque message
        const messageList = document.createElement('ul');
        messages.forEach(message => {
            const messageItem = document.createElement('li');
            messageItem.textContent = message;
            messageList.appendChild(messageItem);
        });
        
        messageContainer.appendChild(messageList);
        form.prepend(messageContainer);
        
        // Faire défiler vers le haut du formulaire
        form.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Fonction pour afficher un message de succès
    function showSuccessMessage(form, message) {
        // Supprimer les anciens messages
        const oldMessages = form.querySelector('.form-messages');
        if (oldMessages) {
            oldMessages.remove();
        }
        
        // Créer un conteneur pour le message
        const messageContainer = document.createElement('div');
        messageContainer.className = 'form-messages success';
        messageContainer.textContent = message;
        
        form.prepend(messageContainer);
        
        // Faire défiler vers le haut du formulaire
        form.scrollIntoView({ behavior: 'smooth' });
        
        // Supprimer le message après 5 secondes
        setTimeout(function() {
            messageContainer.remove();
        }, 5000);
    }
    
    // Ajouter des écouteurs pour nettoyer les erreurs lors de la saisie
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });
}); 