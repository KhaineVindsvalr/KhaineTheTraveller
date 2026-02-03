
window.babymoonModalHTML = `
<!-- Modal Window Wrapper (Logic) -->
<div id="babymoonModal" aria-hidden="true" style="display: none; position: fixed; inset: 0; z-index: 200; background: rgba(15, 23, 42, 0.95); overflow-y: auto;">
    
    <!-- Close Button (High Visibility - Adapted for Dark Backdrop) -->
    <!-- Close Button Removed (Moved Inside) -->

    <!-- Modal Content Container -->
    <div class="min-h-screen px-0 md:px-4 py-0 md:py-12 flex items-center justify-center">
        
        <!-- Inner Card (Simulating User Body - Light Theme Preserved) -->
        <div class="w-full max-w-6xl bg-gray-50 text-gray-800 leading-relaxed md:rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative mb-0 md:mb-12">
            
            <!-- Close Button (Moved Inside) -->
            <button onclick="toggleModal('babymoonModal')" 
                    class="absolute top-3 right-3 z-[200] text-gray-500 hover:text-teal-600 transition flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-gray-200"
                    aria-label="Chiudi Modal">
                <span class="text-2xl font-light leading-none">&times;</span>
            </button>
            
            <!-- Injected Styles & Fonts -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@700&display=swap');
                
                #babymoonModal {
                    font-family: 'Inter', sans-serif;
                    scroll-behavior: smooth;
                }
                #babymoonModal h1, #babymoonModal h2, #babymoonModal h3, #babymoonModal .logo-font {
                    font-family: 'Playfair Display', serif;
                }
                #babymoonModal .hero-gradient {
                    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1502663071666-a02ff307a922?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
                    background-size: cover;
                    background-position: center;
                }
                #babymoonModal .custom-shadow {
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
                }
                
                /* Scoped Tailwind Colors if needed */
                #babymoonModal .text-teal-600 { color: #0d9488; }
                #babymoonModal .text-teal-500 { color: #14b8a6; }
                #babymoonModal .bg-teal-50 { background-color: #f0fdfa; }
                #babymoonModal .bg-teal-600 { background-color: #0d9488; }
            </style>

            <!-- Header / Nav -->
            <nav class="bg-white shadow-sm sticky top-0 z-50">
                <div class="max-w-6xl mx-auto pl-6 pr-14 py-5 flex justify-center items-center">
                    <div class="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight logo-font text-center">
                        Khaine <span class="text-teal-600">|</span> The Traveller
                    </div>
                </div>
            </nav>

            <!-- Hero Section -->
            <header class="hero-gradient h-[55vh] flex items-center justify-center text-center text-white px-6">
                <div class="max-w-3xl">
                    <h1 class="text-4xl md:text-6xl mb-4">In Viaggio con il Pancione</h1>
                    <p class="text-lg md:text-xl font-light opacity-90">
                        Esplorare il mondo non si ferma quando aspetti un bambino.<br>
                        Scopri come vivere una Babymoon perfetta in totale sicurezza.
                    </p>
                </div>
            </header>

            <!-- Disclaimer Medico (Top) -->
            <div class="max-w-5xl mx-auto px-4 mt-8">
                <div class="bg-amber-50 border-l-4 border-amber-400 p-4 text-amber-800 text-sm italic rounded-r-lg">
                    <p><i class="fas fa-user-md mr-2"></i> <strong>Disclaimer Medico:</strong> Le informazioni contenute in questa pagina hanno scopo puramente informativo. Consulta sempre il tuo ginecologo o il medico curante prima di pianificare qualsiasi viaggio durante la gravidanza.</p>
                </div>
            </div>

            <main class="max-w-5xl mx-auto px-4 py-12">
                
                <!-- Intro Section -->
                <section class="mb-16 text-center">
                    <div class="inline-block p-3 bg-teal-50 rounded-full mb-4">
                        <i class="fas fa-heart text-teal-600 text-2xl"></i>
                    </div>
                    <h2 class="text-3xl mb-6 text-gray-900">Benvenute Viaggiatrici</h2>
                    <p class="text-gray-500 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
                        Viaggiare in dolce attesa è un'opportunità meravigliosa per rilassarsi prima del grande evento.<br>
                        Abbiamo raccolto consigli pratici, mete sicure e piccoli accorgimenti per rendere la vostra esperienza <span class="font-bold text-teal-600">indimenticabile</span>.
                    </p>
                </section>

                <!-- Grid Content: Quando partire e Checklist -->
                <div class="grid md:grid-cols-2 gap-8 mb-16">
                    <!-- Timing -->
                    <div class="bg-white p-8 rounded-2xl custom-shadow border border-gray-100">
                        <h3 class="text-xl font-bold mb-6 flex items-center">
                            <i class="fas fa-calendar-alt text-teal-500 mr-3"></i> Quando Partire?
                        </h3>
                        <div class="space-y-6">
                            <div class="border-l-4 border-gray-200 pl-4 py-1">
                                <h4 class="font-semibold text-gray-500 uppercase text-xs tracking-wider">Primo Trimestre</h4>
                                <p class="text-sm">Possibili nausee e stanchezza: scegli mete con ritmi molto blandi.</p>
                            </div>
                            <div class="border-l-4 border-teal-500 pl-4 py-1 bg-teal-50 rounded-r-lg">
                                <h4 class="font-semibold text-teal-700 uppercase text-xs tracking-wider">Secondo Trimestre (Ideale)</h4>
                                <p class="text-sm">Tra la 14ª e la 28ª settimana: le energie sono al top e il pancione non è ancora d'intralcio.</p>
                            </div>
                            <div class="border-l-4 border-gray-200 pl-4 py-1">
                                <h4 class="font-semibold text-gray-500 uppercase text-xs tracking-wider">Terzo Trimestre</h4>
                                <p class="text-sm">Focus sul relax assoluto e vicinanza a strutture ospedaliere.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Checklist -->
                    <div class="bg-gray-800 text-white p-8 rounded-2xl shadow-lg relative">
                        <h3 class="text-xl font-bold mb-6 flex items-center text-teal-400">
                            <i class="fas fa-clipboard-check mr-3"></i> Checklist Indispensabile
                        </h3>
                        <ul class="space-y-4 mb-6">
                            <li class="flex items-start">
                                <i class="far fa-check-circle mt-1 mr-3 text-teal-400"></i>
                                <span><strong>Certificato Medico:</strong> Richiesto da quasi tutte le compagnie dopo la 28ª settimana.</span>
                            </li>
                            <li class="flex items-start">
                                <i class="far fa-check-circle mt-1 mr-3 text-teal-400"></i>
                                <span><strong>Assicurazione:</strong> Verifica che copra specificamente complicazioni legate alla gravidanza e il neonato.</span>
                            </li>
                            <li class="flex items-start">
                                <i class="far fa-check-circle mt-1 mr-3 text-teal-400"></i>
                                <span><strong>Documentazione:</strong> Copia cartacea e digitale della cartella clinica aggiornata.</span>
                            </li>
                        </ul>
                        
                        <div class="bg-red-900/30 border border-red-500/50 p-4 rounded-xl">
                            <h4 class="text-red-400 font-bold text-sm mb-2 uppercase tracking-wide">
                                <i class="fas fa-exclamation-triangle mr-2"></i> Limiti Compagnie Aeree
                            </h4>
                            <p class="text-xs leading-relaxed text-gray-300">
                                Attenzione: la maggior parte delle compagnie (come Ryanair, EasyJet o ITA) <strong>non consente il volo dopo la 36ª settimana</strong> (32ª per gravidanze gemellari). Controlla sempre il regolamento specifico della compagnia prima di prenotare.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- SEZIONE VALIGIA -->
                <section class="mb-16">
                    <h3 class="text-2xl font-bold mb-8 text-center text-gray-800">Cosa portare in Valigia?</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="bg-white p-6 rounded-xl border border-gray-100 custom-shadow text-center hover:border-teal-200 transition-colors">
                            <div class="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-socks text-xl text-teal-600"></i>
                            </div>
                            <h4 class="font-bold text-sm text-gray-800">Calze elastiche</h4>
                            <p class="text-xs text-gray-500 mt-2">Fondamentali per evitare gonfiori e rischi circolatori in aereo.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-gray-100 custom-shadow text-center hover:border-teal-200 transition-colors">
                            <div class="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-file-medical text-xl text-teal-600"></i>
                            </div>
                            <h4 class="font-bold text-sm text-gray-800">Libretto Sanitario</h4>
                            <p class="text-xs text-gray-500 mt-2">Tutti gli esami clinici e i contatti del tuo ginecologo.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-gray-100 custom-shadow text-center hover:border-teal-200 transition-colors">
                            <div class="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-capsules text-xl text-teal-600"></i>
                            </div>
                            <h4 class="font-bold text-sm text-gray-800">Integrazione</h4>
                            <p class="text-xs text-gray-500 mt-2">Magnesio, acido folico e vitamine essenziali.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-gray-100 custom-shadow text-center hover:border-teal-200 transition-colors">
                            <div class="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-couch text-xl text-teal-600"></i>
                            </div>
                            <h4 class="font-bold text-sm text-gray-800">Cuscino Supporto</h4>
                            <p class="text-xs text-gray-500 mt-2">Per riposare meglio la schiena durante il viaggio.</p>
                        </div>
                    </div>
                </section>

                <!-- SEZIONE WELLNESS & SPA (Aggiunta) -->
                <section id="spa" class="mb-16">
                    <div class="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 custom-shadow flex flex-col md:flex-row gap-10 items-center">
                        <div class="md:w-1/2 space-y-6">
                            <h3 class="text-2xl font-bold text-gray-900">Wellness & SPA in Gravidanza</h3>
                            <div class="bg-green-50 p-5 rounded-2xl border border-green-100">
                                <h4 class="font-bold text-green-800 flex items-center mb-2">
                                    <i class="fas fa-check-circle mr-2"></i> Trattamenti Sicuri
                                </h4>
                                <p class="text-sm text-green-700 leading-relaxed">
                                    Massaggi prenatali specifici, trattamenti viso e pediluvi. Aiutano a drenare i liquidi e alleviare le tensioni muscolari.
                                </p>
                            </div>
                            <div class="bg-red-50 p-5 rounded-2xl border border-red-100">
                                <h4 class="font-bold text-red-800 flex items-center mb-2">
                                    <i class="fas fa-times-circle mr-2"></i> Da Evitare
                                </h4>
                                <p class="text-sm text-red-700 leading-relaxed">
                                    Saune, bagni turchi e idromassaggi con acqua troppo calda (sopra i 38°C) perché possono causare cali di pressione.
                                </p>
                            </div>
                        </div>
                        <div class="md:w-1/2">
                            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" alt="Relax SPA" class="rounded-2xl shadow-lg w-full h-64 object-cover">
                        </div>
                    </div>
                </section>

                <!-- Sezione Integratori Enrico (Personalizzata) -->
                <section class="bg-teal-50 p-8 rounded-3xl mb-16 border border-teal-100">
                    <div class="flex flex-col md:flex-row gap-8 items-center">
                        <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-teal-200">
                            <i class="fas fa-leaf text-teal-600 text-2xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Pillola di Benessere Khaine</h3>
                            <p class="text-sm text-gray-600 leading-relaxed italic">
                                "Non dimenticare la tua routine: <strong>Magnesio e Vitamina B</strong> al mattino per l'energia, e <strong>Magnesio con estratto di Passiflora</strong> la sera (circa 40 minuti prima di coricarti) per un riposo profondo anche nei letti d'albergo. Inoltre il magnesio ti aiuta a prevenire i crampi alle gambe."
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Destinazioni -->
                <section class="mb-16">
                    <h3 class="text-2xl font-bold mb-8 text-center text-gray-800">Destinazioni Babymoon Consigliate</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="bg-white rounded-xl overflow-hidden custom-shadow hover:shadow-md transition-shadow border border-gray-100">
                            <div class="h-44 bg-gray-200 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" alt="Parigi" class="w-full h-full object-cover">
                            </div>
                            <div class="p-4">
                                <h4 class="font-bold text-gray-800 text-sm">Parigi, Francia</h4>
                                <p class="text-xs text-gray-500">Massimo comfort e cultura.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl overflow-hidden custom-shadow hover:shadow-md transition-shadow border border-gray-100">
                            <div class="h-44 bg-gray-200 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1768127339130-fa86ff4a7b1a?auto=format&fit=crop&w=600&q=80" alt="Valpolicella" class="w-full h-full object-cover">
                            </div>
                            <div class="p-4">
                                <h4 class="font-bold text-gray-800 text-sm">Valpolicella, Italia</h4>
                                <p class="text-xs text-gray-500">Natura, relax e agriturismi.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl overflow-hidden custom-shadow hover:shadow-md transition-shadow border border-gray-100">
                            <div class="h-44 bg-gray-200 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1768127184261-ecc52aa89bf6?auto=format&fit=crop&w=600&q=80" alt="Gran Canaria" class="w-full h-full object-cover">
                            </div>
                            <div class="p-4">
                                <h4 class="font-bold text-gray-800 text-sm">Gran Canaria</h4>
                                <p class="text-xs text-gray-500">Vicinanza e clima perfetto.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl overflow-hidden custom-shadow hover:shadow-md transition-shadow border border-gray-100">
                            <div class="h-44 bg-gray-200 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80" alt="Giappone" class="w-full h-full object-cover">
                            </div>
                            <div class="p-4">
                                <h4 class="font-bold text-gray-800 text-sm">Kyoto, Giappone</h4>
                                <p class="text-xs text-gray-500">Igiene e servizi impeccabili.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- DOVE NON ANDARE -->
                <section class="mb-16">
                    <div class="bg-gray-100 p-8 rounded-3xl border border-gray-200">
                        <h3 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                            <i class="fas fa-map-marked-alt text-red-500 mr-4"></i> Dove NON andare?
                        </h3>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="space-y-4 text-sm text-gray-600">
                                <p>Alcune destinazioni dovrebbero essere evitate per sicurezza:</p>
                                <ul class="space-y-2">
                                    <li class="flex items-start"><i class="fas fa-ban mt-1 mr-2 text-red-400"></i> Zone con Virus Zika o Malaria endemica.</li>
                                    <li class="flex items-start"><i class="fas fa-ban mt-1 mr-2 text-red-400"></i> Località ad alta quota (>2500m) se non abituate.</li>
                                    <li class="flex items-start"><i class="fas fa-ban mt-1 mr-2 text-red-400"></i> Paesi con infrastrutture sanitarie carenti.</li>
                                </ul>
                            </div>
                            <div class="bg-white p-6 rounded-xl border border-gray-200">
                                <h4 class="font-bold text-gray-800 mb-3 text-sm">Consiglio Pratico</h4>
                                <p class="text-xs text-gray-500 leading-relaxed">Verifica sempre il portale <strong>Viaggiare Sicuri</strong> del Ministero degli Esteri per aggiornamenti in tempo reale.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- CONSIGLI ALIMENTARI & SICUREZZA -->
                <section class="grid md:grid-cols-3 gap-8 mb-16">
                    <div class="md:col-span-2 bg-teal-600 text-white p-8 rounded-3xl shadow-lg">
                        <h3 class="text-2xl font-bold mb-6 text-white">A tavola senza pensieri</h3>
                        <div class="grid sm:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-bold mb-2 flex items-center text-teal-100"><i class="fas fa-times-circle mr-2"></i> Da Evitare</h4>
                                <ul class="text-sm space-y-2 opacity-90">
                                    <li>• Cibi crudi (carne, pesce, uova)</li>
                                    <li>• Formaggi non pastorizzati</li>
                                    <li>• Verdura cruda se non lavata da te</li>
                                    <li>• Acqua non imbottigliata (se all'estero)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold mb-2 flex items-center text-teal-100"><i class="fas fa-check-circle mr-2"></i> Da Preferire</h4>
                                <ul class="text-sm space-y-2 opacity-90">
                                    <li>• Piatti cotti e serviti caldi</li>
                                    <li>• Frutta da sbucciare</li>
                                    <li>• Gelato confezionato</li>
                                    <li>• Pasti leggeri e frequenti</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 custom-shadow">
                        <h3 class="text-xl font-bold mb-4">Emergenze</h3>
                        <p class="text-sm text-gray-500 mb-6">Prima di partire, salva sul telefono:</p>
                        <div class="space-y-4">
                            <div class="flex items-center p-3 bg-red-50 rounded-lg">
                                <i class="fas fa-phone-alt text-red-500 mr-3"></i>
                                <span class="text-sm font-semibold">112 (Europa) / 911 (USA)</span>
                            </div>
                            <p class="text-xs text-gray-400 italic leading-snug">Localizza l'ospedale con reparto maternità più vicino al tuo alloggio.</p>
                        </div>
                    </div>
                </section>

                <!-- FAQ -->
                <section class="mb-16">
                    <h3 class="text-2xl font-bold mb-8 text-center text-gray-800">Dubbi frequenti</h3>
                    <div class="max-w-3xl mx-auto space-y-4">
                        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 class="font-bold text-gray-800 mb-2">I metal detector sono pericolosi?</h4>
                            <p class="text-sm text-gray-500">No, utilizzano campi magnetici a bassa frequenza considerati sicuri per il feto.</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 class="font-bold text-gray-800 mb-2">Devo indossare la cintura?</h4>
                            <p class="text-sm text-gray-500">Sì, posizionala bassa, sotto il pancione, all'altezza del bacino.</p>
                        </div>
                    </div>
                </section>

                <!-- Final Quote -->
                <div class="text-center py-12 border-t border-gray-200 italic text-gray-400 text-lg">
                    <p>"Viaggiare è prendersi cura dell'anima."</p>
                </div>

            </main>

            <!-- Footer -->
            <footer class="bg-white border-t border-gray-100 py-12 px-6">
                <div class="max-w-6xl mx-auto text-center">
                    <div class="text-xl font-bold mb-6 logo-font">Khaine <span class="text-teal-600">|</span> The Traveller</div>
                    <div class="max-w-2xl mx-auto">
                        <p class="text-gray-400 text-xs italic mb-4 leading-relaxed">
                            Disclaimer medico: I contenuti di questo blog hanno solo valore informativo. Prima di intraprendere qualsiasi spostamento, consulta il tuo medico specialista.
                        </p>
                        <p class="text-[10px] text-gray-300 uppercase tracking-widest">© 2026 Khaine | The Traveller. Tutti i diritti riservati.</p>
                    </div>

                     <!-- Fixed Bottom Close Button (Light Theme Adapted) -->
                    <div class="text-center mt-12 pb-12">
                         <button onclick="toggleModal('babymoonModal')" class="bg-teal-600 hover:bg-teal-700 text-white border border-teal-800 px-12 py-4 rounded-xl font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl">
                            Chiudi
                        </button>
                    </div>
                </div>
            </footer>

        </div>
    </div>
</div>
`;

console.log("Babymoon Modal (Styled) Loaded Successfully.");
