# [Résidence MGA - Hôtel - Restaurant - Boutique / Plateforme web] - Document de Conception

**Auteur(s) :** Audrey COMLAN-CATARIA
**Statut :** Brouillon <!-- [Brouillon / En révision / Validé / Implémenté] -->
**Date de création :** 24/04/2026
**Dernière mise à jour :** 24/04/2026

Phases du projet :
- ​Phase 1 : Site vitrine (Contenu, SEO, Formulaires de contact).
- ​Phase 2 : E-commerce et Réservations (Intégration paiements, gestion des stocks).

---

## 1. Contexte (Context)
La Résidence MGA est un hôtel proposant également un service de restaurantion et bar du matin jusqu'au soir, ainsi qu'une boutique de revente des produits de la marque Kaël cosmétiques et des tableaux d'artistes exposés dans les chambres et les couloirs.

L'établissement a besoin d'une présence en ligne pour présenter ses trois pôles d'activité : l'hôtel, le restaurant et la boutique. Dans un premier temps, le site servira de vitrine pour attirer les clients et générer des contacts (appels, emails). Dans un second temps, le site devra se transformer en un outil de conversion direct capable de gérer des réservations de chambres, des tables et la vente de produits physiques en ligne.

## 2. Objectifs et Non-Objectifs (Goals & Non-Goals)

### Objectifs :
* ​Phase 1 : Créer une interface utilisateur (UI) immersive mettant en valeur les visuels de l'établissement.
* ​Phase 1 : Mettre en place une structure SEO locale forte (référencement sur le pays).
* Phase 2 : Intégrer un tunnel d'achat fluide pour les produits de la boutique.
* ​Phase 2 : Permettre la vérification des disponibilités et la réservation de chambres en temps réel.

### Non-Objectifs :
* ​Phase 1 : Ne pas intégrer de passerelle de paiement (Stripe, PayPal) ni de logique de panier.
* Ne pas développer un outil de gestion hôtelière (PMS) complet en interne, mais plutôt se préparer à se connecter à un outil existant.

## 3. Architecture Proposée (Proposed Solution)
Pour permettre une transition fluide de la Phase 1 à la Phase 2, nous optons pour une architecture modulaire.
Le système repose sur une architecture Headless, séparant totalement la gestion des données (Back-end) de l'interface utilisateur (Front-end).

### ​Front-end (Interface) :
Unifié pour les trois pôles, avec une navigation claire. Les boutons "Réserver" (Phase 1) pointeront vers un formulaire de demande ou un numéro de téléphone, puis seront remplacés par des appels vers le système de réservation (Phase 2).

* **​Stack Technique** : React (UI), TypeScript (Sécurité de typage), Vite (Bundler/Outil de build).

* **Structure par Composants** : Création d'une librairie de composants partagés (UI Kit) pour garantir une cohérence visuelle entre les espaces Hôtel, Restaurant et Boutique.

* **Gestion d'état (State Management)** : 
	* Phase 1 : React Context sera suffisant pour des besoins simples (langue, thème).
	* Phase 2 : Introduction éventuelle de Zustand pour gérer des états complexes comme le panier e-commerce ou le tunnel de réservation multicritères.
​
* **Consommation des données** : Utilisation de TanStack Query (React Query) pour fetcher les données de Strapi avec une gestion efficace de la mise en cache.
* **Typage** : Utilisation des types générés automatiquement ou manuellement pour correspondre aux schémas Strapi (Content Types).
* **Point d'attention SEO (Crucial pour la Phase 1)** : Étant donné que React génère une SPA (Single Page Application), nous utiliserons des techniques de pré-rendu (Prerendering/SSG via Vite) ou un routage adapté pour nous assurer que les moteurs de recherche indexent correctement les pages de l'hôtel et de la boutique.

### ​Back-end (Strapi CMS) : 
Utilisation d'un système de gestion de contenu capable d'évoluer vers l'e-commerce. Système de réservation (Phase 2) : Connexion via API à un Channel 

Manager / Moteur de réservation (Booking Engine) tiers pour éviter de gérer la complexité des doubles réservations.

* **​Moteur de contenu** : Strapi (v4/v5) fonctionnant sur un serveur Node.js.
 
* **Base de données** : PostgreSQL (recommandé pour la production et la scalabilité des réservations).

* **API** : REST pour servir les données au front-end.
 
* **Gestion des Médias** : Utilisation du fournisseur d'upload Strapi (ex: intégration avec Cloudinary ou AWS S3 pour le stockage optimisé des photos de l'hôtel).

* **​Extensions (Phase 2)** : Utilisation de "Custom Controllers" dans Strapi pour gérer la logique de réservation et intégrer le SDK Stripe pour les paiements.

## 4. Modèles de Données et API (Data Model & API)
Même pour la Phase 1, les données doivent être structurées proprement dans le CMS.
​Dans Strapi, nous définirons trois types de "Collection Types" principaux :

### Chambres (Rooms) :
* title (String)
* slug (UID, pour des URLs propres comme /chambres/suite-royale)
* description (Rich Text / Markdown)
* price_per_night (Decimal)
* photos (Media Library, multiple)
* amenities (Enumeration ou Relation avec une collection "Équipements")

### Produits Boutique (Shop Products) :
* name (String)
* price (Decimal)
* stock_quantity (Integer) - Crucial pour la Phase 2
* category (Relation avec "Catégories")

### Menus Restaurant :
* dish_name (String)
* price (Decimal)
* is_vegetarian (Boolean)
* allergen_info (Text)


## 5. Alternatives Considérées (Alternatives Considered)

1.  **Front-end CMS :** Rejetée car ne permet pas suffisament de flexibilité dans l'UI et de scalablité pour l'évolution de la plateforme.
2.  **Back-end sans CMS :** Rejetée car équipe technique trop petite pour assurer la sécurité des données.

## 6. Considérations Transversales (Cross-Cutting Concerns)
* **​Performance (Images)** : Le site vitrine d'un hôtel repose sur des photos haute définition. Une stratégie de compression (formats WebP/AVIF) et de lazy loading est cruciale dès le premier jour.

* **Sécurité et RGPD** :
	* **Phase 1** : Gestion du consentement des cookies et sécurisation des données issues des formulaires de contact.
	* **Phase 2** : Conformité PCI-DSS (externalisée via une passerelle comme Stripe) pour sécuriser les transactions bancaires.

* **Authentification** : Utilisation du système de rôles et permissions (RBAC) natif de Strapi pour protéger l'accès à l'administration. Pour la Phase 2, nous utiliserons le plugin Users & Permissions pour permettre aux clients de créer un compte et voir leurs réservations.

* ​**Webhooks** : Configuration de Webhooks dans Strapi pour déclencher un nouveau build du site ou vider le cache dès qu'une chambre ou un plat est modifié.

* ​**Sécurité des API** : Utilisation de tokens API (Bearers) pour restreindre l'accès aux données sensibles.

* **Accessibilité (A11y)** : Contraste suffisant, navigation au clavier et attributs alt soignés pour toutes les photos (bénéfique pour l'inclusivité ET le SEO). Respect des normes du WCAG.

## 7. Plan de Déploiement et de Test (Rollout & Testing Plan)
* **​Déploiement Phase 1** : Mise en ligne du site statique avec React, Typescript et Vite.
* **Déploiement Phase 2** : Les fonctionnalités de paiement et de réservation seront d'abord testées sur un environnement de staging (pré-production) avec des paiements fictifs avant d'être basculées en production.
