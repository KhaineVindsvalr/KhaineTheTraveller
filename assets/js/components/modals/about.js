
window.aboutModalHTML = `
    <!-- Modal: Chi sono -->
    <div id="chiSonoModal" aria-hidden="true">
        <div class="max-w-2xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-2xl relative">
            <div class="relative p-8 md:p-12">
                <button onclick="toggleModal('chiSonoModal')" class="absolute top-6 right-6 text-3xl hover:text-emerald-300 transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>
                <div>
                    <div>
                        <h2 class="text-2xl font-bold mb-2 italic">Chi sono</h2>
                        <p class="text-slate-700 leading-relaxed">Sono Khaine, viaggio in solitaria, tra amici o in gruppo, sacco in spalla, auto o mezzi pubblici. Mi piace creare itinerari personalizzati. Amo esplorare culture, raccontare esperienze e aiutare altri viaggiatori a progettare avventure autentiche.</p>
                    </div>
                </div>
            </div>
            <div class="p-8 bg-slate-50 border-t text-right">
                <button onclick="toggleModal('chiSonoModal')" class="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-600 transition">Chiudi</button>
            </div>
        </div>
    </div>
`;
