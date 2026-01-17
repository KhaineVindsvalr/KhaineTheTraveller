
window.blogModalHTML = `
    <!-- Modal: Blog (Le Mie Avventure) -->
    <div id="blogModal" aria-hidden="true">
        <div class="max-w-4xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-2xl relative">
            <div class="relative p-8 md:p-12">
                <button onclick="toggleModal('blogModal')" class="absolute top-6 right-6 text-3xl hover:text-emerald-300 transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>
                <h2 class="text-3xl font-bold italic mb-4">Le Mie Avventure</h2>
                <p class="text-slate-600 mb-6">Sfoglia la mia raccolta completa di foto, racconti e percorsi passati sul mio profilo ufficiale.</p>
                <div class="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-200">
                    <div class="flex flex-col items-center">
                        <div class="mb-6">
                            <img src="https://play-lh.googleusercontent.com/lR2-p5ZJirKzKZ5itDfDnsaLSRuckV88LcHTdXxgB5o4pFtXofjelQ5VB3o_TbIvYmg=w240-h480-rw" alt="Limitless Logo" class="w-24 h-24 object-contain rounded-2xl shadow-md">
                        </div>
                        <h3 class="text-2xl font-bold mb-4 italic text-slate-800 tracking-tight">Limitless su FindPenguins</h3>
                        <p class="text-slate-500 mb-8 max-w-md mx-auto">Mappe interattive e diari di bordo disponibili sul mio profilo pubblico.</p>
                        <a href="https://findpenguins.com/7k9vmdnslhnk7" target="_blank" class="inline-flex items-center px-10 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 uppercase tracking-widest text-sm group">
                            Vai alla Galleria Viaggi
                            <i class="fas fa-external-link-alt ml-3 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="p-8 bg-slate-50 border-t text-right">
                <button onclick="toggleModal('blogModal')" class="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-600 transition">Chiudi</button>
            </div>
        </div>
    </div>
`;
