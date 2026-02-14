// i18n.js
(function () {
    const DEFAULT_LANG = 'it';
    const STORAGE_KEY = 'khaine_lang';

    function getInitialLanguage() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && ['it', 'en'].includes(stored)) {
            return stored;
        }
        // Could detect browser language here, but default to IT as per request
        return DEFAULT_LANG;
    }

    let currentLang = getInitialLanguage();

    function setLanguage(lang) {
        if (!['it', 'en'].includes(lang)) return;

        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);

        updateContent();
        updateToggleButton();

        // Dispatch event in case other components need to react
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    function updateContent() {
        if (!window.translations) {
            console.error("Translations not loaded!");
            return;
        }

        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = window.translations[currentLang][key];

            if (translation) {
                // If it's an input with placeholder, update placeholder
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.setAttribute('placeholder', translation);
                    }
                } else {
                    // Start by just replacing textContent for safety, 
                    // preventing accidental HTML injection unless explicitly needed.
                    // If we need HTML, we might use data-i18n-html="true"
                    if (el.getAttribute('data-i18n-html') === 'true') {
                        el.innerHTML = translation;
                    } else {
                        el.innerText = translation;
                    }
                }
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${currentLang}`);
            }
        });

        // Toggle visibility of specific language sections if any exist (e.g. .lang-it, .lang-en)
        // This is a backup strategy for complex blocks
        document.querySelectorAll('.lang-it').forEach(el => el.style.display = currentLang === 'it' ? '' : 'none');
        document.querySelectorAll('.lang-en').forEach(el => el.style.display = currentLang === 'en' ? '' : 'none');

        // Update HTML lang attribute
        document.documentElement.lang = currentLang;
    }

    function updateToggleButton() {
        const btn = document.getElementById('langToggle');
        if (!btn) return;

        // Update button text or state to show current language
        // Example: "IT | EN" with bolding
        if (currentLang === 'it') {
            btn.innerHTML = '<span class="font-bold">IT</span> | <span class="text-white/60 hover:text-white">EN</span>';
        } else {
            btn.innerHTML = '<span class="text-white/60 hover:text-white">IT</span> | <span class="font-bold">EN</span>';
        }
    }

    // Expose global function to toggle
    window.toggleLanguage = function () {
        const newLang = currentLang === 'it' ? 'en' : 'it';
        setLanguage(newLang);
    };

    // Initialize once DOM is ready (or immediately if inserted at bottom of body)
    // We'll rely on explicit init call or DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        // Initial setup
        updateToggleButton();
        updateContent();
    });

    // Also expose init function if we need to call it manually after dynamic content injection
    window.initI18n = function () {
        updateToggleButton();
        updateContent();
    };

})();
