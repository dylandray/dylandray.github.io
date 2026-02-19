// Dynamically set flag button backgrounds based on current page depth
(function() {
    const isSubpage = window.location.pathname.includes('/pages/');
    const base = isSubpage ? '../assets/images/' : 'assets/images/';
    const en = document.getElementById('englishBtn');
    const fr = document.getElementById('frenchBtn');
    if (en) en.style.backgroundImage = `url('${base}ukus.jpg')`;
    if (fr) fr.style.backgroundImage = `url('${base}france.jpg')`;
})();
