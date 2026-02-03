
window.initLogic = function () {
    function toggleSubmenu(id) {
        const submenu = document.getElementById(id);
        const chevron = submenu.previousElementSibling.querySelector('.fa-chevron-down');

        if (submenu.classList.contains('hidden')) {
            submenu.classList.remove('hidden');
            if (chevron) chevron.style.transform = 'rotate(180deg)';
        } else {
            submenu.classList.add('hidden');
            if (chevron) chevron.style.transform = 'rotate(0deg)';
        }
    }
    // Make it global as it is used in onclick attributes
    window.toggleSubmenu = toggleSubmenu;

    function toggleModal(modalId) {
        console.log(`Toggling modal: ${modalId}`);
        if (!modalId) return;
        const modal = document.getElementById(modalId);
        console.log(`Element found:`, modal);
        if (modal) {
            // Toggle della classe attiva
            modal.classList.toggle('modal-active');

            // Se stiamo APRENDO il modal, resettiamo lo scroll
            if (modal.classList.contains('modal-active')) {
                // Reset scroll del contenitore principale del modal
                modal.scrollTop = 0;

                // Reset scroll per i contenitori interni specifici (es. Kit Viaggio e Link Utili)
                // Cerchiamo qualsiasi elemento figlio con overflow-y-auto e resettiamo il suo scroll
                const innerScrollable = modal.querySelectorAll('.overflow-y-auto');
                innerScrollable.forEach(el => {
                    el.scrollTop = 0;
                });
            }

            // Gestione overflow del body: se c'è ALMENO un modal attivo, blocca lo scroll
            const anyModalActive = document.querySelector('.modal-active');
            document.body.style.overflow = anyModalActive ? 'hidden' : 'auto';
        }
    }
    window.toggleModal = toggleModal;

    // --- JS INTEGRATO DA LINK 2.0 ---
    const detailModal = document.getElementById('link2DetailModal');
    const l2mTitle = document.getElementById('l2ModalTitle');
    const l2mDesc = document.getElementById('l2ModalDesc');
    const l2mLink = document.getElementById('l2ModalLink');
    const l2mImg = document.getElementById('l2ModalImage');

    function openDetailModal(title, desc, url, imgUrl) {
        if (!detailModal) return;
        l2mTitle.innerText = title;
        l2mDesc.innerText = desc;

        l2mLink.setAttribute('href', url);
        l2mImg.style.backgroundImage = `url('${imgUrl}')`;

        detailModal.style.display = 'flex';
        // Non cambiamo overflow qui perché è già gestito dal modal padre
    }
    window.openDetailModal = openDetailModal;

    function closeDetailModal() {
        if (!detailModal) return;
        detailModal.style.display = 'none';
    }
    window.closeDetailModal = closeDetailModal;
    // ---------------------------------

    // DOMContentLoaded logic - we run this immediately since we are calling initLogic explicitly
    // Gestione Menu Dropdown (codice originale mantenuto)
    const dropdownBtn = document.getElementById('dropdownMenuButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (dropdownBtn && dropdownMenu) {
        // Clone element to remove previous event listeners if initialized multiple times
        // actually no, that might break things. Ideally we run this once.

        dropdownBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
        });
        const dropdownItems = dropdownMenu.querySelectorAll('a, button');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function (e) {
                // Modifica: Se l'elemento cliccato è il pulsante del sottomenù, non chiudere il menù
                if (this.getAttribute('onclick') && this.getAttribute('onclick').includes('toggleSubmenu')) {
                    return;
                }
                dropdownMenu.classList.add('hidden');
            });
        });
        document.addEventListener('click', function (e) {
            if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target) && !dropdownMenu.classList.contains('hidden')) {
                dropdownMenu.classList.add('hidden');
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !dropdownMenu.classList.contains('hidden')) { dropdownMenu.classList.add('hidden'); }
        });
    }

    const btn = document.getElementById('mobileMenuButton');
    const menu = document.getElementById('mobileMenu');

    if (btn && menu) {
        btn.addEventListener('click', function (e) {
            const isHidden = menu.classList.contains('hidden');
            if (isHidden) { menu.classList.remove('hidden'); btn.setAttribute('aria-expanded', 'true'); }
            else { menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false'); }
        });
        document.addEventListener('click', function (e) {
            if (!menu.contains(e.target) && !btn.contains(e.target) && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Chiudi i modal cliccando fuori dal contenuto
    document.addEventListener('click', function (e) {
        // MODIFICA INTEGRATA: Aggiunto microModal e ritmoModal alla lista dei selettori
        const modals = document.querySelectorAll('#itinerarioModal, #helsinkiModal, #disclaimerModal, #copeModal, #chiSonoModal, #blogModal, #contattiModal, #linkUtiliModal, #boscoloModal, #kitViaggioModal, #microModal, #ritmoModal, #vigoreModal, #venereModal, #babymoonModal, #montefeltroModal, #soulsSoundsModal');
        modals.forEach(modal => {
            if (modal.classList.contains('modal-active') && e.target === modal) {
                modal.scrollTop = 0;
                modal.classList.remove('modal-active');
                // Ricontrolla se ci sono altri modal aperti prima di riabilitare lo scroll
                const anyModalActive = document.querySelector('.modal-active');
                document.body.style.overflow = anyModalActive ? 'hidden' : 'auto';
            }
        });
    });

    // Chiudi i modal con il tasto Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            // Controllo Prioritario: se il popup di dettaglio di Link2.0 è aperto, chiudi SOLO quello
            const detailModal = document.getElementById('link2DetailModal');
            if (detailModal && detailModal.style.display === 'flex') {
                closeDetailModal();
                return;
            }

            // Chiudi prima il modal con z-index più alto (Boscolo legacy) se aperto
            const boscolo = document.getElementById('boscoloModal');
            if (boscolo && boscolo.classList.contains('modal-active')) {
                toggleModal('boscoloModal');
                return; // Ferma qui per non chiudere anche quello sotto
            }

            // MODIFICA INTEGRATA: Aggiunto microModal e ritmoModal alla lista
            // Note: Boscolo handles itself before this if active
            const modals = document.querySelectorAll('#itinerarioModal, #helsinkiModal, #disclaimerModal, #copeModal, #chiSonoModal, #blogModal, #contattiModal, #linkUtiliModal, #kitViaggioModal, #microModal, #ritmoModal, #soulsSoundsModal');
            modals.forEach(modal => {
                if (modal.classList.contains('modal-active')) {
                    modal.scrollTop = 0;
                    modal.classList.remove('modal-active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });

    // Ascolta messaggi dall'iframe (per il pulsante Chiudi in wardruna.html)
    window.addEventListener('message', function (e) {
        if (e.data === 'close-modal') {
            toggleModal('soulsSoundsModal');
        }
    });
};
