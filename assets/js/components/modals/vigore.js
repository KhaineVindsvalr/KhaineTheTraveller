
window.vigoreModalHTML = `
<!-- Modal Window Wrapper (Logic) -->
<div id="vigoreModal" aria-hidden="true" style="display: none; position: fixed; inset: 0; z-index: 200; background: rgba(15, 23, 42, 0.95); overflow-y: auto;">
    
    <!-- Close Button (High Visibility) -->
    <!-- Close Button Removed (Moved Inside) -->

    <!-- Modal Content Container -->
    <div class="min-h-screen px-2 md:px-4 py-12 flex items-center justify-center">
        
        <!-- Inner Card (Simulating User Body) -->
        <div class="w-full max-w-6xl bg-white text-[#1a1a1a] leading-relaxed rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative mb-12">
            
            <!-- Close Button (Moved Inside) -->
            <button onclick="toggleModal('vigoreModal')" 
                    class="absolute top-4 right-4 z-[200] text-gray-400 hover:text-[#e4002b] transition flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm"
                    aria-label="Chiudi Modal">
                <span class="text-2xl font-light leading-none">&times;</span>
            </button>
            
            <!-- Fonts & Styles -->
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
            <style>
                #vigoreModal .leica-red { color: #e4002b; }
                #vigoreModal .bg-leica-red { background-color: #e4002b; }
                #vigoreModal h1, #vigoreModal h2, #vigoreModal h3, #vigoreModal .serif { font-family: 'Playfair Display', serif; }
                #vigoreModal body, #vigoreModal .font-inter { font-family: 'Inter', sans-serif; }
                
                #vigoreModal .phase-card {
                    border-left: 1px solid #eee;
                    padding-left: 1.5rem;
                    position: relative;
                }
                #vigoreModal .phase-card::before {
                    content: '';
                    position: absolute;
                    left: -1px;
                    top: 0;
                    height: 20px;
                    width: 1px;
                    background-color: #e4002b;
                }
            </style>

            <!-- Navbar Khaine | The Traveller (Replicated inside modal) -->
            <nav class="flex justify-between items-center pl-4 pr-16 md:pl-8 md:pr-24 py-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-40">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-leica-red rounded-full flex items-center justify-center">
                        <span class="text-white font-bold text-xs italic">K</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="font-bold tracking-tighter text-lg leading-none">KHAINE</span>
                        <span class="text-[10px] tracking-[0.3em] uppercase text-gray-400">The Traveller</span>
                    </div>
                </div>
                
                <div class="hidden md:flex space-x-6 items-center">
                    <div class="flex flex-col items-end">
                        <span class="text-[10px] uppercase tracking-widest text-leica-red font-bold">Lifestyle</span>
                        <span class="text-xs uppercase tracking-widest font-medium text-gray-800">Reset della Libido</span>
                    </div>
                    <div class="h-8 w-[1px] bg-gray-200 mx-2"></div>
                    <div class="text-[10px] font-bold tracking-widest uppercase text-gray-400 italic">
                        Focus: Essenziale
                    </div>
                </div>
            </nav>

            <main class="max-w-3xl mx-auto px-6 py-12">
                
                <!-- Intestazione -->
                <header class="mb-16 border-b pb-12">
                    <h1 class="text-4xl md:text-5xl mb-4">La Via del Reset</h1>
                    <p class="text-lg leading-relaxed text-gray-600 serif italic">
                        Un viaggio di 90 giorni per ricalibrare il sistema di ricompensa e ritrovare la nitidezza del reale.
                    </p>
                </header>

                <!-- Definizione e Metodo -->
                <section class="mb-16">
                    <h2 class="text-3xl mb-6 leica-red">Il Principio</h2>
                    <p class="mb-6 text-gray-700 leading-relaxed">
                        Il reset è la sospensione volontaria di stimoli sessuali artificiali e compulsivi. L'obiettivo è la guarigione dei recettori della dopamina, sovraccaricati da un consumo digitale che distorce la percezione del piacere.
                    </p>
                    
                    <h3 class="text-2xl mb-4">Le Regole d'Ingaggio</h3>
                    <div class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="p-6 bg-red-50 rounded-sm border-l-4 border-leica-red">
                            <h4 class="font-bold text-leica-red uppercase text-xs mb-3">Cosa NON fare</h4>
                            <ul class="text-sm space-y-2 text-gray-700">
                                <li>• No materiale pornografico (di ogni tipo)</li>
                                <li>• No autoerotismo compulsivo</li>
                                <li>• No "Edging" (ricerca del limite)</li>
                                <li>• No ricerca di stimoli artificiali sui social</li>
                            </ul>
                        </div>
                        <div class="p-6 bg-gray-50 rounded-sm border-l-4 border-gray-800">
                            <h4 class="font-bold text-gray-800 uppercase text-xs mb-3">Cosa PUOI fare</h4>
                            <ul class="text-sm space-y-2 text-gray-700">
                                <li>• Rapporti reali con partner reali</li>
                                <li>• Attività fisica intensa</li>
                                <li>• Meditazione e presenza mentale</li>
                                <li>• Creatività e progetti (Blog, Fotografia)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Le Fasi dei 90 Giorni -->
                <section class="mb-16">
                    <h2 class="text-3xl mb-10">La Cronologia del Cambiamento</h2>
                    
                    <div class="space-y-12">
                        <!-- Fase 1 -->
                        <div class="phase-card">
                            <h3 class="font-bold text-xl mb-2">Fase 1: La Tempesta (Giorni 1-15)</h3>
                            <p class="text-sm text-gray-500 mb-4 uppercase tracking-widest">Stato: Resistenza</p>
                            <p class="text-gray-700 mb-4">
                                È il periodo più duro. Il cervello reclama la sua "dose" abituale. Si sperimenta irritabilità, insonnia e pensieri ossessivi. La tentazione è costante.
                            </p>
                            <p class="italic text-sm border-l-2 border-gray-200 pl-4 text-gray-500">
                                Come ci si sente: Come una roccia sotto la pioggia battente. Senti il peso, ma resti fermo.
                            </p>
                        </div>

                        <!-- Fase 2 -->
                        <div class="phase-card">
                            <h3 class="font-bold text-xl mb-2">Fase 2: Il Deserto / Flatline (Giorni 16-45)</h3>
                            <p class="text-sm text-gray-500 mb-4 uppercase tracking-widest">Stato: Guarigione Silenziosa</p>
                            <p class="text-gray-700 mb-4">
                                La libido sembra scomparsa. Ti senti "spento", quasi depresso. È il segnale che il cervello sta resettando i recettori. Molti mollano qui pensando di essere "rotti".
                            </p>
                            <p class="italic text-sm border-l-2 border-gray-200 pl-4 text-gray-500">
                                Come ci si sente: Come un paesaggio avvolto dalla nebbia. Non vedi la meta, ma sai che la strada è sotto i tuoi piedi.
                            </p>
                        </div>

                        <!-- Fase 3 -->
                        <div class="phase-card">
                            <h3 class="font-bold text-xl mb-2">Fase 3: La Risalita (Giorni 46-75)</h3>
                            <p class="text-sm text-gray-500 mb-4 uppercase tracking-widest">Stato: Risveglio</p>
                            <p class="text-gray-700 mb-4">
                                L'energia maschile torna a fluire. Migliora la qualità del sonno, la fiducia in se stessi aumenta e si inizia a provare attrazione autentica per la realtà, non per i pixel.
                            </p>
                            <p class="italic text-sm border-l-2 border-gray-200 pl-4 text-gray-500">
                                Come ci si sente: Come i primi raggi di sole dopo l'inverno artico. La vista si fa nitida.
                            </p>
                        </div>

                        <!-- Fase 4 -->
                        <div class="phase-card">
                            <h3 class="font-bold text-xl mb-2">Fase 4: Il Nuovo Standard (Giorni 76-90)</h3>
                            <p class="text-sm text-gray-500 mb-4 uppercase tracking-widest">Stato: Consolidamento</p>
                            <p class="text-gray-700 mb-4">
                                Il "rewiring" è completato. La nebbia cerebrale è sparita. Hai ripreso il controllo totale della tua bussola interna. Sei pronto per i grandi viaggi, fuori e dentro di te.
                            </p>
                            <p class="italic text-sm border-l-2 border-gray-200 pl-4 text-gray-500">
                                Come ci si sente: Indistruttibile. Possiedi lo sguardo di chi vede la realtà attraverso una lente perfetta.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Insidie -->
                <section class="mb-16 bg-black text-white p-10 rounded-sm shadow-xl">
                    <h2 class="text-3xl mb-6 leica-red">Le Insidie da Evitare</h2>
                    <ul class="space-y-6">
                        <li>
                            <h4 class="font-bold uppercase text-xs tracking-widest mb-2 leica-red">L'Effetto Chaser</h4>
                            <p class="text-sm text-gray-400">Un aumento dell'urgenza dopo una caduta. Non dare spazio al pensiero "ormai ho sbagliato, tanto vale continuare".</p>
                        </li>
                        <li>
                            <h4 class="font-bold uppercase text-xs tracking-widest mb-2 leica-red">La Sostituzione</h4>
                            <p class="text-sm text-gray-400">Non riempire il vuoto con social media, alcol o cibo compulsivo. Accetta il vuoto, è lì che avviene la magia.</p>
                        </li>
                    </ul>
                </section>

                <!-- Protocollo Fisico -->
                <section class="mb-16">
                    <h2 class="text-3xl mb-6 leica-red">Attivazione Ormonale (Sostenibile)</h2>
                    <p class="mb-6 text-gray-700 leading-relaxed">
                        Per chi sostiene ritmi lavorativi intensi (10h+), l'obiettivo non è l'esaurimento ma la <strong>costanza</strong>. Stimoli brevi e precisi per segnalare vigore senza innalzare il cortisolo o bruciare le energie residue.
                    </p>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Mattino -->
                        <div class="border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 class="font-bold text-xl mb-2 serif">Il Risveglio (Minima Dose)</h3>
                            <p class="text-[10px] uppercase tracking-widest text-leica-red font-bold mb-4">Slot: Mattina (Digiuno)</p>
                            <p class="text-sm text-gray-600 mb-4">Attivazione rapida (5 minuti). Sveglia il metabolismo e la circolazione senza affaticare.</p>
                            <ul class="text-sm space-y-3 text-gray-700">
                                <li class="flex items-start">
                                    <span class="text-leica-red mr-2">▪</span>
                                    <span><strong>40 Squat a corpo libero:</strong> 2 serie da 20. Ritmo fluido, per attivare le gambe.</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-leica-red mr-2">▪</span>
                                    <span><strong>Piegamenti Classici:</strong> 2 serie da 10-12. Non arrivare al limite, fermati quando rallenti.</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-leica-red mr-2">▪</span>
                                    <span><strong>Doccia Fredda (1 min):</strong> Rapida ed essenziale per il picco di dopamina.</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Sera -->
                        <div class="border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 class="font-bold text-xl mb-2 serif">Decompressione Attiva</h3>
                            <p class="text-[10px] uppercase tracking-widest text-gray-800 font-bold mb-4">Slot: Pre-Cena</p>
                            <p class="text-sm text-gray-600 mb-4">Reset della postura dopo il lavoro. Scarico della colonna e leggera attivazione muscolare.</p>
                            <ul class="text-sm space-y-3 text-gray-700">
                                <li class="flex items-start">
                                    <span class="text-gray-800 mr-2">▪</span>
                                    <span><strong>Ponte Glutei (Glute Bridge):</strong> 3 serie da 15. Fondamentale se lavori seduto, salva la schiena.</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-gray-800 mr-2">▪</span>
                                    <span><strong>Plank (Tenuta):</strong> 3 serie da 30 secondi. Breve ma intenso per il core.</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-gray-800 mr-2">▪</span>
                                    <span><strong>Posizione del Cobra (Yoga):</strong> 2 minuti totali. Apre il petto e riduce lo stress della giornata.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Integrazione Kegel -->
                    <div class="mt-8 border border-gray-100 p-6 bg-gray-50/50">
                        <h3 class="font-bold text-xl mb-2 serif">Il Fondamento Invisibile (Kegel)</h3>
                        <p class="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4">Slot: Anytime (Scrivania/Auto)</p>
                        <p class="text-sm text-gray-600 mb-4">
                            Il controllo dell'energia sessuale passa dalla muscolatura pelvica. Questi esercizi prevengono la dispersione involontaria e aumentano la qualità dell'erezione. Totale invisibilità, massima resa.
                        </p>
                        <div class="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                            <div>
                                <span class="font-bold block mb-1 text-leica-red">1. Identifica</span>
                                Isola il muscolo pubococcigeo (PC). È lo stesso che usi per interrompere il flusso di urina. Non contrarre glutei o addome.
                            </div>
                            <div>
                                <span class="font-bold block mb-1 text-leica-red">2. Esegui</span>
                                Contrai con decisione espirando. Mantieni la tensione per <strong>5 secondi</strong>. Senti il pavimento pelvico sollevarsi.
                            </div>
                            <div>
                                <span class="font-bold block mb-1 text-leica-red">3. Rilascia</span>
                                Rilassa completamente inspirando per <strong>5 secondi</strong>. Il rilascio è importante quanto la contrazione.
                            </div>
                        </div>
                        <p class="mt-4 text-xs font-medium text-gray-500 border-t border-gray-200 pt-3">
                            Obiettivo: 3 serie da 10 ripetizioni sparse nella giornata lavorativa. Nessuno noterà nulla.
                        </p>
                    </div>

                    <p class="mt-6 text-xs text-gray-500 italic">
                        Nota: La consistenza batte l'intensità. Meglio 10 minuti fatti bene ogni giorno che un'ora distruttiva una volta al mese.
                    </p>
                </section>

                <!-- Risultati Finali -->
                <section class="mb-16">
                    <h2 class="text-3xl mb-8">I Risultati Finali</h2>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="border-t pt-4">
                            <h4 class="font-bold mb-2">Chiarezza Mentale</h4>
                            <p class="text-sm text-gray-600">Scomparsa della nebbia. Capacità di focus superiore.</p>
                        </div>
                        <div class="border-t pt-4">
                            <h4 class="font-bold mb-2">Sensibilità</h4>
                            <p class="text-sm text-gray-600">Le gioie reali tornano a dare piacere autentico.</p>
                        </div>
                        <div class="border-t pt-4">
                            <h4 class="font-bold mb-2">Energia</h4>
                            <p class="text-sm text-gray-600">Motivazione naturale e fiducia (Indistruttibilità).</p>
                        </div>
                        <div class="border-t pt-4">
                            <h4 class="font-bold mb-2">Libido Reale</h4>
                            <p class="text-sm text-gray-600">Desiderio sano orientato verso connessioni umane.</p>
                        </div>
                    </div>
                </section>

                <!-- Conclusione -->
                <footer class="pt-10 border-t border-gray-100">
                    <div class="text-center mb-12">
                        <p class="serif italic text-xl text-gray-400">"Pulisci la lente, osserva la realtà per quella che è."</p>
                    </div>
                    
                    <!-- Disclaimer Medico -->
                    <div class="bg-gray-50 p-8 text-[11px] leading-relaxed text-gray-500 text-justify">
                        <p class="font-bold uppercase tracking-widest mb-2 text-gray-400">Disclaimer Medico</p>
                        Le informazioni contenute in questa pagina hanno uno scopo puramente informativo ed esperienziale. <strong>Non sono un medico</strong>, uno psicologo o un professionista sanitario. Questo contenuto riflette un percorso personale e non deve in alcun modo essere considerato come consiglio medico, diagnosi o trattamento. Il "reset della libido" è un concetto basato su esperienze condivise in comunità online e non costituisce un protocollo clinico validato. Prima di intraprendere qualsiasi cambiamento radicale nel proprio stile di vita, dieta o abitudini, o se si sospettano patologie fisiche o psicologiche, è fondamentale consultare un medico specialista o un professionista qualificato. Khaine | The Traveller declina ogni responsabilità per eventuali danni o conseguenze derivanti dall'applicazione delle informazioni qui riportate.
                    </div>

                    <div class="mt-8 text-center" style="padding-bottom: 2rem;">
                        <span class="text-[10px] uppercase tracking-widest text-gray-300">Khaine | Lifestyle Section</span>
                    </div>

                    <!-- Fixed Bottom Close Button -->
                    <div class="pb-12 text-center mt-12">
                         <button onclick="toggleModal('vigoreModal')" class="bg-red-600 hover:bg-red-700 text-white border border-red-800 px-12 py-4 rounded-xl font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl">
                            Chiudi Pagina
                        </button>
                    </div>

                </footer>

            </main>
        </div>
    </div>
</div>
`;

console.log("Vigore Modal Loaded Successfully.");
