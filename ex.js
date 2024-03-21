function displayRecipes(recipes) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Nettoyer la liste avant d'ajouter les nouvelles recettes

    recipes.forEach(recipe => {
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("col-md-4", "mb-4");

        const card = `
            <div class="card">
                <div class="card-body">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                    <h5 class="card-title">${recipe.name}</h5>
                    <p class="card-text">Note: ${recipe.rating}</p>
                    <button class="btn btn-primary" onclick="displayDescription(${recipe.id})">Voir la recette</button>
                </div>
            </div>
        `;

        recipeItem.innerHTML = card;
        recipeList.appendChild(recipeItem);
    });
}
function displayDescription(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        alert(recipe.description);
    }
}