// Language switcher for YURTA website
document.addEventListener('DOMContentLoaded', () => {
  const langEnBtn = document.getElementById('lang-en');
  const langKzBtn = document.getElementById('lang-kz');
  const langRuBtn = document.getElementById('lang-ru');
  const enElements = document.querySelectorAll('.lang-en');
  const kzElements = document.querySelectorAll('.lang-kz');
  const ruElements = document.querySelectorAll('.lang-ru');

  /**
   * Toggle the visible language on the page.
   * @param {string} lang - The language code ('en' or 'kz').
   */
  function switchLanguage(lang) {
    // Persist the choice for subsequent page loads
    if (lang) {
      localStorage.setItem('language', lang);
    }

    if (lang === 'kz') {
      // Show Kazakh, hide others
      enElements.forEach(el => el.style.display = 'none');
      kzElements.forEach(el => el.style.display = 'block');
      ruElements.forEach(el => el.style.display = 'none');
      langEnBtn.classList.remove('active');
      langKzBtn.classList.add('active');
      if (langRuBtn) langRuBtn.classList.remove('active');
    } else if (lang === 'ru') {
      // Show Russian
      enElements.forEach(el => el.style.display = 'none');
      kzElements.forEach(el => el.style.display = 'none');
      ruElements.forEach(el => el.style.display = 'block');
      langEnBtn.classList.remove('active');
      langKzBtn.classList.remove('active');
      if (langRuBtn) langRuBtn.classList.add('active');
    } else {
      // default to English
      enElements.forEach(el => el.style.display = 'block');
      kzElements.forEach(el => el.style.display = 'none');
      ruElements.forEach(el => el.style.display = 'none');
      langKzBtn.classList.remove('active');
      if (langRuBtn) langRuBtn.classList.remove('active');
      langEnBtn.classList.add('active');
    }
  }

  // Determine which language to initialise with: stored preference or default 'en'
  const storedLang = localStorage.getItem('language');
  if (storedLang === 'kz' || storedLang === 'en' || storedLang === 'ru') {
    switchLanguage(storedLang);
  } else {
    switchLanguage('en');
  }

  // Wire up click handlers to change language and persist selection
  langEnBtn.addEventListener('click', () => switchLanguage('en'));
  langKzBtn.addEventListener('click', () => switchLanguage('kz'));
  if (langRuBtn) {
    langRuBtn.addEventListener('click', () => switchLanguage('ru'));
  }
});