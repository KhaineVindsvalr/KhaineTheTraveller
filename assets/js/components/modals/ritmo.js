
window.ritmoModalHTML = `
<!-- Modal Window Wrapper (Logic) -->
<div id="ritmoModal" aria-hidden="true" style="display: none; position: fixed; inset: 0; z-index: 200; background: rgba(15, 23, 42, 0.95); overflow-y: auto;">
    
    <!-- Close Button -->
    <!-- Close Button (High Visibility) -->
    <!-- Close Button Removed (Moved Inside) -->

    <!-- Modal Content Container -->
    <div class="min-h-screen px-4 py-12 flex items-center justify-center">
        
        <!-- Inner Card (Simulates the Body of the provided page) -->
        <div class="w-full max-w-6xl bg-slate-900 text-slate-200 leading-relaxed rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative">
            
             <!-- Close Button (Moved Inside) -->
            <button onclick="toggleModal('ritmoModal')" 
                    class="absolute top-4 right-4 z-[200] text-slate-400 hover:text-sky-400 transition flex items-center justify-center w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10"
                    aria-label="Chiudi Modal">
                <span class="text-2xl font-light leading-none">&times;</span>
            </button>
            
            <!-- Scoped CSS from User's Head -->
            <style>
                #ritmoModal { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
                #ritmoModal .gradient-bg { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); }
                #ritmoModal .card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
                #ritmoModal .accent-border { border-left: 4px solid #38bdf8; }
            </style>

            <!-- USER PROVIDED HEADER -->
            <header class="gradient-bg py-20 pl-6 pr-16 text-center border-b border-slate-800">
                <div class="max-w-4xl mx-auto">
                    <p class="text-sky-400 font-semibold tracking-widest uppercase text-sm mb-4">Khaine | The Traveller Lifestyle</p>
                    <h1 class="text-2xl md:text-3xl font-bold text-white mb-6">Ottimizzazione del Ritmo Circadiano e Routine Bio-Hacking</h1>
                    <p class="text-lg text-slate-400 max-w-2xl mx-auto">Protocollo tecnico per il ripristino dell'omeostasi del sonno, gestione della luce e integrazione mirata.</p>
                </div>
            </header>

            <!-- USER PROVIDED MAIN -->
            <main class="max-w-6xl mx-auto px-6 py-12">
                
                <!-- Introduzione Tecnica -->
                <section class="grid md:grid-cols-3 gap-8 mb-20">
                    <div class="card p-8 rounded-2xl">
                        <h3 class="text-xl font-bold text-sky-400 mb-4">Il Ritmo Circadiano</h3>
                        <p class="text-sm text-slate-400">Sistema endogeno di regolazione biologica su base 24h. Governa la temperatura corporea, la sintesi proteica e la secrezione ormonale (Cortisolo/Melatonina).</p>
                    </div>
                    <div class="card p-8 rounded-2xl border-red-500/20">
                        <h3 class="text-xl font-bold text-red-400 mb-4">Disfunzioni Comuni</h3>
                        <p class="text-sm text-slate-400">Esposizione alla luce blu notturna, alimentazione irregolare e jet-lag sociale inibiscono la ghiandola pineale, causando deficit cognitivi e metabolici.</p>
                    </div>
                    <div class="card p-8 rounded-2xl border-green-500/20">
                        <h3 class="text-xl font-bold text-green-400 mb-4">Strategie di Reset</h3>
                        <p class="text-sm text-slate-400">Esposizione solare mattutina (Light Education), timing dei macronutrienti e termoregolazione attraverso il sonno profondo.</p>
                    </div>
                </section>

                <!-- Sezione Dimagrimento Circadiano -->
                <section class="mb-20">
                    <div class="bg-emerald-950/20 border border-emerald-500/30 p-8 rounded-2xl">
                        <h2 class="text-2xl font-bold text-emerald-400 mb-4 flex items-center">
                            <span class="mr-3 text-3xl">🔥</span> Bio-Hacking e Dimagrimento: La Connessione Circadiana
                        </h2>
                        <p class="text-sm text-slate-300 mb-6 italic">Il dimagrimento non è solo una questione di calorie (CICO), ma di "timing" ormonale. Questo protocollo agisce come un catalizzatore metabolico attraverso tre meccanismi principali:</p>
                        <div class="grid md:grid-cols-3 gap-6">
                            <div class="space-y-2">
                                <h4 class="text-white font-semibold">Resensibilizzazione Insulinica</h4>
                                <p class="text-xs text-slate-400 leading-relaxed">Sincronizzare i pasti con la luce solare e l'uso del <strong>Maitake</strong> riduce l'insulina basale. Meno insulina significa un accesso facilitato alle riserve di grasso (lipolisi).</p>
                            </div>
                            <div class="space-y-2">
                                <h4 class="text-white font-semibold">Ottimizzazione del GH</h4>
                                <p class="text-xs text-slate-400 leading-relaxed">Il sonno profondo (NREM Fase 3) è il picco massimo di secrezione dell'ormone della crescita (GH), il più potente ormone brucia-grassi e riparatore del corpo.</p>
                            </div>
                            <div class="space-y-2">
                                <h4 class="text-white font-semibold">Controllo del Cortisolo</h4>
                                <p class="text-xs text-slate-400 leading-relaxed">L'esposizione solare mattutina e il magnesio serale regolano il cortisolo. Livelli alti cronici di cortisolo causano accumulo di grasso viscerale (addominale).</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Pilastri del Protocollo -->
                <div class="space-y-16">
                    <!-- Il Sonno -->
                    <section id="sonno" class="accent-border pl-6">
                        <h2 class="text-3xl font-bold text-white mb-6">1. Analisi Tecnica del Sonno</h2>
                        <div class="bg-slate-800/50 p-6 rounded-xl text-slate-300">
                            <p class="mb-8 text-sm italic">Un sonno ottimale di 8 ore è composto da circa 5 cicli da 90 minuti. La distribuzione delle fasi cambia drasticamente dalla prima alla seconda metà della notte.</p>
                            
                            <!-- Grafico Visivo Fasi -->
                            <div class="mb-10">
                                <h4 class="text-sky-400 font-bold uppercase text-xs tracking-widest mb-4 text-center text-pretty">Architettura di un Sonno Ideale (8 Ore)</h4>
                                <div class="w-full h-8 flex rounded-full overflow-hidden border border-slate-700">
                                    <div class="h-full bg-blue-400 flex items-center justify-center text-[10px] font-bold text-slate-900" style="width: 55%" title="NREM 1 & 2">LEGGERO (55%)</div>
                                    <div class="h-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white" style="width: 20%" title="NREM 3">PROFONDO (20%)</div>
                                    <div class="h-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white" style="width: 25%" title="REM">REM (25%)</div>
                                </div>
                                <div class="flex justify-between mt-2 px-2">
                                    <span class="text-[10px] text-slate-500">Inizio Notte (Prevalenza Profondo)</span>
                                    <span class="text-[10px] text-slate-500">Fine Notte (Prevalenza REM)</span>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="space-y-4">
                                    <h4 class="text-sky-400 font-bold uppercase text-xs tracking-widest">Dettaglio Fasi Biologiche</h4>
                                    <ul class="space-y-4">
                                        <li class="text-sm">
                                            <strong class="text-white block">NREM Fase 1-2 (Leggero) ~ 260 min:</strong> 
                                            Fase di transizione e stabilizzazione. Fondamentale per il recupero fisico motorio e la pulizia sinaptica iniziale.
                                        </li>
                                        <li class="text-sm">
                                            <strong class="text-white block">NREM Fase 3 (Profondo) ~ 90-110 min:</strong> 
                                            Concentrato nei primi 2 cicli (ore 22:00 - 01:00). È il momento in cui avviene il rilascio di GH (Ormone della crescita) e la disintossicazione glinfatica.
                                        </li>
                                        <li class="text-sm">
                                            <strong class="text-white block">REM (Sogno) ~ 110-120 min:</strong> 
                                            Aumenta di durata man mano che ci si avvicina al mattino. Cruciale per la regolazione emotiva, la creatività e il consolidamento della memoria a lungo termine.
                                        </li>
                                    </ul>
                                </div>
                                <div class="space-y-4">
                                    <h4 class="text-sky-400 font-bold uppercase text-xs tracking-widest">Cronobiologia degli 8 Cicli</h4>
                                    <div class="card p-4 rounded-lg">
                                        <table class="w-full text-[11px] text-slate-400">
                                            <tr class="border-b border-slate-700">
                                                <th class="py-2 text-left">Fascia Oraria</th>
                                                <th class="py-2 text-right">Dominanza</th>
                                            </tr>
                                            <tr>
                                                <td class="py-2 italic">22:00 - 01:00</td>
                                                <td class="py-2 text-right text-indigo-400 font-bold">Massimo Sonno Profondo</td>
                                            </tr>
                                            <tr>
                                                <td class="py-2 italic">01:00 - 04:00</td>
                                                <td class="py-2 text-right">Equilibrio REM/Profondo</td>
                                            </tr>
                                            <tr>
                                                <td class="py-2 italic">04:00 - 06:00</td>
                                                <td class="py-2 text-right text-purple-400 font-bold">Massima Fase REM</td>
                                            </tr>
                                        </table>
                                        <p class="mt-4 text-[10px] leading-tight">Saltare le prime ore di sonno sacrifica il recupero fisico; svegliarsi troppo presto sacrifica quello cognitivo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Educazione alla Luce -->
                    <section id="luce" class="accent-border pl-6">
                        <h2 class="text-3xl font-bold text-white mb-6">2. Fotobiologia ed Educazione alla Luce</h2>
                        <div class="bg-slate-800/50 p-6 rounded-xl text-slate-300">
                            <p class="mb-4 text-slate-200 font-semibold text-lg italic">"La luce è il principale zeitgeber (sincronizzatore) del corpo umano."</p>
                            <p class="mb-4 text-sm">L'esposizione alla luce naturale al mattino sincronizza il nucleo soprachiasmatico (SCN). È fondamentale:</p>
                            <ul class="list-disc list-inside space-y-2 text-slate-300">
                                <li>Esposizione diretta (senza filtri) entro 30 minuti dal risveglio per stimolare il picco di cortisolo naturale.</li>
                                <li><strong>Spegnimento totale di ogni sorgente di luce blu (schermi, LED freddi) almeno 60 minuti prima di coricarsi.</strong></li>
                                <li>Blocco della luce blu residua (450-480nm) tramite occhiali specifici se l'esposizione è inevitabile.</li>
                                <li>Utilizzo di luci ambrate o rosse negli ambienti domestici serali per non inibire la melatonina.</li>
                            </ul>
                        </div>
                    </section>

                    <!-- Idratazione -->
                    <section id="idratazione" class="accent-border pl-6">
                        <h2 class="text-3xl font-bold text-white mb-6">3. Protocollo di Idratazione Ottimale</h2>
                        <div class="bg-sky-950/20 p-6 rounded-xl border border-sky-500/20 text-slate-300">
                            <p class="mb-4">L'idratazione non è solo "bere acqua", ma mantenere il potenziale elettrico cellulare e la fluidità del sangue per il trasporto di nutrienti e melatonina. Una cellula disidratata è una cellula stressata.</p>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="card p-4 rounded-lg text-sm">
                                    <strong class="text-sky-400 block mb-1">Quando Bere:</strong>
                                    Inizia con 500ml d'acqua tiepida al risveglio per contrastare la disidratazione notturna. Bevi costantemente lontano dai pasti principali per non diluire i succhi gastrici e ottimizzare la digestione.
                                </div>
                                <div class="card p-4 rounded-lg text-sm">
                                    <strong class="text-sky-400 block mb-1">Quanto Bere:</strong>
                                    Circa 35-40ml per kg di peso corporeo. Un'idratazione insufficiente aumenta i livelli di cortisolo serale, disturbando il sonno.
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Routine Giornaliera Alimentare -->
                    <section id="routine" class="accent-border pl-6">
                        <h2 class="text-3xl font-bold text-white mb-6">4. Protocollo Nutrizionale e Routine</h2>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left card rounded-xl">
                                <thead class="bg-slate-800 text-sky-400">
                                    <tr>
                                        <th class="p-4 uppercase text-xs tracking-wider">Fase</th>
                                        <th class="p-4 uppercase text-xs tracking-wider">Componenti Dietetici</th>
                                        <th class="p-4 uppercase text-xs tracking-wider">Note Tecniche</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-800">
                                    <tr>
                                        <td class="p-4 font-semibold text-white">Colazione</td>
                                        <td class="p-4 text-sm">Latte di avena + Mix Funghi (Chaga, Lion's Mane, Cordyceps, Reishi, Tremella, Maitake, Erba d'orzo), Cannella, Pane di segale, Marmellata di mirtilli.</td>
                                        <td class="p-4 text-xs text-slate-500">Focus nootropico, adattogeno e protezione cellulare per energia e chiarezza. Aggiunta cannella per stabilità glicemica.</td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 font-semibold text-white">Pranzo</td>
                                        <td class="p-4 text-sm">Pasto leggero e bilanciato (Proteine magre e grassi sani).</td>
                                        <td class="p-4 text-xs text-slate-500">Minimizzare l'insulinemia per prevenire la sonnolenza post-prandiale.</td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 font-semibold text-white">Merende</td>
                                        <td class="p-4 text-sm">Mattina: Kefir. Pomeriggio: Cracker segale + Crackers proteici.</td>
                                        <td class="p-4 text-xs text-slate-500">Supporto al microbiota e mantenimento del senso di sazietà.</td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 font-semibold text-white">Cena</td>
                                        <td class="p-4 text-sm">Carboidrati complessi (Max 80g) + Verdure fibrose.</td>
                                        <td class="p-4 text-xs text-slate-500">Facilita l'ingresso del triptofano nel cervello per la sintesi di serotonina.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- Integrazione -->
                    <section id="integrazione" class="accent-border pl-6">
                        <h2 class="text-3xl font-bold text-white mb-6">5. Scheda Tecnica Integrazione</h2>
                        <div class="grid md:grid-cols-2 gap-6">
                            <!-- Mattina -->
                            <div class="bg-sky-900/20 p-6 rounded-xl border border-sky-500/30">
                                <h4 class="text-sky-400 font-bold mb-4 flex items-center">
                                    <span class="mr-2">☀️</span> Slot Mattina
                                </h4>
                                <ul class="space-y-4">
                                    <li>
                                        <span class="block font-bold">Magnesio Bisglicinato</span>
                                        <span class="text-xs text-slate-400 italic text-pretty">Ottimizzazione metabolica e supporto al sistema nervoso centrale.</span>
                                    </li>
                                    <li>
                                        <span class="block font-bold">Olio di Krill Antartico</span>
                                        <span class="text-xs text-slate-400 italic">DHA e EPA per la salute delle membrane cellulari neuronali.</span>
                                    </li>
                                    <li>
                                        <span class="block font-bold">Complesso Vitamine B</span>
                                        <span class="text-xs text-slate-400 italic">Cofattori enzimatici per la produzione di energia (ATP).</span>
                                    </li>
                                    <li>
                                        <span class="block font-bold text-yellow-400">Vitamina D (Dosaggio Medico)</span>
                                        <span class="text-xs text-red-400 font-semibold italic">ATTENZIONE: Il dosaggio e la somministrazione devono essere tassativamente gestiti e prescritti da un medico dopo analisi ematiche.</span>
                                    </li>
                                </ul>
                            </div>
                            <!-- Sera -->
                            <div class="bg-indigo-900/20 p-6 rounded-xl border border-indigo-500/30">
                                <h4 class="text-indigo-400 font-bold mb-4 flex items-center">
                                    <span class="mr-2">🌙</span> Slot Sera / Pre-Nanna
                                </h4>
                                <ul class="space-y-4">
                                    <li>
                                        <span class="block font-bold">Olio di Krill (Durante la Cena)</span>
                                        <span class="text-xs text-slate-400 italic">Azione antinfiammatoria sistemica notturna.</span>
                                    </li>
                                    <li>
                                        <span class="block font-bold">Magnesio Bisglicinato (-40 min)</span>
                                        <span class="text-xs text-slate-400 italic">Induzione del rilassamento muscolare profondo.</span>
                                    </li>
                                    <li>
                                        <span class="block font-bold">Estratto di Passiflora (-40 min)</span>
                                        <span class="text-xs text-slate-400 italic">Modulazione dei recettori GABA per la riduzione dell'ansia e miglioramento dell'architettura del sonno.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- Sezione Dettagliata Ingredienti -->
                    <section id="ingredienti" class="accent-border pl-6">
                        <h2 class="text-3xl font-bold text-white mb-8">6. Analisi Molecolare degli Ingredienti</h2>
                        
                        <div class="space-y-8">
                            <!-- Funghi Medicinali (Micoterapia) -->
                            <div>
                                <h3 class="text-sky-400 font-bold text-xl mb-4 border-b border-sky-900/50 pb-2">Funghi Medicinali (Adattogeni e Nootropi)</h3>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div class="card p-5 rounded-xl">
                                        <strong class="text-white block mb-2">Chaga (Inonotus obliquus)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Considerato il "re dei funghi", possiede uno dei punteggi ORAC più alti al mondo. Supporta il sistema immunitario e riduce l'infiammazione cronica.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl">
                                        <strong class="text-white block mb-2">Lion's Mane (Hericium erinaceus)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Nootropo d'eccellenza. Stimola la sintesi del Nerve Growth Factor (NGF), fondamentale per memoria e riparazione dei nervi.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl">
                                        <strong class="text-white block mb-2">Tremella (Tremella fuciformis)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Conosciuto come "fungo della bellezza", ha straordinarie proprietà idratanti (superiori all'acido ialuronico) e protettive per la barriera cellulare.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl">
                                        <strong class="text-white block mb-2">Maitake (Grifola frondosa)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Potente regolatore metabolico. Supporta la sensibilità insulinica e il sistema immunitario tramite i beta-glucani complessi.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl">
                                        <strong class="text-white block mb-2">Cordyceps (Cordyceps sinensis)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Migliora la bio-disponibilità di ATP cellulare. Ideale per la resistenza fisica e mentale senza l'uso di stimolanti nervosi.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl">
                                        <strong class="text-white block mb-2">Reishi (Ganoderma lucidum)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Equilibratore ormonale e adattogeno. Favorisce uno stato di calma vigile e aiuta la gestione dello stress psicofisico.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Superfood e Carboidrati Complessi -->
                            <div>
                                <h3 class="text-purple-400 font-bold text-xl mb-4 border-b border-purple-900/50 pb-2">Matrice Alimentare e Superfood</h3>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div class="card p-5 rounded-xl border-l-2 border-purple-500/30">
                                        <strong class="text-white block mb-2">Erba d'Orzo (Hordeum vulgare)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Uno degli alimenti più densi di nutrienti. Ricca di clorofilla e superossido dismutasi (SOD), agisce come potente alcalinizzante e detossificante cellulare.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl border-l-2 border-purple-500/30">
                                        <strong class="text-white block mb-2">Segale e Carboidrati Complessi</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Fornisce fibre prebiotiche e un rilascio di glucosio estremamente lento, evitando picchi di insulina deleteri per l'equilibrio energetico.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl border-l-2 border-purple-500/30">
                                        <strong class="text-white block mb-2">Mirtilli (Antocianine)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Proteggono la retina e il microcircolo cerebrale dai danni indotti dalla luce blu artificiale.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl border-l-2 border-purple-500/30">
                                        <strong class="text-white block mb-2">Kefir (Microbiota-Brain Axis)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Supporta la produzione di serotonina intestinale e la comunicazione bidirezionale tra intestino e cervello.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl border-l-2 border-purple-500/30">
                                        <strong class="text-white block mb-2">Cannella (Cinnamomum)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Mimico-insulinico naturale. Rallenta lo svuotamento gastrico e migliora la sensibilità all'insulina, stabilizzando la glicemia mattutina.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Integrazione Tecnica Avanzata -->
                            <div>
                                <h3 class="text-emerald-400 font-bold text-xl mb-4 border-b border-emerald-900/50 pb-2">Analisi degli Integratori</h3>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div class="card p-5 rounded-xl border-l-2 border-emerald-500/30">
                                        <strong class="text-white block mb-2">Magnesio Bisglicinato</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Legato alla glicina per un assorbimento eccellente. Garantisce un rilassamento neurale superiore senza effetti lassativi.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl border-l-2 border-emerald-500/30">
                                        <strong class="text-white block mb-2">Olio di Krill (Astaxantina e Fosfolipidi)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Omega-3 in forma di fosfolipidi per una biodisponibilità cellulare immediata. Contiene Astaxantina naturale.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl border-l-2 border-emerald-500/30">
                                        <strong class="text-white block mb-2">Estratto di Passiflora (Flavonoidi)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Modula i recettori GABA, permettendo di ridurre il "noise" mentale serale per un addormentamento più rapido.</p>
                                    </div>
                                    <div class="card p-5 rounded-xl border-l-2 border-yellow-500/30">
                                        <strong class="text-yellow-400 block mb-2">Vitamina D3 (Colecalciferolo)</strong>
                                        <p class="text-xs text-slate-400 leading-relaxed">Regola la sintesi di serotonina e geni metabolici. <span class="text-red-400 underline font-bold">Obbligatoria la supervisione medica per il dosaggio.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- Disclaimer -->
                <footer class="mt-20 pt-10 border-t border-slate-800 text-center italic text-slate-500 text-xs">
                    <p><strong>DISCLAIMER MEDICO:</strong> Il contenuto di questa pagina ha scopo puramente informativo e divulgativo. Non sostituisce il parere di un medico professionista, una diagnosi o un trattamento sanitario. Consultare sempre uno specialista prima di iniziare qualsiasi protocollo di integrazione o cambio dietetico radicale.</p>
                </footer>
            </main>

            <!-- Fixed Bottom Button (Adapted for Modal) -->
            <!-- Fixed Bottom Close Button -->
            <div class="pb-12 text-center">
                 <button onclick="toggleModal('ritmoModal')" class="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 px-12 py-4 rounded-xl font-bold uppercase tracking-widest transition-all hover:scale-105">
                    Chiudi Pagina
                </button>
                <p class="text-[10px] text-slate-600 mt-4 uppercase tracking-widest">Khaine The Traveller</p>
            </div>

        </div>
    </div>
</div>
`;

console.log("Ritmo Modal with Strict User Code Loaded Successfully.");
