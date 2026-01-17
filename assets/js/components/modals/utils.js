window.loadUtilsModal = function () {
    const html = `
    <!-- Link Utili Modal -->
    <div id="linkUtiliModal" aria-hidden="true">
        <div class="max-w-6xl mx-auto my-6 md:my-12 bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl relative border border-[#c5a059]/30">
            <button onclick="toggleModal('linkUtiliModal')" class="absolute top-6 right-6 text-3xl text-[#c5a059] hover:text-white transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>
            <div class="p-8 md:p-12 l2-font-inter overflow-y-auto max-h-[85vh]">
                <header class="text-center mb-16">
                    <h1 class="text-4xl md:text-6xl font-bold l2-gold-gradient mb-4 uppercase l2-font-cinzel">Risorse del Viaggiatore</h1>
                    <p class="text-[#94a3b8] italic tracking-wide">Strumenti e partner per organizzare il tuo prossimo viaggio.</p>
                </header>
                
                <main class="space-y-20">
                    
                    <!-- Sezione 1: Ispirazione -->
                    <section>
                        <h2 class="text-2xl font-bold text-[#f1f5f9] mb-8 border-l-4 border-[#c5a059] pl-4 uppercase tracking-widest">Ispirazione & Booking</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            <!-- Card Boscolo (con Trigger Modal boscolo legacy) -->
                            <div class="l2-card-container rounded-xl p-6 relative group cursor-pointer" onclick="toggleModal('boscoloModal')">
                                <div class="absolute top-4 right-4 text-[#c5a059] opacity-50 group-hover:opacity-100 transition"><i class="fas fa-external-link-alt"></i></div>
                                <h3 class="text-xl font-bold text-[#c5a059] mb-2 l2-font-cinzel">Boscolo Viaggi</h3>
                                <p class="text-sm text-gray-400 mb-4 line-clamp-3">Viaggi guidati di lusso in tutto il mondo. Leader italiano nei tour organizzati di alta gamma.</p>
                                <span class="text-xs font-bold text-white uppercase tracking-widest border-b border-[#c5a059] pb-1">Apri Info</span>
                            </div>

                            <!-- Card Pirati in Viaggio - Trigger Detail Link 2.0 -->
                            <div class="l2-card-container rounded-xl p-6 relative group cursor-pointer" 
                                onclick="openDetailModal('Pirati in Viaggio', 'Il miglior portale per trovare errori di prezzo e offerte last minute incredibili. Ottimo per chi ha date flessibili.', 'https://www.piratinviaggio.it', 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=80&w=600')">
                                <div class="absolute top-4 right-4 text-[#c5a059] opacity-50 group-hover:opacity-100 transition"><i class="fas fa-info-circle"></i></div>
                                <h3 class="text-xl font-bold text-[#c5a059] mb-2 l2-font-cinzel">Pirati in Viaggio</h3>
                                <p class="text-sm text-gray-400 mb-4 line-clamp-3">Offerte voli e pacchetti vacanze a prezzi stracciati. Error fares e last second.</p>
                                <span class="text-xs font-bold text-white uppercase tracking-widest border-b border-[#c5a059] pb-1">Dettagli</span>
                            </div>

                             <!-- Card Skyscanner -->
                             <div class="l2-card-container rounded-xl p-6 relative group cursor-pointer" 
                                onclick="openDetailModal('Skyscanner', 'Il motore di ricerca voli per eccellenza. Usa la funzione Ovunque per trovare la meta più economica.', 'https://www.skyscanner.it', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600')">
                                <div class="absolute top-4 right-4 text-[#c5a059] opacity-50 group-hover:opacity-100 transition"><i class="fas fa-info-circle"></i></div>
                                <h3 class="text-xl font-bold text-[#c5a059] mb-2 l2-font-cinzel">Skyscanner</h3>
                                <p class="text-sm text-gray-400 mb-4 line-clamp-3">Confronta milioni di voli. La funzione 'Ovunque' è essenziale per il viaggiatore flessibile.</p>
                                <span class="text-xs font-bold text-white uppercase tracking-widest border-b border-[#c5a059] pb-1">Dettagli</span>
                            </div>

                        </div>
                    </section>

                    <!-- Sezione 2: Utilità -->
                    <section>
                        <h2 class="text-2xl font-bold text-[#f1f5f9] mb-8 border-l-4 border-[#c5a059] pl-4 uppercase tracking-widest">Utilità in Viaggio</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            <!-- Viaggiare Sicuri -->
                            <a href="https://www.viaggiaresicuri.it/home" target="_blank" class="l2-card-container rounded-xl p-6 relative group block decoration-transparent">
                                <div class="absolute top-4 right-4 text-[#c5a059] opacity-50 group-hover:opacity-100 transition"><i class="fas fa-passport"></i></div>
                                <h3 class="text-xl font-bold text-[#c5a059] mb-2 l2-font-cinzel">Viaggiare Sicuri</h3>
                                <p class="text-sm text-gray-400 mb-4">Sito ufficiale Farnesina. Controlla visti, vaccinazioni e sicurezza prima di partire.</p>
                                <span class="text-xs font-bold text-white uppercase tracking-widest border-b border-[#c5a059] pb-1">Vai al Sito</span>
                            </a>

                            <!-- Revolut -->
                             <div class="l2-card-container rounded-xl p-6 relative group cursor-pointer" 
                                onclick="openDetailModal('Revolut', 'La carta indispensabile per viaggiare. Cambio valuta interbancario senza commissioni (nei giorni feriali) e prelievi gratuiti all\'estero.', 'https://revolut.com', 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600')">
                                <div class="absolute top-4 right-4 text-[#c5a059] opacity-50 group-hover:opacity-100 transition"><i class="fas fa-credit-card"></i></div>
                                <h3 class="text-xl font-bold text-[#c5a059] mb-2 l2-font-cinzel">Revolut</h3>
                                <p class="text-sm text-gray-400 mb-4">Miglior conto per viaggiare. Cambio valuta reale e zero commissioni nascoste.</p>
                                <span class="text-xs font-bold text-white uppercase tracking-widest border-b border-[#c5a059] pb-1">Dettagli</span>
                            </div>

                        </div>
                    </section>
                </main>

                <div class="flex justify-center pt-20 pb-12">
                     <button onclick="toggleModal('linkUtiliModal')" class="px-10 py-4 border border-[#c5a059] text-[#c5a059] rounded-full font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-white transition duration-300">
                        Chiudi
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Link 2.0 Detail Modal (Nested) -->
    <div id="link2DetailModal" onclick="closeDetailModal()">
        <div class="l2-modal-content rounded-3xl overflow-hidden shadow-2xl" onclick="event.stopPropagation()">
            <div id="l2ModalImage" class="h-44 w-full bg-cover bg-center relative">
                <div class="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] to-transparent"></div>
            </div>
            <div class="p-8">
                <h3 id="l2ModalTitle" class="text-2xl font-bold l2-gold-gradient mb-4 uppercase l2-font-cinzel">Titolo</h3>
                <p id="l2ModalDesc" class="text-gray-300 mb-8 leading-relaxed l2-font-inter">Descrizione...</p>
                <a id="l2ModalLink" href="#" target="_blank" class="inline-block w-full py-4 bg-[#c5a059] text-white font-bold rounded-xl text-center uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all">
                    Vai al sito ufficiale
                </a>
                <button onclick="closeDetailModal()" class="w-full mt-4 text-xs text-gray-500 uppercase tracking-widest hover:text-white transition">
                    Chiudi
                </button>
            </div>
        </div>
    </div>
    
    <!-- Legacy Boscolo Modal -->
    <div id="boscoloModal" aria-hidden="true">
        <div class="max-w-lg mx-auto my-24 bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl relative border border-emerald-500/30">
             <div class="relative p-8 text-center">
                <button onclick="toggleModal('boscoloModal')" class="absolute top-4 right-4 text-slate-400 hover:text-white transition text-2xl">&times;</button>
                <h2 class="text-2xl font-bold mb-4 font-serif italic text-emerald-400">Partnership Boscolo</h2>
                <p class="text-slate-300 mb-6 text-sm leading-relaxed">
                    Khaine The Traveller collabora occasionalmente con Boscolo per viaggi di gruppo selezionati. 
                    Consulta il sito ufficiale per le ultime partenze.
                </p>
                <a href="https://www.boscolo.com/it" target="_blank" class="inline-block px-6 py-2 bg-emerald-600 rounded-full font-bold mb-4 hover:bg-emerald-500 transition">Sito Ufficiale Boscolo</a>
                <div class="block">
                 <button onclick="toggleModal('boscoloModal')" class="text-slate-500 text-xs hover:text-white transition py-2 uppercase tracking-widest">
                    Chiudi
                </button>
                </div>
             </div>
        </div>
    </div>

    <!-- Modale Disclaimer Legale -->
    <div id="disclaimerModal">
        <div class="max-w-3xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-2xl relative">
            <div class="relative p-8 md:p-12">
                <button onclick="toggleModal('disclaimerModal')" class="absolute top-6 right-6 text-3xl hover:text-emerald-300 transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>
                <h2 class="text-2xl font-bold mb-4 italic">Disclaimer Legale</h2>
                <div class="text-sm text-slate-700 space-y-4 leading-relaxed">
                    <p>Il sito https://khainevindsvalr.github.io/KhaineTheTraveller/ è un blog personale e un portale di consulenza itinerari gestito da Enrico De A.</p>

                    <p>Si precisa che il titolare non è un’agenzia di viaggi né un tour operator. In conformità con la normativa vigente (D.Lgs. 79/2011), l'attività svolta consiste esclusivamente nella pianificazione di itinerari personalizzati e nella consulenza strategica al viaggio.</p>

                    <p><strong>Il servizio non include:</strong></p>
                    <ul class="list-disc ml-6 space-y-2">
                        <li>La vendita o l'organizzazione di pacchetti turistici.</li>
                        <li>La prenotazione diretta di voli, hotel o trasporti per conto del cliente.</li>
                        <li>L'incasso di somme destinate a fornitori terzi.</li>
                    </ul>

                    <p>Tutte le prenotazioni suggerite durante la consulenza dovranno essere effettuate dal cliente in autonomia o tramite agenzie di viaggio autorizzate. Il titolare non è responsabile per eventuali disservizi causati dai fornitori dei servizi turistici suggeriti.</p>
                </div>
                <div class="mt-8 flex justify-center">
                    <button onclick="toggleModal('disclaimerModal')" class="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition">Chiudi</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modale Chi Sono -->
    <div id="chiSonoModal">
        <div class="max-w-4xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-2xl relative">
             <div class="relative h-64">
                <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                    <h2 class="text-5xl font-bold text-white italic font-serif">Khaine</h2>
                </div>
                <button onclick="toggleModal('chiSonoModal')" class="absolute top-6 right-6 text-3xl hover:text-emerald-300 transition z-20 bg-black/20 w-12 h-12 rounded-full text-white">&times;</button>
            </div>
            <div class="p-10 space-y-6 text-slate-700 leading-relaxed text-center">
                <p class="text-xl italic font-light text-slate-900">"Non sono una guida turistica, sono un architetto di esperienze."</p>
                <p>
                    Mi chiamo Enrico, online noto come <strong>Khaine</strong>. Viaggiatore ossessivo-compulsivo, pianificatore strategico e amante del bello.
                </p>
                <p>
                    Ho creato questo spazio per condividere itinerari che non trovi sulle guide classiche. Itinerari ottimizzati al minuto, dove ogni spostamento è calcolato e ogni ristorante è testato. La mia filosofia è il <strong>"Viaggio ad Alta Intensità"</strong>: vedere il massimo, senza stress, con il massimo comfort.
                </p>
                <div class="pt-6">
                    <button onclick="toggleModal('chiSonoModal')" class="bg-slate-900 text-white px-10 py-3 rounded-full font-bold hover:bg-emerald-600 transition">Chiudi</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modale Contatti -->
    <div id="contattiModal">
        <div class="max-w-md mx-auto my-24 bg-white rounded-3xl overflow-hidden shadow-2xl relative text-center">
            <div class="bg-slate-900 p-8">
                 <h2 class="text-3xl font-bold text-white italic font-serif mb-2">Contatti</h2>
                 <p class="text-emerald-400 uppercase tracking-widest text-xs">Parliamo del tuo prossimo viaggio</p>
                 <button onclick="toggleModal('contattiModal')" class="absolute top-4 right-4 text-slate-400 hover:text-white transition text-2xl">&times;</button>
            </div>
            <div class="p-10 space-y-6">
                <div class="space-y-4">
                    <a href="mailto:info@khaine.it" class="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 transition group">
                        <i class="fas fa-envelope text-2xl text-slate-400 group-hover:text-emerald-600 mb-2"></i>
                        <p class="font-bold text-slate-800">Email</p>
                        <p class="text-sm text-slate-500">enrico.dea@example.com</p>
                    </a>
                    <a href="#" class="block p-4 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-100 transition group">
                        <i class="fab fa-instagram text-2xl text-slate-400 group-hover:text-purple-600 mb-2"></i>
                        <p class="font-bold text-slate-800">Instagram</p>
                        <p class="text-sm text-slate-500">@khaine_traveller</p>
                    </a>
                </div>
                 <button onclick="toggleModal('contattiModal')" class="mt-4 text-slate-400 text-xs hover:text-slate-900 transition uppercase tracking-widest">Chiudi</button>
            </div>
        </div>
    </div>
    
    <!-- Modale Blog (Placeholder) -->
    <div id="blogModal">
        <div class="max-w-4xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-2xl relative">
            <div class="p-12 text-center">
                <button onclick="toggleModal('blogModal')" class="absolute top-6 right-6 text-3xl hover:text-emerald-300 transition z-20 w-12 h-12 rounded-full text-slate-400">&times;</button>
                <i class="fas fa-compass text-6xl text-emerald-200 mb-6"></i>
                <h2 class="text-3xl font-bold mb-4 italic">Diario di Viaggio</h2>
                <p class="text-slate-500 mb-8">La sezione Blog è in fase di allestimento. Torna presto per leggere le avventure complete.</p>
                <button onclick="toggleModal('blogModal')" class="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition">Chiudi</button>
            </div>
        </div>
    </div>
    `;
    document.getElementById('modals-container').insertAdjacentHTML('beforeend', html);
}
