# Demo React - State management

## Problematique
Le partage d'information dans une application
- Necessite d'utiliser les props
- Oblige les composants "principaux" à stocker les données via des states
![probleme-react](./ressources/problematique.png)

## Solution possible
Utiliser un mecanisme de gestions des données

### Sans bibliotheque
Utilisation du `Context`
- Transmition d'information (state) dans l'arbre des composants

### Avec bibliotheque

### Store
Conteneur de données :
- Les données sont accessibles en lecture
- Notification en cas de changement de donnée
- Méthode d'intéraction

Solution possible :
- Flux.js (Déprécié)
- Redux
- Zustand

### Etat partagé
En gros, c'est un state en dehors des composants React.  
Avantage, il est donc utilisable partout.  

Solution possible :
- Recoil
- Jotai <- _Utiliser pour la démo_

### Observables
Approche basée sur la réactivité.  
Observation d'un changement et réaction automatique.  

Solutions :
- MobX


## Principe de la démo
Mise en place d'un compteur qui utilise Jotai.  
Pour la démo, celui sera découpé en 3 composants : 
- DisplayCounter : Afficher la valeur du compteur
- BtnIncrCounter : Bouton pour incrémenté et décrementé le compteur
- BtnResetCounter : Bouton pour reset le compteur