# Plan de création du site EdEx

## Direction retenue

Créer une page institutionnelle éditoriale en français, construite comme un parcours humain plutôt qu’un catalogue. L’univers sera fondé sur le navy `#0F5674`, le blanc et un gold `#E8AD2C` limité aux accents, avec Cormorant Garamond Bold pour les déclarations et Inter pour l’information.

Le rythme alternera photographies immersives, compositions typographiques, grands vides, lignes fines et séquences interactives. Aucun motif SaaS, glassmorphism, grille de cartes répétitive, code couleur par pôle ou symbole concurrent du logo EdEx.

## Les quatre moments directeurs

1. **Hero — entrée dans l’univers EdEx**
   - Photographie plein cadre d’une scène d’apprentissage ou de transmission béninoise contemporaine.
   - Le nom EdEx et « L’allié des esprits brillants » s’inscrivent dans une composition asymétrique superposée à l’image.
   - Une ligne éditoriale et un indice de défilement invitent à poursuivre, sans bouton massif.

2. **Parcours des cinq pôles — une progression, cinq portes**
   - Grande composition verticale numérotée, non assimilable à une timeline corporate.
   - Une ligne continue traverse les étapes et change subtilement au passage de la souris ou du focus.
   - Chaque étape révèle son rôle dans la progression, avec accès direct à sa séquence dédiée.

3. **Pôle 3 — deux trajectoires de même poids**
   - Le point de départ « Jeune diplômé » se divise en deux chemins graphiques équilibrés.
   - Placement des talents et incubation occupent des surfaces, typographies et interactions équivalentes.
   - Une photographie de collaboration relie les deux trajectoires sans les réduire à deux cartes côte à côte.

4. **Private Equity — un outil, pas un sommet**
   - Rupture visuelle sobre après l’accompagnement opérationnel.
   - Grande photographie de travail stratégique autour d’un projet, sans codes financiers clichés.
   - Phrase manifeste dominante, texte minimal et continuité explicite avec l’écosystème EdEx.

## Construction complète

- Concevoir une navigation minimale avec identité EdEx, accès au parcours, à la vision et au dialogue.
- Enchaîner : hero, introduction respirée, constat, parcours, cinq pôles, écosystème, vision, conclusion humaine et footer.
- Donner une composition propre à chaque pôle : cadrage, rythme, placement d’image et densité différents.
- Générer une bibliothèque de **six photographies originales au minimum** : une image de hero et une image distincte pour chacun des cinq pôles. Les scènes montreront le travail réel à Cotonou/Bénin, avec personnages, cadrages, âges et situations variés.
- Utiliser uniquement les cinq pôles fournis et reprendre fidèlement leurs contenus.
- Créer des interactions éditoriales discrètes : lignes qui s’étendent, révélations progressives, légers déplacements d’image, transitions au focus et au survol, avec respect de la réduction des mouvements.
- Adapter réellement les compositions au mobile en conservant les grandes phrases, les images fortes et les respirations.
- Ajouter les métadonnées françaises propres à EdEx et une structure sémantique accessible.

## Détails techniques

- Définir tous les tokens visuels dans le système global en OKLCH, y compris couleurs, polices, lignes, surfaces et mouvements.
- Charger Cormorant Garamond et Inter dans l’en-tête du document.
- Construire la page principale à `/` et intégrer les éléments interactifs avec React, sans stockage ni service externe.
- Employer des liens typographiques accessibles plutôt que des boutons génériques.
- Vérifier la compilation, l’absence d’erreurs, puis contrôler visuellement la page en grand écran et en mobile : lisibilité, contrastes, absence de chevauchement, variété photographique, équilibre du Pôle 3 et sobriété du gold.
