// This file now orchestrates the loading of all individual modal components
window.loadModals = function () {
    // These functions are defined in the separate files loaded by index.html
    if (window.loadCopenaghenModal) window.loadCopenaghenModal();
    if (window.loadDublinModal) window.loadDublinModal();
    if (window.loadHelsinkiModal) window.loadHelsinkiModal();
    if (window.loadKitModal) window.loadKitModal();
    if (window.loadBiohackModal) window.loadBiohackModal();
    if (window.loadUtilsModal) window.loadUtilsModal();
}
