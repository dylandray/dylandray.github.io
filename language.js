const translations = {
    en: {
        studentInfo: "AI, Software Enginineering and data student at the École Supérieure d'Ingénieurs Léonard de Vinci",
        Homepage: "Homepage",
        Associatif: "Voluntary",
        Projects: "My projects",
        CV: "Resume/CV",
        buttonImage: "france.jpg",
        Pres: 'After obtaining a scientific baccalaureate (S) with honors, specializing in engineering sciences, I enrolled in a preparatory class for elite engineering schools (CPGE PTSI-PT) before being admitted to ESILV through a competitive examination. \n Originally from Marseille, I have now been living in Paris since two years.\n' +
            '\n' +
            "I am someone with a strong sense of curiosity and open-mindedness, which is reflected in my passions and interests across various domains, such as travel, gastronomy, video games, sports, reading, technology, and animal welfare.\n" +
            "\n" +
            "I possess a strong aptitude and solid foundations in mathematics, computer science, statistics, and data analysis. I also have good programming skills in languages like Python, C/C++, C#, JavaScript, HTML, CSS, and SQL, among others.\n" +
            "\n" +
            "I aspire to specialize in software development (Software Engineering) and/or artificial intelligence.\n" +
            "\n" +
            "Additionally, I am fluent in both French and English, and I have a high proficiency level in Japanese and Spanish.\n" +
            "\n" +
            "Through this website, I present my journey and elaborate on the projects I have undertaken during my higher education. There is also a section dedicated to my achievements in the context of my involvement in various associations. A link to my CV is also provided.\n" +
            "\n" +
            "A \"blog\" section is currently under construction and will be updated throughout the year 2024 with my readings and technological insights.\n" +
            "\n" +
            "I am actively seeking a 4/5-month internship opportunity in a large company, either in France or internationally, starting from April 2024."
    },
    fr: {
        studentInfo: "Étudiant en IA, Software Engineering et data à l'École Supérieure d'Ingénieurs Léonard de Vinci",
        Homepage: "Accueil",
        Associatif: "Associatif",
        Projects: "Mes projets",
        CV: "CV/Resume",
        buttonImage: "ukus.jpg",
        Pres:"Après un bac scientifique S (option sciences de l‘ingénieur) mention bien, j’ai intégré une classe préparatoire aux grandes écoles (CPGE PTSI-PT), avant d’être admis à l’ESILV sur concours.\n" +
            "Originaire de Marseille, cela fait désormais deux ans que je vis sur Paris.\n" +
            "\n" +
            "Je suis quelqu'un de très curieux et d'ouvert, et cela se constate par mes passions et intérêts pour énormément de domaines variés, comme le voyage, la gastronomie, les jeux-vidéos, le sport, la lecture, les technologies ou encore la cause animale.\n" +
            "\n" +
            "J'ai une forte aptitude et des bases solides pour les mathématiques, l'informatique, les statistiques et l'analyse de données. Je dispose également de bonnes compétences en programmation (Python, C/C++, C#, JavaScript, HTML, CSS, SQL entre autres).\n" +
            "\n" +
            "Je souhaiterais me spécialiser dans le développement de logiciels (Software Engineering) et/ou dans l'intelligence artificielle.\n" +
            "\n" +
            "Par ailleurs, je parle couramment français et anglais, et dispose d'un très bon niveau en japonais/espagnol.\n" +
            "\n" +
            "À travers ce site internet, je présente ma démarche, et j’y détaille mes projets réalisés dans le cadre de mes études supérieures. Une section est également dédiée à mes réalisations dans le cadre de mes investissements associatifs. Un lien vers mon CV est également proposé.\n" +
            "\n" +
            "Une section « blog » est en construction et sera alimentée tout au long de l’année 2024 avec mes lectures et une veille technologique.\n" +
            "\n" +
            "Je suis à la recherche d'un stage dans une grande entreprise d'une durée de 4/5 mois, en France ou à l'international, à compter d'avril 2024."
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
    document.getElementById('studentInfo').textContent = translations.en.studentInfo;
    document.getElementById('Homepage').textContent = translations.en.Homepage;
    document.getElementById('Projects').textContent = translations.en.Projects;
    document.getElementById('Associatif').textContent = translations.en.Associatif;
    document.getElementById('CV').textContent = translations.en.CV;
    document.getElementById('Pres').textContent = translations.en.Pres;


    // Update the button background image for English
    document.getElementById('changeLanguageBtn').style.backgroundImage = `url('${translations.en.buttonImage}')`;

    // Update other elements here
}

function updateContentToFrench() {
    document.getElementById('studentInfo').textContent = translations.fr.studentInfo;
    document.getElementById('Homepage').textContent = translations.fr.Homepage;
    document.getElementById('Projects').textContent = translations.fr.Projects;
    document.getElementById('Associatif').textContent = translations.fr.Associatif;
    document.getElementById('CV').textContent = translations.fr.CV;
    document.getElementById('Pres').textContent = translations.fr.Pres;


    // Update the button background image for French
    document.getElementById('changeLanguageBtn').style.backgroundImage = `url('${translations.fr.buttonImage}')`;

    // Update other elements here
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
