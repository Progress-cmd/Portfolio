export const projects = [
    {
        // --- Identité ---
        name: "Unison",
        slug: "unison",
        description: "Une application web auto-hébergée pour écouter, entre proches, de la musique venue de YouTube : les sons sont téléchargés et rangés sur mon propre serveur, et s'écoutent partout, sur ordinateur comme sur téléphone.",
        state: "Actif",

        // --- Stack ---
        languages: ["PHP", "JavaScript", "Twig", "SQL", "YAML", "Shell"],
        tools: ["Symfony", "Docker", "MariaDB", "yt-dlp", "ffmpeg", "Traefik"],
        tags: ["PHP", "Symfony", "Docker", "JS", "SQL"],

        // --- Liens ---
        sourceUrl: "https://github.com/Progress-cmd/Unison.git",
        demoUrl: "https://unison.pi5.ovh",

        // --- Infos factuelles ---
        projectType: "Projet personnel",
        role: "Création, installation, configuration de toutes les étapes de conception",
        team: "1",
        periodLabel: "Octobre 2025 → en cours",
        timeSpent: null,

        // --- Contenu éditorial ---
        contexte: "J'écoute comme tout le monde de la musique, et avec un ami on cherchait un moyen simple de se partager des sons sans dépendre des limites des plateformes existantes : **interfaces figées**, **catalogues restreints**, **coûts d'abonnement**. Unison est né de cette envie d'avoir un contrôle total — sur l'interface, sur les fonctionnalités, et sur l'hébergement des morceaux eux-mêmes, centralisés sur mon propre serveur plutôt que dispersés sur des services tiers. Un bonus s'est ajouté naturellement : la liberté d'ajouter absolument n'importe quel son, sans contrainte de catalogue.\n\nUne première version en PHP sans framework a tourné en production pendant un an. Devenue difficile à faire évoluer, elle a laissé place à une **réécriture complète en Symfony** : la version 2, en ligne aujourd'hui.",
        ceQueJaiConstruit: "Unison centralise tous les sons importés dans une **bibliothèque commune** — titres, albums, artistes — où chaque compte garde ses playlists, ses favoris et son historique.\n\nPour ajouter de la musique, une seule barre de recherche montre d'abord ce qui est déjà là, puis les titres et albums de **YouTube Music**, importables d'un clic ; on peut aussi coller des liens, playlists comprises. Le téléchargement se fait en arrière-plan : audio, pochette, forme d'onde, et titre nettoyé de ses « (Official Video) ».\n\nCôté écoute, on retrouve ce qu'on attend d'une vraie plateforme :\n\n- **File d'attente**, aléatoire, répétition, et reprise là où on s'était arrêté, d'un appareil à l'autre\n- Commandes de l'**écran verrouillé** et des touches multimédia, raccourcis clavier, écoute écran éteint sur téléphone\n- **Paramètres audio** : volume et choix de la sortie sur ordinateur\n- **Mes écoutes** : statistiques de la semaine, moments de la journée, titres et artistes préférés, historique complet\n\nEt une **administration** complète : tableau de bord et statistiques, erreurs à régler (jusqu'aux erreurs JavaScript des navigateurs), correction du contenu, comptes, annonces, maintenance des fichiers.",
        choixTechniques: "La v2 repose sur **Symfony** et **Hotwire** (Turbo et Stimulus) : des pages rendues par le serveur, qui se comportent pourtant comme une application — on navigue sans que la musique s'arrête, le lecteur restant en place d'une page à l'autre. Pas de framework JavaScript ni d'étape de build : **AssetMapper** sert les fichiers tels quels.\n\nLes téléchargements quittent la requête web pour un **worker Symfony Messenger** : un import ne bloque plus la page, il part dans une file, et ses échecs remontent dans l'administration avec un bouton « Relancer ».\n\n**yt-dlp** reste la principale source de frictions. Il faut le garder à jour au rythme des changements de YouTube, lui fournir des cookies pour les vidéos avec vérification d'âge, et surtout ne pas le faire bannir : lors de la migration de près de 1 750 titres, YouTube a limité le compte au bout d'une heure. Le worker reconnaît maintenant cette limite, fait une pause et reprend seul, en espaçant ses requêtes.\n\nLa recherche locale se contente de SQL : **Meilisearch** n'a pas été repris, la recherche côté YouTube Music faisant l'essentiel du travail.",
        ceQueJaiAppris: "Cette réécriture a été l'occasion d'apprendre un **framework** pour de bon : l'organisation par domaines, **Doctrine** et ses migrations, les formulaires, la sécurité de Symfony (connexion, limitation des tentatives, liens de mot de passe par e-mail).\n\n**Infrastructure** — une image **Docker multi-étapes** (développement et production), un déploiement par **tags Git** sur le Raspberry Pi, des migrations de base appliquées au démarrage, des journaux silencieux tant que tout va bien mais complets dès qu'une erreur survient.\n\n**Migration de données** — reprendre comptes, mots de passe, playlists, favoris et historique d'une base à une autre, sans rien perdre, en retéléchargeant proprement toute la musique.\n\nEt surtout, faire vivre un projet en **production** : publier une version, la déployer, observer, corriger — souvent dans la même journée.",
        architecture: "Unison repose sur **trois conteneurs Docker**, construits à partir d'une même image pour les deux premiers :\n\n- L'**application** (Apache et PHP)\n- Le **worker**, qui télécharge la musique avec yt-dlp et ffmpeg\n- La **base de données** (MariaDB)\n\nLa base vit sur un réseau Docker **interne**, sans accès à Internet ; seul le worker sort vers YouTube, et seule l'application est exposée, derrière le reverse proxy **Traefik** qui gère le **HTTPS** et limite le débit des requêtes.\n\nMusiques, pochettes et base sont sur des **volumes** du serveur, sauvegardés chaque nuit. Une mise à jour consiste à passer le code sur un tag puis à reconstruire l'image : les migrations de la base s'appliquent toutes seules au démarrage.",
        prochainesEvolutions: "La priorité est de terminer la **migration** de l'ancienne bibliothèque, puis de laisser Unison prendre sa place au quotidien.\n\nÀ plus long terme, l'idée reste d'introduire une couche plus **intelligente de recommandation** : s'appuyer sur des API externes de suggestion musicale pour proposer des titres similaires, générer des **playlists à thème**, et remettre en avant les morceaux les moins écoutés de la bibliothèque.",

        // --- Petits plus ---
        funFact: "Unison cache quelques surprises : un petit bonhomme qui sort parfois la tête de la barre latérale, un papillon qui traverse l'écran de temps en temps, une nuée toutes les 100 heures d'écoute… et quelques mots magiques à essayer dans la recherche.",
        bilan: "La v2 a remplacé la première version en production, en v2.30 au moment d'écrire ces lignes : près de 1 750 titres repris de l'ancienne bibliothèque et retéléchargés proprement, avec les comptes, les playlists et l'historique d'écoute de chacun.",
        transparence: "La première version d'Unison — architecture, streaming, authentification compris — est entièrement de ma main. La v2 a été écrite avec un agent IA (Claude Code) : j'en ai posé les premières briques moi-même, puis délégué de plus en plus l'écriture du code, en gardant les choix, la relecture, les tests en conditions réelles et la mise en production.",

        // --- Extrait de code ---
        codeSnippetIntro: "Quand YouTube limite un compte après trop de téléchargements, yt-dlp répond « Video unavailable »… comme pour une vidéo supprimée. Le worker reconnaît maintenant ce cas : plutôt que de faire échouer un à un tous les titres de la file, il fait une pause et réessaie le même titre.",
        codeSnippetLang: "php",
        codeSnippet: "for ($pause = 1; ; ++$pause) {\n    $process = new Process(array_merge($commonArguments, $arguments));\n    $process->setTimeout($timeout);\n\n    try {\n        $process->mustRun();\n        break;\n    } catch (\\RuntimeException $e) {\n        $failure = $this->failure($process->getErrorOutput(), $e);\n\n        if (!$failure instanceof YouTubeRateLimitedException || $pause > self::RATE_LIMIT_PAUSES) {\n            throw $failure;\n        }\n\n        // Otherwise every track left in the queue would fail one after the other in a\n        // few minutes. The worker only imports: it waits, the queue stays as it is.\n        $this->logger->error('YouTube limite les téléchargements : pause de {minutes} min ({pause}/{pauses}) avant de réessayer.', [\n            'minutes' => intdiv($this->rateLimitPause, 60),\n            'pause' => $pause,\n            'pauses' => self::RATE_LIMIT_PAUSES,\n        ]);\n        sleep($this->rateLimitPause);\n    }\n}",

        // --- Captures ---
        screenshots: ["/img/unison/1.png", "/img/unison/2.png", "/img/unison/3.png", "/img/unison/4.png", "/img/unison/5.png", "/img/unison/6.png"]
    },
    {
        // --- Identité ---
        name: "Minecraft",
        slug: "minecraft",
        description: "Création de zéro d'une copie conforme du jeu Minecraft. Apprentissage du langage C++, compréhension et création d'un moteur de jeu 3D et utilisation des méthodes de générations tel que le bruit de Perlin.",
        state: "Archivé",

        // --- Stack ---
        languages: ["C++", "GLSL"],
        tools: ["OpenGL", "Glad", "GLFW", "glm", "Freetype", "stb"],
        tags: ["C++", "GLSL", "GLFW"],

        // --- Liens ---
        sourceUrl: "https://github.com/Progress-cmd/Minecraft-5.1.git",
        demoUrl: null,

        // --- Infos factuelles ---
        projectType: "Projet personnel",
        role: "Développement seul, de la fenêtre jusqu'au moteur de jeu complet",
        team: "1",
        periodLabel: "Juillet 2025 → Février 2026",
        timeSpent: "8 mois",

        // --- Petits plus ---
        anecdote: "J'ai repris ce projet de zéro cinq fois. La première fois que j'ai vu un simple cube s'afficher à l'écran, ça faisait déjà trois mois que j'y travaillais.",
        funFact: "La version finale tourne à plus de 900 FPS sur un terrain plat — largement au-delà de ce dont un jeu comme celui-ci a réellement besoin.",
        bilan: "Je ne suis pas totalement satisfait de la version finale, même si j'ai exploré tous les points importants du sujet. L'aide de l'IA était devenue trop présente dans le développement, au point que je commençais à ne plus vraiment comprendre ce que je faisais. Il m'a semblé plus raisonnable de m'arrêter là plutôt que de continuer sur cette pente.",

        // --- Contenu éditorial ---
        contexte: "L'été qui a suivi le lycée, je voulais me lancer dans un gros projet capable de faire progresser mes compétences de façon drastique. Recréer Minecraft s'est imposé par affinité — l'un des rares jeux qui m'ait vraiment séduit, et un bon prétexte pour apprendre en profondeur.\n\nJe ne connaissais alors que très peu la programmation, donc j'ai choisi d'apprendre un nouveau langage pour l'occasion : le **C++**. Un choix de faisabilité (un langage performant, adapté à un moteur de jeu), un choix d'avenir (encore largement utilisé aujourd'hui), et un peu de hasard aussi.\n\nL'apprentissage a été très linéaire, en trois étapes avant même que le jeu ne commence à exister : d'abord un cours d'initiation au C++ sur OpenClassrooms, puis un cours de **programmation orientée objet** — un paradigme que je ne connaissais pas du tout — toujours en C++, et enfin un tutoriel complet sur YouTube pour faire de la 3D avec **OpenGL**. Ce n'est qu'à partir de cette troisième étape que les premières versions de Minecraft ont commencé à voir le jour.",

        ceQueJaiConstruit: "Le jeu commence par une fenêtre — la gestion de fenêtre en C++ reste très rudimentaire par rapport à ce qu'on trouve dans des langages plus haut niveau. Vient ensuite la brique de base du rendu : les objets qui permettent de dessiner des cubes (**VAO**, **VBO**, **EBO** — les tampons de sommets et d'indices d'OpenGL), puis une **caméra** donnant au monde sa troisième dimension, avec ses propres contrôles.\n\nUne fois le rendu et le déplacement en place, les **shaders** et les **textures** entrent en jeu, appliqués aux blocs. Puis vient la génération des **chunks** — des sections de monde composées de cubes générés en série — suivie de la génération du **monde** lui-même : à mesure que la caméra se déplace, de nouveaux chunks sont créés à la volée, rendant le monde infini.\n\nUn affichage de la position et des FPS à l'écran a été ajouté à ce stade, pour pouvoir mesurer concrètement les performances avant la grosse phase d'optimisation qui a suivi.\n\nLe cœur véritable de Minecraft — la **génération procédurale** — arrive en dernier : un bruit de Perlin codé à la main, après documentation, puis appliqué à la génération du monde pour donner naissance à un relief cohérent plutôt qu'un terrain aléatoire.",

        choixTechniques: "Une fois le monde infini généré et navigable, une grande phase d'optimisation est devenue nécessaire. Les blocs entièrement entourés d'autres blocs n'ont aucune raison d'être rendus — ils ont donc été exclus du dessin. Les chunks trop éloignés de la caméra sont libérés de la mémoire plutôt que conservés indéfiniment, et les chunks ont dû apprendre à interagir avec leurs voisins directs pour s'optimiser mutuellement.\n\nLa vraie difficulté est venue du **multithreading**. La génération initiale de la carte était trop longue, et les déplacements de la caméra saccadaient dès qu'un nouveau chunk devait être calculé. La solution a été de séparer clairement deux responsabilités : un thread dédié calcule les meshs des chunks en tâche de fond (le travail lourd, purement CPU), pendant que le thread principal — le seul autorisé à parler à la carte graphique via OpenGL — se contente d'envoyer les résultats déjà prêts, limités à deux uploads par frame pour garder le jeu fluide. Les deux threads communiquent via des files d'attente protégées par des **mutex**, pour éviter qu'ils ne se marchent dessus en accédant aux mêmes données en même temps. Je me suis beaucoup appuyé sur des ressources extérieures pour comprendre et mettre en œuvre cette synchronisation, un vrai terrain inconnu jusque-là.",

        ceQueJaiAppris: "Ce projet a représenté un vrai saut : mon expérience précédente se limitait à Python et à des langages web, et le **C++** — un langage bas niveau — m'a demandé de repartir de zéro sur beaucoup de plans. Compiler du code, gérer une fenêtre, construire un moteur 3D, faire du multithreading, écrire ma propre génération procédurale : autant de notions que je découvrais en même temps que je les appliquais.\n\nLe vrai déclic a été la **programmation orientée objet**. Je l'avais déjà croisée en Python sans jamais vraiment en saisir l'intérêt ni le fonctionnement — c'est le C++ qui me l'a fait comprendre et me l'a fait apprivoiser, en la manipulant concrètement sur un vrai projet plutôt que sur des exercices abstraits.\n\nTechniquement, j'ai fini par comprendre en profondeur comment une texture s'applique, comment fonctionne un shader, comment une image se construit et s'affiche à l'écran, comment du texte peut être rendu à l'écran — bref, le cœur même de ce qui fait tourner un jeu comme Minecraft. C'est aussi sur ce projet que j'ai utilisé **Git** pour la première fois, et que j'ai pris l'habitude de documenter mon avancée le plus possible, ainsi que de commenter abondamment mon code pour m'y retrouver.\n\nMais la vraie leçon dépasse la technique. Le projet a duré plus de **sept mois**, pas à temps plein, avec une progression souvent lente et frustrante — peu de résultats immédiats, beaucoup de moments où je ne comprenais plus et devais reprendre, recommencer, parfois plusieurs fois de suite. J'en retiens qu'une avancée lente et méthodique, couplée à de la persévérance et de la détermination, permet à peu près tout — ou presque.",

        // --- Extrait de code ---
        codeSnippetIntro: "Le bruit de Perlin classique donne un relief lisse et répétitif. Pour obtenir un terrain crédible, plusieurs couches de bruit (des *octaves*) sont superposées : une couche grossière pour les grandes formes du relief, puis des couches de plus en plus fines pour les détails.",
        codeSnippetLang: "cpp",
        codeSnippet: "float Noise::getFractalNoise(float x, float y, int octaves, float persistence, float lacunarity) {\n    float total = 0;\n    float layerFreq = 1.0f;\n    float layerAmp = 1.0f;\n    float maxValue = 0;  // Utilisé pour normaliser le résultat final\n\n    for (int i = 0; i < octaves; i++) {\n        // On additionne les couches\n        total += getValue(x * layerFreq, y * layerFreq) * layerAmp;\n\n        maxValue += layerAmp;\n        layerAmp *= persistence; // L'amplitude diminue à chaque octave\n        layerFreq *= lacunarity;  // La fréquence augmente (plus de détails)\n    }\n\n    return total / maxValue; // On ramène le résultat entre -1 et 1\n}",

        // --- Captures ---
        screenshots: ["/img/minecraft/1.png", "/img/minecraft/2.png", "/img/minecraft/3.png", "/img/minecraft/4.png", "/img/minecraft/5.png", "/img/minecraft/6.png"]
    },
    {
        // --- Identité ---
        name: "Orisio",
        slug: "orisio",
        description: "Portail de consultation de stock en temps réel chez des logisticiens",
        state: "Bêtatestage",

        // --- Stack ---
        languages: ["PHP", "SQL", "YAML"],
        tools: ["Symfony", "Docker", "Apache", "PostgreSQL", "n8n"],
        tags: ["Docker", "Symfony", "PostgreSQL", "n8n"],

        // --- Liens ---
        sourceUrl: null,
        demoUrl: null,

        // --- Infos factuelles ---
        projectType: "Projet professionnel",
        role: "Création, mise en place, maintenance et réponse aux demandes clients",
        team: "1",
        periodLabel: "Avril 2026 → en cours",
        timeSpent: "125 heures",

        // --- Contenu éditorial ---
        contexte: "Ce projet est né d'une opportunité plutôt que d'une demande formulée dès le départ : explorer cette piste représentait un investissement de temps trop incertain pour être entrepris sans une personne disponible pour s'y consacrer. Ce besoin restait informel, jamais vraiment posé comme un projet à part entière avant que je n'arrive en stage. C'est dans ce cadre — un stage de huit semaines — que j'ai eu l'occasion de m'y investir pleinement.\n\nLe constat de départ est simple : un logisticien qui gère le stock d'un client, et un client qui souhaite en suivre l'évolution. Leurs outils respectifs — le **WMS** du logisticien et l'**ERP** du client — communiquent déjà entre eux, mais **pas en temps réel**. Résultat, le client n'a qu'une visibilité partielle et différée sur ce qui se passe réellement dans l'entrepôt. Orisio comble cet écart : un portail qui centralise et affiche l'état du stock du logisticien, consultable par ses clients à tout moment.\n\nMon rôle a couvert l'ensemble du cycle de vie du projet, de sa conception initiale à sa maintenance actuelle, en passant par l'ajout continu de nouvelles fonctionnalités.",

        ceQueJaiConstruit: "Orisio est un **portail web** qui donne aux clients d'un logisticien une **vue en temps réel** sur le stock que celui-ci détient pour leur compte. J'en ai assuré la **conception**, la **mise en place**, la **maintenance** et l'**évolution** : la responsabilité complète du cycle de vie.\n\nLe portail couvre toute la chaîne logistique vue côté client :\n\n- Consultation des **attendus** et des **réceptions**\n- Suivi des **missions** et des **expéditions**\n- Inventaire des **marchandises en stock** et **état global** à un instant donné\n- **Historique** des mouvements de stock\n\nL'application est **multi-logisticiens** et **multi-clients**, avec un **cloisonnement strict** des données d'un client à l'autre.\n\nS'y ajoutent trois outils d'exploitation : une **interface d'administration** (utilisateurs, organisations, espaces de travail), une **interface de consultation des logs**, et un **terminal SQL** permettant d'interroger directement la base de données.\n\nLes données transitent par un **serveur SFTP** organisé en deux arborescences distinctes, *production* et *test*. Le traitement de ces flux et la synchronisation des stocks reposent sur une **orchestration n8n** : un workflow maître déclenche **huit sous-workflows** spécialisés, complétés par un **workflow nocturne** qui réaligne l'état des stocks chaque nuit.",

        choixTechniques: "Le besoin initial était clair : le WMS du logisticien et l'ERP du client échangent déjà des données, mais **pas en temps réel**. Orisio comble ce déficit de visibilité immédiate **sans se substituer** aux systèmes existants.\n\nLe choix de la stack a été formalisé par une **analyse SWOT** de chaque brique candidate. En sont ressortis **Docker** pour l'isolation et la reproductibilité des environnements, **PostgreSQL** comme base de données, **Symfony** pour le back-end, **HTML5** et **Bootstrap** pour l'interface, et **n8n** pour l'automatisation des flux.\n\nLa modélisation de la base a été posée en amont sous forme de **schéma UML**, puis matérialisée via l'ORM **Doctrine**. Le code Symfony suit une **organisation par responsabilité** : contrôleurs, formulaires, entités, repositories, écouteurs d'événements, sécurité et services.\n\nL'authentification repose sur des **mots de passe hachés**. Une **authentification unique (SSO)** a été envisagée puis écartée : le gain ne justifiait pas la complexité d'intégration au regard du périmètre et du temps disponible.",

        architecture: "L'application est déployée sur un **serveur Linux**, chaque composant dans son propre **conteneur Docker** : la base **PostgreSQL**, l'application **Symfony** et l'instance **n8n**.\n\nUn **serveur web Apache** est placé devant ces conteneurs. Il reçoit les requêtes venant de l'extérieur, assure le **chiffrement TLS** — certificats gérés et renouvelés automatiquement par **Certbot** — et transmet le trafic à l'application. L'exposition réseau est restreinte par un **pare-feu ufw** n'ouvrant que les ports nécessaires.\n\nLes échanges de fichiers passent par un **serveur SFTP dédié**, dont l'arborescence sépare les flux de *production* des flux de *test* pour permettre des essais sans risque sur les données réelles.\n\nL'automatisation **n8n** est hiérarchisée : un workflow **orchestrateur** central pilote **huit sous-workflows**, chacun dédié à un type de flux, et un **workflow programmé la nuit** resynchronise l'intégralité des stocks.",

        ceQueJaiAppris: "Ce projet a couvert un **large spectre technique**, à des niveaux de maîtrise très variables : certains outils m'étaient **déjà familiers**, d'autres je les ai **approfondis**, plusieurs je les ai **découverts entièrement** — **Git** et **GitHub**, la modélisation **UML**, l'administration d'un système **Linux**, la conteneurisation avec **Docker**, l'automatisation via **n8n**, **PostgreSQL** et **Symfony**. Les rencontrer sur les **besoins réels** du projet, et non dans un cadre d'exercice, a changé la façon de les apprendre.\n\nJ'ai aussi fait évoluer mon **rapport à l'IA**. Réticent au départ, j'ai fini par en cerner l'**usage juste** : un appui pour la recherche, le débogage et le guidage, **jamais un substitut** à l'apprentissage lui-même. Avec le recul, j'aurais gagné à l'employer de manière plus mesurée et plus formatrice.\n\nSur le plan des **compétences transverses**, la conduite du projet **à distance** m'a obligé à structurer ma communication avec mon maître de stage et à gérer mon **autonomie** sur la durée.",

        // --- Petits plus ---
        anecdote: "L'application s'est un jour arrêtée, et il a fallu une quinzaine de jours pour s'en apercevoir. La cause n'était pas le code : n8n produit des logs volumineux qui avaient fini par saturer l'espace disque du serveur. Une fois le problème réglé, il a fallu réindexer quinze jours de fichiers quotidiens accumulés.",
        bilan: "Orisio a rempli l'objectif de sa première phase : donner aux clients une visibilité en temps réel sur leur stock. Le portail est en production mais toujours en phase de test, sans accès ouvert aux logisticiens ni à leurs clients. Le stage s'est prolongé en mission freelance via mon entreprise individuelle, ce qui a permis d'en poursuivre la maintenance et les évolutions. Faute d'expérience au démarrage et de temps, le périmètre est resté celui de la consultation.",

        prochainesEvolutions: "Le projet a été pensé en phases successives. La phase réalisée est celle de la consultation. La suivante ouvrirait le portail à l'interaction : agir sur les attendus et les ordres de préparation, et non plus seulement les consulter. À terme, Orisio deviendrait un OMS à part entière, positionné en intermédiaire de tous les échanges entre le WMS du logisticien et l'ERP du client, avec un rôle actif dans la circulation des ordres plutôt qu'un simple miroir de l'état des stocks.",

        // --- Captures ---
        screenshots: ["/img/orisio/1.png", "/img/orisio/2.png", "/img/orisio/3.png", "/img/orisio/4.png", "/img/orisio/5.png", "/img/orisio/6.png"]
    },
    {
        // --- Identité ---
        name: "Portfolio",
        slug: "portfolio",
        description: "Mise en avant de mes principaux projets et de moi même. Apprentissage d'un nouveau framework",
        state: "Actif",

        // --- Stack ---
        languages: [],
        tools: [],
        tags: ["Vue.js"],

        // --- Liens ---
        sourceUrl: "https://github.com/Progress-cmd/Portfolio.git",
        demoUrl: "https://portfolio.pi5.ovh/",

        // --- Infos factuelles ---
        projectType: "Projet personnel",
        role: "Création, mise en place et mise à jour",
        team: "1",
        periodLabel: "31 août → 8 septembre",
        timeSpent: "15 heures"
    },
    {
        // --- Identité ---
        name: "Conway's Game of Life",
        slug: "gameoflife",
        description: "Création d'une copie du jeu de la vie selon J. Conway. Une simulation mathématique \"Turing-complet\".",
        state: "Archivé",

        // --- Stack ---
        languages: [],
        tools: [],
        tags: ["C++"],

        // --- Liens ---
        sourceUrl: null,
        demoUrl: null,

        // --- Infos factuelles ---
        projectType: "Projet personnel",
        role: null,
        team: 1,
        periodLabel: null,
        timeSpent: null
    },
    {
        // --- Identité ---
        name: "Chess",
        slug: "chess",
        description: "",
        state: "Archivé",

        // --- Stack ---
        languages: [],
        tools: [],
        tags: ["Python"],

        // --- Liens ---
        sourceUrl: null,
        demoUrl: null,

        // --- Infos factuelles ---
        projectType: "Projet personnel",
        role: null,
        team: 1,
        periodLabel: null,
        timeSpent: null
    },
    {
        // --- Identité ---
        name: "Pacman",
        slug: "pacman",
        description: "",
        state: "Archivé",

        // --- Stack ---
        languages: [],
        tools: [],
        tags: ["C++"],

        // --- Liens ---
        sourceUrl: "https://github.com/Progress-cmd/Pacman.git",
        demoUrl: null,

        // --- Infos factuelles ---
        projectType: "Projet scolaire",
        role: null,
        team: 2,
        periodLabel: null,
        timeSpent: null
    }
]
