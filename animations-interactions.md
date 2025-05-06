# Animations et interactions du site NovaTech

## Principes généraux

- Animations subtiles et fluides
- Temps de chargement rapide prioritaire sur les effets visuels complexes
- Transitions cohérentes entre les sections et pages
- Interactions intuitives pour améliorer l'expérience utilisateur

## Animations au chargement de la page

### Hero Section
- **Titre principal**: Apparaît du bas vers le haut avec un léger fade-in (durée: 0.6s)
- **Sous-titre**: Suit le titre avec un délai de 0.2s (durée: 0.6s)
- **Boutons CTA**: Apparaissent avec un léger effet de scale (de 95% à 100%) après le sous-titre (délai: 0.4s)
- **Image/illustration principale**: Léger effet de parallaxe au défilement

### Sections suivantes
- Apparition progressive des éléments au scroll (fade-in + léger déplacement vertical)
- Délai entre chaque élément d'une même section: 0.1s
- Éléments qui apparaissent de gauche à droite dans les sections alternées

## Interactions sur les éléments d'interface

### Navigation
- Indicateur dynamique sous l'élément actif du menu
- Transition douce lors du changement de page (fade-out/fade-in)
- Menu mobile: animation d'ouverture/fermeture fluide (slide + rotation pour l'icône hamburger)

### Boutons
- **Hover**: Léger agrandissement (scale: 1.05) avec transition de couleur (durée: 0.3s)
- **Active**: Léger effet de pression (scale: 0.98)
- **Focus**: Contour lumineux subtil

### Cartes de services
- **Hover**: Élévation légèrement augmentée (ombre plus prononcée)
- **Hover**: Léger effet de zoom sur les icônes (scale: 1.1)
- **Transition**: Douceur dans les changements d'état (ease-in-out, durée: 0.3s)

## Animations spécifiques

### Carrousel de témoignages
- Transition fluide entre les slides (durée: 0.8s)
- Léger effet de profondeur (slide actif en avant-plan, opacity réduite pour les autres)
- Navigation du carrousel avec effet de transition pour les indicateurs de position

### Compteurs/Statistiques
- Animation de comptage lorsque la section devient visible (progression de 0 à la valeur finale)
- Durée adaptée à la valeur (environ 1.5s pour les grands nombres)

### Formulaire de contact
- Validation des champs en temps réel avec feedback visuel
- Animation subtile des étiquettes (labels) lors de la saisie
- Confirmations avec animations d'état (succès, erreur)

## Animations au scroll

### Parallaxe subtil
- Vitesses de défilement légèrement différentes entre l'arrière-plan et les éléments de premier plan
- Intensité faible pour ne pas perturber la lecture

### Animations d'entrée des sections
- Les titres de section apparaissent du bas vers le haut
- Les contenus apparaissent avec un léger décalage après les titres
- Les illustrations/images apparaissent avec un léger effet de fade-in

### Timeline (parcours client)
- Apparition progressive des étapes au défilement
- Effet de dessin pour les lignes de connexion

## Animations spéciales

### Effets de survol sur la grille de portfolio
- Effet de zoom et d'opacité réduite sur les autres projets
- Apparition de la description et des tags au survol

### Page 404
- Animation ludique d'illustration (légèrement interactive)

### Changement de langue
- Transition douce lors du changement de contenu (fade-out/fade-in)

## Optimisation des performances

- Utilisation de `will-change` avec parcimonie pour les animations complexes
- Privilégier les animations CSS sur les animations JavaScript lorsque possible
- Utilisation de `transform` et `opacity` pour les animations (meilleures performances)
- Désactivation des animations complexes sur les appareils à faible puissance ou en mode économie d'énergie 