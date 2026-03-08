const translations = {
    en: {
        Homepage: "Homepage",
        Associatif: "Voluntary",
        Projects: "My projects",
        CV: "Resume/CV",

        // TOC
        monsite:       "My website (HTML, CSS, JavaScript)",
        mlfastapi:     "ML Model Deployment (FastAPI & Docker)",
        "topic-toc":   "YouTube Topic Modeling (NLP, Python, Flask API)",
        musee:         "VR Museum (C#, Unity)",
        "aixmath-toc": "AIxMath (Machine Learning & Mathematics)",
        porton:        "Port'On MASK (Python, SQL, Raspbian, Masked facial recognition, Home Automation)",
        pillow:        "SmartDream Pillow (C++, Arduino)",

        // Mon site
        monsite1: "My website",
        monsite2: "Web development has always piqued my curiosity, so I decided to create my own website to learn HTML, CSS, and JavaScript. I followed a quick training course on Openclassroom, while also seeking assistance from ChatGPT to get started with HTML and CSS.\n\nI chose not to work with a framework in order to have complete control over what I was doing from A to Z, even though it came with its fair share of challenges. That's the reason the website isn't optimized well for different devices.\n\nI plan to redo the site with a framework now that I have mastered the basics, so that it's more beautiful, as well as adding a new \"Blog\" section that will serve as a platform for my own technological research throughout my studies.",
        monsite3: "Version 1",
        monsite4: "Version 2 — Full Redesign",
        monsite5: "After gaining more experience in web development and design, I decided to completely rework the site. Here are the main changes compared to the first version:\n\nThe homepage layout was redesigned: the profile photo and name are now displayed side by side, with collapsible accordion sections for the different biographical entries, making the page more airy and enjoyable to read.\n\nTypography was unified across the site with Garamond and Poppins fonts, giving a more professional and consistent look. Colours were also harmonised around a purple and lavender palette.\n\nLanguage selection buttons (\uD83C\uDDEC\uD83C\uDDE7 / \uD83C\uDDEB\uD83C\uDDF7) and styled LinkedIn and GitHub icons were added to every page. The CV page was also restructured to display both versions (FR and ENG) side by side symmetrically.\n\nFinally, the site was optimised for small screens: elements automatically rearrange on mobile and text adapts to the window size using fluid sizing (clamp).",

        // ML FastAPI & Docker
        mlfastapi1: "ML Model Deployment (FastAPI & Docker)",
        mlfastapi2: "<p>The technical stack is built on <strong>FastAPI</strong>, <strong>Docker</strong>, <strong>Uvicorn</strong>, and <strong>Pydantic</strong>. \n\nThis project covers the containerisation and deployment of a <strong>Machine Learning</strong> model. Using <strong>FastAPI</strong>, I developed a high-performance <strong>REST API</strong> to handle requests, while <strong>Docker</strong> ensures environment consistency between development and production. The whole system includes automated documentation and optimised <strong>inference pipelines</strong>.</p>\n<p>The choice of <strong>FastAPI</strong> was driven by its ability to handle <strong>async</strong> operations and its execution speed, outperforming more traditional <strong>frameworks</strong>. Integrating <strong>Pydantic</strong> secures entry points through rigorous <strong>schema validation</strong> of data before it reaches the model, reducing production errors. To ensure full portability, the application is packaged inside a <strong>Docker image</strong>. This approach eliminates <strong>dependency</strong> conflicts and simplifies migration to <strong>Cloud</strong> infrastructures or dedicated servers without any changes to the <strong>source code</strong>.</p>\n<p>The architecture prioritises operational efficiency by loading the <strong>model</strong> at <strong>ASGI server</strong> startup, eliminating <strong>latency</strong> during <strong>inference</strong> on real-time requests. The <strong>API</strong> also exposes an interactive <strong>Swagger UI</strong>, making integration straightforward for third-party services without requiring manual documentation. The core challenge of this work lies in industrialising <strong>Machine Learning</strong> (<strong>MLOps</strong>): moving from a research environment to a stable, isolated <strong>microservice</strong> is a critical step this project addresses directly, providing a solid foundation for <strong>continuous deployment</strong> cycles and improved <strong>scalability</strong>.</p>",

        // YouTube Topic Modeling
        "topic-title": "YouTube Topic Modeling",
        "topic-desc":  "<p>The technical stack is based on <strong>Python</strong>, <strong>YouTube Data API v3</strong>, and <strong>BERTopic</strong>.\n\n This project, with the <strong>BERTopic</strong> integration currently under development in a local environment, involves extracting and analyzing massive data from <strong>YouTube</strong> to identify latent themes through <strong>Topic Modeling</strong> techniques. By leveraging the <strong>YouTube Data API</strong>, the system retrieves metadata and comments, processed through <strong>NLP pipelines</strong> for cleaning and <strong>tokenization</strong>. The objective is to segment large volumes of text into coherent categories using <strong>Deep Learning</strong> algorithms.</p>\n<p>The methodological choice prioritizes an approach based on transformer <strong>embeddings</strong>. The use of <strong>BERTopic</strong> captures the semantic context of sentences, moving beyond the limitations of traditional <strong>bag-of-words</strong> models. Data preprocessing ensures that only meaningful terms influence the creation of <strong>clusters</strong>. This architecture transforms unstructured raw data into exploitable numerical vectors for the automatic detection of emerging topics, allowing for a detailed analysis of textual interactions under video content.</p>\n<p>The analysis includes a visualization phase for <strong>intertopic distance maps</strong> and the importance of <strong>c-TF-IDF</strong> to characterize each identified subject. Although the project is still being finalized, the goal remains to provide a business intelligence solution for <strong>trend mapping</strong>. By automating knowledge extraction from video sources, this work demonstrates the ability to transition from raw data collection to complex <strong>semantic analysis</strong> for understanding large-scale audience dynamics.</p>",

        // Musée VR
        musee1: "Mediterranean Museum VR",
        musee2: "Carried out as part of my second year in engineering school, in collaboration with 4 other students, this project involved the creation of an open-world museum exploring the Mediterranean region through different historical periods. Developed on Unity (C#), the project is now complete.\n\nI was responsible for all UI and gameplay development, including the audio player bar (with play/pause/next controls, volume adjustment and playlist management), the zone-based spatial sound system, and the player's precise location tracking on the interactive map. I also developed all player movements and interactions within the VR environment.",

        // AIxMath
        "aixmath-title": "AIxMath",
        "aixmath-desc":  "AIxMath is a project at the intersection of Artificial Intelligence and advanced mathematics. It explores the use of neural networks to solve complex mathematical problems and optimise numerical computations. The project highlights the synergy between algorithmic rigour and machine learning flexibility to tackle challenges in symbolic regression and mathematical modelling.",

        // Port'On Mask
        porton1: "Port'On Mask",
        porton2: "Click here to download the project presentation",
        porton3: "V1: Mask detection & door opening",
        porton4: "The first version of the Port'On Mask was developed as part of my preparatory class project during the COVID-19 pandemic, addressing the theme of \"Health and Prevention.\"\nThe basic concept of this initial version was simple: to place a camera in front of healthcare facilities, which at the time, due to a shortage of staff, were required to have healthcare workers at the entrances of buildings or hospital services to verify visitors' correct mask-wearing.\n\nPort'On Mask V1 automatically analysed a video stream to determine if a person was wearing their surgical mask correctly and would open the door if that was the case. To accomplish this, I used the OpenCV module in Python, which allowed me to detect the essential elements for mask-wearing detection (nose and mouth) in a face. To optimise the search, I normalised the image intensities and added a temporal filter (moving average).\n\nThe results were promising: the program recognised mask-wearing (or at least, in this version, the absence of a nose and mouth) and automatically opened a door model using a Raspberry Pi and its PiCamera.",
        porton5: "V2: Identity Recognition, Database and Improvements",
        porton6: "The second version of the Port'On Mask was developed in 2023, as part of my first year of study at an engineering school. A personal experience I had at a healthcare centre motivated me to revisit this project and enhance it.",
        porton7: "Indeed, during a visit to a healthcare centre, I observed poor crowd management, an overwhelmed receptionist, and confused patients.\n\nThis experience motivated me to incorporate a system of masked facial recognition, connecting the identity of a masked person to their profile stored in a database, while providing them with precise information about their appointment location in the building, the doctor's name, and the appointment time.\n\nTo begin with, I improved the detection by identifying the colour and shape of the mask. Once this detection was accomplished, it became necessary to match it to an identity. In practice, if it's the person's first visit to the healthcare centre, they need to go to reception where they provide their identity, and the receptionist associates it with the person's face in the database. From the second visit onward, the person is registered. Consequently, when they pass in front of the camera at the entrance, the system will recognise them, open the door, and display on a screen the location of their appointment, along with the information previously filled out when scheduling the appointment.\n\nFrom a technical standpoint, I built a database of faces available on the internet. Next, I added a mask to these faces using artificial intelligence. Then, using my Haarcascade model, I retained the images where a face was clearly visible and detectable. Subsequently, I applied the dlib model to recognise the position of the eyes and eyebrows, which allowed me to clean up the database by removing low-quality, tilted, and other problematic photos.\n\nCurrently, distinctive measurements are extracted from the remaining images to determine a person's identity. Since these measurements alone are not sufficient for identifying a masked person, I have considered several ideas to improve this recognition.\n\nI invite you to download the PDF for more information on the assumptions and conditions of use I have adopted for my system.",

        // SmartDream Pillow
        "smartdreampillow-title": "SmartDream Pillow",
        smartdreampillow1: "SmartDream Pillow is a project developed during my first year of engineering school as part of a Positive Impact Innovative Project (PIIP).\nThe goal was to simulate the creation of a startup with an innovative product. To address waking up problems, I proposed the idea of a connected pillow to my working group, and we worked on it throughout the year.\n\nIt is a connected pillow that wakes up the user at the optimal time to ensure a gentle awakening. Additionally, numerous sensors are integrated into the pillow to collect various health-related data, such as oxygen levels and pulse rate. We were unable to design a comfortable pillow incorporating the sensors, but we created a prototype. My main roles in the project were as a C++ developer and Scrum Master using Jira.\nTherefore, I had the opportunity to work on Deep Learning using TensorFlow for Arduino.",
    },

    fr: {
        Homepage: "Accueil",
        Projects: "Mes projets",
        Associatif: "Associatif",
        CV: "CV/Resume",

        // TOC
        monsite:       "Mon site (HTML, CSS, JavaScript)",
        mlfastapi:     "Déploiement de Modèle ML (FastAPI & Docker)",
        "topic-toc":   "Topic Modeling sur YouTube (NLP, Python, API Flask)",
        musee:         "Musée VR (C#, Unity)",
        "aixmath-toc": "AIxMath (Intelligence Artificielle & Mathématiques)",
        porton:        "Port'On MASK (Python, SQL, Raspbian, Reconnaissance faciale masquée, Domotique)",
        pillow:        "SmartDream Pillow (C++, Arduino)",

        // Mon site
        monsite1: "Mon site",
        monsite2: "Le développement web m'a toujours rendu curieux, j'ai donc décidé de créer mon propre site internet afin de pouvoir apprendre le HTML, le CSS ainsi que le Javascript. J'ai suivi une formation rapide sur Openclassroom, tout en m'aidant en parallèle de chatGPT pour m'initier au HTML et au CSS.\n\nJ'ai fait le choix de ne pas travailler avec un Framework afin d'avoir totalement la main sur ce que je faisais de A à Z, même si ça s'accompagnait de son lot d'embûches. C'est la raison pour laquelle le site n'est pas totalement optimisé selon l'appareil.\n\nJ'ai pour projet de refaire le site avec un Framework maintenant que je maîtrise les bases, afin que ce soit + beau, ainsi qu'une nouvelle section \"Blog\" qui servira à réaliser ma propre veille technologique, tout au long de mes études.",
        monsite3: "Version 1",
        monsite4: "Version 2 — Refonte complète",
        monsite5: "Après avoir acquis de l'expérience en développement web et en design, j'ai décidé de revoir entièrement le site. Voici les principaux changements apportés par rapport à la première version :\n\nLa mise en page de la page d'accueil a été repensée : la photo de profil et le nom sont désormais disposés côté à côté, avec un système d'accordéons dépliables pour présenter les différentes sections biographiques, rendant la page plus aérée et plus agréable à lire.\n\nLa typographie a été unifiée sur l'ensemble du site avec les polices Garamond et Poppins, apportant un aspect plus professionnel et cohérent. Les couleurs ont également été harmonisées autour d'une palette violette et lavande.\n\nDes boutons de sélection de langue (\uD83C\uDDEC\uD83C\uDDE7 / \uD83C\uDDEB\uD83C\uDDF7) et des icônes LinkedIn et GitHub stylisées ont été ajoutés sur toutes les pages du site. La page CV a également été restructurée pour afficher les deux versions (FR et ENG) côte à côte de façon symétrique.\n\nEnfin, le site a été optimisé pour les petits écrans : les éléments se réorganisent automatiquement sur mobile et les textes s'adaptent à la taille de la fenêtre grâce à l'utilisation de tailles fluides (clamp).",

        // ML FastAPI & Docker
        mlfastapi1: "Déploiement de Modèle ML (FastAPI & Docker)",
        mlfastapi2: "<p>La stack technique repose sur <strong>FastAPI</strong>, <strong>Docker</strong>, <strong>Uvicorn</strong> et <strong>Pydantic</strong>. \n\n Ce projet traite de la conteneurisation et du déploiement d'un modèle de <strong>Machine Learning</strong>. En m'appuyant sur <strong>FastAPI</strong>, j'ai développé une <strong>API REST</strong> performante pour gérer les requêtes, tandis que <strong>Docker</strong> assure la cohérence des environnements entre le développement et la production. L'ensemble inclut une documentation automatisée et des <strong>pipelines d'inférence</strong> optimisés.</p>\n<p>Le choix de <strong>FastAPI</strong> s'est imposé par sa capacité à gérer l'<strong>asynchrone</strong> et sa rapidité d'exécution, surpassant des <strong>frameworks</strong> plus traditionnels. L'intégration de <strong>Pydantic</strong> permet de sécuriser les points d'entrée en effectuant une <strong>validation de schéma</strong> rigoureuse des données avant qu'elles n'atteignent le modèle, limitant ainsi les erreurs en production. Pour garantir une portabilité totale, l'application est encapsulée dans une <strong>image Docker</strong>. Cette approche résout les conflits de <strong>dépendances</strong> et simplifie le passage vers des infrastructures <strong>Cloud</strong> ou des serveurs dédiés sans modification du <strong>code source</strong>.</p>\n<p>L'architecture privilégie l'efficacité opérationnelle en effectuant le <strong>chargement du modèle</strong> au lancement du <strong>serveur ASGI</strong>. Cela permet d'éliminer la <strong>latence</strong> lors de l'<strong>inférence</strong> sur des requêtes en temps réel. L'<strong>API</strong> expose également une interface <strong>Swagger UI</strong> interactive, facilitant l'intégration pour les services tiers sans nécessiter de rédaction manuelle de documentation. L'enjeu principal de ce travail réside dans l'industrialisation du <strong>Machine Learning</strong> (<strong>MLOps</strong>). Passer d'un environnement de recherche à un <strong>microservice</strong> stable et isolable est une étape critique que ce projet adresse directement, offrant une base solide pour des cycles de <strong>déploiement continu</strong> et une <strong>scalabilité</strong> accrue.</p>",

        // YouTube Topic Modeling
        "topic-title": "Topic Modeling sur YouTube",
        "topic-desc":  "<p>La stack technique repose sur <strong>Python</strong>, <strong>YouTube Data API v3</strong> et <strong>BERTopic</strong>.\n\n Ce projet, dont l'intégration de <strong>BERTopic</strong> est actuellement en cours de développement en environnement local, consiste à extraire et analyser des données massives issues de <strong>YouTube</strong> pour identifier des thématiques latentes via des techniques de <strong>Topic Modeling</strong>. En exploitant la <strong>YouTube Data API</strong>, le système récupère les métadonnées et les commentaires, traités par des <strong>pipelines NLP</strong> pour le nettoyage et la <strong>tokenisation</strong>. L'objectif est de segmenter des volumes importants de texte en catégories cohérentes grâce à des algorithmes de <strong>Deep Learning</strong>.</p>\n<p>Le choix méthodologique privilégie une approche basée sur les <strong>embeddings</strong> de transformateurs. L'utilisation de <strong>BERTopic</strong> permet de capturer le contexte sémantique des phrases, dépassant les limites des modèles classiques de <strong>sac de mots</strong>. Le prétraitement des données assure que seuls les termes porteurs de sens influencent la création des <strong>clusters</strong>. Cette architecture transforme des données brutes non structurées en vecteurs numériques exploitables pour la détection automatique de sujets émergents, permettant une analyse fine des interactions textuelles sous les contenus vidéo.</p>\n<p>L'analyse prévoit une phase de visualisation des <strong>intertopic distance maps</strong> et de l'importance des <strong>c-TF-IDF</strong> pour caractériser chaque sujet identifié. Bien que le projet soit toujours en cours de finalisation, l'enjeu reste de fournir une solution d'intelligence économique pour le <strong>trend mapping</strong>. En automatisant l'extraction de connaissances à partir de sources vidéo, ce travail démontre une capacité à passer de la collecte de données brutes à une <strong>analyse sémantique</strong> complexe pour la compréhension des dynamiques d'audience à grande échelle.</p>",
        musee1: "Musée VR Méditerranée",
        musee2: "Réalisé dans le cadre de ma seconde année en école d'ingénieurs, en collaboration avec 4 autres étudiants, ce projet consiste en la création d'un musée en monde ouvert explorant le pourtour méditerranéen à travers les époques. Développé sur Unity (C#), le projet est aujourd'hui terminé.\n\nEn charge de l'ensemble de la partie UI et du gameplay, j'ai notamment conçu la barre de lecture audio (avec contrôles play/pause/suivant, réglage du volume et gestion de la playlist), le système de son spatialisé par zone, ainsi que la localisation précise du joueur sur la carte interactive. J'ai également développé l'ensemble des déplacements et des interactions joueur au sein de l'environnement VR.",

        // AIxMath
        "aixmath-title": "AIxMath",
        "aixmath-desc":  "AIxMath est un projet à l'intersection de l'Intelligence Artificielle et des mathématiques avancées. Il explore l'utilisation des réseaux de neurones pour résoudre des problèmes mathématiques complexes et optimiser les calculs numériques. Le projet met en avant la synergie entre la rigueur algorithmique et la flexibilité du machine learning pour relever des défis en régression symbolique et modélisation mathématique.",

        // Port'On Mask
        porton1: "Port'On Mask",
        porton2: "Cliquez ici pour télécharger la présentation du projet",
        porton3: "V1 : Détection du port du masque & ouverture d'une porte",
        porton4: "La première version du Port'On Mask a été réalisé dans le cadre de mon projet de classe prépa, durant la pandémie du COVID-19, répondant au thème de \"Santé et Prévention\".\nLe principe de base de cette première version était simple : disposer une caméra devant des établissements de santé, qui à l'époque, manquant de personnel, se retrouvaient dans l'obligation de mettre des soignants à l'entrée des bâtiments ou des services hospitaliers, afin de vérifier le port correct du masque par les visiteurs.\n\nLe Port'On Mask V1 analysait donc de manière automatique un flux vidéo, afin de déterminer si une personne portait correctement son masque chirurgical, et ouvrait la porte si c'était le cas. Pour ce faire, j'ai utilisé le module OpenCV en Python, qui m'a permis de détecter les éléments essentiels à la détection du port du masque (nez et bouche) dans un visage. Afin d'optimiser la recherche, j'ai normalisé l'intensité des images et ajouté un filtre temporel (moyenne mobile).\n\nLes résultats furent probants, le programme reconnaissait le port du masque (ou du moins, dans cette version, l'absence de nez et de bouche) et ouvrait la maquette d'une porte de manière automatique, à l'aide d'un raspberry Pi et de sa Picaméra.",
        porton5: "V2 : Reconnaissance d'identité, base de données et améliorations",
        porton6: "La seconde version du Port'On Mask a été réalisé en 2023, dans le cadre de ma première année d'étude en école d'ingénieurs. Une expérience personnelle que j'ai vécu dans un centre de santé m'a encouragé à reprendre ce projet et à l'améliorer.",
        porton7: "En effet, lors d'une visite dans un centre de santé j'ai pu observer une mauvaise gestion des flux, une secrétaire débordée et des patients perdus.\n\nJ'ai décidé d'intégrer un système de reconnaissance faciale masquée, reliant l'identité d'une personne masquée à son profil enregistré dans une base de données, tout en lui fournissant des indications précises sur le lieu du rendez-vous dans le bâtiment, le nom du médecin et l'heure.\n\nDans un premier temps, j'ai amélioré la détection en identifiant la couleur et la forme du masque. Une fois cette détection accomplie, il est maintenant nécessaire de la faire correspondre à une identité. Dans la pratique, si c'est la première fois que la personne se rend dans le centre de santé, elle devra se rendre à l'accueil où elle fournira son identité, et la secrétaire se chargera de l'associer au visage de la personne dans la base de données. À partir de la deuxième visite, la personne est enregistrée. Dès lors, lorsqu'elle passera devant la caméra à l'entrée, le système la reconnaîtra, ouvrira la porte et affichera sur un écran l'emplacement de son rendez-vous, ainsi que les informations préalablement remplies lors de la prise de rendez-vous.\n\nDu point de vue technique, j'ai constitué une base de données de visages accessibles sur internet. J'ai ensuite ajouté un masque à ces visages à l'aide d'une intelligence artificielle. Dans un second temps, en utilisant mon modèle Haarcascade, j'ai conservé les images où un visage était clairement visible et détectable. Ensuite, j'ai appliqué le modèle dlib pour reconnaître la position des yeux et des sourcils, ce qui m'a permis de nettoyer la base de données des photos de mauvaise qualité, inclinées, etc.\n\nAinsi, pour le moment, des mesures caractéristiques sont extraites des images restantes pour déterminer l'identité d'une personne. Les mesures caractéristiques ne suffisant pas à identifier une personne portant un masque, j'ai réfléchi à plusieurs idées pour améliorer cette reconnaissance.\nJe vous invite à télécharger le PDF pour obtenir plus d'informations sur les hypothèses et les conditions d'utilisation que j'ai retenues pour mon système.",

        // SmartDream Pillow
        "smartdreampillow-title": "SmartDream Pillow",
        smartdreampillow1: "SmartDream Pillow est un projet développé durant ma première année d'école d'ingénieurs, dans le cadre d'un Projet Innovant à Impact Positif (PIIP).\nL'objectif était de simuler la création d'une startup accompagnée d'un produit innovant. Pour pallier aux problèmes de réveil, j'ai proposé l'idée d'un oreiller connecté à mon groupe de travail, sur laquelle nous avons travaillé tout au long de l'année.\n\nIl s'agit d'un oreiller connecté qui réveille l'utilisateur au moment optimal pour lui garantir un réveil en douceur. De plus, de nombreux capteurs sont intégrés à l'oreiller pour collecter diverses données utiles pour la santé, telles que le taux d'oxygène et le pouls. Nous n'avons pas réussi à concevoir un oreiller confortable intégrant les capteurs, mais nous avons réalisé une maquette. J'ai principalement occupé les rôles de développeur en C++ et de Scrum Master en utilisant Jira.\nJ'ai donc pu travailler sur du Deep Learning, à l'aide de Tensorflow for Arduino.",
    },
};

function setText(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    if (/<[a-z][\s\S]*>/i.test(value)) {
        el.innerHTML = value;
    } else {
        el.textContent = value;
    }
}

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Nav
    setText('Homepage',   t.Homepage);
    setText('Projects',   t.Projects);
    setText('Associatif', t.Associatif);
    setText('Resume/CV',  t.CV);

    // TOC
    setText('monsite',      t.monsite);
    setText('mlfastapi',    t.mlfastapi);
    setText('topic-toc',    t['topic-toc']);
    setText('musee',        t.musee);
    setText('aixmath-toc',  t['aixmath-toc']);
    setText('porton',       t.porton);
    setText('pillow',       t.pillow);

    // Mon site
    document.getElementById('monsite1').innerHTML = '<strong>' + t.monsite1 + '</strong>';
    setText('monsite2', t.monsite2);
    setText('monsite3', t.monsite3);
    setText('monsite4', t.monsite4);
    setText('monsite5', t.monsite5);

    // ML FastAPI
    document.getElementById('mlfastapi1').innerHTML = '<strong>' + t.mlfastapi1 + '</strong>';
    setText('mlfastapi2', t.mlfastapi2);

    // YouTube Topic Modeling
    document.getElementById('topic-title').innerHTML = '<strong>' + t['topic-title'] + '</strong>';
    setText('topic-desc', t['topic-desc']);

    // Musée VR
    document.getElementById('musee1').innerHTML = '<strong>' + t.musee1 + '</strong>';
    setText('musee2', t.musee2);

    // AIxMath
    document.getElementById('aixmath-title').innerHTML = '<strong>' + t['aixmath-title'] + '</strong>';
    setText('aixmath-desc', t['aixmath-desc']);

    // Port'On Mask
    document.getElementById('porton1').innerHTML = '<strong>' + t.porton1 + '</strong>';
    setText('porton2', t.porton2);
    setText('porton3', t.porton3);
    setText('porton4', t.porton4);
    setText('porton5', t.porton5);
    setText('porton6', t.porton6);
    setText('porton7', t.porton7);

    // SmartDream Pillow
    document.getElementById('smartdreampillow-title').innerHTML = '<strong>' + t['smartdreampillow-title'] + '</strong>';
    setText('smartdreampillow1', t.smartdreampillow1);
}

function updateContentToEnglish() { applyTranslations('en'); }
function updateContentToFrench()  { applyTranslations('fr'); }

document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage) {
        document.documentElement.lang = preferredLanguage;
        applyTranslations(preferredLanguage);
    }
});

document.querySelectorAll('.language-button').forEach(function (button) {
    button.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        if (document.documentElement.lang !== lang) {
            document.documentElement.lang = lang;
            localStorage.setItem('preferredLanguage', lang);
            applyTranslations(lang);
        }
    });
});
