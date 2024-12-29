# Mon Application de Recherche de Films

Bienvenue dans **Mon Application de Recherche de Films**, une API simple construite avec Node.js et Express.js pour interagir avec l'API de [The Movie Database (TMDb)](https://www.themoviedb.org/). Cette application vous permet de rechercher des films, d'obtenir les films populaires et de récupérer les crédits d'un film spécifique.

## Table des Matières

- [Caractéristiques](#caractéristiques)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
    - [Démarrer le Serveur](#démarrer-le-serveur)
    - [Endpoints Disponibles](#endpoints-disponibles)
        - [Recherche de Films](#recherche-de-films)
        - [Films Populaires](#films-populaires)
        - [Crédits d'un Film](#crédits-dun-film)
- [Technologies Utilisées](#technologies-utilis%C3%A9es)
- [Gestion des Erreurs](#gestion-des-erreurs)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Caractéristiques

- **Recherche de Films** : Recherchez des films par mot-clé.
- **Films Populaires** : Obtenez une liste des films les plus populaires.
- **Crédits d'un Film** : Récupérez les crédits (cast) d'un film spécifique.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (v14 ou supérieur)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)
- Un compte TMDb et une clé API. Vous pouvez obtenir une clé API en vous inscrivant sur [TMDb](https://www.themoviedb.org/).

## Installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

## Configuration

1. **Créer un fichier `.env`**

   À la racine du projet, créez un fichier nommé `.env` pour stocker vos variables d'environnement.

   ```bash
   touch .env
   ```

2. **Ajouter la clé API TMDb**

   Ouvrez le fichier `.env` et ajoutez votre clé API TMDb :

   ```env
   TMDB_API_KEY=votre_clé_api_tmdb
   ```

   Remplacez `votre_clé_api_tmdb` par votre véritable clé API obtenue depuis TMDb.

## Utilisation

### Démarrer le Serveur

Pour lancer l'application, exécutez la commande suivante :

```bash
node index.js
```

Le serveur démarrera sur [http://localhost:3000](http://localhost:3000).

### Endpoints Disponibles

#### Recherche de Films

- **URL** : `/search`
- **Méthode** : `GET`
- **Description** : Recherche des films en fonction d'une requête.

- **Paramètres de requête** :
    - `query` (string) : Le terme de recherche.

- **Exemple de requête** :

  ```http
  GET http://localhost:3000/search?query=Inception
  ```

- **Réponse** : Liste des films correspondants à la recherche.

#### Films Populaires

- **URL** : `/popular`
- **Méthode** : `GET`
- **Description** : Récupère une liste des films les plus populaires.

- **Exemple de requête** :

  ```http
  GET http://localhost:3000/popular
  ```

- **Réponse** : Liste des films populaires.

#### Crédits d'un Film

- **URL** : `/credits`
- **Méthode** : `GET`
- **Description** : Récupère les crédits (cast) d'un film spécifique.

- **Paramètres de requête** :
    - `query` (string) : L'ID du film.

- **Exemple de requête** :

  ```http
  GET http://localhost:3000/credits?query=550
  ```

  *(où `550` est l'ID du film "Fight Club")*

- **Réponse** : Liste des acteurs et actrices du film.

## Technologies Utilisées

- **[Express.js](https://expressjs.com/)** : Framework web pour Node.js.
- **[Axios](https://axios-http.com/)** : Client HTTP pour effectuer des requêtes vers l'API TMDb.
- **[dotenv](https://github.com/motdotla/dotenv)** : Module pour charger les variables d'environnement depuis un fichier `.env`.

## Gestion des Erreurs

L'application gère les erreurs potentielles lors des requêtes vers l'API TMDb. En cas d'erreur, une réponse appropriée est renvoyée avec un code d'état HTTP correspondant :

- **404 Not Found** : Lorsque aucune donnée n'est trouvée pour une recherche.
- **500 Internal Server Error** : En cas d'erreur lors de la communication avec l'API TMDb.

Les erreurs sont également loggées dans la console pour faciliter le débogage.
