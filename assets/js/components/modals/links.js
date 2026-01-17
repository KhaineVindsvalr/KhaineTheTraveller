
window.linksModalHTML = `
    <!-- MODAL PRINCIPALE: LINK UTILI (AGGIORNATO CON CONTENUTO LINK 2.0) -->
    <div id="linkUtiliModal" aria-hidden="true">
        <!-- Background cambiato a scuro (#0f172a) per adattarsi allo stile Link 2.0 -->
        <div class="max-w-6xl mx-auto my-6 md:my-12 bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl relative border border-[#c5a059]/30">
            
            <!-- Pulsante chiudi aggiornato al color oro -->
            <button onclick="toggleModal('linkUtiliModal')" class="absolute top-6 right-6 text-3xl text-[#c5a059] hover:text-white transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>

            <!-- Contenuto Link 2.0 -->
            <div class="p-8 md:p-12 l2-font-inter overflow-y-auto max-h-[85vh]">
                <header class="text-center mb-16">
                    <h1 class="text-4xl md:text-6xl font-bold l2-gold-gradient mb-4 uppercase l2-font-cinzel">Risorse del Viaggiatore</h1>
                    <div class="w-24 h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto mb-6"></div>
                </header>

                <main class="space-y-20">
                    
                    <!-- SEZIONE TOUR OPERATOR -->
                    <section>
                        <h2 class="text-xl font-bold tracking-widest uppercase text-[#c5a059] mb-8 border-l-4 border-[#c5a059] pl-4 l2-font-cinzel">Tour Operator</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- Boscolo -->
                            <div class="l2-card-container p-6 rounded-xl flex flex-col items-center text-center">
                                <span class="text-white font-bold text-lg mb-4">Boscolo</span>
                                <div class="flex space-x-3">
                                    <a href="https://www.boscolo.com" target="_blank" class="px-4 py-1.5 text-xs border border-gray-600 rounded text-gray-400 hover:text-white hover:border-white transition">Sito</a>
                                    <button onclick="openDetailModal('Boscolo', 'Viaggi guidati di alto livello con itinerari culturali ricercati e accompagnatori esperti.', 'https://www.boscolo.com', 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800')" class="text-[#c5a059] hover:scale-110 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                            <!-- Giver -->
                            <div class="l2-card-container p-6 rounded-xl flex flex-col items-center text-center">
                                <span class="text-white font-bold text-lg mb-4">Giver Viaggi</span>
                                <div class="flex space-x-3">
                                    <a href="https://www.giverviaggi.com" target="_blank" class="px-4 py-1.5 text-xs border border-gray-600 rounded text-gray-400 hover:text-white hover:border-white transition">Sito</a>
                                    <button onclick="openDetailModal('Giver Viaggi', 'Specialisti assoluti per il Nord Europa, crociere fluviali e viaggi in Lapponia.', 'https://www.giverviaggi.com', 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&q=80&w=800')" class="text-[#c5a059] hover:scale-110 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                            <!-- Quality Group (Macchu Picchu) -->
                            <div class="l2-card-container p-6 rounded-xl flex flex-col items-center text-center">
                                <span class="text-white font-bold text-lg mb-4">Quality Group</span>
                                <div class="flex space-x-3">
                                    <a href="https://www.qualitygroup.it" target="_blank" class="px-4 py-1.5 text-xs border border-gray-600 rounded text-gray-400 hover:text-white hover:border-white transition">Sito</a>
                                    <button onclick="openDetailModal('Quality Group', 'Un consorzio di specialisti che offre viaggi su misura in ogni continente del mondo.', 'https://www.qualitygroup.it', 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800')" class="text-[#c5a059] hover:scale-110 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- SEZIONE VOLI -->
                    <section>
                        <h2 class="text-xl font-bold tracking-widest uppercase text-[#c5a059] mb-8 border-l-4 border-[#c5a059] pl-4 l2-font-cinzel">Voli e Trasporti</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- Skyscanner -->
                            <div class="l2-card-container p-6 rounded-xl flex justify-between items-center">
                                <span class="text-white font-bold uppercase tracking-tight">Skyscanner</span>
                                <button onclick="openDetailModal('Skyscanner', 'Il motore di ricerca più potente per confrontare i prezzi dei voli di tutte le compagnie mondiali.', 'https://www.skyscanner.it', 'https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=800')" class="p-2 bg-gray-700/50 rounded-lg text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition">
                                    INFO
                                </button>
                            </div>
                            <!-- Google Flights -->
                            <div class="l2-card-container p-6 rounded-xl flex justify-between items-center">
                                <span class="text-white font-bold uppercase tracking-tight">Google Flights</span>
                                <button onclick="openDetailModal('Google Flights', 'Strumento rapido di Google per monitorare le variazioni di prezzo e trovare le date più convenienti.', 'https://google.com/flights', 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800')" class="p-2 bg-gray-700/50 rounded-lg text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition">
                                    INFO
                                </button>
                            </div>
                            <!-- Ryanair -->
                            <div class="l2-card-container p-6 rounded-xl flex justify-between items-center">
                                <span class="text-white font-bold uppercase tracking-tight">Ryanair</span>
                                <button onclick="openDetailModal('Ryanair', 'La compagnia aerea low cost per eccellenza per muoversi velocemente in tutta Europa.', 'https://www.ryanair.com', 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80&w=800')" class="p-2 bg-gray-700/50 rounded-lg text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition">
                                    INFO
                                </button>
                            </div>
                        </div>
                    </section>

                    <!-- SEZIONE HOTEL -->
                    <section>
                        <h2 class="text-xl font-bold tracking-widest uppercase text-[#c5a059] mb-8 border-l-4 border-[#c5a059] pl-4 l2-font-cinzel">Alloggi</h2>
                        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <div class="l2-card-container p-4 rounded-xl flex flex-col items-center">
                                <span class="text-white font-bold mb-3">Booking</span>
                                <button onclick="openDetailModal('Booking.com', 'Migliaia di strutture con recensioni verificate e opzioni di cancellazione flessibili.', 'https://www.booking.com', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800')" class="text-xs bg-[#c5a059]/20 text-[#c5a059] px-3 py-1 rounded hover:bg-[#c5a059] hover:text-white transition">INFO</button>
                            </div>
                            <div class="l2-card-container p-4 rounded-xl flex flex-col items-center">
                                <span class="text-white font-bold mb-3">Airbnb</span>
                                <button onclick="openDetailModal('Airbnb', 'Case uniche e alloggi locali per vivere un\'esperienza autentica in ogni destinazione.', 'https://www.airbnb.it', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800')" class="text-xs bg-[#c5a059]/20 text-[#c5a059] px-3 py-1 rounded hover:bg-[#c5a059] hover:text-white transition">INFO</button>
                            </div>
                            <div class="l2-card-container p-4 rounded-xl flex flex-col items-center">
                                <span class="text-white font-bold mb-3">Expedia</span>
                                <button onclick="openDetailModal('Expedia', 'Pacchetti completi volo+hotel per pianificare il viaggio in totale comodità.', 'https://www.expedia.it', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800')" class="text-xs bg-[#c5a059]/20 text-[#c5a059] px-3 py-1 rounded hover:bg-[#c5a059] hover:text-white transition">INFO</button>
                            </div>
                            <div class="l2-card-container p-4 rounded-xl flex flex-col items-center">
                                <span class="text-white font-bold mb-3">Trivago</span>
                                <button onclick="openDetailModal('Trivago', 'Compara i prezzi degli hotel su centinaia di siti per trovare l\'offerta migliore.', 'https://www.trivago.it', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800')" class="text-xs bg-[#c5a059]/20 text-[#c5a059] px-3 py-1 rounded hover:bg-[#c5a059] hover:text-white transition">INFO</button>
                            </div>
                            <div class="l2-card-container p-4 rounded-xl flex flex-col items-center">
                                <span class="text-white font-bold mb-3">Kayak</span>
                                <button onclick="openDetailModal('Kayak', 'Strumento versatile per confrontare hotel, auto e voli in un\'unica ricerca.', 'https://www.kayak.it', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800')" class="text-xs bg-[#c5a059]/20 text-[#c5a059] px-3 py-1 rounded hover:bg-[#c5a059] hover:text-white transition">INFO</button>
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

    <!-- NUOVO: Modal Popup Boscolo (Legacy) -->
    <div id="boscoloModal" aria-hidden="true">
        <div class="max-w-lg mx-auto my-24 bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl relative border border-emerald-500/30">
            <div class="relative p-8 text-center">
                <button onclick="toggleModal('boscoloModal')" class="absolute top-4 right-4 text-slate-400 hover:text-white transition text-2xl">&times;</button>
                
                <div class="mb-6">
                    <img src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=400" alt="Boscolo" class="w-full h-32 object-cover rounded-2xl mb-4 opacity-80">
                    <h2 class="text-3xl font-bold italic mb-2">Boscolo Tour</h2>
                    <div class="h-1 w-16 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <p class="text-slate-300 leading-relaxed mb-8 text-sm italic">
                    "Eccellenza italiana nei viaggi guidati. Li ho inseriti nei miei link utili perché offrono itinerari curati nei minimi dettagli, ideali per chi cerca cultura e comfort senza pensieri. Le loro guide sono tra le migliori in circolazione."
                </p>

                <div class="flex flex-col gap-3">
                    <a href="https://www.boscolo.com" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-full font-bold uppercase tracking-widest transition-all">
                        Vai al Sito Ufficiale
                    </a>
                    <button onclick="toggleModal('boscoloModal')" class="text-slate-400 text-sm hover:text-white transition py-2">
                        Torna ai Link Utili
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- POPUP MODALE DETTAGLIO LINK 2.0 (MODAL DI SECONDO LIVELLO) -->
    <div id="link2DetailModal" onclick="closeDetailModal()">
        <div class="l2-modal-content rounded-3xl overflow-hidden shadow-2xl" onclick="event.stopPropagation()">
            <!-- Immagine Dinamica -->
            <div id="l2ModalImage" class="h-44 w-full bg-cover bg-center relative">
                <div class="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] to-transparent"></div>
            </div>
            
            <!-- Contenuto -->
            <div class="p-8">
                <h3 id="l2ModalTitle" class="text-2xl font-bold l2-gold-gradient mb-4 uppercase l2-font-cinzel">Titolo</h3>
                <p id="l2ModalDesc" class="text-gray-300 mb-8 leading-relaxed l2-font-inter">Descrizione...</p>
                
                <!-- PULSANTE VAI AL SITO -->
                <a id="l2ModalLink" href="#" target="_blank" class="inline-block w-full py-4 bg-[#c5a059] text-white font-bold rounded-xl text-center uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all">
                    Vai al sito ufficiale
                </a>
                
                <button onclick="closeDetailModal()" class="w-full mt-4 text-xs text-gray-500 uppercase tracking-widest hover:text-white transition">
                    Chiudi
                </button>
            </div>
        </div>
    </div>
`;
