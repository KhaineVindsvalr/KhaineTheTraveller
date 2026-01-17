
window.helsinkiModalHTML = `
    <!-- Modale Itinerario Helsinki -->
    <div id="helsinkiModal">
        <div class="max-w-4xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-2xl relative helsinki-content">
            <header class="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1522885147691-06d859633fb8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1200&auto=format&fit=crop" class="w-full h-full object-cover">
                </div>
                <div class="relative z-10">
                    <h1 class="text-4xl md:text-6xl font-black mb-2 tracking-tighter uppercase italic">Helsinki & Rovaniemi</h1>
                    <p class="text-emerald-400 font-bold tracking-[0.3em] uppercase text-sm mb-6">by Khaine</p>
                </div>
                <button onclick="toggleModal('helsinkiModal')" class="absolute top-6 right-6 text-3xl hover:text-emerald-300 transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>
            </header>

    <main class="max-w-4xl mx-auto py-10 px-6">

        <!-- PARTE 1: HELSINKI -->
        <div class="space-y-8">
            <h2 class="text-2xl font-black border-b-2 border-slate-900 pb-2 italic uppercase flex items-center">
                <i class="fas fa-city mr-3 text-sky-600"></i> Parte 1: Helsinki
            </h2>
            
            <!-- Giorno 1 -->
            <div class="bg-white p-6 rounded-lg shadow day-box">
                <h3 class="font-black text-lg text-sky-600 italic uppercase">GIORNO 1</h3>
                <p class="text-sm font-bold mb-2 uppercase tracking-wide">Milano <i class="fas fa-plane text-sky-400 px-1"></i> Helsinki</p>
                <p class="text-sm text-slate-700 italic leading-relaxed">
                    Arrivo a Vantaa, trasferimento in centro e check-in presso <a href="https://www.strawberryhotels.com/hotels/finland/helsinki/home-hotel-jugend/" target="_blank" class="attraction-link">Home Hotel Jugend (Kamppi)</a>. Cena tipica finlandese consigliata presso il ristorante <a href="https://www.ravintolasavotta.fi/en/frontpage.html" target="_blank" class="attraction-link">Savotta</a> per un primo assaggio di specialità locali in un ambiente d'altri tempi. Passeggiata serale in centro.
                </p>
            </div>

            <!-- Giorno 2 -->
            <div class="bg-white p-6 rounded-lg shadow day-box">
                <h3 class="font-black text-lg text-sky-600 italic uppercase">GIORNO 2</h3>
                <div class="text-sm space-y-3 italic leading-relaxed">
                    <p><strong><i class="fas fa-landmark mr-2"></i>Mattina (Storica):</strong> <a href="https://it.wikipedia.org/wiki/Piazza_del_Senato_(Helsinki)" target="_blank" class="attraction-link">Piazza del Senato</a>, maestosa <a href="https://it.wikipedia.org/wiki/Cattedrale_di_Helsinki" target="_blank" class="attraction-link">Cattedrale Luterana</a> (Tuomiokirkko) e la <a href="https://it.wikipedia.org/wiki/Cattedrale_della_Dormizione_(Helsinki)" target="_blank" class="attraction-link">Cattedrale Ortodossa Uspenski</a> con le sei cupole dorate.</p>
                    <p><strong><i class="fas fa-store mr-2"></i>Pomeriggio (Mercati):</strong> <a href="https://it.wikipedia.org/wiki/Kauppatori" target="_blank" class="attraction-link">Kauppatori</a> (Piazza del Mercato) per assaggiare la zuppa di salmone e la storica <a href="https://vanhakauppahalli.fi/en/" target="_blank" class="attraction-link">Old Market Hall</a> (Vanha Kauppahalli) per merende gourmet.</p>
                    <p><strong><i class="fas fa-moon mr-2"></i>Sera:</strong> Passeggiata lungo il parco Esplanadi, il salotto verde di Helsinki.</p>
                </div>
            </div>

            <!-- Giorno 3 -->
            <div class="bg-white p-6 rounded-lg shadow day-box">
                <h3 class="font-black text-lg text-sky-600 italic uppercase">GIORNO 3</h3>
                <div class="text-sm space-y-3 italic leading-relaxed">
                    <p><strong><i class="fas fa-ship mr-2"></i>Mattina (UNESCO):</strong> <a href="https://suomenlinnanliikenne.fi/en/tickets/" target="_blank" class="attraction-link">Traghetto</a> da Kauppatori per la <a href="https://it.wikipedia.org/wiki/Suomenlinna" target="_blank" class="attraction-link">Fortezza di Suomenlinna</a>, patrimonio mondiale sospeso sul mare.</p>
                    <p><strong><i class="fas fa-palette mr-2"></i>Pomeriggio (Design):</strong> Esplorazione del Design District e della pittoresca Via Huvila Katu.</p>
                    <p><strong><i class="fas fa-hot-tub mr-2"></i>Sera:</strong> Esperienza sauna tradizionale o moderna presso <a href="https://www.loylyhelsinki.fi/en/" target="_blank" class="attraction-link">Löyly</a> o <a href="https://www.kotiharjunsauna.fi/" target="_blank" class="attraction-link">Kotiharjun</a>.</p>
                </div>
            </div>

            <!-- Giorno 4 -->
            <div class="bg-white p-6 rounded-lg shadow day-box">
                <h3 class="font-black text-lg text-sky-600 italic uppercase">GIORNO 4</h3>
                <div class="text-sm space-y-3 italic leading-relaxed">
                    <p><strong><i class="fas fa-mountain mr-2"></i>Mattina:</strong> <a href="https://temppeliaukionkirkko.fi/" target="_blank" class="attraction-link">Temppeliaukion Kirkko</a> (Chiesa nella Roccia) e la futuristica <a href="https://www.kampinkappeli.fi/index/visit_1.html#italiano" target="_blank" class="attraction-link">Cappella del Silenzio</a> di Kamppi.</p>
                    <p><strong><i class="fas fa-book-open mr-2"></i>Pomeriggio:</strong> La <a href="https://oodihelsinki.fi/en/" target="_blank" class="attraction-link">Biblioteca Oodi</a> e il <a href="https://kiasma.fi/en/" target="_blank" class="attraction-link">Museo d'Arte Contemporanea Kiasma</a>.</p>
                    <p><strong><i class="fas fa-suitcase mr-2"></i>Sera:</strong> Ritiro bagagli e trasferimento alla stazione centrale.</p>
                </div>
            </div>

            <!-- EXCLUSIVE: POLAR EXPRESS -->
            <div class="relative py-12">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t-2 border-dashed border-sky-300"></div>
                </div>
                <div class="relative flex justify-center">
                    <span class="bg-f4f7f6 px-4">
                        <i class="fas fa-train text-sky-600 text-3xl animate-pulse"></i>
                    </span>
                </div>
            </div>

            <div class="bg-slate-900 text-white p-8 rounded-2xl shadow-xl border-l-8 border-sky-500 transform -rotate-1">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="font-black text-xl text-sky-400 italic uppercase">SANTA CLAUS EXPRESS</h3>
                        <p class="text-xs uppercase tracking-[0.2em] font-bold text-white/70">Il Treno Notturno Helsinki - Rovaniemi</p>
                    </div>
                    <div class="text-right">
                        <span class="text-xs font-bold bg-sky-500 px-2 py-1 rounded">CABINA DOPPIA: ~€ 120 (TOTALI PER 2 PERSONE)</span>
                    </div>
                </div>
                <div class="space-y-4 text-sm italic">
                    <p>Partenza in serata dalla stazione centrale. Sistemazione in <strong>cabina privata su due piani con doccia e bagno interno</strong>. </p>
                    <div class="flex items-center space-x-4 bg-white/5 p-4 rounded-lg border border-white/10">
                        <i class="fas fa-bed text-sky-300 text-xl"></i>
                        <span>Addormentarsi tra le foreste innevate e svegliarsi oltre il <strong>Circolo Polare Artico</strong>.</span>
                    </div>
                    <div class="flex justify-between items-center pt-2">
                        <div class="flex space-x-4 text-[10px] text-sky-300 uppercase font-bold">
                            <span><i class="fas fa-clock mr-1"></i> Durata: ~12 Ore</span>
                            <span><i class="fas fa-wifi mr-1"></i> Wi-Fi a bordo</span>
                        </div>
                        <a href="https://www.vr.fi/en" target="_blank" class="bg-sky-500 hover:bg-sky-400 text-white text-[10px] font-black py-2 px-4 rounded-full uppercase tracking-widest transition-colors">
                            <i class="fas fa-ticket-alt mr-2"></i>Prenota su VR.fi
                        </a>
                    </div>
                </div>
            </div>

            <!-- PARTE 2: ROVANIEMI -->
            <h2 class="text-2xl font-black border-b-2 border-slate-900 pb-2 italic mt-16 uppercase flex items-center">
                <i class="fas fa-snowflake mr-3 text-emerald-600"></i> Parte 2: Rovaniemi
            </h2>

            <!-- Giorno 5 -->
            <div class="bg-white p-6 rounded-lg shadow day-box border-emerald-500">
                <h3 class="font-black text-lg text-sky-600 italic uppercase">GIORNO 5</h3>
                <p class="text-sm italic mb-4 font-bold">Arrivo a Rovaniemi e ingresso nel regno di Babbo Natale.</p>
                <div class="text-sm space-y-3 italic leading-relaxed">
                    <p><i class="fas fa-home mr-2 text-emerald-500"></i><strong>Mattina:</strong> Arrivo alla stazione e check-in in resort presso <a href="https://skyviewigloos.com/" target="_blank" class="attraction-link">SkyView</a>, <a href="https://aitoresort.com/" target="_blank" class="attraction-link">Aito</a> o <a href="https://aitoresort.com/rooms/aurora-nest/" target="_blank" class="attraction-link">Aurora Nest</a>.</p>
                    <p><i class="fas fa-gift mr-2 text-emerald-500"></i><strong>Pomeriggio:</strong> Visita al <a href="https://santaclausvillage.info/it/" target="_blank" class="attraction-link">Santa Claus Village</a> e, a seguire, <strong>gita con le renne</strong> nelle foreste lapponi adiacenti.</p>
                    <p><i class="fas fa-hot-tub mr-2 text-emerald-500"></i><strong>Sera:</strong> Relax e cena in hotel. Notte artica in camera con <strong>vista panoramica (Bellavista)</strong> per avvistare l'Aurora comodamente al caldo.</p>
                </div>
            </div>

            <!-- Giorno 6 -->
            <div class="bg-white p-6 rounded-lg shadow day-box border-emerald-500">
                <h3 class="font-black text-lg text-sky-600 italic uppercase">GIORNO 6</h3>
                <div class="text-sm space-y-3 italic leading-relaxed">
                    <p><i class="fas fa-key mr-2 text-emerald-500"></i><strong>Mattina:</strong> Spostamento nel nuovo <a href="https://www.airbnb.it/rovaniemi-finland/stays" target="_blank" class="attraction-link">alloggio (Airbnb)</a>, ritiro dell'attrezzatura noleggiata presso <a href="https://www.laplandsafaris.com/en/clothing-rental" target="_blank" class="attraction-link">Lapland Safaris</a> e spesa nei supermercati locali (K-Citymarket o Prisma).</p>
                    <p><i class="fas fa-camera mr-2 text-emerald-500"></i><strong>Pomeriggio:</strong> Esplorazione libera del centro di Rovaniemi o relax pre-aurora.</p>
                    <p><i class="fas fa-star mr-2 text-emerald-500"></i><strong>Sera:</strong> Caccia all'aurora boreale con tour guidato di <a href="https://wildaboutlapland.com/" target="_blank" class="attraction-link">Wild About Lapland</a>, esperti cacciatori di luci del Nord.</p>
                </div>
            </div>

            <!-- Giorno 7 -->
            <div class="bg-white p-6 rounded-lg shadow day-box border-emerald-500">
                <h3 class="font-black text-lg text-sky-600 italic uppercase">GIORNO 7</h3>
                <div class="text-sm space-y-3 italic leading-relaxed">
                    <p><strong>Opzioni per la giornata:</strong></p>
                    <ul class="list-disc ml-5 space-y-2">
                        <li><strong>Cultura:</strong> Visita all'<a href="https://www.arktikum.fi/en/" target="_blank" class="attraction-link">Arktikum</a> per scoprire la storia e la natura del nord.</li>
                        <li><strong>Relax:</strong> <a href="https://arcticsnowhotel.fi/" target="_blank" class="attraction-link">Arctic Snow Hotel</a> per esplorare le strutture di ghiaccio.</li>
                        <li><strong>Avventura:</strong> <a href="https://ranuaresort.com/en/wildlife-park/" target="_blank" class="attraction-link">Zoo di Ranua</a> (orsi polari) o trekking nella <a href="https://wildaboutlapland.com/" target="_blank" class="attraction-link">Riserva Naturale di Korouoma</a>.</li>
                        <li><strong>Magia:</strong> <a href="https://santapark.fi/" target="_blank" class="attraction-link">SantaPark</a>, il parco sotterraneo degli elfi.</li>
                    </ul>
                </div>
            </div>

            <!-- Giorno 8 -->
            <div class="bg-white p-6 rounded-lg shadow day-box">
                <h3 class="font-black text-lg text-sky-600 italic uppercase">GIORNO 8</h3>
                <p class="text-sm font-bold mb-2 uppercase tracking-wide">Rovaniemi <i class="fas fa-plane text-sky-400 px-1"></i> Milano</p>
                <p class="text-sm text-slate-700 italic leading-relaxed">
                    Tempo per gli ultimi acquisti di souvenir e artigianato locale nel centro di Rovaniemi. Trasferimento in aeroporto per il check-in e volo di rientro per Milano. Fine della spedizione artica Limitless.
                </p>
            </div>
        </div>

        <!-- SEZIONE EQUIPAGGIAMENTO ARTICO -->
        <section class="mt-16 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden border-b-8 border-sky-500">
            <h2 class="text-2xl font-black mb-8 flex items-center italic uppercase tracking-tighter">
                <i class="fas fa-box-open mr-4 text-sky-400"></i> Equipaggiamento Rovaniemi
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <h4 class="text-sky-400 font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-1">Abbigliamento Tecnico</h4>
                    <ul class="text-[13px] tech-list italic leading-relaxed opacity-90">
                        <li><i class="fas fa-check"></i> <span>Intimo termico pesante in lana merino (maglia e calzamaglia).</span></li>
                        <li><i class="fas fa-check"></i> <span>Secondo strato: Pile tecnico ad alta densità.</span></li>
                        <li><i class="fas fa-check"></i> <span>Piumino tecnico "Ultra Warm" con cappuccio isolante.</span></li>
                        <li><i class="fas fa-check"></i> <span>Pantaloni da neve impermeabili e antivento.</span></li>
                        <li><i class="fas fa-check"></i> <span>Calze termiche in lana merino (strato base + strato pesante).</span></li>
                        <li><i class="fas fa-check"></i> <span>Doposci certificati per temperature estreme (-30°C).</span></li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="text-sky-400 font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-1">Protezione & Gadget</h4>
                    <ul class="text-[13px] tech-list italic leading-relaxed opacity-90">
                        <li><i class="fas fa-check"></i> <span>Sottoguanti sottili + Muffole tecniche imbottite.</span></li>
                        <li><i class="fas fa-check"></i> <span>Berretto di lana + Passamontagna o scaldacollo termico.</span></li>
                        <li><i class="fas fa-check"></i> <span><strong>Scaldini chimici adesivi</strong> (per mani, piedi e schiena).</span></li>
                        <li><i class="fas fa-check"></i> <span>Custodia termica isolante per smartphone + Powerbank capiente.</span></li>
                        <li><i class="fas fa-check"></i> <span>Balsamo labbra protettivo e crema viso anti-freddo (senza acqua).</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- BUDGET & COSTI -->
        <section class="mt-16 bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
            <h2 class="text-xl font-black mb-6 italic uppercase flex items-center">
                <i class="fas fa-wallet mr-3 text-sky-600"></i> Stima Costi Attrazioni & Trasporti
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm italic">
                <div>
                    <h4 class="text-[10px] font-black uppercase text-sky-600 tracking-widest mb-3">Helsinki & Travel</h4>
                    <ul class="space-y-2">
                        <li class="flex justify-between"><span>Santa Claus Express (Cabina Doppia)</span> <span class="cost-badge">€ 120.00</span></li>
                        <li class="flex justify-between"><span>Traghetto Suomenlinna (A/R)</span> <span class="cost-badge">€ 5.00</span></li>
                        <li class="flex justify-between"><span>Chiesa nella Roccia</span> <span class="cost-badge">€ 5.00</span></li>
                        <li class="flex justify-between"><span>Sauna Löyly</span> <span class="cost-badge">€ 23.00</span></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-[10px] font-black uppercase text-emerald-600 tracking-widest mb-3">Rovaniemi Experience</h4>
                    <ul class="space-y-2">
                        <li class="flex justify-between"><span>Tour Caccia all'Aurora</span> <span class="cost-badge">€ 110.00</span></li>
                        <li class="flex justify-between"><span>Gita con le Renne</span> <span class="cost-badge">€ 80.00</span></li>
                        <li class="flex justify-between"><span>Arktikum Ticket</span> <span class="cost-badge">€ 18.00</span></li>
                        <li class="flex justify-between"><span>SantaPark</span> <span class="cost-badge">€ 42.00</span></li>
                    </ul>
                </div>
            </div>
        </section>

    </main>
            <div class="p-10 bg-slate-50 border-t flex justify-center">
                <!-- FIXED: added modalId argument -->
                <button onclick="toggleModal('helsinkiModal')" class="bg-slate-900 text-white px-14 py-4 rounded-full font-bold shadow-2xl hover:bg-emerald-600 transition uppercase tracking-widest text-xs italic">Chiudi</button>
            </div>
        </div>
    </div>
`;
