# Guide d'optimisation des images

Ce guide fournit des instructions détaillées pour optimiser les images générées avant de les intégrer au site NovaTech.

## Pourquoi optimiser les images ?
- Améliorer les performances du site
- Réduire le temps de chargement des pages
- Économiser la bande passante des utilisateurs
- Améliorer le référencement (SEO)

## Formats d'images optimaux

### SVG (pour les illustrations et le logo)
- Format vectoriel idéal pour les illustrations, icônes et logos
- Mise à l'échelle sans perte de qualité
- Taille de fichier réduite pour les graphiques simples
- Possibilité d'animer et de styliser via CSS

### PNG (pour les éléments avec transparence)
- À utiliser pour les images nécessitant une transparence
- Compression sans perte
- Adapté pour l'Apple Touch Icon

### JPG/JPEG (pour les photos)
- Format optimal pour les photographies (témoignages)
- Bon niveau de compression avec qualité acceptable
- Ne supporte pas la transparence

## Outils d'optimisation recommandés

### Pour les SVG
- **SVGO** : outil en ligne de commande pour optimiser les SVG
- **SVGOMG** (https://jakearchibald.github.io/svgomg/) : interface web pour SVGO
- **Illustrator** : exporter en "SVG optimisé"

### Pour les PNG/JPG
- **TinyPNG/TinyJPG** (https://tinypng.com/) : compression intelligente
- **Squoosh** (https://squoosh.app/) : outil d'optimisation avancé
- **ImageOptim** (Mac) ou **FileOptimizer** (Windows) : applications de bureau

## Dimensions recommandées

| Image | Format | Dimensions recommandées |
|-------|--------|------------------------|
| logo.svg | SVG | Hauteur : 40-50px |
| favicon.ico | ICO | 32x32px et 16x16px |
| apple-touch-icon.png | PNG | 180x180px |
| hero-illustration.svg | SVG | ~800x600px |
| static-site-illustration.svg | SVG | ~600x400px |
| dynamic-site-illustration.svg | SVG | ~600x400px |
| testimonial-1.jpg | JPG | 300x300px |
| testimonial-2.jpg | JPG | 300x300px |
| testimonial-3.jpg | JPG | 300x300px |

## Bonnes pratiques d'optimisation

1. **Pour les SVG**
   - Supprimez les métadonnées inutiles
   - Réduisez la précision des valeurs numériques
   - Combinez et simplifiez les chemins quand c'est possible
   - Utilisez des formes simples plutôt que des tracés complexes

2. **Pour les JPG**
   - Compressez avec un niveau de qualité entre 70-85%
   - Utilisez la compression progressive
   - Supprimez les métadonnées EXIF inutiles

3. **Pour les PNG**
   - Réduisez le nombre de couleurs si possible
   - Utilisez PNG-8 pour les images simples avec peu de couleurs
   - Utilisez PNG-24 uniquement quand nécessaire

4. **Général**
   - Assurez-vous que toutes les images ont des dimensions appropriées (ne pas redimensionner via HTML/CSS)
   - Utilisez le lazy loading pour les images sous la ligne de flottaison
   - Fournissez des attributs width et height pour éviter le saut de contenu

## Optimisation pour le web moderne

### Images responsives
```html
<img 
  srcset="image-small.jpg 400w, image-medium.jpg 800w, image-large.jpg 1200w" 
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
  src="image-medium.jpg" 
  alt="Description"
/>
```

### Lazy loading natif
```html
<img src="image.jpg" loading="lazy" alt="Description" />
```

## Test des performances
Après avoir optimisé les images, utilisez ces outils pour vérifier les performances :
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

N'oubliez pas que l'équilibre entre qualité visuelle et performances est crucial. Optimisez au maximum sans compromettre l'apparence professionnelle du site. 