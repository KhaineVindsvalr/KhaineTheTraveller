
window.mainHTML = `
    <section id="destinazioni" class="py-24 max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 italic">Itinerari</h2>
            <div class="h-1 w-20 bg-emerald-500 mx-auto"></div>
            <p class="text-slate-500 mt-4">Piani di viaggio dettagliati creati da esperti viaggiatori.</p>
        </div>

        <div class="flex flex-wrap gap-8 lg:gap-12 px-2 justify-center">
            <!-- Itinerario Dublino -->
            <div onclick="toggleModal('itinerarioModal')" class="cursor-pointer group card-zoom relative overflow-hidden rounded-2xl shadow-lg h-[220px] border-4 border-emerald-500/20 transition-all hover:border-emerald-500 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img src="https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=1200&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover transition duration-700 brightness-75 group-hover:brightness-100 rounded-2xl">
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-transparent to-transparent opacity-90 rounded-2xl"></div>
                <div class="absolute left-6 bottom-6 right-6 text-white">
                    <span class="bg-emerald-600 text-[10px] px-3 py-1 rounded-full uppercase inline-block font-bold tracking-widest shadow-sm">5 Giorni</span>
                    <h3 class="text-xl font-bold uppercase tracking-tighter mb-1 italic">Dublin's Tour</h3>
                    <p class="text-slate-200 text-xs mb-2 leading-snug">Alla scoperta di Dublino e dintorni, tra cultura e Pub.</p>
                </div>
            </div>

            <!-- Itinerario Helsinki -->
            <div onclick="toggleModal('helsinkiModal')" class="cursor-pointer group card-zoom relative overflow-hidden rounded-2xl shadow-lg h-[220px] border-4 border-blue-500/20 transition-all hover:border-blue-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img src="https://images.unsplash.com/photo-1522885147691-06d859633fb8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1200&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover transition duration-700 brightness-75 group-hover:brightness-100 rounded-2xl">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-transparent to-transparent opacity-90 rounded-2xl"></div>
                <div class="absolute left-6 bottom-6 right-6 text-white">
                    <span class="bg-blue-600 text-[10px] px-3 py-1 rounded-full uppercase inline-block font-bold tracking-widest shadow-sm">8 Giorni</span>
                    <h3 class="text-xl font-bold uppercase tracking-tighter mb-1 italic">Finnish Dreams</h3>
                    <p class="text-slate-200 text-xs mb-2 leading-snug">Tra il design di Helsinki e le magiche nevi di Rovaniemi.</p>
                </div>
            </div>
            <!-- Copenaghen: card che apre la modale con l'itinerario (cope.html) -->
            <div onclick="toggleModal('copeModal')" class="cursor-pointer group card-zoom relative overflow-hidden rounded-2xl shadow-lg h-[220px] border-4 border-red-500/20 transition-all hover:border-red-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=1200" class="absolute inset-0 w-full h-full object-cover transition duration-700 brightness-75 group-hover:brightness-100 rounded-2xl">
                <div class="absolute inset-0 bg-gradient-to-r from-red-950/80 via-transparent to-transparent opacity-90 rounded-2xl"></div>
                <div class="absolute left-6 bottom-6 right-6 text-white">
                    <span class="bg-red-600 text-[10px] px-3 py-1 rounded-full uppercase inline-block font-bold tracking-widest shadow-sm">5 Giorni</span>
                    <h3 class="text-xl font-bold uppercase tracking-tighter mb-1 italic">Copenaghen</h3>
                    <p class="text-slate-200 text-xs mb-2 leading-snug">Dai canali di Copenaghen ai bastioni di Amleto: un viaggio tra design e leggenda.</p>
                </div>
            </div>

            <!-- Montefeltro -->
            <div onclick="toggleModal('montefeltroModal')" class="cursor-pointer group card-zoom relative overflow-hidden rounded-2xl shadow-lg h-[220px] border-4 border-amber-500/20 transition-all hover:border-amber-500 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img src="https://images.unsplash.com/photo-1768030980110-8cc32814ca0a?auto=format&fit=crop&q=80&w=1920" class="absolute inset-0 w-full h-full object-cover transition duration-700 brightness-75 group-hover:brightness-100 rounded-2xl">
                <div class="absolute inset-0 bg-gradient-to-r from-amber-950/80 via-transparent to-transparent opacity-90 rounded-2xl"></div>
                <div class="absolute left-6 bottom-6 right-6 text-white">
                    <span class="bg-amber-600 text-[10px] px-3 py-1 rounded-full uppercase inline-block font-bold tracking-widest shadow-sm">3 Giorni</span>
                    <h3 class="text-xl font-bold uppercase tracking-tighter mb-1 italic">Montefeltro</h3>
                    <p class="text-slate-200 text-xs mb-2 leading-snug">Viaggio nell'armonia delle forme e nel silenzio dei borghi.</p>
                </div>
            </div>

            <!-- Nuova area Work in Progress (a lato di Copenaghen) -->
            <div class="group relative overflow-hidden rounded-2xl shadow-lg h-[220px] border-2 border-dashed border-emerald-300 flex items-center justify-center bg-white/60 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div class="text-center p-4">
                    <h3 class="text-xl font-bold uppercase italic mb-1">work in progress</h3>
                    <p class="text-slate-600 mb-3 text-sm">Prossimi itinerari in arrivo. Torna presto!</p>
                    <a href="#" class="inline-block mt-1 px-4 py-2 rounded-full border border-slate-200 text-slate-700 font-bold uppercase text-[10px]">Scopri presto</a>
                </div>
            </div>
        </div>
    </section>
`;
