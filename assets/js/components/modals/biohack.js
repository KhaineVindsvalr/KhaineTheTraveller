
window.biohackModalHTML = `
    <!-- Modal: BIOHACK - Protocollo Intestinale (Equilibrio) - INTEGRATO -->
    <div id="microModal" aria-hidden="true">
        <div class="max-w-6xl mx-auto my-6 md:my-12 bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl relative border border-[#38bdf8]/30">
             <button onclick="toggleModal('microModal')" class="absolute top-6 right-6 text-3xl text-[#38bdf8] hover:text-white transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>
             
             <!-- Contenuto da micro.html inserito e scoped -->
             <div class="overflow-y-auto max-h-[85vh] micro-scope">
                <style>
                    /* Stili scoped per micro.html */
                    .micro-scope {
                        --bg-dark: #0f172a;
                        --bg-card: #1e293b;
                        --primary: #38bdf8;
                        --text-main: #f1f5f9;
                        --text-muted: #94a3b8;
                        --accent: #0ea5e9;
                        font-family: 'Inter', sans-serif;
                        color: var(--text-main);
                        line-height: 1.6;
                        background-color: var(--bg-dark);
                    }
                    .micro-scope * { box-sizing: border-box; }
                    .micro-scope header {
                        height: 60vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), 
                                    url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920');
                        background-size: cover;
                        background-position: center;
                        padding: 20px;
                    }
                    .micro-scope .container {
                        max-width: 900px;
                        margin: 0 auto;
                        padding: 40px 20px;
                    }
                    .micro-scope h1 { font-size: 3rem; color: var(--primary); margin-bottom: 10px; font-family: 'Inter', sans-serif; font-weight: 700; }
                    .micro-scope h2 { font-size: 2rem; color: #fff; margin-bottom: 20px; font-family: 'Inter', sans-serif; font-weight: 600; }
                    .micro-scope .tagline { font-family: 'JetBrains Mono', monospace; color: var(--text-muted); font-size: 1.1rem; }
                    
                    .micro-scope .quote-box {
                        background: rgba(56, 189, 248, 0.05);
                        border-left: 4px solid var(--primary);
                        padding: 30px;
                        margin: 40px 0;
                        font-style: italic;
                        font-size: 1.4rem;
                        position: relative;
                        text-align: center;
                    }
                    .micro-scope .protocol-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 20px;
                        margin-top: 40px;
                    }
                    .micro-scope .phase-card {
                        background: var(--bg-card);
                        border-radius: 12px;
                        padding: 25px;
                        border: 1px solid #334155;
                        display: flex;
                        align-items: flex-start;
                        transition: transform 0.2s;
                    }
                    .micro-scope .phase-card:hover { transform: translateX(10px); border-color: var(--primary); }
                    .micro-scope .phase-number {
                        background: var(--primary);
                        color: var(--bg-dark);
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        margin-right: 20px;
                        flex-shrink: 0;
                    }
                    .micro-scope .phase-content h3 { margin: 0 0 10px 0; color: var(--primary); font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 600; }
                    .micro-scope .dosage { font-family: 'JetBrains Mono', monospace; color: var(--text-muted); font-size: 0.9rem; display: block; margin-bottom: 10px; }
                    
                    .micro-scope .fixed-pillar {
                        background: linear-gradient(45deg, #1e293b, #0f172a);
                        border: 2px solid var(--primary);
                        padding: 30px;
                        border-radius: 12px;
                        margin: 60px 0;
                        text-align: center;
                    }
                    .micro-scope .fixed-pillar h3 { color: #fff; font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; }
                    
                    .micro-scope .support-box {
                        background: var(--bg-card);
                        border-radius: 12px;
                        padding: 30px;
                        border: 1px solid #334155;
                        margin: 40px 0;
                        display: flex;
                        align-items: center;
                        gap: 25px;
                    }
                    .micro-scope .support-box h3 { color: #fff; font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; }
                    
                    .micro-scope .support-icon {
                        font-size: 2.5rem;
                        color: var(--primary);
                    }
                    
                    .micro-scope .disclaimer {
                        background: #111827;
                        padding: 40px;
                        border-radius: 12px;
                        text-align: center;
                        border: 1px dashed #ef4444;
                        margin-top: 80px;
                    }
                    
                    .micro-scope footer { text-align: center; padding: 40px; color: var(--text-muted); font-size: 0.8rem; }
                    
                    @media (max-width: 600px) {
                        .micro-scope h1 { font-size: 2rem; }
                        .micro-scope .phase-card { flex-direction: column; }
                        .micro-scope .phase-number { margin-bottom: 15px; }
                        .micro-scope .support-box { flex-direction: column; text-align: center; }
                    }
                </style>

                <header>
                    <h1>Biohacking Intestinale</h1>
                    <p class="tagline">Resilienza e Focus per il Viaggiatore Moderno</p>
                </header>

                <div class="container">
                    <div class="quote-box">
                        "Ottimizzare l'equilibrio intestinale significa blindare la propria resilienza: un'integrazione strategica trasforma la salute da variabile incerta a asset fondamentale del viaggio."
                    </div>

                    <!-- Button for Ritmo Modal -->
                    <div class="text-center mb-12">
                        <button onclick="toggleModal('ritmoModal')" class="bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/50 px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center justify-center mx-auto gap-3">
                            <i class="fas fa-moon"></i>
                            Protocollo Ritmo & Sonno
                        </button>
                    </div>

                    <section>
                        <h2>Il Protocollo dei 40 Giorni</h2>
                        <p>Una sequenza logica di pulizia, semina e mantenimento della flora batterica per ottimizzare l'asse intestino-cervello.</p>

                        <div class="protocol-grid">
                            <!-- Fase 1 -->
                            <div class="phase-card">
                                <div class="phase-number">01</div>
                                <div class="phase-content">
                                    <h3>Fase 1: Enterelle Plus (10gg)</h3>
                                    <span class="dosage">Dose: 1 dopo colazione / 1 dopo cena</span>
                                    <p>Azione di "pulizia" del terreno intestinale. Elimina i ceppi batterici opportunisti e prepara l'ambiente per i nuovi abitanti.</p>
                                </div>
                            </div>

                            <!-- Fase 2 -->
                            <div class="phase-card">
                                <div class="phase-number">02</div>
                                <div class="phase-content">
                                    <h3>Fase 2: Bifiselle (10gg)</h3>
                                    <span class="dosage">Dose: 1 dopo colazione / 1 dopo cena</span>
                                    <p>Prima ricolonizzazione mirata al colon. Supporta la motilità e la barriera immunitaria basale.</p>
                                </div>
                            </div>

                            <!-- Fase 3 -->
                            <div class="phase-card">
                                <div class="phase-number">03</div>
                                <div class="phase-content">
                                    <h3>Fase 3: Ramnoselle (10gg)</h3>
                                    <span class="dosage">Dose: 1 dopo colazione / 1 dopo cena</span>
                                    <p>Intervento sull'intestino tenue. Ottimizza l'assorbimento dei nutrienti e contrasta la fermentazione eccessiva.</p>
                                </div>
                            </div>

                            <!-- Fase 4 -->
                            <div class="phase-card">
                                <div class="phase-number">04</div>
                                <div class="phase-content">
                                    <h3>Fase 4: Serobioma (10gg)</h3>
                                    <span class="dosage">Dose: 1 dopo colazione / 1 dopo cena</span>
                                    <p>Nutrimento e stabilità. Stabilizza la mucosa intestinale per un benessere a lungo termine.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="fixed-pillar">
                        <i class="fa-solid fa-virus-slash" style="font-size: 2rem; color: var(--primary); margin-bottom: 15px;"></i>
                        <h3>Il Pilastro Immunitario: Citogenex</h3>
                        <p>Associare sempre <strong>1 capsula dopo pranzo</strong> per tutta la durata dei 40 giorni. Mentre i probiotici lavorano sulla flora, Citogenex modula le difese per una protezione totale.</p>
                    </div>

                    <section>
                        <h2>Integrazione di Supporto Fondamentale</h2>
                        <div class="support-box">
                            <div class="support-icon">
                                <i class="fa-solid fa-moon"></i>
                            </div>
                            <div>
                                <h3>Magnesio Bisglicinato</h3>
                                <p>L'alleato indispensabile per il viaggiatore. Garantisce la regolarità intestinale delle 24 ore attirando acqua nel colon in modo delicato. Inoltre, favorisce il rilassamento muscolare e la qualità del sonno profondo, essenziale per il recupero fisico dopo le lunghe giornate di esplorazione.</p>
                            </div>
                        </div>
                    </section>

                    <div class="disclaimer">
                        <i class="fa-solid fa-triangle-exclamation" style="color: #ef4444; font-size: 1.5rem; margin-bottom: 10px;"></i>
                        <p><strong>Nota di Biohacking Professionale:</strong> Questo è il mio protocollo personale che ha funzionato per me. Non sono un medico. Consulta il tuo dottore prima di iniziare qualsiasi integrazione.</p>
                    </div>
                </div>

                <footer>
                    <p>&copy; 2026 Khaine | The Traveller. Progettato per menti lucide e viaggiatori resilienti.</p>
                    <div class="mt-4">
                        <button onclick="toggleModal('microModal')" class="px-6 py-2 border border-[#38bdf8] text-[#38bdf8] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#38bdf8] hover:text-[#0f172a] transition duration-300">
                            Chiudi
                        </button>
                    </div>
                </footer>
             </div>
        </div>
    </div>
`;
