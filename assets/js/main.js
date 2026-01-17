// Main Logic
// Main Logic
// Imports removed for local file compatibility


document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Components
    loadHeader();
    loadFooter();
    loadModals();

    // 2. Initialize Event Listeners (Logic preserved from original)
    initEventListeners();
});

// Exposed Global Functions (needed for inline onclick in HTML strings)
window.toggleSubmenu = function (id) {
    const submenu = document.getElementById(id);
    // Note: When injecting HTML, previousElementSibling might be tricky if structure changes, 
    // but here we preserved the structure in header.js
    // We need to find the button that called this. 
    // Since we pass ID, we can find the submenu.
    // The arrow is inside the button which is strictly previous sibling in the markup.

    // However, finding the Chevron might require a smarter selector if DOM wasn't perfect.
    // In the original code: submenu.previousElementSibling.querySelector('.fa-chevron-down');
    if (submenu && submenu.previousElementSibling) {
        const chevron = submenu.previousElementSibling.querySelector('.fa-chevron-down');
        if (submenu.classList.contains('hidden')) {
            submenu.classList.remove('hidden');
            if (chevron) chevron.style.transform = 'rotate(180deg)';
        } else {
            submenu.classList.add('hidden');
            if (chevron) chevron.style.transform = 'rotate(0deg)';
        }
    }
}

window.toggleModal = function (modalId) {
    if (!modalId) return;
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle('modal-active');

        if (modal.classList.contains('modal-active')) {
            modal.scrollTop = 0;
            const innerScrollable = modal.querySelectorAll('.overflow-y-auto');
            innerScrollable.forEach(el => {
                el.scrollTop = 0;
            });
        }

        const anyModalActive = document.querySelector('.modal-active');
        document.body.style.overflow = anyModalActive ? 'hidden' : 'auto';
    }
}

// Global variables for Link 2.0 Detail Modal
let detailModal, l2mTitle, l2mDesc, l2mLink, l2mImg;

window.openDetailModal = function (title, desc, url, imgUrl) {
    // Elements might not exist until Modals are loaded
    if (!detailModal) {
        detailModal = document.getElementById('link2DetailModal');
        l2mTitle = document.getElementById('l2ModalTitle');
        l2mDesc = document.getElementById('l2ModalDesc');
        l2mLink = document.getElementById('l2ModalLink');
        l2mImg = document.getElementById('l2ModalImage');
    }

    if (detailModal) {
        l2mTitle.innerText = title;
        l2mDesc.innerText = desc;
        l2mLink.setAttribute('href', url);
        l2mImg.style.backgroundImage = `url('${imgUrl}')`;
        detailModal.style.display = 'flex';
    }
}

window.closeDetailModal = function () {
    const dm = document.getElementById('link2DetailModal');
    if (dm) dm.style.display = 'none';
}

function initEventListeners() {
    // Dropdown Menu Logic
    const dropdownBtn = document.getElementById('dropdownMenuButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
        });

        // Use delegation or re-query since items are injected
        // But since we run this AFTER injection, selectors should work.
        const dropdownItems = dropdownMenu.querySelectorAll('a, button');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function (e) {
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

    // Mobile Menu
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

    // Modal Closing Logic (Click Outside & Escape)
    document.addEventListener('click', function (e) {
        const modals = document.querySelectorAll('.modal-active'); // Select only active ones for check
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.scrollTop = 0;
                modal.classList.remove('modal-active');
                const anyModalActive = document.querySelector('.modal-active');
                document.body.style.overflow = anyModalActive ? 'hidden' : 'auto';
            }
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const detailModal = document.getElementById('link2DetailModal');
            if (detailModal && detailModal.style.display === 'flex') {
                window.closeDetailModal();
                return;
            }
            const boscolo = document.getElementById('boscoloModal');
            if (boscolo && boscolo.classList.contains('modal-active')) {
                window.toggleModal('boscoloModal');
                return;
            }

            const modals = document.querySelectorAll('.modal-active');
            modals.forEach(modal => {
                modal.scrollTop = 0;
                modal.classList.remove('modal-active');
            });
            document.body.style.overflow = 'auto'; // Reset if all closed
        }
    });
}
