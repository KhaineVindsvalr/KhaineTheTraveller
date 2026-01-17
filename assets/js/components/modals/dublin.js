
window.dublinModalHTML = `
    <!-- Modale Itinerario Dublino -->
    <div id="itinerarioModal">
        <div class="max-w-4xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-2xl relative">
            <div class="relative h-72 flex items-center justify-center text-center text-white">
                <img src="https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=1200&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover">
                <div class="absolute inset-0 bg-emerald-900/80 backdrop-blur-[2px]"></div>
                <!-- FIXED: added modalId argument -->
                <button onclick="toggleModal('itinerarioModal')" class="absolute top-6 right-6 text-3xl hover:text-emerald-300 transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>
                <div class="relative z-10 p-6">
                    <h2 class="text-5xl font-bold mb-2 italic">Dublin's Tour</h2>
                    <p class="opacity-90 italic text-lg uppercase tracking-widest border-b border-white/30 pb-2 mb-4">by Khaine</p>
                    <p class="font-bold text-emerald-400 text-xl tracking-widest">ITINERARIO 5 GIORNI</p>
                </div>
            </div>

            <div class="p-8 md:p-14 space-y-12">
                <section class="text-center">
                    <p class="text-2xl text-slate-600 italic font-light">"Alla scoperta di Dublino e dintorni, tra cultura e Pub."</p>
                </section>

                <div class="space-y-12">
                    <!-- Giorno 1 -->
                    <div class="day-card">
                        <h3 class="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wider">Giorno 1</h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><i class="fas fa-plane-departure mr-3 text-emerald-600"></i> Partenza da Bologna (BLQ)</li>
                            <li><i class="fas fa-plane-arrival mr-3 text-emerald-600"></i> Arrivo a Dublino (DUB)</li>
                            <li><i class="fas fa-bus mr-3 text-emerald-600"></i> <a href="https://www.dublinexpress.ie/" target="_blank" class="attraction-link">Dublin Express</a></li>
                            <li><i class="fas fa-hotel mr-3 text-emerald-600"></i> Sistemazione all' <a href="https://www.hardinghotel.ie/" target="_blank" class="attraction-link">Harding Hotel</a></li>
                            <li><i class="fas fa-utensils mr-3 text-emerald-600"></i> Cena: <a href="https://www.brazenhead.com/" target="_blank" class="attraction-link">The Brazen Head</a></li>
                        </ul>
                    </div>

                    <!-- Giorno 2 -->
                    <div class="day-card">
                        <h3 class="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wider">Giorno 2</h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><i class="fas fa-church mr-3 text-emerald-600"></i> <a href="https://christchurchcathedral.ie/" target="_blank" class="attraction-link">Christ Church Cathedral</a></li>
                            <li><i class="fas fa-history mr-3 text-emerald-600"></i> <a href="https://www.dublinia.ie/" target="_blank" class="attraction-link">Dublinia Museo Vichingo</a></li>
                            <li><i class="fas fa-utensils mr-3 text-emerald-600"></i> Pranzo al Temple Bar Food Market</li>
                            <li><i class="fas fa-fort-awesome mr-3 text-emerald-600"></i> <a href="https://www.dublincastle.ie/" target="_blank" class="attraction-link">Castello di Dublino</a></li>
                            <li><i class="fas fa-walking mr-3 text-emerald-600"></i> Passaggio per George's Street Arcade e Molly Malone Statue</li>
                            <li><i class="fas fa-glass-whiskey mr-3 text-emerald-600"></i> <a href="https://www.irishwhiskeymuseum.ie/" target="_blank" class="attraction-link">Museo Irlandese del Whisky</a></li>
                            <li><i class="fas fa-utensils mr-3 text-emerald-600"></i> Cena: <a href="https://www.thebuckleycollection.ie/crow-street" target="_blank" class="attraction-link">FX Buckley Steakhouse</a></li>
                        </ul>
                    </div>

                    <!-- Giorno 3 -->
                    <div class="day-card">
                        <h3 class="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wider">Giorno 3</h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><i class="fas fa-bridge mr-3 text-emerald-600"></i> Passeggiata sul ponte Ha’ Penny</li>
                            <li><i class="fas fa-university mr-3 text-emerald-600"></i> <a href="https://www.tcd.ie/visitors/book-of-kells/" target="_blank" class="attraction-link">Trinity College</a></li>
                            <li><i class="fas fa-utensils mr-3 text-emerald-600"></i> Pranzo: <a href="https://stagshead.ie/" target="_blank" class="attraction-link">The Stag’s Head</a></li>
                            <li><i class="fas fa-leaf mr-3 text-emerald-600"></i> St. Stephen's Green & Oscar Wilde Sculpture</li>
                            <li><i class="fas fa-beer mr-3 text-emerald-600"></i> <a href="https://www.guinness-storehouse.com/" target="_blank" class="attraction-link">Guinness Store House</a></li>
                            <li><i class="fas fa-utensils mr-3 text-emerald-600"></i> Cena: <a href="https://www.thebuckleycollection.ie/bull-castle-steakhouse" target="_blank" class="attraction-link">The Bull & Castle</a></li>
                        </ul>
                    </div>

                    <!-- Giorno 4 -->
                    <div class="day-card">
                        <h3 class="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wider">Giorno 4</h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><i class="fas fa-train mr-3 text-emerald-600"></i> Treno DART per <a href="https://it.wikipedia.org/wiki/Howth" target="_blank" class="attraction-link">Howth</a></li>
                            <li><i class="fas fa-anchor mr-3 text-emerald-600"></i> Visita cittadina di mare e dintorni</li>
                            <li><i class="fas fa-utensils mr-3 text-emerald-600"></i> Pranzo: <a href="http://thesummitinn.ie/" target="_blank" class="attraction-link">The Summit Inn</a></li>
                            <li><i class="fas fa-utensils mr-3 text-emerald-600"></i> Cena: <a href="https://www.dohenyandnesbitts.ie/" target="_blank" class="attraction-link">Doheny & Nesbitt</a></li>
                        </ul>
                    </div>

                    <!-- Giorno 5 -->
                    <div class="day-card">
                        <h3 class="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wider">Giorno 5</h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><i class="fas fa-shopping-bag mr-3 text-emerald-600"></i> Passaggio per Merchant's Arch per compere</li>
                            <li><i class="fas fa-bus mr-3 text-emerald-600"></i> Partenza per Aeroporto (Dublin Express)</li>
                            <li><i class="fas fa-plane-departure mr-3 text-emerald-600"></i> Volo Dublino (DUB) -> Bologna (BLQ)</li>
                        </ul>
                    </div>
                </div>

<!-- Sezione Dettaglio Informazioni -->
                <section class="border-t pt-12">
                    <h3 class="text-3xl font-bold mb-10 italic text-slate-800 text-center uppercase tracking-widest border-b-2 border-emerald-500 inline-block">Dettaglio Attrazioni e Pub</h3>
                    
                    <div class="space-y-10 text-slate-700">
                        <!-- Harding Hotel -->
                        <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-600">
                            <h4 class="font-bold text-xl mb-3 text-emerald-800 uppercase italic">Harding Hotel</h4>
                            <p class="mb-2"><strong>Posizione:</strong> Strategica, nel centro storico (Christ Church/Temple Bar), ideale per girare Dublino a piedi.</p>
                            <p class="mb-2"><strong>Camere:</strong> Spaziose, pulite e silenziose (nonostante la zona centrale), dotate di mini-frigo e set tè/caffè.</p>
                            <p class="mb-2"><strong>Atmosfera:</strong> Hotel tradizionale in stile vittoriano, con personale molto accogliente.</p>
                            <p class="mb-2"><strong>Cibo e Drink:</strong> Ospita il famoso pub Darkey Kelly’s (musica dal vivo) e il Copper Alley Bistro (ottime colazioni e cucina fusion).</p>
                            <p><strong>Target:</strong> Perfetto per chi cerca un ottimo rapporto qualità-prezzo e vuole vivere l'atmosfera autentica dei pub irlandesi senza doversi spostare troppo.</p>
                        </div>

                        <!-- The Brazen Head -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">The Brazen Head</h4>
                            <p class="mb-2"><strong>Il più antico:</strong> Fondato nel 1198, è il pub più vecchio d'Irlanda.</p>
                            <p class="mb-2"><strong>Storia e Letteratura:</strong> Frequentato da rivoluzionari e scrittori (come James Joyce).</p>
                            <p class="mb-2"><strong>Musica Live:</strong> Sessioni di musica tradizionale ogni sera e domenica pomeriggio.</p>
                            <p class="mb-2"><strong>Cucina Tipica:</strong> Famoso per lo stufato alla Guinness e il fish and chips.</p>
                            <p><strong>Location:</strong> Caratteristico cortile esterno e interni storici in Bridge Street.</p>
                        </div>

                        <!-- Mulligan's -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">Mulligan’s</h4>
                            <p class="mb-2"><strong>La leggenda della Guinness:</strong> Considerato da molti locali il pub con la migliore pinta di Guinness di tutta Dublino.</p>
                            <p class="mb-2"><strong>Storia vera:</strong> Fondato nel 1782, conserva un aspetto austero e autentico, quasi intatto dal XIX secolo (niente TV o musica alta).</p>
                            <p class="mb-2"><strong>Clientela illustre:</strong> Frequentato in passato da James Joyce (che lo cita nei suoi racconti) e da un giovane John F. Kennedy.</p>
                            <p class="mb-2"><strong>Curiosità:</strong> Ospita un antico orologio a pendolo che, secondo la leggenda, contiene le ceneri di un affezionato cliente americano.</p>
                            <p><strong>Atmosfera:</strong> Un vero "pub dei giornalisti" e degli intellettuali, lontano dal caos commerciale di Temple Bar.</p>
                        </div>

                        <!-- Christ Church Cathedral -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">Christ Church Cathedral</h4>
                            <p class="mb-2"><strong>Le origini:</strong> Fondata nel 1030 dal re vichingo Sitric, è l'edificio più antico di Dublino.</p>
                            <p class="mb-2"><strong>La Cripta:</strong> Una delle più grandi e antiche del Regno Unito e dell'Irlanda (XII secolo). Al suo interno trovi i famosi "Tom & Jerry" (un gatto e un topo mummificati).</p>
                            <p class="mb-2"><strong>Strongbow:</strong> Ospita la tomba di Richard de Clare (detto Strongbow), il condottiero normanno che guidò l'invasione dell'Irlanda.</p>
                            <p class="mb-2"><strong>Reliquie e Storia:</strong> Custodisce il cuore di San Lorenzo O’Toole (patrono di Dublino) e una rara copia della Magna Carta Hiberniae.</p>
                            <p><strong>Architettura:</strong> Un mix affascinante di stile romanico, gotico e restauri vittoriani. È collegata tramite un ponte coperto a Dublinia, il museo dei Vichinghi.</p>
                        </div>

                        <!-- Dublinia -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">Dublinia</h4>
                            <p class="mb-2"><strong>Cos'è:</strong> Un museo interattivo di "storia vivente" dedicato alla Dublino vichinga e medievale.</p>
                            <p class="mb-2"><strong>Esperienza:</strong> Puoi esplorare ricostruzioni di case vichinghe, navi da guerra e strade medievali. Ci sono attori in costume che spiegano la vita dell'epoca.</p>
                            <p class="mb-2"><strong>Highlights:</strong> La salita sulla St. Michael’s Tower (96 scalini) per una vista panoramica della città; Il ponte medievale che collega il museo direttamente alla Christ Church Cathedral.</p>
                            <p class="mb-2"><strong>Orari:</strong> Aperto tutti i giorni.</p>
                            <p class="mb-2"><strong>Prezzi:</strong> Adulti circa €15-18. Disponibile un biglietto combinato scontato con Christ Church.</p>
                            <p><strong>Ideale per:</strong> Famiglie con bambini e appassionati di storia che cercano un'esperienza meno statica rispetto a un museo tradizionale.</p>
                        </div>

                        <!-- Museo Irlandese del Whisky -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">Museo Irlandese del Whisky</h4>
                            <p class="mb-2"><strong>Approccio Unico:</strong> A differenza delle singole distillerie (come Jameson), questo museo è indipendente e racconta la storia di tutti i marchi di whiskey irlandese.</p>
                            <p class="mb-2"><strong>Esperienza:</strong> Tour guidati interattivi che ripercorrono l'ascesa, la caduta e la rinascita del whiskey irlandese dal XII secolo a oggi.</p>
                            <p class="mb-2"><strong>Degustazioni:</strong> Ogni tour si conclude con una sessione di assaggio guidata da esperti (disponibile anche l'opzione "Premium" con whiskey invecchiati).</p>
                            <p class="mb-2"><strong>Posizione:</strong> Centralissima, proprio di fronte all'ingresso principale del Trinity College (Grafton Street).</p>
                            <p class="mb-2"><strong>Highlight:</strong> Al secondo piano c'è un bar con una vista spettacolare sul college, aperto anche a chi non visita il museo.</p>
                            <p class="mb-2"><strong>Indirizzo:</strong> 119 Grafton Street, Dublino.</p>
                            <p><strong>Prezzi:</strong> Adulti a partire da circa €23-25.</p>
                        </div>

                        <!-- FX Buckley -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">FX Buckley Steakhouse Crow Street</h4>
                            <p class="mb-2"><strong>Il Re della Carne:</strong> Celebre per servire quella che molti considerano la migliore bistecca di Dublino. La famiglia Buckley è nel settore della macelleria dal 1930 (citata anche nell'Ulisse di James Joyce).</p>
                            <p class="mb-2"><strong>Specialità:</strong> Bistecche di manzo irlandese frollate a secco (dry-aged) per almeno 28 giorni e cotte su braci di carbone. I tagli includono Rib-eye, Filetto e Chateaubriand.</p>
                            <p><strong>Atmosfera:</strong> Ambiente da steakhouse classica ed elegante, con interni in legno, pelle e un'atmosfera calda e accogliente (stile "vecchio mondo").</p>
                        </div>

                        <!-- Trinity College -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">Trinity College</h4>
                            <p class="mb-2"><strong>L'Università:</strong> Fondata nel 1592 dalla regina Elisabetta I, è la più antica d'Irlanda e una delle più prestigiose al mondo.</p>
                            <p class="mb-2"><strong>Old Library:</strong> Una delle biblioteche più spettacolari del pianeta. La sua Long Room (lunga 65 metri) contiene oltre 200.000 volumi antichi.</p>
                            <p class="mb-2"><strong>Book of Kells:</strong> Il tesoro del college. È un manoscritto miniato del IX secolo, capolavoro dell'arte calligrafica medievale.</p>
                            <p class="mb-2"><strong>Campus e Architettura:</strong> Famoso per i suoi cortili acciottolati e gli edifici georgiani. Da non perdere il Campanile e College Park.</p>
                            <p class="mb-2"><strong>Alunni Illustri:</strong> Oscar Wilde, Samuel Beckett, Bram Stoker e Jonathan Swift.</p>
                            <p><strong>Ingresso:</strong> Il campus è visitabile gratuitamente, ma l'ingresso alla Old Library e al Book of Kells richiede la prenotazione anticipata.</p>
                        </div>

                        <!-- The Stag's Head -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">The Stag's Head</h4>
                            <p class="mb-2"><strong>Capolavoro Vittoriano:</strong> Inaugurato nel 1895, è uno dei pub meglio conservati d'Irlanda, con mogano intagliato e mosaici.</p>
                            <p class="mb-2"><strong>Atmosfera Autentica:</strong> Celebre per la testa di cervo sopra il bar e l'assenza di musica alta.</p>
                            <p class="mb-2"><strong>Posizione:</strong> Nascosto in Dame Court, a pochi passi dal Trinity College.</p>
                            <p class="mb-2"><strong>Cibo e Drink:</strong> Famoso per il suo fish and chips e le ostriche con la Guinness.</p>
                            <p><strong>Curiosità:</strong> È stato utilizzato come set per diversi film e pubblicità.</p>
                        </div>

                        <!-- Guinness Store House -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">Guinness Store House</h4>
                            <p class="mb-2"><strong>L'Esperienza:</strong> Museo interattivo di 7 piani che racconta la storia e la produzione della birra più famosa d'Irlanda.</p>
                            <p class="mb-2"><strong>Gravity Bar:</strong> Il punto più alto, dove gustare una pinta con vista panoramica a 360° su tutta Dublino.</p>
                            <p class="mb-2"><strong>Highlight:</strong> Impara a spillare la "pinta perfetta" o vedi il contratto d'affitto di 9.000 anni firmato da Arthur Guinness.</p>
                            <p class="mb-2"><strong>Architettura:</strong> Costruito attorno a un enorme atrio di vetro a forma di pinta gigante.</p>
                            <p><strong>Info Pratiche:</strong> Fondamentale prenotare online in anticipo. Prezzo circa €20-30.</p>
                        </div>

                        <!-- The Bull & Castle -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">The Bull & Castle</h4>
                            <p class="mb-2"><strong>L'identità:</strong> Parte della prestigiosa famiglia F.X. Buckley, combinazione tra steakhouse e gastropub.</p>
                            <p class="mb-2"><strong>La Carne:</strong> Bistecche di manzo irlandese frollate a secco e cotte alla brace.</p>
                            <p class="mb-2"><strong>Posizione:</strong> Esattamente di fronte alla Christ Church Cathedral.</p>
                            <p class="mb-2"><strong>Atmosfera:</strong> Elegante ma informale, con tocco da "Beer Hall" moderna.</p>
                            <p><strong>Selezione Drink:</strong> Ampia scelta di birre artigianali e lista di vini curata.</p>
                        </div>

                        <!-- The Summit Inn -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">The Summit Inn (Howth)</h4>
                            <p class="mb-2"><strong>Posizione Panoramica:</strong> Situato nel punto più alto di Howth, offre viste spettacolari sulla costa.</p>
                            <p class="mb-2"><strong>Atmosfera:</strong> Pub storico del XIX secolo con caminetto alimentato a torba (turf fire).</p>
                            <p class="mb-2"><strong>Cucina:</strong> Famoso per i piatti a base di pesce fresco locale e frutti di mare.</p>
                            <p class="mb-2"><strong>Punto di Sosta:</strong> Tappa ideale per chi percorre il sentiero costiero Howth Cliff Walk.</p>
                            <p><strong>Curiosità:</strong> Conserva il fascino del "vecchio mondo" lontano dal caos del porto.</p>
                        </div>

                        <!-- Doheny & Nesbitt -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-xl mb-3 text-emerald-700 uppercase italic">Doheny & Nesbitt</h4>
                            <p class="mb-2"><strong>Punto di riferimento storico:</strong> Fondato nel 1867, pub vittoriano iconico con arredi originali in mogano.</p>
                            <p class="mb-2"><strong>"The Doheny & Nesbitt School of Economics":</strong> Frequentato storicamente da politici, giornalisti ed economisti.</p>
                            <p class="mb-2"><strong>Snugs Tradizionali:</strong> Conserva i caratteristici "snugs" per una conversazione tranquilla.</p>
                            <p class="mb-2"><strong>Cucina e Drink:</strong> Piatti classici della tradizione irlandese e Guinness di alta qualità.</p>
                            <p><strong>Posizione:</strong> Situato in Baggot Street Lower, vicino a St. Stephen's Green.</p>
                        </div>
                    </div>
                </section>

                <!-- Budget Box -->
                <section class="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-sm">
                    <h3 class="text-xl font-bold mb-6 italic border-b pb-4 text-xs tracking-widest uppercase text-emerald-700">Costi Ingressi Stimati</h3>
                    <div class="space-y-2">
                        <div class="flex justify-between"><span>Christ Church Cathedral</span><span class="font-bold">12 €</span></div>
                        <div class="flex justify-between"><span>Dublinia Museo</span><span class="font-bold">15 €</span></div>
                        <div class="flex justify-between"><span>Castello di Dublino</span><span class="font-bold">12 €</span></div>
                        <div class="flex justify-between"><span>Trinity College</span><span class="font-bold">25 €</span></div>
                        <div class="flex justify-between"><span>Guinness Storehouse</span><span class="font-bold">30 €</span></div>
                        <div class="flex justify-between border-t pt-4 font-bold text-emerald-700 text-lg"><span>TOTALE INGRESSI</span><span>94 €</span></div>
                    </div>
                </section>
            </div>
                <div class="p-10 bg-slate-50 border-t flex justify-center">
                    <!-- FIXED: added modalId argument -->
                    <button onclick="toggleModal('itinerarioModal')" class="bg-slate-900 text-white px-14 py-4 rounded-full font-bold shadow-2xl hover:bg-emerald-600 transition uppercase tracking-widest text-xs italic">Chiudi</button>
                </div>
            </div>
        </div>
    </div>
`;
