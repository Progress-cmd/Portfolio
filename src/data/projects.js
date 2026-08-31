export const projects = [
    {   name:"Unison", 
        description:"Une application web auto-hébergée permettant l'écoute de musiques provennant de Youtube. Possession locale des musiques et partages restreint.", 
        tags:["PHP", "Docker", "JS", "Shell", "SQL"], 
        state:"Actif", 
        sourceUrl:"https://github.com/Progress-cmd/pi5_unison.git", 
        demoUrl:"https://unison.pi5.ovh", 
        slug:"unison",

        languages:["PHP", "YAML", "SQL", "Shell", "Markdown"],
        tools:["Docker", "Apache", "Meilisearch", "MariaDB", "yt-dlp"],

        contexte:"J'écoute comme tout le monde de la musique, et avec un ami on cherchait un moyen simple de se partager des sons sans dépendre des limites des plateformes existantes : **interfaces figées**, **catalogues restreints**, **coûts d'abonnement**. Unison est né de cette envie d'avoir un contrôle total — sur l'interface, sur les fonctionnalités, et sur l'hébergement des morceaux eux-mêmes, centralisés sur mon propre serveur plutôt que dispersés sur des services tiers. Un bonus s'est ajouté naturellement : la liberté d'ajouter absolument n'importe quel son, sans contrainte de catalogue.",

        ceQueJaiConstruit:"Unison centralise tous les sons et artistes que j'importe, simplement en collant un **lien de partage YouTube ou YouTube Music**. L'application se charge de tout : récupération, organisation, et mise à disposition immédiate dans une bibliothèque commune. Chaque utilisateur — moi et mon ami — dispose de son propre compte, mais tous deux piochent dans la même bibliothèque partagée.\n\nCôté écoute, on retrouve les fonctionnalités qu'on attend d'une vraie plateforme de streaming :\n\n- Création de **playlists** et gestion des **favoris**\n- **Lecture aléatoire** avec file d'attente\n- **Historique** et suivi du temps d'écoute par morceau\n- **Recherche avancée** pour retrouver un son ou un artiste rapidement\n- Découvertes **aléatoires** parmi les morceaux déjà importés",

        choixTechniques:"L'**interface d'administration** n'était pas prévue au départ : elle est née du besoin réel de suivre ce qui se passe sur le serveur au quotidien — repérer les images mal associées à un son, supprimer du contenu, surveiller le stockage utilisé, identifier les sons orphelins, et interagir directement avec la base de données sans ouvrir un terminal à chaque fois.\n\n**Docker** s'est imposé naturellement : je le connaissais déjà un peu, et Unison était l'occasion idéale de mettre en pratique ce que j'étais en train d'apprendre plus sérieusement.\n\nPour la recherche, j'ai choisi **Meilisearch** plutôt qu'un simple `LIKE` SQL. L'envie de tester un outil de recherche plus poussé a rejoint un vrai besoin : pouvoir retrouver un son même avec une faute de frappe, ce qu'une recherche SQL classique ne permet pas facilement.\n\n**yt-dlp**, en revanche, a été la source de la plupart des frictions. Mal configuré, l'outil ne se comporte pas comme attendu : il faut choisir le bon *format* (surtout pour la taille des fichiers), décider si l'on récupère les *métadonnées* ou non, si l'on garde uniquement l'*audio*, et surtout maintenir l'outil à jour — les anciennes versions cessent tout simplement de fonctionner à mesure que YouTube change son fonctionnement côté serveur.",

        ceQueJaiAppris:"Unison a été un vrai terrain d'apprentissage sur presque tous les fronts.\n\n**Développement** — j'ai consolidé mes compétences en **PHP** et appris à structurer et versionner un vrai projet avec **Git** sur la durée.\n\n**Infrastructure** — j'ai mis en place une architecture complète de A à Z : conteneurs **Docker**, service d'envoi de mails externe pour la réinitialisation de mot de passe, automatisation du déploiement et des mises à jour en production. J'ai aussi écrit mes propres commandes pour consulter les logs et mettre à jour le code, l'application, yt-dlp ou les conteneurs sans manipulation manuelle répétitive.\n\n**Sécurité et administration système** — j'ai appris à isoler et sécuriser le serveur, gérer les sessions utilisateurs et révoquer des accès quand nécessaire.\n\nAu final, c'est moins une compétence précise qu'une vraie **autonomie** que j'ai gagnée : la capacité de faire vivre un projet du code jusqu'à sa mise en production, en le maintenant dans la durée.",

        architecture:"Unison repose sur **trois conteneurs Docker** séparés :\n\n- L'application elle-même (**PHP**)\n- La base de données (**MariaDB**)\n- Le moteur de recherche avancée (**Meilisearch**)\n\nIls communiquent entre eux via un **réseau Docker interne**, isolé du reste du serveur, et l'application n'est exposée à l'extérieur qu'à travers un reverse proxy **Traefik**, qui gère aussi la terminaison **HTTPS**.\n\nLes fichiers audio sont persistés dans un **volume bindé**, directement sur le disque du serveur — pas de perte de données en cas de redémarrage ou de reconstruction des conteneurs. L'import de musique s'appuie sur **yt-dlp**, installé directement dans le conteneur de l'application et invoqué à la demande à chaque nouvel import, plutôt que de tourner en service permanent.",

        prochainesEvolutions:"Unison est un projet vivant, pensé pour évoluer par étapes. La priorité actuelle est de terminer la **migration complète** de l'ancienne bibliothèque musicale. Ensuite, deux axes sont prévus :\n\n1. Étendre l'**import et la recherche** au-delà du contenu déjà présent localement, pour ne plus être limité aux morceaux déjà téléchargés.\n2. Introduire une couche plus **intelligente de recommandation** : s'appuyer sur des API externes de suggestion musicale pour proposer des titres similaires, et explorer à terme une petite **IA interne** capable d'apprendre les goûts de chaque utilisateur pour affiner ses propositions.\n\nL'objectif plus large est de générer des **playlists à thème**, suggérer de nouveaux sons depuis des sources externes, et remettre en avant les morceaux les moins écoutés de la bibliothèque.",

        screenshots: ["/img/unison/1.png", "/img/unison/2.png", "/img/unison/3.png", "/img/unison/4.png", "/img/unison/5.png", "/img/unison/6.png"]
    },
    {   name:"Minecraft", 
        description:"Création de zéro une copie conforme du jeu Minecraft. Apprentissage du langage C++, compréhension et création d'un moteur de jeu 3D et utilisation des méthodes de générations tel que le bruit de Perlin", 
        tags:["C++", "GLSL"], 
        state:"Archivé", 
        sourceUrl:"https://github.com/Progress-cmd/Minecraft-5.1.git", 
        demoUrl:null, 
        slug:"minecraft",

        languages:["C++", "GLSL"],
        tools:["OpenGL", "Glad", "GLFW", "glm", "Freetype", "stb"],

        contexte:"L'été qui a suivi le lycée, je voulais me lancer dans un gros projet capable de faire progresser mes compétences de façon drastique. Recréer Minecraft s'est imposé par affinité — l'un des rares jeux qui m'ait vraiment séduit, et un bon prétexte pour apprendre en profondeur.\n\nJe ne connaissais alors que très peu la programmation, donc j'ai choisi d'apprendre un nouveau langage pour l'occasion : le **C++**. Un choix de faisabilité (un langage performant, adapté à un moteur de jeu), un choix d'avenir (encore largement utilisé aujourd'hui), et un peu de hasard aussi.\n\nL'apprentissage a été très linéaire, en trois étapes avant même que le jeu ne commence à exister : d'abord un cours d'initiation au C++ sur OpenClassrooms, puis un cours de **programmation orientée objet** — un paradigme que je ne connaissais pas du tout — toujours en C++, et enfin un tutoriel complet sur YouTube pour faire de la 3D avec **OpenGL**. Ce n'est qu'à partir de cette troisième étape que les premières versions de Minecraft ont commencé à voir le jour.",

        ceQueJaiConstruit:"Le jeu commence par une fenêtre — la gestion de fenêtre en C++ reste très rudimentaire par rapport à ce qu'on trouve dans des langages plus haut niveau. Vient ensuite la brique de base du rendu : les objets qui permettent de dessiner des cubes (**VAO**, **VBO**, **EBO** — les tampons de sommets et d'indices d'OpenGL), puis une **caméra** donnant au monde sa troisième dimension, avec ses propres contrôles.\n\nUne fois le rendu et le déplacement en place, les **shaders** et les **textures** entrent en jeu, appliqués aux blocs. Puis vient la génération des **chunks** — des sections de monde composées de cubes générés en série — suivie de la génération du **monde** lui-même : à mesure que la caméra se déplace, de nouveaux chunks sont créés à la volée, rendant le monde infini.\n\nUn affichage de la position et des FPS à l'écran a été ajouté à ce stade, pour pouvoir mesurer concrètement les performances avant la grosse phase d'optimisation qui a suivi.\n\nLe cœur véritable de Minecraft — la **génération procédurale** — arrive en dernier : un bruit de Perlin codé à la main, après documentation, puis appliqué à la génération du monde pour donner naissance à un relief cohérent plutôt qu'un terrain aléatoire.",

        choixTechniques:"Une fois le monde infini généré et navigable, une grande phase d'optimisation est devenue nécessaire. Les blocs entièrement entourés d'autres blocs n'ont aucune raison d'être rendus — ils ont donc été exclus du dessin. Les chunks trop éloignés de la caméra sont libérés de la mémoire plutôt que conservés indéfiniment, et les chunks ont dû apprendre à interagir avec leurs voisins directs pour s'optimiser mutuellement.\n\nLa vraie difficulté est venue du **multithreading**. La génération initiale de la carte était trop longue, et les déplacements de la caméra saccadaient dès qu'un nouveau chunk devait être calculé. La solution a été de séparer clairement deux responsabilités : un thread dédié calcule les meshs des chunks en tâche de fond (le travail lourd, purement CPU), pendant que le thread principal — le seul autorisé à parler à la carte graphique via OpenGL — se contente d'envoyer les résultats déjà prêts, limités à deux uploads par frame pour garder le jeu fluide. Les deux threads communiquent via des files d'attente protégées par des **mutex**, pour éviter qu'ils ne se marchent dessus en accédant aux mêmes données en même temps. Je me suis beaucoup appuyé sur des ressources extérieures pour comprendre et mettre en œuvre cette synchronisation, un vrai terrain inconnu jusque-là.",

        ceQueJaiAppris:"Ce projet a représenté un vrai saut : mon expérience précédente se limitait à Python et à des langages web, et le **C++** — un langage bas niveau — m'a demandé de repartir de zéro sur beaucoup de plans. Compiler du code, gérer une fenêtre, construire un moteur 3D, faire du multithreading, écrire ma propre génération procédurale : autant de notions que je découvrais en même temps que je les appliquais.\n\nLe vrai déclic a été la **programmation orientée objet**. Je l'avais déjà croisée en Python sans jamais vraiment en saisir l'intérêt ni le fonctionnement — c'est le C++ qui me l'a fait comprendre et me l'a fait apprivoiser, en la manipulant concrètement sur un vrai projet plutôt que sur des exercices abstraits.\n\nTechniquement, j'ai fini par comprendre en profondeur comment une texture s'applique, comment fonctionne un shader, comment une image se construit et s'affiche à l'écran, comment du texte peut être rendu à l'écran — bref, le cœur même de ce qui fait tourner un jeu comme Minecraft. C'est aussi sur ce projet que j'ai utilisé **Git** pour la première fois, et que j'ai pris l'habitude de documenter mon avancée le plus possible, ainsi que de commenter abondamment mon code pour m'y retrouver.\n\nMais la vraie leçon dépasse la technique. Le projet a duré plus de **sept mois**, pas à temps plein, avec une progression souvent lente et frustrante — peu de résultats immédiats, beaucoup de moments où je ne comprenais plus et devais reprendre, recommencer, parfois plusieurs fois de suite. J'en retiens qu'une avancée lente et méthodique, couplée à de la persévérance et de la détermination, permet à peu près tout — ou presque.",

        screenshots: ["/img/minecraft/1.png", "/img/minecraft/2.png", "/img/minecraft/3.png", "/img/minecraft/4.png", "/img/minecraft/5.png", "/img/minecraft/6.png"]
    },
    {   name:"Portfolio",
        description:"Mise en avant de mes principaux projets et de moi même. Apprentissage d'un nouveau framework", 
        tags:["Vue.js"], 
        state:"Archivé", 
        sourceUrl:null, 
        demoUrl:null, 
        slug:"portfolio"
    },
    {   name:"Conway's Game of Life", 
        description:"", 
        tags:["C++"], 
        state:"", 
        sourceUrl:null, 
        demoUrl:null, 
        slug:"gameoflife"
    },
    {   name:"Chess", 
        description:"", 
        tags:["Python"], 
        state:"Archivé", 
        sourceUrl:null, 
        demoUrl:null, 
        slug:"chess"
    },
    {   name:"Pacman", 
        description:"", 
        tags:["C++"], 
        state:"Archivé", 
        sourceUrl:null, 
        demoUrl:null, 
        slug:"pacman"
    }
]
