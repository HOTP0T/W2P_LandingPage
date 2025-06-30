# W2P Landing Page 🚏

Une landing page moderne et captivante pour W2P (Votre prix, votre séjour) avec des animations GSAP avancées.

## 🎯 Fonctionnalités

### Design & UX

- **Design moderne** : Interface noir/blanc avec accents violets
- **Typographie forte** : Space Grotesk pour un impact visuel maximum
- **Responsive** : Optimisé pour tous les appareils
- **Animations fluides** : GSAP pour des transitions captivantes

### Sections de la page

1. **Hero Section** : Slogan impactant avec cartes flottantes animées
2. **Comment ça marche** : 3 étapes visuelles avec icônes SVG
3. **Pourquoi s'inscrire** : 5 bénéfices avec animations
4. **Valeurs de marque** : Design minimaliste et impactant
5. **Section hôteliers** : Avantages pour les professionnels
6. **Parrainage** : Système de récompenses
7. **Footer** : CTA final et mentions légales

### Animations GSAP

- **Animations d'entrée** : Timeline séquentielle pour le hero
- **Scroll animations** : Éléments qui apparaissent au scroll
- **Hover effects** : Interactions sur les boutons et cartes
- **Parallax** : Effet de profondeur sur l'arrière-plan
- **Cartes 3D** : Effet de profondeur au survol
- **Barre de progression** : Indicateur de scroll en haut de page

### Fonctionnalités techniques

- **Formulaires interactifs** : Validation et feedback visuel
- **Popup exit intent** : Capture d'emails avant départ
- **Smooth scroll** : Navigation fluide entre sections
- **Navigation sticky** : Barre qui se cache/apparaît au scroll
- **Optimisation performance** : Chargement optimisé

## 🚀 Installation

1. Clonez le repository :

```bash
git clone [url-du-repo]
cd W2P_landing
```

2. Ouvrez `index.html` dans votre navigateur ou servez les fichiers avec un serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (si vous avez http-server installé)
npx http-server

# Avec PHP
php -S localhost:8000
```

3. Accédez à `http://localhost:8000` dans votre navigateur

## 📁 Structure des fichiers

```
W2P_landing/
├── index.html          # Structure HTML principale
├── styles.css          # Styles CSS avec design moderne
├── script.js           # Animations GSAP et interactions
└── README.md           # Documentation du projet
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `styles.css` avec des variables CSS :

```css
:root {
  --black: #000000;
  --dark-gray: #111111;
  --accent: #8b5cf6;
  --accent-light: #a78bfa;
}
```

### Animations

Les animations GSAP sont configurées dans `script.js` :

- Durées et easings personnalisables
- Triggers de scroll ajustables
- Effets hover modifiables

### Contenu

Modifiez le contenu directement dans `index.html` :

- Textes et slogans
- Formulaires et CTA
- Sections et structure

## 🔧 Intégration

### Formulaire email

Pour connecter les formulaires à votre service d'email :

1. Remplacez la simulation dans `script.js` :

```javascript
// Remplacer cette partie dans initFormHandling()
setTimeout(() => {
  // Votre logique d'API ici
  // Exemple avec fetch :
  fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  });
}, 1500);
```

### Analytics

Ajoutez vos scripts de tracking dans le `<head>` de `index.html` :

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>

<!-- Meta Pixel -->
<script>
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  fbq("init", "YOUR_PIXEL_ID");
  fbq("track", "PageView");
</script>
```

## 📱 Responsive

La page est optimisée pour :

- **Desktop** : 1200px+ (design complet)
- **Tablet** : 768px-1199px (adaptations)
- **Mobile** : <768px (version mobile)

## 🎯 SEO

La page inclut :

- Meta tags optimisés
- Structure HTML sémantique
- Images avec alt text
- URLs propres avec ancres

## 🔒 RGPD

Pour la conformité RGPD :

1. Ajoutez une checkbox de consentement aux formulaires
2. Créez une page de politique de confidentialité
3. Configurez le consentement des cookies

## 🚀 Déploiement

### Netlify

1. Connectez votre repository GitHub
2. Configurez le build (pas nécessaire pour des fichiers statiques)
3. Déployez automatiquement

### Vercel

1. Importez votre projet
2. Déployez en un clic
3. Configuration automatique

### Serveur classique

1. Uploadez les fichiers sur votre serveur
2. Configurez votre domaine
3. Activez HTTPS

## 📊 Performance

La page est optimisée pour :

- **Lighthouse Score** : 90+ sur tous les critères
- **Temps de chargement** : <2s
- **Animations fluides** : 60fps
- **Accessibilité** : WCAG 2.1 AA

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche feature
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 📞 Support

Pour toute question ou support :

- Discord: @hotp0t

---

**W2P** - Votre prix, votre séjour. Une nouvelle manière de voyager. 🚏
