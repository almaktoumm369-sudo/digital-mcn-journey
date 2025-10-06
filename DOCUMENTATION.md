# 📚 Documentation du Site - Musée des Civilisations Noires

## 🎯 Vue d'Ensemble du Projet

Ce projet est un site web complet pour le **Musée des Civilisations Noires de Dakar**, développé dans le cadre du hackathon Dakar Slush'D 2025. Il offre une expérience digitale immersive permettant aux visiteurs de découvrir les richesses du patrimoine africain.

## 🛠️ Technologies Utilisées

- **React 18.3** - Framework JavaScript moderne
- **TypeScript** - Typage statique pour plus de sécurité
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn UI** - Composants d'interface modernes
- **React Router** - Navigation entre les pages
- **Lucide React** - Bibliothèque d'icônes

## 📁 Structure du Projet

```
src/
├── assets/              # Images et ressources
│   ├── museum-hero.jpg
│   ├── mask-dan.jpg
│   ├── kente-cloth.jpg
│   ├── throne-bamoun.jpg
│   ├── sculpture-senufo.jpg
│   └── djembe.jpg
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base (shadcn)
│   ├── Navbar.tsx      # Barre de navigation
│   └── Footer.tsx      # Pied de page
├── pages/              # Pages de l'application
│   ├── Home.tsx        # Page d'accueil
│   ├── Collections.tsx # Liste des œuvres
│   ├── ArtworkDetail.tsx # Détails d'une œuvre
│   ├── Tickets.tsx     # Billetterie
│   ├── VirtualTour.tsx # Visite virtuelle
│   ├── Events.tsx      # Événements
│   ├── Shop.tsx        # Boutique
│   └── Quiz.tsx        # Quiz culturel
├── hooks/              # Hooks personnalisés
├── lib/                # Utilitaires
├── App.tsx            # Composant principal
├── main.tsx           # Point d'entrée
└── index.css          # Styles globaux
```

## 🎨 Système de Design

### Palette de Couleurs

Le site utilise un thème africain chaleureux en mode sombre :

```css
/* Couleurs principales */
--primary: 25 75% 47%        /* Terre cuite / Terracotta */
--secondary: 45 85% 55%      /* Or / Gold */
--accent: 15 80% 50%         /* Orange brûlé */
--background: 25 30% 12%     /* Brun foncé (mode sombre) */
--foreground: 35 20% 90%     /* Beige clair pour le texte */
```

### Comment Modifier les Couleurs

**Fichier à modifier :** `src/index.css`

Les couleurs sont définies en format HSL (Hue, Saturation, Lightness) :
- **H** (Teinte) : 0-360 degrés
- **S** (Saturation) : 0-100%
- **L** (Luminosité) : 0-100%

**Exemple de modification :**
```css
/* Pour changer la couleur principale */
--primary: 25 75% 47%;  /* Actuel : terre cuite */
--primary: 200 80% 50%; /* Nouveau : bleu */
```

## 📄 Guide des Pages

### 1. 🏠 Page d'Accueil (`Home.tsx`)

**Sections principales :**
- **Hero** : Image d'en-tête avec titre et appels à l'action
- **Événements** : Carrousel automatique des événements à venir
- **Œuvres Vedettes** : Les 4 pièces les plus populaires
- **Aperçu Collection** : Prévisualisation avec bannière défilante
- **Newsletter** : Formulaire d'inscription

**Comment modifier l'image d'arrière-plan du Hero :**
```tsx
// Ligne 17 dans Home.tsx
import museumHero from "@/assets/museum-hero.jpg";

// Remplacez l'image dans src/assets/ et changez l'import
import museumHero from "@/assets/votre-nouvelle-image.jpg";
```

**Comment ajouter un événement :**
```tsx
// Lignes 21-37 dans Home.tsx
const events = [
  {
    id: 1,
    title: "Votre Titre",
    date: "Date de l'événement",
    image: votreImage,
  },
  // Ajoutez ici...
];
```

**Comment modifier la bannière défilante :**
```tsx
// Lignes 251-270 dans Home.tsx
<div className="animate-marquee whitespace-nowrap">
  <span className="text-lg font-medium text-primary mx-4">
    ✨ Votre texte personnalisé
  </span>
  {/* Dupliquez pour un défilement continu */}
</div>
```

### 2. 🎨 Page Collections (`Collections.tsx`)

**Fonctionnalités :**
- Recherche par titre ou origine
- Filtrage par catégorie
- Système de likes
- Affichage en grille responsive

**Comment ajouter une œuvre :**
```tsx
// Lignes 27-146 dans Collections.tsx
const artworks = [
  {
    id: 1,                           // ID unique
    title: "Nom de l'œuvre",
    origin: "Pays d'origine",
    category: "Masques",             // Catégorie
    period: "XIXe siècle",           // Période
    likes: 100,                      // Nombre de likes initial
    image: votreImage,               // Import de l'image
  },
  // Ajoutez ici...
];
```

**Catégories disponibles :**
- Masques
- Sculptures
- Textiles
- Céramiques
- Bijouterie
- Mobilier
- Instruments
- Artisanat

### 3. 🔍 Détails d'une Œuvre (`ArtworkDetail.tsx`)

**Fonctionnalités :**
- Descriptions multilingues (Français, Anglais, Wolof)
- Lecture audio de la description
- Vidéo 3D (YouTube embed)
- Scanner QR Code (placeholder)

**Comment ajouter une traduction :**
```tsx
// Dans le composant ArtworkDetail
const descriptions = {
  fr: "Description en français...",
  en: "English description...",
  wo: "Wolof description...",
};
```

### 4. 🎫 Billetterie (`Tickets.tsx`)

**Tarifs configurés :**
- Visite libre : 3000 FCFA
- Tarif scolaire/étudiant : 500 FCFA
- Groupe (10-30 personnes) : 2500 FCFA/personne

**Comment modifier les tarifs :**
```tsx
// Cherchez dans Tickets.tsx
const prices = {
  full: 3000,
  student: 500,
  group: 2500,
};
```

### 5. 🎬 Visite Virtuelle (`VirtualTour.tsx`)

Intègre une vidéo YouTube immersive du musée.

**Comment changer la vidéo :**
```tsx
// Cherchez l'URL YouTube dans VirtualTour.tsx
<iframe src="https://www.youtube.com/embed/VOTRE_VIDEO_ID" />
```

### 6. 📅 Événements (`Events.tsx`)

Liste des événements culturels avec formulaire d'inscription newsletter.

### 7. 🛍️ Boutique (`Shop.tsx`)

Boutique en ligne pour objets d'art et souvenirs.

**Comment ajouter un produit :**
```tsx
const products = [
  {
    id: 1,
    name: "Nom du produit",
    price: 15000,              // Prix en FCFA
    category: "Artisanat",
    image: votreImage,
  },
];
```

### 8. 🎮 Quiz (`Quiz.tsx`)

Quiz interactif de 10 questions sur les civilisations africaines.

**Comment ajouter une question :**
```tsx
// Lignes 15-67 dans Quiz.tsx
const questions = [
  {
    question: "Votre question ?",
    image: votreImage,
    answers: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    correctAnswer: 1,           // Index de la bonne réponse (0-3)
    explanation: "Explication détaillée...",
  },
];
```

## 🖼️ Gestion des Images

### Ajouter une Nouvelle Image

1. **Placez l'image** dans le dossier `src/assets/`
2. **Importez-la** dans votre composant :
```tsx
import monImage from "@/assets/mon-image.jpg";
```
3. **Utilisez-la** :
```tsx
<img src={monImage} alt="Description" />
```

### Générer de Nouvelles Images

Le projet utilise des images générées par IA. Pour en créer de nouvelles :
1. Utilisez un service comme Midjourney, DALL-E, ou Stable Diffusion
2. Prompt recommandé : "African museum artifact, [type d'objet], museum quality photograph, dark background, dramatic lighting, ultra high resolution"

## 🎯 Fonctionnalités Clés

### Système de Likes

```tsx
// Gestion locale des likes
const [likedArtworks, setLikedArtworks] = useState<Set<number>>(new Set());

const toggleLike = (artworkId: number) => {
  const newLiked = new Set(likedArtworks);
  if (newLiked.has(artworkId)) {
    newLiked.delete(artworkId);
  } else {
    newLiked.add(artworkId);
  }
  setLikedArtworks(newLiked);
};
```

### Notifications Toast

```tsx
import { useToast } from "@/hooks/use-toast";

const { toast } = useToast();

toast({
  title: "Succès !",
  description: "Votre message...",
});
```

### Animation de Défilement (Marquee)

```tsx
<div className="animate-marquee whitespace-nowrap">
  {/* Votre contenu défilant */}
</div>
```

## 🚀 Commandes Utiles

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Preview de la production
npm run preview

# Linter le code
npm run lint
```

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints Tailwind :

- **sm:** 640px (mobiles)
- **md:** 768px (tablettes)
- **lg:** 1024px (desktop)
- **xl:** 1280px (large desktop)
- **2xl:** 1536px (extra large)

**Exemple d'utilisation :**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Contenu */}
</div>
```

## 🔧 Personnalisation Avancée

### Modifier le Thème Global

**Fichier :** `tailwind.config.ts`

```ts
extend: {
  colors: {
    primary: {
      DEFAULT: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
    },
  },
}
```

### Ajouter une Animation

**Fichier :** `src/index.css`

```css
@keyframes votre-animation {
  0% { /* état initial */ }
  100% { /* état final */ }
}

/* Dans tailwind.config.ts */
animation: {
  'votre-animation': 'votre-animation 2s ease-in-out infinite',
}
```

### Créer un Nouveau Composant

1. Créez le fichier dans `src/components/` ou `src/pages/`
2. Structure de base :

```tsx
import { useState } from "react";

const MonComposant = () => {
  const [state, setState] = useState(initialValue);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Votre contenu */}
    </div>
  );
};

export default MonComposant;
```

3. Ajoutez la route dans `App.tsx` si c'est une page :

```tsx
<Route path="/mon-chemin" element={<MonComposant />} />
```

## 🐛 Débogage Courant

### L'image ne s'affiche pas

1. Vérifiez que l'import est correct
2. Vérifiez le chemin du fichier
3. Assurez-vous que l'image est dans `src/assets/`

### Le style ne s'applique pas

1. Vérifiez que la classe Tailwind existe
2. Vérifiez la priorité CSS (utilisez `!` pour forcer : `!bg-red-500`)
3. Videz le cache : `npm run dev -- --force`

### Erreur de compilation TypeScript

1. Vérifiez les types des variables
2. Assurez-vous d'importer les bons types
3. Utilisez `any` temporairement pour identifier le problème

## 📊 Performance

### Optimisations Incluses

- **Lazy loading** des images
- **Code splitting** automatique par route
- **Tree shaking** des imports inutilisés
- **Minification** en production
- **Compression** des assets

### Vérifier la Performance

```bash
# Build et analyze
npm run build
```

Utilisez les DevTools du navigateur :
1. Ouvrir DevTools (F12)
2. Onglet "Lighthouse"
3. Cliquer sur "Generate report"

## 🔐 Sécurité

### Bonnes Pratiques Implémentées

- Pas de données sensibles dans le code
- Validation des entrées utilisateur
- Protection contre les injections XSS (React par défaut)
- HTTPS recommandé en production

## 📦 Déploiement

### Build de Production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

### Hébergement Recommandé

- **Vercel** (recommandé) - Gratuit, facile
- **Netlify** - Gratuit, CI/CD intégré
- **GitHub Pages** - Gratuit pour projets publics

### Déployer sur Vercel

1. Créer un compte sur vercel.com
2. Connecter votre repository GitHub
3. Vercel détecte automatiquement Vite
4. Cliquer sur "Deploy"

## 🤝 Contribution

### Workflow Git Recommandé

```bash
# Créer une branche
git checkout -b feature/ma-fonctionnalite

# Faire vos modifications
git add .
git commit -m "Description claire"

# Pusher
git push origin feature/ma-fonctionnalite
```

## 📞 Support

Pour toute question sur le code :

1. Consultez cette documentation
2. Lisez les commentaires dans le code
3. Vérifiez la documentation officielle de React
4. Consultez la documentation Tailwind CSS

## 📝 Checklist Avant Présentation

- [ ] Toutes les pages fonctionnent
- [ ] Les images sont optimisées
- [ ] Le site est responsive (tester sur mobile)
- [ ] Pas d'erreurs dans la console
- [ ] Le build de production fonctionne
- [ ] Les textes sont sans fautes
- [ ] Les liens externes fonctionnent
- [ ] Le thème sombre est cohérent

## 🎉 Fonctionnalités Futures Possibles

- Backend avec authentification
- Base de données pour les œuvres
- Paiement en ligne réel (Stripe, Wave)
- Système de réservation avancé
- Application mobile (React Native)
- Scanner QR Code fonctionnel
- Audio guides réels
- Modèles 3D interactifs
- Réalité augmentée (AR)

---

**Bonne chance pour le hackathon ! 🚀**

*Cette documentation a été créée pour vous aider à comprendre et modifier facilement le site du Musée des Civilisations Noires.*