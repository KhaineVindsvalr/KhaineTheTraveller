
window.soulsSoundsModalHTML = `
<!-- Modal Window Wrapper (Logic) -->
<div id="soulsSoundsModal" aria-hidden="true" style="display: none; position: fixed; inset: 0; z-index: 200; background: rgba(15, 23, 42, 0.95); overflow-y: auto;">
    
    <!-- Modal Content Container -->
    <div class="min-h-screen px-2 md:px-4 py-12 flex items-center justify-center">
        
        <!-- Inner Card -->
        <div class="w-full max-w-6xl bg-white text-[#1a1a1a] leading-relaxed rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative mb-12">
            
            <!-- Close Button -->
            <button onclick="toggleModal('soulsSoundsModal')" 
                    class="absolute top-4 right-4 z-[200] text-gray-400 hover:text-emerald-500 transition flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm"
                    aria-label="Chiudi Modal">
                <span class="text-2xl font-light leading-none">&times;</span>
            </button>

            <!-- Iframe for Wardruna Content -->
            <div class="w-full h-[85vh]">
                <iframe src="assets/wardruna.html" 
                        style="width: 100%; height: 100%; border: none;" 
                        title="Soul's Sounds">
                </iframe>
            </div>

        </div>
    </div>
</div>
`;

console.log("Soul's Sounds Modal Loaded Successfully.");

