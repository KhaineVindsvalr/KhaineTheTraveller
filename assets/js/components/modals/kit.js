
window.kitModalHTML = `
    <!-- Modal: Kit di Viaggio (INTEGRATO CON KIT BASE VIAGGIO) -->
    <div id="kitViaggioModal" aria-hidden="true">
        <!-- Main container with dark background from kit -->
        <div class="max-w-6xl mx-auto my-6 md:my-12 bg-[#020617] rounded-3xl overflow-hidden shadow-2xl relative border border-[#f87171]/30">
            
            <!-- Close button (Red accent) -->
            <button onclick="toggleModal('kitViaggioModal')" class="absolute top-6 right-6 text-3xl text-[#f87171] hover:text-white transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>

            <!-- Scrollable Content Area -->
            <div class="overflow-y-auto max-h-[85vh] text-[#f1f5f9] kit-font-inter">
                
                <!-- Header (From Kit file) -->
                <header class="kit-header-bg py-24 px-6 text-center">
                    <h1 class="text-4xl md:text-6xl font-bold text-[#f87171] mb-4">Kit Base del Viaggiatore</h1>
                    <p class="kit-font-mono text-[#94a3b8] text-lg">Equipaggiamento analitico per l'esplorazione moderna</p>
                </header>

                <div class="container mx-auto px-6 py-12 max-w-5xl">
                    <!-- Intro -->
                    <p class="text-center max-w-3xl mx-auto mb-16 text-[#94a3b8] text-lg leading-relaxed">
                        Viaggiare con intelligenza significa eliminare il superfluo. Ogni oggetto in questo kit è stato selezionato per la sua utilità, durabilità e capacità di ridurre lo stress logistico.
                    </p>

                    <!-- Grid -->
                    <div class="kit-grid">
                        <!-- Zaino -->
                        <div class="kit-item">
                            <div class="kit-icon"><i class="fas fa-suitcase"></i></div>
                            <h3 class="text-2xl font-bold mb-4 text-[#f1f5f9]">Carry-on Tecnico</h3>
                            <p class="text-[#94a3b8] mb-6 flex-grow">Lo zaino è il prolungamento del corpo. Un design minimalista con scomparti dedicati previene la disorganizzazione cronica e velocizza i controlli di sicurezza.</p>
                            <div class="kit-specs">
                                <ul>
                                    <li><span>Volume:</span> 35L - 40L</li>
                                    <li><span>Materiale:</span> Cordura 1000D</li>
                                    <li><span>Focus:</span> Laptop protection</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Tazza Termica -->
                        <div class="kit-item">
                            <div class="kit-icon"><i class="fa-solid fa-mug-hot"></i></div>
                            <h3 class="text-2xl font-bold mb-4 text-[#f1f5f9]">Vessel Termico</h3>
                            <p class="text-[#94a3b8] mb-6 flex-grow">Idratazione costante. Fondamentale per mantenere l'omeostasi e supportare il protocollo di biohacking mantenendo i liquidi alla temperatura ideale.</p>
                            <div class="kit-specs">
                                <ul>
                                    <li><span>Capacità:</span> 500ml / 17oz</li>
                                    <li><span>Isolamento:</span> Vacuum Double Wall</li>
                                    <li><span>Durata:</span> 12h Caldo / 24h Freddo</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Compressione Spazio -->
                        <div class="kit-item">
                            <div class="kit-icon"><i class="fa-solid fa-box-archive"></i></div>
                            <h3 class="text-2xl font-bold mb-4 text-[#f1f5f9]">Vacuum Storage System</h3>
                            <p class="text-[#94a3b8] mb-6 flex-grow">Ottimizzazione radicale del volume. Sacchetti sottovuoto rinforzati per separare ermeticamente i capi puliti da quelli sporchi, riducendo l'ingombro fino al 75%.</p>
                            <div class="kit-specs">
                                <ul>
                                    <li><span>Componenti:</span> Clean/Dirty Bags</li>
                                    <li><span>Compressione:</span> Mini Pump USB</li>
                                    <li><span>Vantaggio:</span> Odor control</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Tech Organizer & Power -->
                        <div class="kit-item">
                            <div class="kit-icon"><i class="fa-solid fa-bolt"></i></div>
                            <h3 class="text-2xl font-bold mb-4 text-[#f1f5f9]">Power & Adapter</h3>
                            <p class="text-[#94a3b8] mb-6 flex-grow">Gestione energetica totale. Include un adattatore universale all-in-one per eliminare le incompatibilità geografiche e una powerbank ad alta efficienza.</p>
                            <div class="kit-specs">
                                <ul>
                                    <li><span>Adattatore:</span> Universal Worldwide</li>
                                    <li><span>Powerbank:</span> 10.000 mAh PD</li>
                                    <li><span>Porte:</span> Multi-USB (GaN Tech)</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Diario/Documenti -->
                        <div class="kit-item">
                            <div class="kit-icon"><i class="fa-solid fa-passport"></i></div>
                            <h3 class="text-2xl font-bold mb-4 text-[#f1f5f9]">Document Shelter</h3>
                            <p class="text-[#94a3b8] mb-6 flex-grow">La sicurezza dei dati e dei documenti fisici. Una protezione RFID compatta per passaporto, carte e le tue note analitiche sul viaggio.</p>
                            <div class="kit-specs">
                                <ul>
                                    <li><span>Protezione:</span> RFID Blocking</li>
                                    <li><span>Chiusura:</span> Waterproof Zip</li>
                                    <li><span>Extra:</span> Spazio Penna Tecnica</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Protezione Agenti Atmosferici -->
                        <div class="kit-item">
                            <div class="kit-icon"><i class="fa-solid fa-cloud-showers-water"></i></div>
                            <h3 class="text-2xl font-bold mb-4 text-[#f1f5f9]">Weather Shield System</h3>
                            <p class="text-[#94a3b8] mb-6 flex-grow">Protezione integrale contro pioggia e vento. Un set composto da guscio ultraleggero (K-Way) e pantaloni tecnici per garantire isolamento e comfort.</p>
                            <div class="kit-specs">
                                <ul>
                                    <li><span>Set:</span> K-Way + Pants</li>
                                    <li><span>Peso:</span> < 400g (Totale)</li>
                                    <li><span>Materiale:</span> Tech Ripstop</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Philosophy Box -->
                    <div class="kit-philosophy mt-20 p-10 rounded-2xl text-center">
                        <p class="text-xl md:text-2xl italic mb-4 text-[#f1f5f9]">"L'attrezzatura scadente è una distrazione. L'attrezzatura eccellente è invisibile: ti permette di concentrarti solo sull'esperienza e sul tuo equilibrio interiore."</p>
                        <span class="kit-font-mono text-[#94a3b8]">— Khaine's Gear Logic</span>
                    </div>
                </div>

                <!-- Footer -->
                <div class="border-t border-[#1e293b] p-8 text-center text-[#94a3b8] text-sm bg-[#020617]">
                    <p>&copy; 2026 Khaine | The Traveller. Equipaggiati per durare.</p>
                    <div class="mt-6">
                        <button onclick="toggleModal('kitViaggioModal')" class="px-10 py-3 border border-[#f87171] text-[#f87171] rounded-full font-bold uppercase tracking-widest hover:bg-[#f87171] hover:text-white transition duration-300">
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
