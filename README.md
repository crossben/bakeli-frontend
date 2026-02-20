# Frontend — Consortium Jeunesse Sénégal

Interface utilisateur de la plateforme de gestion des membres du Consortium Jeunesse Sénégal (CJS), construite avec **Vue 3** et **Vite**.

---

## 🛠 Technologies utilisées

| Technologie | Rôle |
|---|---|
| [Vue 3](https://vuejs.org/) | Framework JavaScript |
| [Vite](https://vitejs.dev/) | Outil de build et dev server |
| [Vue Router](https://router.vuejs.org/) | Navigation entre les pages |
| [Pinia](https://pinia.vuejs.org/) | Gestion d'état (authentification) |
| [Axios](https://axios-http.com/) | Requêtes HTTP vers l'API Laravel |
| [Tailwind CSS](https://tailwindcss.com/) | Styles utilitaires |

---

## 📂 Structure du projet

```
frontend/
├── public/               # Fichiers statiques
├── src/
│   ├── assets/           # Images, polices, styles globaux
│   ├── components/       # Composants réutilisables (Modals, etc.)
│   ├── router/           # Configuration des routes Vue Router
│   ├── services/
│   │   └── api.js        # Instance Axios configurée
│   ├── stores/
│   │   └── auth.js       # Store Pinia pour l'authentification
│   └── views/            # Pages de l'application
│       ├── Landing.vue        # Page d'accueil publique
│       ├── Login.vue          # Page de connexion
│       ├── Register.vue       # Page d'inscription
│       ├── AdminDashboard.vue # Tableau de bord administrateur
│       └── Connected.vue      # Espace membre connecté
├── Dockerfile
├── docker-compose.yaml
└── vite.config.js
```

---

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) v18+
- [Bun](https://bun.sh/) (recommandé) ou npm/yarn
- Le backend Laravel doit être en cours d'exécution

---

## 🚀 Installation et démarrage

```bash
# 1. Installer les dépendances
bun install

# 2. Lancer le serveur de développement
bun run dev
```

L'application sera accessible sur : **<http://localhost:5173>**

---

## 🔐 Authentification

L'authentification est gérée via **Laravel Sanctum** (tokens Bearer).

- Le token est stocké dans le `localStorage` sous la clé `auth_token`
- Les données utilisateur sont stockées sous `auth_user`
- Les routes protégées sont gérées par le guard `beforeEach` dans `router/index.js`

### Comptes de test

| Rôle | Email | Mot de passe |
|---|---|---|
| Administrateur | `admin@bakeli.sn` | `password` |

---

## 📋 Pages et rôles

| Route | Page | Accès |
|---|---|---|
| `/` | Landing | Public |
| `/login` | Connexion | Public |
| `/register` | Inscription | Public |
| `/admin` | Tableau de bord admin | Admin uniquement |
| `/connected` | Espace membre | Membre connecté |

---

## 🐳 Déploiement Docker

```bash
docker-compose up --build
```

---

## 📡 Configuration de l'API

L'URL de base de l'API est configurée dans `src/services/api.js` :

```js
// Développement
baseURL: 'http://127.0.0.1:8000/api'

// Production
// baseURL: 'https://api.bakeli.gerexatlas.com/api'
```
