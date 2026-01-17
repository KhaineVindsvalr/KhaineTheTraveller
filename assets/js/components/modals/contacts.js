
window.contactsModalHTML = `
    <!-- Modal: Contatti -->
    <div id="contattiModal" aria-hidden="true">
        <div class="max-w-3xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-2xl relative">
            <div class="relative p-8 md:p-12">
                <button onclick="toggleModal('contattiModal')" class="absolute top-6 right-6 text-3xl hover:text-emerald-300 transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>
                <h2 class="text-2xl font-bold mb-4 italic text-slate-900">Mettiamoci in Contatto</h2>
                <div class="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 shadow-sm inline-block w-full max-w-2xl transform transition hover:scale-[1.02]">
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg shadow-emerald-200">
                            <i class="fas fa-envelope-open-text"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2 uppercase tracking-tighter text-slate-800">Scrivimi una mail</h3>
                        <a href="mailto:limitless.worldcompass@gmail.com" class="text-sm sm:text-2xl md:text-3xl font-bold text-emerald-600 hover:text-emerald-500 transition-colors whitespace-nowrap">
                            limitless.worldcompass@gmail.com
                        </a>
                        <p class="mt-3 text-slate-400 text-[10px] md:text-sm uppercase tracking-widest">Rispondo solitamente entro 24 ore</p>
                    </div>
                </div>
            </div>
            <div class="p-8 bg-slate-50 border-t text-right">
                <button onclick="toggleModal('contattiModal')" class="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-600 transition">Chiudi</button>
            </div>
        </div>
    </div>
`;
