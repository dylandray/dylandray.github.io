const translations = {
    en: {
        studentInfo: "AI Engineer & Data Scientist with international experience (France, Japan, USA), specialized in Data, Machine Learning, GenAI & LLMs.",
        introText: '"What I love most about my job is seeing people\'s amazement when I present my solutions."',

        Homepage: "Homepage", Projects: "My projects", Associatif: "Voluntary", CV: "Resume/CV",

        acc1Title: "Vision & Achievements",
        acc2Title: "Background",
        acc3Title: "Technical & Human Skills",
        acc4Title: "Languages",
        acc5Title: "Interests (Non-tech)",

        acc1Body: "From Marseille to the world, building the future through technology. As a Data & AI Engineering graduate from ESILV Paris, I combine scientific rigor with a business-impact vision. My experience across France, Japan, and the U.S. has enabled me to master the full data lifecycle from collection to production, as well as core AI and Machine Learning concepts.",
        acc1HighlightsLabel: "Highlights",
        acc1H1Title: '"Business Impact" Award:',
        acc1H1Body: "Winner of the annual Bosch AI hackathon among ~100 participants, for turning complex business needs into automation tools.",
        acc1H2Title: "97% accuracy:",
        acc1H2Body: "ML anomaly-detection system deployed at Bosch Tokyo on 50,000+ customer claims.",
        acc1H3Title: "Generative AI:",
        acc1H3Body: "RAG prototypes and LLM fine-tuning at EDF Lab Paris-Saclay.",

        colFormation: "Education",
        colExperience: "Professional Experience",
        colVolontariat: "Associations",

        edu3Title: "Univ. of Virginia, Wise USA <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg\" class=\"emoji-flag\" alt=\"US\">",
        edu3Sub: "International exchange — Computer Science",
        edu3Desc: "Exchange semester: Computer Science, Software Engineering, Entrepreneurship. Named to the Dean's List (GPA > 3.6)",
        
        edu2Title: "ESILV Paris <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg\" class=\"emoji-flag\" alt=\"FR\">",
        edu2Sub: "Master's Degree of Engineering : Data & AI, Software Engineering",
        edu2Desc: "Courses taught in English: Data Science, Deep Learning, Machine Learning, Advanced Algorithms, NLP, Software Engineering, Prompt Engineering, React/Node.js, Probability.",
        
        edu1Title: "Lycée Jean Perrin, Marseille <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg\" class=\"emoji-flag\" alt=\"FR\">",
        edu1Sub: "Preparatory classes (CPGE) PTSI/PT",
        edu1Desc: "Two-year intensive preparation (Mathematics, Physics, Computer Science, Engineering Sciences) for the highly competitive entrance exams to French engineering schools.",
        
        edu0Title: "Lycée Jean Perrin, Marseille <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg\" class=\"emoji-flag\" alt=\"FR\">",
        edu0Sub: "Baccalaureate S-SI, ISN option,  with honors",

        exp1Title: "<a href=\"https://en.wikipedia.org/wiki/Robert_Bosch_GmbH\" target=\"_blank\">Bosch Corporation, Tokyo</a> <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ef-1f1f5.svg\" class=\"emoji-flag\" alt=\"JP\">",
        exp1Sub: "Data Scientist, End-of-Study Internship",
        exp1Desc: "Data pipelines & CI/CD, Power BI dashboards, Flask API production deployment, technical communication for Japanese teams. Winner of Bosch AI hackathon.",
        
        exp2Title: "<a href=\"https://en.wikipedia.org/wiki/%C3%89lectricit%C3%A9_de_France\" target=\"_blank\">EDF Lab, Paris-Saclay</a> <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg\" class=\"emoji-flag\" alt=\"FR\">",
        exp2Sub: "R&D Engineer in Generative AI, Internship",
        exp2Desc: "Deployment of GenAI tools, LLM fine-tuning, Prompt Engineering and multimodal applications.",
        
        exp3Title: "<a href=\"https://fr.wikipedia.org/wiki/Anacours\" target=\"_blank\">Anacours</a> <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg\" class=\"emoji-flag\" alt=\"FR\">",
        exp3Sub: "Private Tutor",
        exp3Desc: "Maths, physics and computer science tutoring for secondary school students.",

        vol3Title: "ESN DeVinci <span class=\"flag\">🌍🤝</span><br><span style=\"display:block; font-size:0.75rem; text-transform:none; font-weight:400; letter-spacing:normal; opacity:0.8; margin-top:0.2rem;\">International student integration</span>",
        vol3Sub: "Partnerships Manager",
        vol3Desc: "Negotiated 10 strategic partnerships and organized cultural trips (Loire Valley) for international students.",
        
        vol1Title: "Léo&Co <span class=\"flag\">🐶</span><br><span style=\"display:block; font-size:0.75rem; text-transform:none; font-weight:400; letter-spacing:normal; opacity:0.8; margin-top:0.2rem;\">Animal welfare</span>",
        vol1Sub: "President <br><span style=\"font-size: 0.85rem; font-weight: 500; opacity: 0.75; display: inline-block; margin-top: 0.2rem;\">Ex-Events & Partnerships Manager</span>",
        vol1Desc: "Scaled from 10 to 90 members. Managed teams, fundraising, and organized a humanitarian mission in Morocco. Handled event planning, visual identity creation, and strategic partnerships (SPA Gennevilliers).",
        
        vol2Title: "LéoIndieGames <span class=\"flag\">🕹️💻</span><br><span style=\"display:block; font-size:0.75rem; text-transform:none; font-weight:400; letter-spacing:normal; opacity:0.8; margin-top:0.2rem;\">Indie game development</span>",
        vol2Sub: "Member",
        vol2Desc: "Independent video game development (C# and Unity) and Game Jam participation.",

        hardSkillsLabel: "Hard Skills",
        softSkillsLabel: "Soft Skills",
        skillDomain1: "Data Science & AI",
        skillDomain2: "Software Engineering",
        skillDomain3: "Infrastructure & Ops",
        skillDomain4: "Mathematics",
        
        soft1Title: "Communication",
        soft1Body: "Ability to simplify complex concepts for diverse audiences : Japanese teams, clients, management.",
        soft2Title: "Leadership",
        soft2Body: "President of Léo&Co : managing 90 members and organising a humanitarian mission in Morocco, partnerships responsible at Léo&Co and ESN.",
        soft3Title: "Adaptability",
        soft3Body: "Smooth multicultural work experience across France, Japan and the United States.",
        soft4Title: "Teamwork",
        soft4Body: "Effective collaboration in multidisciplinary and international environments (at school, in Japan, France, and global partners).",
        soft5Title: "Curiosity",
        soft5Body: "Continuous desire to learn, demonstrated by my passions, dive into Generative AI and learning new languages.",
        soft6Title: "Proactivity",
        soft6Body: "Initiative-taking mindset, awarded the 'Business Impact' prize at Bosch for turning complex business needs into concrete solutions.",
        soft7Title: "Autonomy",
        soft7Body: "Ability to independently manage my own deadlines, my own projects, proved at Bosch and in my associations",
        soft8Title: "Rigorous",
        soft8Body: "Methodical and scientific approach learned in Preparatory Classes CPGE ensuring reliable deliverables (e.g., 97% accuracy on models deployed at Bosch).",

        lang1Name: "French", lang1Level: "Native",
        lang2Name: "English", lang2Level: "C1 · TOEFL ITP",
        lang3Name: "Japanese", lang3Level: "Intermediate · studying for JLPT N3",
        lang4Name: "Spanish", lang4Level: "Conversational",
        lang5Name: "Chinese", lang5Level: "Next learning goal",

        passion1: "<strong style='display:block; margin-bottom:0.4rem; font-size:1.05em;'>Travel & Discovering new cultures</strong><ul style='margin: 0; padding-left: 1.2rem; opacity: 0.85; line-height: 1.6;'><li>USA (Visited 20/51 states)</li><li>Japan (Visited 23/47 prefectures)</li><li>Lebanon, Italy, Spain, England, Morocco, Taiwan, South Korea</li></ul>",
        passion2: "Gastronomy | From fine dining to street food",
        passion3: "Playing & Developing video games",
        passion4: "Weightlifting",
        passion5: "Football",
        passion10: "Boxing",
        passion6: "TV Series",
        passion7: "Animals",
        passion8: "Playing the Saxophone",
        passion11: "Animes",
        passion9: "Hiking",
    },

    fr: {
        studentInfo: "Ingénieur IA & Data Scientist avec une expérience internationale (France, Japon, USA), spécialisé en Data, Machine Learning, IA Générative & LLMs.",
        introText: '"Ce que j\'aime le plus dans mon métier, c\'est de voir l\'émerveillement des gens quand je présente mes solutions.',

        Homepage: "Accueil", Projects: "Mes projets", Associatif: "Associatif", CV: "CV/Resume",

        acc1Title: "Vision &amp; Réalisations",
        acc2Title: "Parcours",
        acc3Title: "Compétences Techniques &amp; Humaines",
        acc4Title: "Langues",
        acc5Title: "Centres d'intérêt (Hors tech)",

        acc1Body: "De Marseille à l'international, bâtir le monde de demain avec la tech. Diplômé ingénieur en Data &amp; Intelligence Artificielle de l'ESILV Paris, j'allie rigueur scientifique et vision orientée impact business. Mon parcours entre la France, le Japon et les États-Unis m'a permis de maîtriser le cycle de vie complet de la donnée, de la collecte à la mise en production, ainsi que les concepts d'IA (Machine Learning notamment).",
        acc1HighlightsLabel: "Faits marquants",
        acc1H1Title: 'Prix "Business Impact" :',
        acc1H1Body: "Lauréat du hackathon annuel Bosch AI parmi ~100 participants, pour la transformation de besoins métiers complexes en outils d'automatisation.",
        acc1H2Title: "97 % de précision :",
        acc1H2Body: "Système ML de détection d'anomalies déployé chez Bosch Tokyo sur plus de 50 000 réclamations.",
        acc1H3Title: "IA Générative :",
        acc1H3Body: "Prototypes RAG et fine-tuning de LLMs chez EDF Lab Paris-Saclay.",

        colFormation: "Formation",
        colExperience: "Expérience professionnelle",
        colVolontariat: "Associations",

        edu3Title: "Univ. of Virginia, Wise USA <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg\" class=\"emoji-flag\" alt=\"US\">",
        edu3Sub: "Échange international — Computer Science",
        edu3Desc: "Semestre d’échange : Computer science, Software Engineering, Entrepreneurship. Nommé sur la Dean's List (GPA > 3.6)",
        
        edu2Title: "ESILV Paris <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg\" class=\"emoji-flag\" alt=\"FR\">",
        edu2Sub: "Diplôme d'Ingénieur : Data &amp; IA, Software Engineering",
        edu2Desc: "Cours enseignés en anglais : Data Science, Deep Learning, Machine Learning, Advanced Algorithms, NLP, Software Engineering, Prompt Engineering, React/Node.js, Probabilités.",
        
        edu1Title: "Lycée Jean Perrin, Marseille <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg\" class=\"emoji-flag\" alt=\"FR\">",
        edu1Sub: "Classes Préparatoires aux Grandes Ecoles (CPGE) PTSI/PT",
        edu1Desc: "Deux ans de préparation intensive (Maths, Physique, Info, SI) aux examens d’entrée des grandes écoles d’ingénieurs françaises.",
        
        edu0Title: "Lycée Jean Perrin, Marseille <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg\" class=\"emoji-flag\" alt=\"FR\">",
        edu0Sub: "Baccalauréat S-SI option ISN, Mention Bien",

        exp1Title: "<a href=\"https://fr.wikipedia.org/wiki/Robert_Bosch_(entreprise)\" target=\"_blank\">Bosch Corporation, Tokyo</a> <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ef-1f1f5.svg\" class=\"emoji-flag\" alt=\"JP\">",
        exp1Sub: "Data Scientist,  Stage de fin d'études",
        exp1Desc: "Pipelines de données &amp; CI/CD, Power BI, mise en production d'API Flask, vulgarisation technique pour équipes japonaises. Lauréat hackathon Bosch AI.",
        
        exp2Title: "<a href=\"https://fr.wikipedia.org/wiki/%C3%89lectricit%C3%A9_de_France\" target=\"_blank\">EDF Lab, Paris-Saclay</a> <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg\" class=\"emoji-flag\" alt=\"FR\">",
        exp2Sub: "Ingénieur R&amp;D IA Générative, Stage",
        exp2Desc: "Déploiement d'outils GenAI, fine-tuning de LLMs, Prompt Engineering et applications multimodales.",
        
        exp3Title: "<a href=\"https://fr.wikipedia.org/wiki/Anacours\" target=\"_blank\">Anacours</a> <img src=\"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg\" class=\"emoji-flag\" alt=\"FR\">",
        exp3Sub: "Professeur particulier",
        exp3Desc: "Cours de mathématiques, physique et informatique auprès d'élèves du secondaire.",

        vol3Title: "ESN DeVinci <span class=\"flag\">🌍🤝</span><br><span style=\"display:block; font-size:0.75rem; text-transform:none; font-weight:400; letter-spacing:normal; opacity:0.8; margin-top:0.2rem;\">Intégration des étudiants étrangers</span>",
        vol3Sub: "Responsable Partenariats",
        vol3Desc: "Négociation de 10 partenariats stratégiques et organisation de séjours culturels (Châteaux de la Loire) pour les étudiants internationaux.",
        
        vol1Title: "Léo&Co <span class=\"flag\">🐶</span><br><span style=\"display:block; font-size:0.75rem; text-transform:none; font-weight:400; letter-spacing:normal; opacity:0.8; margin-top:0.2rem;\">Protection animale</span>",
        vol1Sub: "Président <br><span style=\"font-size: 0.85rem; font-weight: 500; opacity: 0.75; display: inline-block; margin-top: 0.2rem;\">Ex-Responsable Événements & Partenariats</span>",
        vol1Desc: "Croissance de 10 à 90 membres. Pilotage des équipes, levées de fonds et organisation d'une mission humanitaire au Maroc. Gestion de l'événementiel, création de l'identité visuelle et partenariats (SPA de Gennevilliers).",
        
        vol2Title: "LéoIndieGames <span class=\"flag\">🕹️💻</span><br><span style=\"display:block; font-size:0.75rem; text-transform:none; font-weight:400; letter-spacing:normal; opacity:0.8; margin-top:0.2rem;\">Création de jeux vidéo</span>",
        vol2Sub: "Membre",
        vol2Desc: "Développement de jeux vidéo indépendants (C# et Unity) et participation à des Game Jams.",

        hardSkillsLabel: "Hard Skills",
        softSkillsLabel: "Soft Skills",
        skillDomain1: "Data Science &amp; IA",
        skillDomain2: "Software Engineering",
        skillDomain3: "Infrastructure &amp; Ops",
        skillDomain4: "Mathématiques",
        
        soft1Title: "Communication",
        soft1Body: "Capacité à simplifier des concepts complexes pour divers publics : équipes japonaises, clients, direction.",
        soft2Title: "Leadership",
        soft2Body: "Président de Léo&Co : gestion de 90 membres et organisation d'une mission humanitaire au Maroc, responsable partenariats chez Léo&Co et ESN.",
        soft3Title: "Adaptabilité",
        soft3Body: "Expérience de travail multiculturelle fluide entre la France, le Japon et les États-Unis.",
        soft4Title: "Travail en équipe",
        soft4Body: "Collaboration efficace dans des environnements pluridisciplinaires et internationaux (à l'école, au Japon, en France et partenaires mondiaux).",
        soft5Title: "Curiosité",
        soft5Body: "Volonté d'apprendre continue, démontrée par mes passions, mon immersion en IA Générative et l'apprentissage de nouvelles langues.",
        soft6Title: "Proactivité",
        soft6Body: "Esprit d'initiative, récompensé par le prix 'Business Impact' chez Bosch pour avoir transformé des besoins métiers complexes en solutions concrètes.",
        soft7Title: "Autonomie",
        soft7Body: "Capacité à gérer seul mes propres délais et mes propres projets, prouvée chez Bosch et dans mes associations.",
        soft8Title: "Rigueur",
        soft8Body: "Approche scientifique et méthodique acquise en Classes Préparatoires (CPGE) garantissant la fiabilité des livrables (ex. 97 % de précision sur les modèles déployés chez Bosch).",

        lang1Name: "Français", lang1Level: "Maternel",
        lang2Name: "Anglais", lang2Level: "C1 · TOEFL ITP",
        lang3Name: "Japonais", lang3Level: "Intermédiaire · préparation JLPT N3",
        lang4Name: "Espagnol", lang4Level: "Conversationnel",
        lang5Name: "Chinois", lang5Level: "Prochain objectif",

        passion1: "<strong style='display:block; margin-bottom:0.4rem; font-size:1.05em;'>Voyage & découverte de cultures</strong><ul style='margin: 0; padding-left: 1.2rem; opacity: 0.85; line-height: 1.6;'><li>États-Unis (20/51 états)</li><li>Japon (23/47 préfectures)</li><li>Liban, Italie, Espagne, Angleterre, Maroc, Taïwan, Corée du Sud</li></ul>",
        passion2: "Gastronomie | De la haute cuisine à la cuisine de rue",
        passion3: "Création & pratique de jeux vidéo",
        passion4: "Musculation",
        passion5: "Football",
        
        passion6: "Séries TV",
        passion7: "Animaux",
        passion8: "Jouer du saxophone",
        passion9: "Randonnées",
        passion10: "Boxe",
        passion11: "Animés",
    }
};

const ids = [
    'studentInfo', 'introText',
    'Homepage', 'Projects', 'Associatif', 'CV',
    'acc1Title', 'acc1Body', 'acc1HighlightsLabel',
    'acc1H1Title', 'acc1H1Body', 'acc1H2Title', 'acc1H2Body', 'acc1H3Title', 'acc1H3Body',
    'acc2Title',
    'colFormation', 'colExperience', 'colVolontariat',
    'edu3Title', 'edu3Sub', 'edu3Desc',
    'edu2Title', 'edu2Sub', 'edu2Desc',
    'edu1Title', 'edu1Sub', 'edu1Desc',
    'edu0Title', 'edu0Sub',
    'exp1Title', 'exp1Sub', 'exp1Desc',
    'exp2Title', 'exp2Sub', 'exp2Desc',
    'exp3Title', 'exp3Sub', 'exp3Desc',
    'vol3Title', 'vol3Sub', 'vol3Desc',
    'vol1Title', 'vol1Sub', 'vol1Desc',
    'vol2Title', 'vol2Sub', 'vol2Desc',
    'vol4Title', 'vol4Sub', 'vol4Desc',
    'acc3Title', 'hardSkillsLabel', 'softSkillsLabel',
    'skillDomain1', 'skillDomain2', 'skillDomain3', 'skillDomain4',
    'soft1Title', 'soft1Body', 'soft2Title', 'soft2Body', 'soft3Title', 'soft3Body',
    'soft4Title', 'soft4Body', 'soft5Title', 'soft5Body', 'soft6Title', 'soft6Body',
    'soft7Title', 'soft7Body', 'soft8Title', 'soft8Body',
    'acc4Title',
    'lang1Name', 'lang1Level', 'lang2Name', 'lang2Level', 'lang3Name', 'lang3Level',
    'lang4Name', 'lang4Level', 'lang5Name', 'lang5Level',
    'acc5Title',
    'passion1', 'passion2', 'passion3', 'passion4', 'passion5', 'passion6', 'passion7', 'passion8', 'passion9', 'passion10', 'passion11',
];

function applyLang(lang) {
    document.documentElement.lang = lang;
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && translations[lang][id] !== undefined) {
            el.innerHTML = translations[lang][id];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('preferredLanguage') || 'fr';
    applyLang(lang);
});

document.querySelectorAll('.language-button').forEach(btn => {
    btn.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        localStorage.setItem('preferredLanguage', lang);
        applyLang(lang);
    });
});