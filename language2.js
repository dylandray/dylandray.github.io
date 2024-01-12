const translations = {
    en: {
        Homepage: "Homepage",
        Associatif: "Voluntary",
        Projects: "My projects",
        CV: "Resume/CV",
        buttonImage: "france.jpg",
        Click: "Click on the title to download"
        // Add other translations here
    },
    fr: {
        Homepage: "Accueil",
        Blog: "Mon Blog",
        Projects: "Mes projets",
        Associatif: "Associatif",
        CV: "CV/Resume",
        buttonImage: "ukus.jpg",
        Click: "Cliquez sur le titre pour télécharger"
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
    document.getElementById('Homepage').textContent = translations.en.Homepage;
    document.getElementById('Projects').textContent = translations.en.Projects;
    document.getElementById('Associatif').textContent = translations.en.Associatif;
    document.getElementById('Resume/CV').textContent = translations.en.CV;
    document.getElementById('Click').textContent = translations.en.Click;
    document.getElementById('changeLanguageBtn').style.backgroundImage = `url('${translations.en.buttonImage}')`;

}

function updateContentToFrench() {
    document.getElementById('Homepage').textContent = translations.fr.Homepage;
    document.getElementById('Projects').textContent = translations.fr.Projects;
    document.getElementById('Associatif').textContent = translations.fr.Associatif;
    document.getElementById('Resume/CV').textContent = translations.fr.CV;
    document.getElementById('Click').textContent = translations.fr.Click;
    document.getElementById('changeLanguageBtn').style.backgroundImage = `url('${translations.fr.buttonImage}')`;

}
