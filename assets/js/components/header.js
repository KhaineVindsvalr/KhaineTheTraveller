
window.headerHTML = `
    <!-- Navigazione -->
    <nav class="nav-glass text-white fixed w-full z-50 shadow-xl border-b border-white/10">
        <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            <!-- Dropdown Menu a sinistra -->
            <div class="relative hidden md:block">
                <button id="dropdownMenuButton" class="flex items-center gap-2 font-medium text-sm uppercase tracking-widest text-white/80 hover:text-emerald-400 transition">
                    <i class="fas fa-bars"></i>
                    <span>Menu</span>
                </button>
                <div id="dropdownMenu" class="absolute left-0 mt-2 w-56 bg-slate-900/95 text-white rounded-lg shadow-lg overflow-hidden hidden z-50">
                    <div class="flex flex-col px-4 py-3 space-y-2 text-sm font-medium uppercase tracking-wider">
                        <a href="#home" class="block hover:text-emerald-400 transition py-2">Home</a>
                        <a href="#destinazioni" class="block hover:text-emerald-400 transition py-2">Idee di Viaggio</a>
                        <a href="#" onclick="toggleModal('linkUtiliModal'); return false;" class="block hover:text-emerald-400 transition py-2">Link Utili</a>
                        
                        <!-- BIOHACK DESKTOP -->
                        <div class="relative">
                            <button onclick="toggleSubmenu('biohackSubmenuDesktop')" class="w-full flex justify-between items-center hover:text-emerald-400 transition py-2 text-left">
                                <span>BIOHACK</span>
                                <i class="fas fa-chevron-down text-xs transition-transform duration-300"></i>
                            </button>
                            <div id="biohackSubmenuDesktop" class="hidden pl-4 space-y-2 border-l border-slate-700 ml-2 mt-1">
                                <!-- MODIFICA INTEGRATA: Link Equilibrio collegato al modal -->
                                <a href="#" onclick="toggleModal('microModal'); return false;" class="block text-slate-400 hover:text-emerald-400 text-xs py-1">Equilibrio</a>
                                <a href="#" onclick="toggleModal('ritmoModal'); return false;" class="block text-slate-400 hover:text-emerald-400 text-xs py-1">Ritmo</a>
                                <a href="#" onclick="toggleModal('vigoreModal'); return false;" class="block text-slate-400 hover:text-emerald-400 text-xs py-1">Vigore</a>
                                <a href="#" onclick="toggleModal('venereModal'); return false;" class="block text-slate-400 hover:text-emerald-400 text-xs py-1">Venere</a>
                                <a href="#" onclick="toggleModal('babymoonModal'); return false;" class="block text-slate-400 hover:text-emerald-400 text-xs py-1">Babymoon</a>
                            </div>
                        </div>

                        <a href="#" onclick="toggleModal('kitViaggioModal'); return false;" class="block hover:text-emerald-400 transition py-2">Kit di Viaggio</a>
                        <a href="#" onclick="toggleModal('blogModal'); return false;" class="block hover:text-emerald-400 transition py-2">I Miei Viaggi</a>
                        <a href="#" onclick="toggleModal('chiSonoModal'); return false;" class="block hover:text-emerald-400 transition py-2">Chi sono</a>
                        <a href="#" onclick="toggleModal('contattiModal'); return false;" class="block hover:text-emerald-400 transition py-2">Contatti</a>
                        <button onclick="toggleModal('disclaimerModal')" class="text-left hover:text-emerald-400 transition py-2 w-full">Disclaimer</button>
                    </div>
                </div>
            </div>
            
            <!-- Nome al centro -->
            <div class="absolute left-1/2 transform -translate-x-1/2 px-2">
                <a href="#" class="flex items-center gap-3">
                    <span class="text-lg md:text-2xl font-bold tracking-tighter italic whitespace-nowrap">KHAINE | <span class="text-emerald-400">The Traveller</span></span>
                </a>
            </div>
            
            <div class="relative md:hidden">
                <button id="mobileMenuButton" aria-expanded="false" aria-controls="mobileMenu" class="text-2xl">
                    <i class="fas fa-bars"></i>
                </button>
                <!-- Mobile menu (hidden by default) -->
                <div id="mobileMenu" class="absolute left-0 top-full mt-2 w-56 bg-slate-900/95 text-white rounded-lg shadow-lg overflow-hidden hidden z-50">
                <div class="flex flex-col px-4 py-3 space-y-2 text-sm font-medium uppercase tracking-wider">
                    <a href="#home" class="block hover:text-emerald-400 transition">Home</a>
                    <a href="#destinazioni" class="block hover:text-emerald-400 transition">Idee di Viaggio</a>
                    <a href="#" onclick="toggleModal('linkUtiliModal'); return false;" class="block hover:text-emerald-400 transition">Link Utili</a>
                    
                    <!-- BIOHACK MOBILE -->
                    <div class="relative">
                        <button onclick="toggleSubmenu('biohackSubmenuMobile')" class="w-full flex justify-between items-center hover:text-emerald-400 transition py-1 text-left">
                            <span>BIOHACK</span>
                            <i class="fas fa-chevron-down text-xs transition-transform duration-300"></i>
                        </button>
                        <div id="biohackSubmenuMobile" class="hidden pl-4 space-y-2 border-l border-slate-700 ml-2 mt-1">
                            <!-- MODIFICA INTEGRATA: Link Equilibrio collegato al modal -->
                            <a href="#" onclick="toggleModal('microModal'); return false;" class="block text-slate-400 hover:text-emerald-400 text-xs py-1">Equilibrio</a>
                            <a href="#" onclick="toggleModal('ritmoModal'); return false;" class="block text-slate-400 hover:text-emerald-400 text-xs py-1">Ritmo</a>
                            <a href="#" onclick="toggleModal('vigoreModal'); return false;" class="block text-slate-400 hover:text-emerald-400 text-xs py-1">Vigore</a>
                            <a href="#" onclick="toggleModal('venereModal'); return false;" class="block text-slate-400 hover:text-emerald-400 text-xs py-1">Venere</a>
                        </div>
                    </div>

                    <a href="#" onclick="toggleModal('kitViaggioModal'); return false;" class="block hover:text-emerald-400 transition">Kit di Viaggio</a>
                    <a href="#" onclick="toggleModal('blogModal'); return false;" class="block hover:text-emerald-400 transition">I Miei Viaggi</a>
                    <a href="#" onclick="toggleModal('chiSonoModal'); return false;" class="block hover:text-emerald-400 transition">Chi sono</a>
                    <a href="#" onclick="toggleModal('contattiModal'); return false;" class="block hover:text-emerald-400 transition">Contatti</a>
                    <button onclick="toggleModal('disclaimerModal')" class="text-left hover:text-emerald-400 transition">Disclaimer</button>
                </div>
            </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header id="home" class="hero-gradient h-screen flex items-center justify-center text-center text-white px-4">
        <div class="max-w-3xl">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 italic">Il mondo non ha confini.</h1>
            <p class="text-lg md:text-xl mb-8 font-light text-slate-200 uppercase tracking-widest">Viaggi senza limiti, ricordi senza fine.</p>
        </div>
    </header>
`;
