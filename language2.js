const translations = {
    en: {
        Homepage: "Homepage",
        Associatif: "Voluntary",
        Projects: "My projects",
        CV: "Resume/CV",
        monsite: "My website (HTML, CSS, JavaScript)",
        musee: "VR Museum (C#, Unity)",
        porton : "Port'on MASK (Python, SQL, Raspbian, Masked facial recognition, automation)",
        monsite1: "My website",
        monsite2: "Web development has always piqued my curiosity, so I decided to create my own website to learn HTML, CSS, and JavaScript. I followed a quick training course on Openclassroom, while also seeking assistance from ChatGPT to get started with HTML and CSS.\n" +
            "\n" +
            "I chose not to work with a framework in order to have complete control over what I was doing from A to Z, even though it came with its fair share of challenges. That's the reason the website isn't optimized well for different devices. " +
            "" +
            "" +

            "I plan to redo the site with a framework now that I have mastered the basics, so that it's more beautiful, as well as adding a new section \"Blog\" section that will serve as a platform for my own technological research throughout my studies.",
        musee1: "Mediterranean Museum VR",
        musee2: "\n" +
            "[PROJECT IN PROGRESS] This project is being carried out as part of my second year in an engineering school. It involves the creation of an open-world museum spanning the Mediterranean throughout different historical periods. This project is a collaboration with four other students. " +
            "\n" +
            "\n" +
            "I personally handle the development of gameplay, the storyline, the User Interface (UI), and everything related to C# code on the Unity game engine. This section will be updated as I progress.",
        porton2: "Click here to download the project presentation",
        porton3: "V1 : Mask detection & door opening",
        porton4:"The first version of the Port'On Mask was developed as part of my preparatory class project during the COVID-19 pandemic, addressing the theme of \"Health and Prevention.\"\n" +
            "The basic concept of this initial version was simple: to place a camera in front of healthcare facilities, which at the time, due to a shortage of staff, were required to have healthcare workers at the entrances of buildings or hospital services to verify visitors' correct mask-wearing.\n" +
            "\n" +
            "Port'On Mask V1, therefore, automatically analyzed a video stream to determine if a person was wearing their surgical mask correctly and would open the door if that was the case. To accomplish this, I used the OpenCV module in Python, which allowed me to detect the essential elements for mask-wearing detection (nose and mouth) in a face. To optimize the search, I normalized the image intensities and added a temporal filter (moving average).\n" +
            "\n" +
            "The results were promising; the program recognized mask-wearing (or at least, in this version, the absence of a nose and mouth) and automatically opened a door model using a Raspberry Pi and its PiCamera.",
        porton5: "V2: Identity Recognition, Database and Improvements",
        porton6: "The second version of the Port'On Mask was developed in 2023, as part of my first year of study at an engineering school. A personal experience I had at a healthcare center motivated me to revisit this project and enhance it.",
        porton7: "Indeed, during a visit to a healthcare center, I observed poor crowd management, an overwhelmed receptionist, and confused patients." +
            "\n " +
            "\n" +
            "This experience motivated me to incorporate a system of masked facial recognition, connecting the identity of a masked person to their profile stored in a database, while providing them with precise information about their appointment location in the building, the doctor's name, and the appointment time.\n" +
            "\n" +
            "\n" +
            "To begin with, I improved the detection by identifying the color and shape of the mask. Once this detection was accomplished, it became necessary to match it to an identity. In practice, if it's the person's first visit to the healthcare center, they need to go to the reception where they provide their identity, and the receptionist associates it with the person's face in the database. From the second visit onward, the person is registered. Consequently, when they pass in front of the camera at the entrance, the system will recognize them, open the door, and display on a screen the location of their appointment, along with the information previously filled out when scheduling the appointment.\n" +
            "\n" +
            "From a technical standpoint, I built a database of faces available on the internet. Next, I added a mask to these faces using artificial intelligence. Then, using my Haarcascade model, I retained the images where a face was clearly visible and detectable. Subsequently, I applied the dlib model to recognize the position of the eyes and eyebrows, which allowed me to clean up the database by removing low-quality, tilted, and other problematic photos.\n" +
            "\n" +
            "Currently, distinctive measurements are extracted from the remaining images to determine a person's identity.\n" +
            "\n" +
            "Since these distinctive measurements are not sufficient for identifying a person wearing a mask, I have brainstormed several ideas to improve this recognition.\n" +
            "I invite you to download the PDF for more information on the assumptions and conditions of use that I have adopted for my system.",

        smartdreampillow1: "SmartDream Pillow is a project developed during my first year of engineering school as part of a Positive Impact Innovative Project (PIIP).\n" +
            "The goal was to simulate the creation of a startup with an innovative product. To address waking up problems, I proposed the idea of a connected pillow to my working group, and we worked on it throughout the year.\n" +
            "\n" +
            "It is a connected pillow that wakes up the user at the optimal time to ensure a gentle awakening. Additionally, numerous sensors are integrated into the pillow to collect various health-related data, such as oxygen levels and pulse rate. We were unable to design a comfortable pillow incorporating the sensors, but we created a prototype. My main roles in the project were as a C++ developer and Scrum Master using Jira.\n" +
            "Therefore, I had the opportunity to work on Deep Learning using Tensorflow for Arduino.",

    },
    fr: {
        Homepage: "Accueil",
        Blog: "Mon Blog",
        Projects: "Mes projets",
        Associatif: "Associatif",
        CV: "CV/Resume",
        monsite: "Mon site (HTML, CSS, JavaScript)",
        musee: "Musée VR (C#, Unity)",
        porton : "Port'on MASK (Python, SQL, Raspbian, Reconnaissance faciale masquée, Domotique)",
        monsite1: "Mon site",
        monsite2: "Le développement web m'a toujours rendu curieux, j'ai donc décidé de créer mon propre site internet afin de pouvoir apprendre le HTML, le CSS ainsi que le Javascript. J'ai suivi une formation rapide sur Openclassroom, tout en m'aidant en parallèle de chatGPT pour m'initier au HTML et au CSS. " +
            "\n" +
            "\n" +
            "J'ai fait le choix de ne pas travailler avec un Framework afin d'avoir totalement la main sur ce que je faisais de A à Z, même si ça s'accompagnait de son lot d'embûches. C'est la raison pour laquelle le site n'est pas totalement optimisé selon l'appareil. J'ai pour projet de refaire le site avec un Framework maintenant que je maîtrise les bases, afin que ce soit + beau, ainsi qu'une nouvelle section \"Blog\" qui servira à réaliser ma propre veille technologique, tout au long de mes études",
        musee1: "Musée VR Méditerranée",
        musee2: "\n" +"[PROJET EN COURS] Ce projet est réalisé dans le cadre de ma seconde année en école d'ingénieurs. Il consiste en la réalisation d'un musée à monde ouvert entourant la méditerranée au fil des époques. Ce projet est en collaboration avec 4 autres étudiants.\n" +
            "\n" +
            "Je m'occupe, à titre personnel, de l'élaboration du Gameplay, du scénario, de l'User Interface (UI) et de tout ce qui touche au code C#, sur le moteur de jeu Unity. Cette section sera complétée au fur et à mesure de mon avancement.",
        porton2: "Cliquez ici pour télécharger la présentation du projet",
        porton3: "V1 : Détection du port du masque & ouverture d'une porte",
        porton4: "La première version du Port'On Mask a été réalisé dans le cadre de mon projet de classe prépa, durant la pandémie du COVID-19. répondant au thème de \"Santé et Prévention\".\n" +
            "Le principe de base de cette première version était simple: disposer une caméra devant des établissements de santé, qui à l'époque, manquant de personnel, se retrouvaient dans l'obligation de mettre des soignants à l'entrée des bâtiments ou des services hospitaliers, afin de vérifier le port correct du masque par les visiteurs.\n" +
            "\n" +
            "Le Port'On Mask V1 analysait donc de manière automatique un flux vidéo, afin de déterminer si une personne portait correctement son masque chirurgical, et ouvrait la porte si c'était le cas. Pour ce faire, j'ai utilisé le module OpenCV en Python, qui m'a permis de détecter les éléments essentiels à la détection du port du masque (nez et bouche) dans un visage. Afin d'optimiser la recherche, j'ai normalisé l'intensité des images et ajouté un filtre temporel (moyenne mobile).\n" +
            "\n" +
            "Les résultats furent probant, le programme reconnaissait le port du masque (ou du moins, dans cette version, l'absence de nez et de bouche) et ouvrait la maquette d'une porte de manière automatique, à l'aide d'un raspberry Pi et de sa Picaméra.",
        porton5: "V2: Reconnaissance d'identité, base de données et améliorations",
        porton6: "La seconde version du Port'On Mask a été réalisé en 2023, dans le cadre de ma première année d'étude en école d'ingénieurs. Une expérience personnelle que j'ai vécu dans un centre de santé m'a encouragé à reprendre ce projet et à l'améliorer.",
        porton7: "En effet, lors d'une visite dans un centre de visite j'ai pu observer une mauvaise gestion des flux, une secrétaire débordée et des patients perdus." +
            "\n" +
            "\n" +
            "J'ai décidé d'intégrer un système de reconnaissance faciale masquée, reliant l'identité d'une personne masquée à son profil enregistré dans une base de données, tout en lui fournissant des indications précises sur le lieu du rendez-vous dans le bâtiment, le nom du médecin et l'heure.\n" +
            "\n" +
            "Dans un premier temps, j'ai amélioré la détection en identifiant la couleur et la forme du masque. Une fois cette détection accomplie, il est maintenant nécessaire de la faire correspondre à une identité. Dans la pratique, si c'est la première fois que la personne se rend dans le centre de santé, elle devra se rendre à l'accueil où elle fournira son identité, et la secrétaire se chargera de l'associer au visage de la personne dans la base de données. À partir de la deuxième visite, la personne est enregistrée. Dès lors, lorsqu'elle passera devant la caméra à l'entrée, le système la reconnaîtra, ouvrira la porte et affichera sur un écran l'emplacement de son rendez-vous, ainsi que les informations préalablement remplies lors de la prise de rendez-vous.\n" +
            "\n" +
            "Du point de vue technique, j'ai constitué une base de données de visages accessibles sur internet. J'ai ensuite ajouté un masque à ces visages à l'aide d'une intelligence artificielle. Dans un second temps, en utilisant mon modèle Haarcascade, j'ai conservé les images où un visage était clairement visible et détectable. Ensuite, j'ai appliqué le modèle dlib pour reconnaître la position des yeux et des sourcils, ce qui m'a permis de nettoyer la base de données des photos de mauvaise qualité, inclinées, etc. Ainsi, pour le moment, des mesures caractéristiques sont extraites des images restantes pour déterminer l'identité d'une personne. Les mesures caractéristiques ne suffisant pas à identifier une personne portant un masque, j'ai réfléchi à plusieurs idées pour améliorer cette reconnaissance.\n" +
            "Je vous invite à télécharger le PDF pour obtenir plus d'informations sur les hypothèses et les conditions d'utilisation que j'ai retenues pour mon système.",

        smartdreampillow1: "SmartDream Pillow est un projet développé durant ma première année d'école d'ingénieurs, dans le cadre d'un Projet Innovant à Impact Positif (PIIP).\n" +
            "L'objectif était de simuler la création d'une startup accompagnée d'un produit innovant. Pour pallier aux problèmes de réveil, j'ai proposé l'idée d'un oreiller connecté à mon groupe de travail, sur laquelle nous avons travaillé tout au long de l'année.\n" +
            "\n" +
            "Il s'agit d'un oreiller connecté qui réveille l'utilisateur au moment optimal pour lui garantir un réveil en douceur. De plus, de nombreux capteurs sont intégrés à l'oreiller pour collecter diverses données utiles pour la santé, telles que le taux d'oxygène et le pouls. Nous n'avons pas réussi à concevoir un oreiller confortable intégrant les capteurs, mais nous avons réalisé une maquette. J'ai principalement occupé les rôles de développeur en C++ et de Scrum Master en utilisant Jira.\n" +
            "J'ai donc pu travailler sur du Deep Learning, à l'aide de Tensorflow for Arduino.",
    }
};

document.querySelectorAll('.language-button').forEach(function (button) {
    button.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');

        if (document.documentElement.lang !== lang) {
            document.documentElement.lang = lang;

            if (lang === "fr") {
                updateContentToFrench();
            } else {
                updateContentToEnglish();
            }
        }
    });
});

function updateContentToEnglish() {
    document.getElementById('Homepage').textContent = translations.en.Homepage;
    document.getElementById('Projects').textContent = translations.en.Projects;
    document.getElementById('Associatif').textContent = translations.en.Associatif;
    document.getElementById('Resume/CV').textContent = translations.en.CV;
    document.getElementById('monsite').textContent = translations.en.monsite;
    document.getElementById('musee').textContent = translations.en.musee;
    document.getElementById('porton').textContent = translations.en.porton;
    document.getElementById('monsite1').innerHTML = '<strong>' + translations.en.monsite1 + '</strong>';
    document.getElementById('monsite2').textContent = translations.en.monsite2;
    document.getElementById('musee1').innerHTML = '<strong>'+translations.en.musee1+'</strong>';
    document.getElementById('musee2').textContent = translations.en.musee2;
    document.getElementById('porton2').textContent = translations.en.porton2;
    document.getElementById('porton3').textContent = translations.en.porton3;
    document.getElementById('porton4').textContent = translations.en.porton4;
    document.getElementById('porton5').textContent = translations.en.porton5;
    document.getElementById('porton6').textContent = translations.en.porton6;
    document.getElementById('porton7').textContent = translations.en.porton7;
    document.getElementById('smartdreampillow1').textContent = translations.en.smartdreampillow1;
    document.getElementById('changeLanguageBtn').style.backgroundImage = `url('${translations.en.buttonImage}')`;



}

function updateContentToFrench() {
    document.getElementById('Homepage').textContent = translations.fr.Homepage;
    document.getElementById('Projects').textContent = translations.fr.Projects;
    document.getElementById('Associatif').textContent = translations.fr.Associatif;
    document.getElementById('Resume/CV').textContent = translations.fr.CV;
    document.getElementById('monsite').textContent = translations.fr.monsite;
    document.getElementById('musee').textContent = translations.fr.musee;
    document.getElementById('porton').textContent = translations.fr.porton;
    document.getElementById('monsite1').innerHTML = '<strong>' +  translations.fr.monsite1 + '</strong>';
    document.getElementById('monsite2').textContent = translations.fr.monsite2;
    document.getElementById('musee1').innerHTML = '<strong>' + translations.fr.musee1 + '</strong>';
    document.getElementById('musee2').textContent = translations.fr.musee2;
    document.getElementById('porton2').textContent = translations.fr.porton2;
    document.getElementById('porton3').textContent = translations.fr.porton3;
    document.getElementById('porton4').textContent = translations.fr.porton4;
    document.getElementById('porton5').textContent = translations.fr.porton5;
    document.getElementById('porton6').textContent = translations.fr.porton6;
    document.getElementById('porton7').textContent = translations.fr.porton7;
    document.getElementById('smartdreampillow1').textContent = translations.fr.smartdreampillow1;
    document.getElementById('changeLanguageBtn').style.backgroundImage = `url('${translations.fr.buttonImage}')`;
}
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage) {
        document.documentElement.lang = preferredLanguage;
        if (preferredLanguage === "fr") {
            updateContentToFrench();
        } else {
            updateContentToEnglish();
        }
    }
});

document.querySelectorAll('.language-button').forEach(function (button) {
    button.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        localStorage.setItem('preferredLanguage', lang); // Store language preference
        location.reload(); // Reload the page to apply the new language
    });
});
