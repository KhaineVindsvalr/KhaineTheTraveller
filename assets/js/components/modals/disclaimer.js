
window.disclaimerModalHTML = `
    <!-- Modale Disclaimer Legale -->
    <div id="disclaimerModal">
        <div class="max-w-3xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-2xl relative">
            <div class="relative p-8 md:p-12">
                <button onclick="toggleModal('disclaimerModal')" class="absolute top-6 right-6 text-3xl hover:text-emerald-300 transition z-20 bg-black/20 w-12 h-12 rounded-full">&times;</button>
                <h2 class="text-2xl font-bold mb-4 italic">Disclaimer Legale</h2>
                <div class="text-sm text-slate-700 space-y-4 leading-relaxed">
                    <p>Il sito https://khainevindsvalr.github.io/KhaineTheTraveller/ è un blog personale e un portale di consulenza itinerari gestito da Enrico De A.</p>

                    <p>Si precisa che il titolare non è un’agenzia di viaggi né un tour operator. In conformità con la normativa vigente (D.Lgs. 79/2011), l'attività svolta consiste esclusivamente nella pianificazione di itinerari personalizzati e nella consulenza strategica al viaggio.</p>

                    <p><strong>Il servizio non include:</strong></p>
                    <ul class="list-disc ml-6 space-y-2">
                        <li>La vendita o l'organizzazione di pacchetti turistici.</li>
                        <li>La prenotazione diretta di voli, hotel o trasporti per conto del cliente.</li>
                        <li>L'incasso di somme destinate a fornitori terzi.</li>
                    </ul>

                    <p>Tutte le prenotazioni suggerite durante la consulenza dovranno essere effettuate dal cliente in autonomia o tramite agenzie di viaggio autorizzate. Il titolare non è responsabile per eventuali disservizi causati dai fornitori dei servizi turistici suggeriti.</p>
                </div>
                <div class="mt-8 flex justify-center">
                    <button onclick="toggleModal('disclaimerModal')" class="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition">Chiudi</button>
                </div>
            </div>
        </div>
    </div>
`;
