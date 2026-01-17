
window.copeModalHTML = `
    <!-- Modale Copenaghen -->
    <div id="copeModal">
        <div class="max-w-4xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-2xl relative">
            <style>
                /* Scoped styles for Copenaghen modal */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
                #copeModal { font-family: 'Inter', sans-serif; }
                #copeModal .hero-section { background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=1200'); background-size: cover; background-position: center; }
                #copeModal .card-hover:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
                #copeModal .attraction-link { color: #c62828; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 2px; font-weight: 600; transition: opacity 0.2s; }
                #copeModal .attraction-link:hover { opacity: 0.7; }
                #copeModal .costs-table th { background-color: #f8fafc; color: #475569; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em; }
            </style>

            <header class="hero-section text-white pt-32 pb-24 px-4 shadow-lg text-center">
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg text-white">Copenaghen</h1>
                    <p class="text-xl md:text-2xl opacity-95 font-light italic uppercase tracking-widest drop-shadow-md mb-6">Dai canali di Copenaghen ai bastioni di Amleto: un viaggio tra design e leggenda</p>
                    <div class="space-y-1">
                        <p class="text-sm font-bold uppercase tracking-[0.3em] opacity-80">by KHAINE</p>
                        <p class="text-xs uppercase tracking-[0.2em] opacity-60 font-semibold">Itinerario di 5 giorni</p>
                    </div>
                </div>
                <button onclick="toggleModal('copeModal')" class="absolute top-6 right-6 text-3xl hover:text-emerald-300 transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>
            </header>

            <main class="max-w-3xl mx-auto px-4 py-16">
                <div class="space-y-12">
                    <section>
                        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover transition-all duration-300">
                            <div class="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">Giorno 1</div>
                            <h2 class="text-2xl font-bold text-slate-800 mb-4">Arrivo</h2>
                            <p class="text-slate-600 mb-6 leading-relaxed">
                                Il viaggio inizia con il volo dall'aeroporto di Bologna "G. Marconi". Una volta atterrati a Copenaghen, il trasferimento porta direttamente nel cuore pulsante della capitale. Il check-in avviene presso il <a href="https://richmond.copenhagen-hotel.net/en/#main" target="_blank" class="attraction-link">Profil Hotel Richmond</a>, una scelta strategica a pochi minuti a piedi dai <a href="https://www.tivoli.dk/en/" target="_blank" class="attraction-link">Giardini di Tivoli</a>. La serata si anima a <a href="https://it.wikipedia.org/wiki/Nyhavn" target="_blank" class="attraction-link">Nyhavn</a>, con una cena tipica a bordo del battello ristorante <a href="https://www.oranjenyhavn.dk/" target="_blank" class="attraction-link">Oranje</a>, immersi tra le luci del porto storico.
                            </p>
                        </div>
                    </section>

                    <section>
                        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover transition-all duration-300">
                            <div class="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">Giorno 2</div>
                            <h2 class="text-2xl font-bold text-slate-800 mb-4">Storia Reale e Vedute</h2>
                            <p class="text-slate-600 mb-6 leading-relaxed">
                                Mattinata dedicata al <a href="https://www.kongernessamling.dk/en/rosenborg/" target="_blank" class="attraction-link">Palazzo Reale di Rosenborg</a> per ammirare i Gioielli della Corona. Salita sulla <a href="https://www.rundetaarn.dk/en/" target="_blank" class="attraction-link">Rundetaarn</a> lungo la sua celebre rampa elicoidale per una vista panoramica della città, seguita dalla visita alla <a href="https://www.trinitatiskirke.dk/" target="_blank" class="attraction-link">Chiesa della Trinità</a>. Nel pomeriggio, un rilassante <a href="https://www.stromma.com/en-dk/copenhagen/?utm_medium=organic&utm_source=google-my-business&utm_campaign=en-dk-google.my.business.nyh.ticket.house-profile-copenhagen-sales" target="_blank" class="attraction-link">tour dei canali</a> e cena presso il <a href="https://www.tivoli.dk/en/mad-og-drikke/tivoli-food-hall" target="_blank" class="attraction-link">Tivoli Food Hall</a>.
                            </p>
                        </div>
                    </section>

                    <section>
                        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover transition-all duration-300">
                            <div class="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">Giorno 3</div>
                            <h2 class="text-2xl font-bold text-slate-800 mb-4">Icone e Palazzi</h2>
                            <p class="text-slate-600 mb-6 leading-relaxed">
                                Visita alla maestosa <a href="https://marmorkirken.dk/" target="_blank" class="attraction-link">Marmorkirken</a> e sosta ad <a href="https://www.kongernessamling.dk/en/amalienborg/" target="_blank" class="attraction-link">Amalienborg</a> per il Cambio della Guardia. Passeggiata nel verde del <a href="https://it.wikipedia.org/wiki/Kastellet_(Copenaghen)" target="_blank" class="attraction-link">Kastellet</a> fino alla statua della <a href="https://it.wikipedia.org/wiki/Statua_della_Sirenetta" target="_blank" class="attraction-link">Sirenetta</a>. Il tour prosegue verso il parlamento a <a href="https://www.kongeligeslotte.dk/en/palaces-and-gardens/christiansborg-palace.html" target="_blank" class="attraction-link">Christiansborg</a> e termina nella piazza del municipio <a href="https://it.wikipedia.org/wiki/R%C3%A5dhuspladsen" target="_blank" class="attraction-link">Radhuspladsen</a>.
                            </p>
                        </div>
                    </section>

                    <section>
                        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover transition-all duration-300">
                            <div class="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">Giorno 4</div>
                            <h2 class="text-2xl font-bold text-slate-800 mb-4">Helsingør e Amleto</h2>
                            <p class="text-slate-600 mb-6 leading-relaxed">
                                Gita fuori porta verso nord. In treno si raggiunge Helsingør per visitare il <a href="https://www.kronborg.dk/en" target="_blank" class="attraction-link">Castello di Kronborg</a>, celebre ambientazione shakespeariana dell'Amleto. Per il pranzo, tappa d'obbligo al <a href="https://vaerftetsmadmarked.dk/" target="_blank" class="attraction-link">Værftets Madmarked</a>.
                            </p>
                        </div>
                    </section>

                    <section>
                        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover transition-all duration-300">
                            <div class="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">Giorno 5</div>
                            <h2 class="text-2xl font-bold text-slate-800 mb-4">Rientro</h2>
                            <p class="text-slate-600 leading-relaxed">Partenza mattutina per l'aeroporto di Copenaghen. Grazie alla posizione del Richmond, il trasferimento è rapido, permettendo di concludere agevolmente l'avventura.</p>
                        </div>
                    </section>
                </div>

                <!-- SEZIONE: COPENHAGEN CARD -->
                <section class="mt-16 mb-12">
                    <div class="bg-blue-600 rounded-2xl shadow-lg border border-blue-400 p-8 text-white">
                        <h2 class="text-2xl font-bold mb-2 flex items-center gap-2">
                            <span>💳</span> <a href="https://copenhagencard.com/" target="_blank" class="hover:underline text-white">Copenhagen Card (Discover)</a>
                        </h2>
                        <p class="text-blue-100 mb-6 text-sm text-white">Trasporti illimitati e ingresso a 80+ attrazioni. Consigliata per questo itinerario.</p>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                                <p class="text-xs uppercase font-bold opacity-70 mb-1">24 Ore</p>
                                <p class="text-xl font-bold text-white">~ 64 €</p>
                            </div>
                            <div class="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                                <p class="text-xs uppercase font-bold opacity-70 mb-1">48 Ore</p>
                                <p class="text-xl font-bold text-white">~ 94 €</p>
                            </div>
                            <div class="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                                <p class="text-xs uppercase font-bold opacity-70 mb-1">72 Ore</p>
                                <p class="text-xl font-bold text-white">~ 112 €</p>
                            </div>
                            <div class="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                                <p class="text-xs uppercase font-bold opacity-70 mb-1">96 Ore</p>
                                <p class="text-xl font-bold text-white">~ 130 €</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- SEZIONE: RIEPILOGO COSTI SINGOLI -->
                <section>
                    <div class="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                        <div class="bg-slate-800 text-white px-8 py-6">
                            <h2 class="text-2xl font-bold">Costi Attrazioni e Servizi</h2>
                            <p class="text-slate-400 text-sm">Le attrazioni sono comprese nella Card, ma è consigliabile la prenotazione</p>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full costs-table text-left">
                                <thead>
                                    <tr class="border-b border-slate-100">
                                        <th class="px-8 py-4">Attrazione / Servizio</th>
                                        <th class="px-8 py-4 text-right">Prezzo</th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm text-slate-600">
                                    <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                                        <td class="px-8 py-4 font-medium text-slate-900">Palazzo di Rosenborg</td>
                                        <td class="px-8 py-4 text-right">17,50 €</td>
                                    </tr>
                                    <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                                        <td class="px-8 py-4 font-medium text-slate-900">Museo di Amalienborg</td>
                                        <td class="px-8 py-4 text-right">16,80 €</td>
                                    </tr>
                                    <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                                        <td class="px-8 py-4 font-medium text-slate-900">Castello di Kronborg</td>
                                        <td class="px-8 py-4 text-right">16,80 €</td>
                                    </tr>
                                    <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                                        <td class="px-8 py-4 font-medium text-slate-900">Tour dei Canali (1 ora)</td>
                                        <td class="px-8 py-4 text-right">13,50 €</td>
                                    </tr>
                                    <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                                        <td class="px-8 py-4 font-medium text-slate-900">Rundetaarn (Torre Circolare)</td>
                                        <td class="px-8 py-4 text-right">5,50 €</td>
                                    </tr>
                                    <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                                        <td class="px-8 py-4 font-medium text-slate-900">Treno Aeroporto (Sola andata)</td>
                                        <td class="px-8 py-4 text-right">4,00 €</td>
                                    </tr>
                                    <tr class="bg-slate-50/50">
                                        <td colspan="2" class="px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Attrazioni Gratuite</td>
                                    </tr>
                                    <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                                        <td class="px-8 py-4 font-medium text-slate-900">Sirenetta e Parco Kastellet</td>
                                        <td class="px-8 py-4 text-right font-bold text-green-600 uppercase text-[10px]">Gratis</td>
                                    </tr>
                                    <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                                        <td class="px-8 py-4 font-medium text-slate-900">Cambio della Guardia (Amalienborg)</td>
                                        <td class="px-8 py-4 text-right font-bold text-green-600 uppercase text-[10px]">Gratis</td>
                                    </tr>
                                    <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                                        <td class="px-8 py-4 font-medium text-slate-900">Marmorkirken & Chiesa della Trinità</td>
                                        <td class="px-8 py-4 text-right font-bold text-green-600 uppercase text-[10px]">Gratis</td>
                                    </tr>
                                    <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                                        <td class="px-8 py-4 font-medium text-slate-900">Radhuspladsen (Piazza Municipio)</td>
                                        <td class="px-8 py-4 text-right font-bold text-green-600 uppercase text-[10px]">Gratis</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>

            <div class="p-10 bg-slate-50 border-t flex justify-center">
                <button onclick="toggleModal('copeModal')" class="bg-slate-900 text-white px-14 py-4 rounded-full font-bold shadow-2xl hover:bg-emerald-600 transition uppercase tracking-widest text-xs italic">Chiudi</button>
            </div>
        </div>
    </div>
`;
