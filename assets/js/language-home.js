const translations = {
    en: {
        studentInfo: "AI Engineer with international experience (France, Japan, United States), specialized in Data, Machine Learning, Generative AI & LLMs. Clear communicator, curious, autonomous, and highly adaptable in collaborative environments.",
        introText: "On this site: my projects, my associative involvement and my resume.",
        Homepage: "Homepage", Associatif: "Voluntary", Projects: "My projects", CV: "Resume/CV",
        acc1Title: "From Marseille to the World",
        acc1Body: "Originally from Marseille and a graduate of ESILV Paris, specialized in Data & Artificial Intelligence. My journey is driven by an insatiable curiosity and a constant desire to turn complex data into concrete, high-performing solutions. What I love most about my field is seeing people's amazement when I present my solutions.",
        acc2Title: "Technical Expertise & Background",
        acc2Body: "My experience has been shaped through large-scale international projects. <strong>AI & Deep Learning:</strong> expert in anomaly detection (97% accuracy) and Generative AI (RAG systems and LLM fine-tuning). <strong>Software Engineering:</strong> full-stack data profile, across web scraping, API management, SQL databases and Flask interfaces.",
        acc3Title: "Achievements & Commitment",
        acc3Body: "My work at Bosch Corporation in Tokyo was recognized with a <em>Business Impact Excellence Award</em>, demonstrating my ability to combine technical rigor with strategic vision. My associative involvement and technology watch reflect my belief that knowledge sharing drives innovation.",
        acc4Title: "Multilingual Profile & Open-mindedness",
        acc4Body: "Working across France, Japan, and the United States has sharpened my adaptability and communication. I work daily in French and English, with advanced Japanese and basic Spanish. Passionate about gastronomy, video games, sport, and animal welfare."
    },
    fr: {
        studentInfo: "Ingénieur en IA avec expérience internationale (France, Japon, États-Unis), spécialisé en Data, Machine Learning, IA générative & LLM. Communication claire, curiosité, autonomie et forte adaptabilité.",
        introText: "Sur ce site : mes projets, mes engagements associatifs et mon CV.",
        Homepage: "Accueil", Associatif: "Associatif", Projects: "Mes projets", CV: "CV/Resume",
        acc1Title: "De Marseille à l'international",
        acc1Body: "Originaire de <strong> Marseille </strong>, en passant par <strong>Paris</strong>, jusqu'à l'international <strong>(USA, Japon)</strong>, j'ai pu construire un profil d'ingénieur IA agile et tourné vers le résultat. Mon expérience à l'étranger a affiné ma vision : utiliser la donnée non pas comme une fin, mais comme un outil de transformation majeur. Qu'il s'agisse d'optimiser la détection d'anomalies industrielles ou de déployer des architectures LLM, je m'efforce de créer des outils qui surprennent par leur efficacité et leur simplicité d'usage.",
        acc2Title: "Expertise Technique & Parcours",
        acc2Body: "Mon expérience s'est forgée à travers des projets d'envergure internationale. <strong>IA & Deep Learning :</strong> expert en détection d'anomalies (97 % de précision) et en IA Générative (systèmes RAG et fine-tuning de LLMs). <strong>Software Engineering :</strong> profil full-stack de la donnée, entre web scraping, management API, bases SQL et interfaces Flask.",
        acc3Title: "Réalisations & Engagement",
        acc3Body: "Mon travail chez Bosch Corporation à Tokyo a été récompensé par un <em>Business Impact Excellence Award</em>, témoignant de ma capacité à allier rigueur technique et vision stratégique. Mon implication associative et ma veille technologique reflètent ma conviction que le partage de connaissances est le moteur de l'innovation.",
        acc4Title: "Profil Polyglotte & Ouverture",
        acc4Body: "Travailler entre la France, le Japon et les États-Unis a affiné ma capacité d'adaptation. Je travaille quotidiennement en français et en anglais, avec une maîtrise avancée du japonais et des bases d'espagnol. Passionné de gastronomie, de jeux vidéo, de sport et engagé pour la cause animale."
    }
};

const ids = ['studentInfo','introText','Homepage','Projects','Associatif','CV','acc1Title','acc1Body','acc2Title','acc2Body','acc3Title','acc3Body','acc4Title','acc4Body'];

function applyLang(lang) {
    document.documentElement.lang = lang;
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = translations[lang][id];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('preferredLanguage') || 'fr';
    applyLang(lang);
});

document.querySelectorAll('.language-button').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        localStorage.setItem('preferredLanguage', lang);
        applyLang(lang);
    });
});
