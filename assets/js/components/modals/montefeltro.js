
window.montefeltroModalHTML = `
<div id="montefeltroModal">
    <div class="max-w-[95%] md:max-w-6xl mx-auto my-0 md:my-10 bg-white md:rounded-3xl shadow-2xl relative overflow-hidden min-h-screen md:min-h-0">
        <style>
            /* Scoped Styles for Montefeltro */
            #montefeltroModal {
                --gold: #b28d42;
                --gold-light: #f4ece0;
                --ink: #1a1a1a;
                --paper: #ffffff;
            }

            #montefeltroModal .modal-content {
                background-color: var(--paper);
                color: var(--ink);
                font-family: 'Inter', sans-serif;
                line-height: 1.6;
            }

            #montefeltroModal .font-cinzel { font-family: 'Cinzel', serif; }
            #montefeltroModal .font-serif { font-family: 'Cormorant Garamond', serif; }

            #montefeltroModal .section-title {
                position: relative;
                display: inline-block;
                padding-bottom: 10px;
            }

            #montefeltroModal .section-title::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 60px;
                height: 2px;
                background: var(--gold);
            }

            #montefeltroModal .itinerario-card {
                background: var(--paper);
                border: 1px solid #eee;
                transition: all 0.5s ease;
                position: relative;
                overflow: hidden;
            }

            #montefeltroModal .itinerario-card:hover {
                border-color: var(--gold);
                box-shadow: 0 15px 40px rgba(0,0,0,0.05);
            }

            #montefeltroModal .badge-step {
                font-family: 'Cinzel', serif;
                color: var(--gold);
                font-size: 11px;
                letter-spacing: 0.2em;
                border-bottom: 1px solid var(--gold);
                margin-bottom: 1rem;
                display: inline-block;
            }

            #montefeltroModal .food-box {
                background-color: var(--gold-light);
                border-left: 4px solid var(--gold);
            }

            #montefeltroModal .rinascimento-border {
                border: 1px solid rgba(178, 141, 66, 0.2);
                padding: 5px;
                background: var(--paper);
            }

            #montefeltroModal .dropcap {
                float: left;
                font-family: 'Cinzel', serif;
                font-size: 3.5rem;
                line-height: 1;
                padding-right: 10px;
                color: var(--gold);
            }

            #montefeltroModal .optional-section {
                background: #f9f9f9;
                border-top: 1px solid #eee;
            }
            
            /* Mobile Optimization Overrides */
            @media (max-width: 768px) {
                 #montefeltroModal .dropcap { font-size: 2.8rem; }
                 #montefeltroModal .section-spacing { padding-top: 4rem; padding-bottom: 4rem; }
                 #montefeltroModal .hero-title { font-size: 2.5rem; } 
            }
        </style>

        <!-- Close Button -->
        <button onclick="toggleModal('montefeltroModal')" class="absolute top-4 right-4 z-50 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition">
            <i class="fas fa-times"></i>
        </button>

        <div class="modal-content antialiased text-sm md:text-base">
            <!-- Nav / Intestazione Superiore -->
            <nav class="w-full py-6 pl-6 pr-14 bg-white border-b border-gray-100 sticky top-0 z-40 flex justify-center items-center">
                <div class="font-cinzel text-xs md:text-sm tracking-[0.5em] text-[#b28d42] uppercase text-center">
                    Khaine | The Traveller
                </div>
            </nav>

            <!-- Hero Section -->
            <header class="relative h-[50vh] md:h-[70vh] flex items-center justify-center bg-[#fdfbf7]">
                <div class="absolute inset-0 z-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1768030980110-8cc32814ca0a?auto=format&fit=crop&q=80&w=1920" alt="Montefeltro Panorama" class="w-full h-full object-cover grayscale">
                </div>
                <div class="relative z-10 text-center px-4">
                    <span class="font-cinzel text-[10px] md:text-xs tracking-[0.4em] text-gray-500 mb-3 block uppercase">Marche Interiori</span>
                    <h1 class="font-cinzel text-4xl md:text-8xl mb-4 md:mb-6 text-gray-900 tracking-tighter">Montefeltro</h1>
                    <div class="w-16 md:w-24 h-px bg-[#b28d42] mx-auto mb-6 md:mb-8"></div>
                    <p class="font-serif text-lg md:text-3xl italic text-gray-600 max-w-2xl mx-auto leading-tight">
                        "Viaggio nell'armonia delle forme e nel silenzio dei borghi."
                    </p>
                </div>
            </header>

            <!-- Intro Narrativa -->
            <section class="max-w-4xl mx-auto px-6 py-10 md:py-24 text-center">
                <h2 class="font-cinzel text-xl md:text-2xl mb-8 md:mb-12 section-title uppercase tracking-widest text-[#b28d42]">L'Eredità del Duca</h2>
                <p class="font-serif text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                    Il Montefeltro non è solo una regione geografica, ma uno stato dell'anima. È la terra dove la pietra si fa pensiero, dove il Rinascimento ha trovato la sua espressione più pura e razionale sotto l'egida di Federico.
                </p>
            </section>

            <!-- Itinerario Classico -->
            <main class="max-w-6xl mx-auto px-6 pb-20 md:pb-32">
                
                <div class="space-y-16 md:space-y-32">

                    <!-- Giorno 1: Urbino -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div class="order-2 lg:order-1">
                            <span class="badge-step">Giorno I // La Città Ideale</span>
                            <h3 class="font-cinzel text-2xl md:text-4xl mb-4 md:mb-6 uppercase tracking-tight">Urbino</h3>
                            <div class="font-serif text-lg text-gray-700 space-y-4 md:space-y-6">
                                <p><span class="dropcap">V</span>arcare le mura di Urbino significa entrare in un quadro di Piero della Francesca. Cuore pulsante è il <strong>Palazzo Ducale</strong> con lo Studiolo e i capolavori della Galleria Nazionale. Ma la vera magia si compie salendo alla <strong>Fortezza Albornoz</strong>: da quassù Urbino appare nella sua perfezione, con i <strong>Torricini</strong> che svettano verso il cielo.</p>
                                <p>Il viaggio prosegue nel silenzio dell'<strong>Oratorio di San Giuseppe</strong>, con il <em>Presepe</em> del Brandani, e si conclude poco fuori le mura, al <strong>Mausoleo dei Duchi</strong> (San Bernardino), dove Federico riposa guardando la sua creazione più bella.</p>
                            </div>
                        </div>
                        <div class="order-1 lg:order-2 rinascimento-border">
                            <img src="https://images.unsplash.com/photo-1642342391151-10e44a7c7b87?auto=format&fit=crop&q=80&w=800" alt="Urbino Panorama Fortezza" class="w-full h-[300px] md:h-[550px] object-cover">
                        </div>
                    </div>

                    <!-- Giorno 2: San Leo & Pennabilli -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div class="rinascimento-border order-1 lg:order-1">
                            <img src="https://images.unsplash.com/photo-1641069481641-7e2146dd7888?auto=format&fit=crop&q=80&w=800" alt="San Leo e Pennabilli" class="w-full h-[300px] md:h-[550px] object-cover">
                        </div>
                        <div class="order-2 lg:order-2">
                            <span class="badge-step">Giorno II // Mistero e Poesia</span>
                            <h3 class="font-cinzel text-2xl md:text-4xl mb-4 md:mb-6 uppercase tracking-tight">San Leo & Pennabilli</h3>
                            <div class="font-serif text-lg text-gray-700 space-y-4 md:space-y-6">
                                <p><span class="dropcap">L</span>a maestosa rocca di <strong>San Leo</strong> domina la Valmarecchia, celebre prigione di <strong>Cagliostro</strong>, il cui spirito sembra ancora aleggiare tra le celle scavate nella roccia. Poco distante si apre il mondo sospeso di <strong>Pennabilli</strong>, il borgo che fu casa di Tonino Guerra.</p>
                                <p>Passeggiare per Pennabilli significa esplorare i <strong>"Luoghi dell'Anima"</strong>: l'Orto dei Frutti Dimenticati, il Santuario dei Pensieri e la campana tibetana che ricorda l'incontro col Dalai Lama. È un luogo di pace dove la poesia si fonde con il paesaggio.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Giorno 3: Fermignano, Urbania & Furlo -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div class="order-2 lg:order-1">
                            <span class="badge-step">Giorno III // Metauro e Casteldurante</span>
                            <h3 class="font-cinzel text-2xl md:text-4xl mb-4 md:mb-6 uppercase tracking-tight text-[#b28d42]">Metauro & Urbania</h3>
                            <div class="font-serif text-lg text-gray-700 space-y-4 md:space-y-6">
                                <p><span class="dropcap">A</span> <strong>Fermignano</strong>, il Ponte Romano e la Torre delle Milizie creano uno scorcio senza tempo. Si prosegue per <strong>Urbania</strong> (l'antica Casteldurante), patria delle <strong>porcellane</strong> ducali. Da non perdere la <strong>Chiesa dei Morti</strong> con le sue mummie e il maestoso <strong>Barco Ducale</strong>.</p>
                                <p>Il viaggio si chiude nella <strong>Gola del Furlo</strong>, tra pareti di roccia a strapiombo e la galleria romana di Vespasiano, un passaggio millenario che unisce la costa all'entroterra.</p>
                            </div>
                        </div>
                        <div class="order-1 lg:order-2 rinascimento-border">
                            <img src="https://images.unsplash.com/photo-1768029498024-db6c84792d95?auto=format&fit=crop&q=80&w=800" alt="Metauro e Urbania" class="w-full h-[300px] md:h-[500px] object-cover">
                        </div>
                    </div>

                </div>

                <!-- Food Section -->
                <section class="mt-20 md:mt-32 food-box p-6 md:p-12">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <div class="flex items-center gap-4 mb-4 md:mb-6">
                                <i class="fa-solid fa-utensils text-2xl md:text-3xl text-[#b28d42]"></i>
                                <h4 class="font-cinzel text-lg md:text-xl uppercase tracking-widest">Memorie di Cucina</h4>
                            </div>
                            <p class="font-serif text-lg text-gray-800 mb-4 md:mb-6">
                                "I <strong>Passatelli</strong> sono il calore del brodo domenicale. Ma l'eccellenza risiede nella <strong>Crescia Sfogliata</strong> di Urbino, servita con la <strong>Casciotta d'Urbino DOP</strong> — il formaggio prediletto da Michelangelo — e il Prosciutto di Carpegna."
                            </p>
                            <p class="font-serif text-lg italic text-gray-600">
                                Immancabile il tocco boschivo del <strong>Tartufo di Acqualagna</strong>.
                            </p>
                        </div>
                        <div class="border-t md:border-t-0 md:border-l border-black/5 pt-8 md:pt-0 md:pl-12">
                            <div class="flex items-center gap-4 mb-4 md:mb-6">
                                <i class="fa-solid fa-wine-glass text-2xl md:text-3xl text-[#b28d42]"></i>
                                <h4 class="font-cinzel text-lg md:text-xl uppercase tracking-widest">In Cantina</h4>
                            </div>
                            <div class="space-y-4 md:space-y-6">
                                <p class="text-gray-700 font-light leading-relaxed">
                                    <strong class="font-cinzel text-[10px] text-[#b28d42] block mb-1 uppercase tracking-widest">Bianchello del Metauro DOC</strong>
                                    Bianco fresco e sapido, perfetto per accompagnare la Crescia e la Casciotta.
                                </p>
                                <p class="text-gray-700 font-light leading-relaxed">
                                    <strong class="font-cinzel text-[10px] text-[#b28d42] block mb-1 uppercase tracking-widest">Sangiovese dei Colli Pesaresi DOC</strong>
                                    Un rosso strutturato e franco, ideale per il tartufo e le carni.
                                </p>
                                <p class="text-gray-700 font-light leading-relaxed">
                                    <strong class="font-cinzel text-[10px] text-[#b28d42] block mb-1 uppercase tracking-widest">Vernaccia di Pergola (Aleatico)</strong>
                                    Aromatico e vellutato, una chicca locale per chi cerca note floreali intense.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <!-- Estensione Opzionale -->
            <section id="opzionale" class="optional-section py-16 md:py-24">
                <div class="max-w-6xl mx-auto px-6">
                    <div class="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-4">
                        <div>
                            <h2 class="font-cinzel text-lg md:text-xl text-gray-400 uppercase tracking-[0.4em]">Valle del Foglia</h2>
                            <p class="text-[10px] text-gray-400 uppercase mt-2 italic">Estensione Consigliata</p>
                        </div>
                        <div class="hidden md:block h-px bg-gray-200 flex-grow mx-8"></div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        <div class="itinerario-card p-6 md:p-8 group">
                            <h4 class="font-cinzel text-[#b28d42] mb-3 md:mb-4 group-hover:tracking-widest transition-all uppercase text-sm">Sassocorvaro</h4>
                            <p class="text-sm text-gray-500 font-light leading-relaxed">
                                La Rocca Ubaldinesca a forma di tartaruga, che salvò l'arte italiana durante la guerra.
                            </p>
                        </div>
                        <div class="itinerario-card p-6 md:p-8 group">
                            <h4 class="font-cinzel text-[#b28d42] mb-3 md:mb-4 group-hover:tracking-widest transition-all uppercase text-sm">Frontino</h4>
                            <p class="text-sm text-gray-500 font-light leading-relaxed">
                                Il borgo salotto in pietra serena ai piedi del massiccio del Carpegna.
                            </p>
                        </div>
                        <div class="itinerario-card p-6 md:p-8 group">
                            <h4 class="font-cinzel text-[#b28d42] mb-3 md:mb-4 group-hover:tracking-widest transition-all uppercase text-sm">Gradara</h4>
                            <p class="text-sm text-gray-500 font-light leading-relaxed">
                                Il castello malatestiano teatro dell'amore eterno di Paolo e Francesca.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="py-12 md:py-20 bg-white text-center border-t border-gray-100">
                <div class="font-cinzel text-[10px] md:text-xs text-[#b28d42] tracking-[0.5em] mb-3 md:mb-4 uppercase">Khaine | The Traveller</div>
                <div class="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest px-4">Montefeltro • Rinascimento • Italia</div>
                <div class="mt-6 flex justify-center">
                     <button onclick="toggleModal('montefeltroModal')" class="bg-[#b28d42] text-white px-10 py-3 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-[#8e6e30] transition">Chiudi Itinerario</button>
                </div>
            </footer>
        </div>
    </div>
</div>
`;
