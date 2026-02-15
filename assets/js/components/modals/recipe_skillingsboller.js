window.recipeSkillingsbollerModalHTML = `
<!-- Modal Window Wrapper -->
<div id="recipeSkillingsbollerModal" aria-hidden="true" style="display: none; position: fixed; inset: 0; z-index: 200; background: rgba(15, 23, 42, 0.95);" onclick="event.target.id === 'recipeSkillingsbollerModal' && toggleModal('recipeSkillingsbollerModal')">
    
    <!-- Modal Content Container - Full Screen -->
    <div style="position: absolute; inset: 0; display: flex; flex-direction: column;" onclick="event.stopPropagation()">
        
        <!-- Close Button (Top) -->
        <button onclick="toggleModal('recipeSkillingsbollerModal')" 
                style="position: absolute; top: 20px; right: 20px; z-index: 201; background: white; border: 1px solid #e5e7eb; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #9ca3af; transition: color 0.3s;"
                onmouseover="this.style.color='#0369a1'"
                onmouseout="this.style.color='#9ca3af'"
                aria-label="Chiudi Modal">
            &times;
        </button>

        <!-- Iframe for Recipe Content - Full Size -->
        <iframe src="assets/recipe_skillingsboller.html" 
                style="width: 100%; height: 100%; border: none; display: block;" 
                title="Ricetta Skillingsboller Norvegesi">
        </iframe>

    </div>
</div>
`;

console.log("Recipe Skillingsboller Modal Loaded Successfully.");