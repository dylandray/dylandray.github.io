const translations = {
    en: {
        studentInfo: "AI, Software Enginineering and data student at the École Supérieure d'Ingénieurs Léonard de Vinci",
        Homepage: "Homepage",
        Associatif: "Voluntary",
        Projects: "My projects",
        CV: "Resume/CV",
        buttonImage: "france.jpg"
        // Add other translations here
    },
    fr: {
        studentInfo: "Étudiant en IA, Software Engineering et data à l'École Supérieure d'Ingénieurs Léonard de Vinci",
        Homepage: "Accueil",
        Associatif: "Associatif",
        Projects: "Mes projets",
        CV: "CV/Resume",
        buttonImage: "ukus.jpg"
        // Add other translations here
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

    // Update the button background image for French
    document.getElementById('changeLanguageBtn').style.backgroundImage = `url('${translations.fr.buttonImage}')`;

    // Update other elements here
}