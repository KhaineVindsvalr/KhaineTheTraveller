
window.venereModalHTML = `
<!-- Modal Window Wrapper (Logic) -->
<div id="venereModal" aria-hidden="true" style="display: none; position: fixed; inset: 0; z-index: 200; background: rgba(15, 23, 42, 0.95); overflow-y: auto;">
    
    <!-- Close Button (High Visibility) -->
    <button onclick="toggleModal('venereModal')" 
            class="fixed top-4 right-4 md:top-6 md:right-6 text-white hover:text-rose-500 transition z-[210] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm rounded-full w-12 h-12 border border-white/10 shadow-lg"
            aria-label="Chiudi Modal">
        <span class="text-3xl font-light leading-none" style="margin-top: -4px;">&times;</span>
    </button>

    <!-- Modal Content Container -->
    <div class="min-h-screen px-0 md:px-4 py-0 md:py-12 flex items-center justify-center">
        
        <!-- Inner Card (Simulating User Body) -->
        <div class="w-full max-w-7xl bg-slate-900 text-slate-200 leading-relaxed md:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative mb-0 md:mb-12">
            
            <!-- Injected Styles -->
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Playfair+Display:ital,wght@0,600;1,600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
            <style>
                #venereModal { font-family: 'Inter', sans-serif; }
                #venereModal .font-serif { font-family: 'Playfair Display', serif; }
                #venereModal .font-mono { font-family: 'JetBrains Mono', monospace; }
                
                #venereModal .glass-panel { background: rgba(30, 41, 59, 0.4); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.05); }
                #venereModal .gradient-text { background: linear-gradient(to right, #fb7185, #fda4af); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                #venereModal .tech-border { border-left: 3px solid #f43f5e; }
                
                /* Custom Colors map for consistency if Tailwind config is delayed */
                #venereModal .text-rose-400 { color: #fb7185; }
                #venereModal .text-rose-500 { color: #f43f5e; }
                #venereModal .bg-rose-500 { background-color: #f43f5e; }
                #venereModal .bg-rose-600 { background-color: #e11d48; }
                #venereModal .border-rose-400 { border-color: #fb7185; }
                #venereModal .border-rose-500 { border-color: #f43f5e; }
                
                #venereModal .text-gold-500 { color: #f59e0b; }
                #venereModal .border-gold-500 { border-color: #f59e0b; }
            </style>

            <!-- Navigation (Relative for Modal) -->
            <nav class="w-full z-40 border-b border-white/5 bg-slate-900/90 backdrop-blur-md sticky top-0">
                <div class="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-rose-600 rounded-sm flex items-center justify-center font-serif font-bold text-white italic">K</div>
                        <div class="leading-none">
                            <p class="font-bold tracking-tight text-white text-sm">KHAINE</p>
                            <p class="text-[9px] uppercase tracking-[0.2em] text-slate-400">Biohack Female Div.</p>
                        </div>
                    </div>
                    <div class="hidden md:flex gap-8 text-[10px] font-medium tracking-widest uppercase text-slate-400">
                        <a href="#venere-infradiano" class="hover:text-rose-400 transition-colors">Ciclo Infradiano</a>
                        <a href="#venere-integrazione" class="hover:text-rose-400 transition-colors">Stack Tecnico</a>
                        <a href="#venere-reset" class="hover:text-rose-400 transition-colors">Reset 90 Giorni</a>
                    </div>
                </div>
            </nav>

            <!-- Hero Section -->
            <header class="relative pt-20 pb-20 px-6 overflow-hidden">
                <div class="absolute top-0 right-0 w-2/3 h-full bg-rose-900/10 blur-[120px] pointer-events-none"></div>
                <div class="max-w-4xl mx-auto text-center relative z-10">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-[10px] font-mono mb-6 uppercase tracking-wider">
                        <span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                        Protocollo Sincronizzato
                    </div>
                    <h1 class="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        La Sincronizzazione <br/> <span class="gradient-text">Del Ritmo Infradiano</span>
                    </h1>
                    <p class="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                        Mentre l'uomo vive un ciclo solare di 24 ore, la biologia femminile opera su un "secondo orologio" di 28 giorni. 
                        Ricalibrare la libido e l'energia richiede di smettere di trattare il corpo femminile come una versione ridotta di quello maschile.
                    </p>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/10 pt-8">
                        <div><p class="text-2xl font-mono text-white">28gg</p><p class="text-[10px] text-slate-500 uppercase tracking-widest">Durata Media</p></div>
                        <div><p class="text-2xl font-mono text-white">4</p><p class="text-[10px] text-slate-500 uppercase tracking-widest">Fasi Biologiche</p></div>
                        <div><p class="text-2xl font-mono text-white">Estro</p><p class="text-[10px] text-slate-500 uppercase tracking-widest">Asse Metabolico</p></div>
                        <div><p class="text-2xl font-mono text-white">90gg</p><p class="text-[10px] text-slate-500 uppercase tracking-widest">Durata Reset</p></div>
                    </div>
                </div>
            </header>

            <main class="max-w-6xl mx-auto px-6 py-12 space-y-24">

                <!-- SEZIONE 1: ANALISI TECNICA DELLE 4 FASI -->
                <section id="venere-infradiano">
                    <div class="flex items-center gap-4 mb-8">
                        <span class="text-rose-500 font-mono text-xl">01.</span>
                        <h2 class="text-2xl font-bold text-white">Le 4 Fasi del Potere Biologico</h2>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Fase Follicolare -->
                        <div class="glass-panel p-6 rounded-xl tech-border relative overflow-hidden group hover:bg-slate-800/50 transition-all">
                            <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span class="text-6xl font-serif font-bold">I</span>
                            </div>
                            <h3 class="text-xl font-serif text-white mb-1">Fase Follicolare</h3>
                            <p class="text-xs text-rose-400 font-mono mb-4">Giorni 7-14 • "La Primavera"</p>
                            <p class="text-sm text-slate-400 mb-4 leading-relaxed">
                                Gli estrogeni risalgono. La sensibilità all'insulina è massima. Il cervello è strutturalmente più propenso alla pianificazione e al problem solving complesso.
                            </p>
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs border-b border-white/5 pb-1">
                                    <span class="text-slate-500">Focus Allenamento</span>
                                    <span class="text-white">Cardio & Novità</span>
                                </div>
                                <div class="flex justify-between text-xs border-b border-white/5 pb-1">
                                    <span class="text-slate-500">Metabolismo</span>
                                    <span class="text-white">Brucia grassi lento</span>
                                </div>
                            </div>
                        </div>

                        <!-- Fase Ovulatoria -->
                        <div class="glass-panel p-6 rounded-xl border-l-3 border-rose-400 relative overflow-hidden group hover:bg-slate-800/50 transition-all">
                            <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span class="text-6xl font-serif font-bold">II</span>
                            </div>
                            <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-rose-400"></div>
                            <h3 class="text-xl font-serif text-white mb-1">Fase Ovulatoria</h3>
                            <p class="text-xs text-rose-400 font-mono mb-4">Giorni 15-17 • "L'Estate"</p>
                            <p class="text-sm text-slate-400 mb-4 leading-relaxed">
                                Picco di estrogeni e testosterone. Massima energia, massima libido naturale, magnetismo sociale. È il momento di chiedere, osare e spingere.
                            </p>
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs border-b border-white/5 pb-1">
                                    <span class="text-slate-500">Focus Allenamento</span>
                                    <span class="text-white">HIIT & Forza Massimale</span>
                                </div>
                                <div class="flex justify-between text-xs border-b border-white/5 pb-1">
                                    <span class="text-slate-500">Integrazione Key</span>
                                    <span class="text-white">Supporto Epatico (Estrogeni)</span>
                                </div>
                            </div>
                        </div>

                        <!-- Fase Luteale -->
                        <div class="glass-panel p-6 rounded-xl border-l-3 border-purple-500 relative overflow-hidden group hover:bg-slate-800/50 transition-all">
                            <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span class="text-6xl font-serif font-bold">III</span>
                            </div>
                            <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-purple-500"></div>
                            <h3 class="text-xl font-serif text-white mb-1">Fase Luteale</h3>
                            <p class="text-xs text-purple-400 font-mono mb-4">Giorni 18-28 • "L'Autunno"</p>
                            <p class="text-sm text-slate-400 mb-4 leading-relaxed">
                                Il progesterone domina. Il metabolismo basale aumenta (più fame), ma la sensibilità insulinica cala. Il corpo chiede riposo e nutrienti densi.
                            </p>
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs border-b border-white/5 pb-1">
                                    <span class="text-slate-500">Focus Allenamento</span>
                                    <span class="text-white">Pesi moderati / Pilates</span>
                                </div>
                                <div class="flex justify-between text-xs border-b border-white/5 pb-1">
                                    <span class="text-slate-500">Critical Biohack</span>
                                    <span class="text-white">Magnesio (Anti-PMS)</span>
                                </div>
                            </div>
                        </div>

                        <!-- Fase Mestruale -->
                        <div class="glass-panel p-6 rounded-xl border-l-3 border-slate-500 relative overflow-hidden group hover:bg-slate-800/50 transition-all">
                            <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span class="text-6xl font-serif font-bold">IV</span>
                            </div>
                            <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-500"></div>
                            <h3 class="text-xl font-serif text-white mb-1">Fase Mestruale</h3>
                            <p class="text-xs text-slate-400 font-mono mb-4">Giorni 1-6 • "L'Inverno"</p>
                            <p class="text-sm text-slate-400 mb-4 leading-relaxed">
                                I livelli ormonali sono al minimo. I due emisferi cerebrali comunicano al massimo livello: intuizione e analisi si fondono. Riposo assoluto richiesto.
                            </p>
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs border-b border-white/5 pb-1">
                                    <span class="text-slate-500">Focus Allenamento</span>
                                    <span class="text-white">Camminata / Yoga / Rest</span>
                                </div>
                                <div class="flex justify-between text-xs border-b border-white/5 pb-1">
                                    <span class="text-slate-500">Nutrizione</span>
                                    <span class="text-white">Ferro & Grassi Sani</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- SEZIONE 2: ESTROBOLOMA & GUT HEALTH -->
                <section class="grid md:grid-cols-12 gap-8 items-center">
                    <div class="md:col-span-4">
                        <h2 class="text-3xl font-serif text-white mb-4">L'Estroboloma: <br/>La Radice della Libido</h2>
                        <p class="text-sm text-slate-400 leading-relaxed mb-6">
                            La libido femminile non è solo "nella testa". È nell'intestino. L'Estroboloma è un insieme di batteri intestinali deputati a metabolizzare gli estrogeni usati.
                        </p>
                        <div class="bg-rose-900/20 border border-rose-500/20 p-4 rounded-lg">
                            <p class="text-xs text-rose-200">
                                <strong class="block mb-1 text-rose-400">⚠️ Cortocircuito Ormonale</strong>
                                Se l'intestino non funziona (disbiosi), gli estrogeni "di scarto" vengono riassorbiti invece di essere espulsi. Risultato: Dominanza Estrogenica = Calo libido, gonfiore, mood swing.
                            </p>
                        </div>
                    </div>
                    <div class="md:col-span-8 grid grid-cols-2 gap-4">
                        <!-- Card Protocollo Intestinale -->
                        <div class="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                            <h4 class="text-white font-bold mb-2 text-sm">Protocollo "Cleanse" (File Micro)</h4>
                            <p class="text-xs text-slate-400 mb-4">La base per far funzionare gli integratori ormonali.</p>
                            <ul class="text-xs space-y-2 text-slate-300 font-mono">
                                <li class="flex justify-between"><span>1. Enterelle Plus</span> <span class="text-rose-400">Pulizia (10gg)</span></li>
                                <li class="flex justify-between"><span>2. Bifiselle</span> <span class="text-rose-400">Intestino (10gg)</span></li>
                                <li class="flex justify-between"><span>3. Ramnoselle</span> <span class="text-rose-400">Metabolismo (10gg)</span></li>
                            </ul>
                        </div>
                        <div class="bg-slate-800/50 p-5 rounded-lg border border-slate-700 flex flex-col justify-center">
                            <h4 class="text-white font-bold mb-2 text-sm">L'Equazione</h4>
                            <div class="text-center">
                                <span class="block text-2xl text-slate-500 font-serif">Intestino Sano</span>
                                <span class="block text-rose-500 text-lg">↓</span>
                                <span class="block text-2xl text-white font-serif">Estrogeni Bilanciati</span>
                                <span class="block text-rose-500 text-lg">↓</span>
                                <span class="block text-2xl text-rose-400 font-serif">Libido Attiva</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- SEZIONE 3: INTEGRAZIONE TECNICA (User Stack) -->
                <section id="venere-integrazione" class="relative">
                    <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-rose-900/5 to-slate-900 -z-10"></div>
                    <div class="flex items-center gap-4 mb-10">
                        <span class="text-rose-500 font-mono text-xl">02.</span>
                        <h2 class="text-2xl font-bold text-white">Stack Tecnico Giornaliero</h2>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12">
                        
                        <!-- MORNING STACK -->
                        <div class="relative pl-8 border-l border-slate-700">
                            <div class="absolute -left-3 top-0 w-6 h-6 bg-slate-900 border border-yellow-500 rounded-full flex items-center justify-center">
                                <span class="text-yellow-500 text-[10px]">☀</span>
                            </div>
                            <h3 class="text-xl font-bold text-white mb-2">Morning Routine</h3>
                            <p class="text-xs text-slate-400 mb-6 font-mono">Obiettivo: Attivazione Mitocondriale & Sintesi Neurotrasmettitori</p>
                            
                            <ul class="space-y-6">
                                <li class="group">
                                    <div class="flex justify-between items-center mb-1">
                                        <strong class="text-yellow-100">Vitamina B Complex</strong>
                                        <span class="text-[10px] bg-yellow-900/30 text-yellow-500 px-2 py-0.5 rounded">Energia</span>
                                    </div>
                                    <p class="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        Le Vitamine B (specie B6) sono cofattori essenziali per trasformare il triptofano in serotonina. Senza B6, niente buonumore, niente desiderio.
                                    </p>
                                </li>
                                <li class="group">
                                    <div class="flex justify-between items-center mb-1">
                                        <strong class="text-rose-200">Olio di Krill</strong>
                                        <span class="text-[10px] bg-rose-900/30 text-rose-400 px-2 py-0.5 rounded">Struttura</span>
                                    </div>
                                    <p class="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        Fornisce fosfolipidi per le membrane cellulari. Gli ormoni sessuali sono derivati dai lipidi; senza grassi di qualità, il corpo non può "costruire" libido.
                                    </p>
                                </li>
                                <li class="group">
                                    <div class="flex justify-between items-center mb-1">
                                        <strong class="text-white">Magnesio Bisglicinato</strong>
                                        <span class="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded">Cofattore</span>
                                    </div>
                                    <p class="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        Al mattino regola la glicemia (insulina stabile = ormoni stabili).
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <!-- EVENING STACK -->
                        <div class="relative pl-8 border-l border-slate-700">
                            <div class="absolute -left-3 top-0 w-6 h-6 bg-slate-900 border border-indigo-500 rounded-full flex items-center justify-center">
                                <span class="text-indigo-500 text-[10px]">☾</span>
                            </div>
                            <h3 class="text-xl font-bold text-white mb-2">Evening Routine</h3>
                            <p class="text-xs text-slate-400 mb-6 font-mono">Obiettivo: Cortisol Dump & Progesterone Support (Pre-Bed 40 min)</p>
                            
                            <ul class="space-y-6">
                                <li class="group">
                                    <div class="flex justify-between items-center mb-1">
                                        <strong class="text-purple-200">Estratto di Passiflora</strong>
                                        <span class="text-[10px] bg-purple-900/30 text-purple-400 px-2 py-0.5 rounded">GABA Agonist</span>
                                    </div>
                                    <p class="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        Cruciale per la donna. Aumenta il GABA che calma l'eccesso di attività cerebrale ("mental load"). <span class="text-rose-400">Fondamentale nella fase Luteale</span> quando il progesterone cala e l'ansia sale.
                                    </p>
                                </li>
                                <li class="group">
                                    <div class="flex justify-between items-center mb-1">
                                        <strong class="text-white">Magnesio Bisglicinato</strong>
                                        <span class="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded">Rilassamento</span>
                                    </div>
                                    <p class="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        Abbassa il cortisolo notturno. Il cortisolo è il "ladro" del progesterone. Se il cortisolo è alto, la libido si azzera biologicamente.
                                    </p>
                                </li>
                                <li class="group">
                                    <div class="flex justify-between items-center mb-1">
                                        <strong class="text-rose-200">Olio di Krill</strong>
                                        <span class="text-[10px] bg-rose-900/30 text-rose-400 px-2 py-0.5 rounded">Anti-infiammatorio</span>
                                    </div>
                                    <p class="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        Riduce l'infiammazione sistemica durante la riparazione notturna.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- SEZIONE 4: IL RESET DEI 90 GIORNI -->
                <section id="venere-reset" class="bg-slate-800/30 p-8 rounded-2xl border border-white/5">
                    <div class="flex items-center gap-4 mb-8">
                        <span class="text-rose-500 font-mono text-xl">03.</span>
                        <h2 class="text-2xl font-bold text-white">Cronologia del Reset (90 Giorni)</h2>
                    </div>
                    
                    <p class="text-sm text-slate-400 mb-8 max-w-2xl">
                        Un reset della libido femminile dura circa 3 cicli mestruali completi. Non è una linea retta come per l'uomo, ma una spirale ascendente.
                    </p>

                    <div class="grid md:grid-cols-3 gap-6">
                        <!-- Fase 1 -->
                        <div class="p-6 border-t-2 border-slate-600 bg-slate-900/50">
                            <h4 class="text-white font-bold mb-2">Ciclo 1: Detox (Day 1-30)</h4>
                            <p class="text-xs text-slate-500 mb-3 font-mono">STATUS: Resistenza</p>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Il corpo reclama la dopamina facile (social, zuccheri). L'umore sarà instabile. È il momento in cui l'integrazione di <strong>Magnesio</strong> e <strong>Passiflora</strong> è vitale per non cedere allo stress.
                            </p>
                        </div>

                        <!-- Fase 2 -->
                        <div class="p-6 border-t-2 border-rose-500 bg-slate-900/50">
                            <h4 class="text-white font-bold mb-2">Ciclo 2: Sync (Day 31-60)</h4>
                            <p class="text-xs text-rose-400 mb-3 font-mono">STATUS: Ricalibrazione</p>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                La "nebbia" si dirada. Inizi a sentire la differenza energetica tra la fase Ovulatoria e quella Luteale. La libido torna a rispondere a stimoli reali e non artificiali.
                            </p>
                        </div>

                        <!-- Fase 3 -->
                        <div class="p-6 border-t-2 border-gold-500 bg-slate-900/50">
                            <h4 class="text-white font-bold mb-2">Ciclo 3: Flow (Day 61-90)</h4>
                            <p class="text-xs text-gold-500 mb-3 font-mono">STATUS: Dominio</p>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Il sistema dopaminergico è guarito. L'energia è stabile. Hai imparato a "surfare" le onde ormonali invece di affogarci. Il tuo corpo è diventato un alleato.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- FOOTER -->
                <footer class="pt-12 border-t border-slate-800 text-center pb-12">
                    <p class="font-serif italic text-xl text-slate-500 mb-8">"La natura non va forzata, va compresa e ottimizzata."</p>
                    
                    <div class="bg-slate-950 p-6 rounded-lg text-[10px] text-slate-600 text-justify max-w-3xl mx-auto leading-relaxed border border-slate-800 mb-8">
                        <strong class="block text-slate-500 mb-2 uppercase tracking-widest">Disclaimer Medico - Khaine Protocol</strong>
                        Le informazioni qui riportate sono il risultato di biohacking applicato e ricerca indipendente. Enrico e il progetto Khaine non sono medici. 
                        L'integrazione citata (Passiflora, Krill, Magnesio, Vitamina B) può interferire con farmaci o condizioni preesistenti (gravidanza, allattamento, patologie tiroidee). 
                        Consultare sempre un ginecologo o endocrinologo prima di iniziare questo protocollo.
                    </div>

                    <p class="text-[10px] uppercase tracking-widest text-slate-500 mb-8">Khaine | The Traveller - Female Biohack Division &copy; 2026</p>

                    <!-- Fixed Bottom Close Button -->
                    <div class="text-center">
                         <button onclick="toggleModal('venereModal')" class="bg-rose-600 hover:bg-rose-700 text-white border border-rose-800 px-12 py-4 rounded-xl font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl">
                            Chiudi Pagina
                        </button>
                    </div>
                </footer>

            </main>
        </div>
    </div>
</div>
`;

console.log("Venere Modal Loaded Successfully.");
