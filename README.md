# GO - Réseau Social Sportif

GO est une application mobile de réseau social dédiée aux passionnés de sport. Créez, partagez et participez à des événements sportifs tout en restant connecté avec votre communauté.

## 📋 Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [API Endpoints](#-api-endpoints)

## Fonctionnalités

### Pour les utilisateurs
- **Authentification sécurisée** : Inscription et connexion avec JWT
- **Profil personnalisé** : Photo de profil, bio, sports pratiqués et suivis
- **Publications** : Créez des posts texte ou média
- **Événements sportifs** : Créez et participez à des événements
- **Actualités** : Consultez des articles sur vos sports favoris
- **Recherche** : Trouvez des utilisateurs, événements et contenus
- **Messages** : Communiquez avec d'autres utilisateurs

### Fonctionnalités techniques
- Upload de médias (images/vidéos)
- Gestion des participants aux événements
- Système de likes et interactions
- Pagination des contenus
- Protection des données avec Privacy by Design

## Technologies

### Frontend (Mobile)
- **Framework** : React Native avec Expo
- **Navigation** : Expo Router (file-based routing)
- **Gestion d'état** : React Hooks
- **Stockage sécurisé** : Expo SecureStore
- **Médias** : Expo Image Picker
- **UI** : React Native SVG pour les icônes

### Backend (API)
- **Runtime** : Node.js avec Express.js
- **Base de données** : MySQL
- **Authentification** : JWT (JsonWebToken) + bcryptjs
- **Upload de fichiers** : Multer
- **Sécurité** : CORS, dotenv

### DevOps
- **Base de données** : Docker Compose (MySQL)
- **Version Control** : Git

## Installation

### Prérequis
- Node.js (v16+)
- npm ou yarn
- Docker et Docker Compose (pour la base de données)
- Expo CLI : `npm install -g expo-cli`

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/yowl.git
cd yowl
```

### 2. Installation du Backend

```bash
cd api
npm install
```

### 3. Installation du Frontend

```bash
cd ../Go
npm install
```

### 4. Configuration de la base de données

```bash
cd ../database
docker-compose up -d
```

Cela démarre un conteneur MySQL avec la configuration nécessaire.

## Utilisation

### Démarrer le Backend

```bash
cd api
npm start
# ou
node server.js
```

Le serveur démarre sur `http://localhost:3000`

### Démarrer l'application mobile

```bash
cd Go
npx expo start
```

Options disponibles :
- Appuyez sur `a` pour ouvrir sur Android
- Appuyez sur `i` pour ouvrir sur iOS
- Scannez le QR code avec Expo Go

## API Endpoints

### Authentification
- `POST /register` - Créer un compte
- `POST /login` - Se connecter
- `GET /test` - Test de l'API

### Utilisateurs
- `GET /users` - Liste des utilisateurs
- `GET /profil` - Profil de l'utilisateur connecté (JWT)
- `POST /profil-1-2` - Création profil (étape 1)
- `PUT /profil-2-2` - Création profil (étape 2)

### Médias
- `POST /upload` - Upload fichier (JWT)
- `GET /media/id/:id` - Récupérer média par ID
- `GET /media/user/:userId` - Médias d'un utilisateur
- `GET /media/file/:filename` - Média par nom de fichier

### Posts Texte
- `GET /posts-txt` - Tous les posts texte (pagination)
- `GET /posts-txt/:id` - Post texte par ID
- `POST /posts-txt` - Créer un post texte (JWT)
- `GET /posts-txt/user/:user_id` - Posts d'un utilisateur (JWT)

### Posts Média
- `GET /posts-media` - Tous les posts média
- `POST /posts-media` - Créer un post média (JWT)
- `GET /posts-media/user/:user_id` - Posts média d'un utilisateur (JWT)

### Articles
- `GET /articles` - Tous les articles (pagination)
- `GET /articles/:id` - Article par ID
- `POST /articles` - Créer un article (JWT)

### Événements
- `GET /events` - Tous les événements (pagination)
- `GET /events/:id` - Événement par ID
- `POST /events` - Créer un événement (JWT)
- `DELETE /events/:id` - Supprimer un événement (JWT)
- `POST /events/:id/participants` - S'inscrire à un événement (JWT)
- `GET /events/:id/participants/count` - Nombre de participants

### Sports
- `GET /sports` - Liste de tous les sports
- `GET /sports/:id` - Sport par ID

**Note** : Les endpoints marqués (JWT) nécessitent un token d'authentification dans le header :
```
Authorization: Bearer <token>
```

## Thème de l'application

L'application utilise une palette de couleurs cohérente :

- **Orange** (#F1600D) - Couleur principale
- **Bleu foncé** (#1A265A) - Couleur secondaire
- **Bleu clair** (#50A5B1) - Accents
- **Blanc cassé** (#FEF6ED) - Arrière-plans

## Sécurité

- Mots de passe hashés avec bcrypt
- Authentification JWT
- Protection CORS
- Validation des fichiers uploadés
- Stockage sécurisé des tokens avec SecureStore
- Privacy by Design