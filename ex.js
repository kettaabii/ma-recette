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
function displayRecipes(recipes) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    recipes.forEach(recipe => {
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("col-md-4", "mb-4");

        const card = `
            <div class="card">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.name}</h5>
                    <p class="card-text">Ingredients: ${recipe.Ingredients}</p>
                    <input type="range" min="0" max="5" step="0.1" class="form-range" id="rating${recipe.id}" onchange="rateRecipe(${recipe.id}, this.value)">
                    <p id="rating-value-${recipe.id}" class="card-text">Rating: ${recipe.rating}</p>
                    <p class="card-text">Catégorie: ${recipe.category}</p>
                    
                    <div class="buuu">
                    <button class="btn btn-primary custom-view-button" onclick="displayDescription(${recipe.id})"  >Voir la recette</button>
                    <button class="btn btn-danger custom-view-button1" onclick="deleteRecipe(${recipe.id})">Supprimer</button></div>
                </div>
                <div class="description-section" id="description-${recipe.id}" style="display: none;">
                    <h6>Description:</h6>
                    <p>${recipe.description}</p>
                    <form class="comment-form">
                        <div class="mb-3">
                            <label for="commentName">Nom:</label>
                            <input type="text" class="form-control" id="commentName-${recipe.id}" placeholder="Votre nom">
                        </div>
                        <div class="mb-3">
                            <label for="commentText">Commentaire:</label>
                            <textarea class="form-control" id="commentText-${recipe.id}" placeholder="Votre commentaire"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary" onclick="addComment(${recipe.id})">Ajouter Commentaire</button>
                        <button class="btn btn-secondary" onclick="closeDescription(${recipe.id})">Fermer</button>
                    </form>
                    <div class="comments-list" id="comments-${recipe.id}"></div>
                   
                </div>
            </div>
        `;
   
        recipeItem.innerHTML = card;
        recipeList.appendChild(recipeItem);
    });
   
   
    
}
function addToMyList(recipeId) {
    // Ici, vous pouvez ajouter la logique pour ajouter la recette à "Ma Liste"
    // Par exemple, vous pouvez stocker les recettes favorites dans le localStorage
    let myRecipeList = JSON.parse(localStorage.getItem('myRecipeList')) || [];
    
    // Vérifier si la recette est déjà dans la liste
    const existingRecipe = myRecipeList.find(recipe => recipe.id === recipeId);
    
    if (!existingRecipe) {
        // Si la recette n'est pas déjà dans la liste, l'ajouter
        const recipeToAdd = recipes.find(recipe => recipe.id === recipeId);
        if (recipeToAdd) {
            myRecipeList.push(recipeToAdd);
           localStorage.setItem('myRecipeList', JSON.stringify(myRecipeList));
            alert('Recette ajoutée à votre liste!\n\n' + recipeToAdd.description); // Afficher la description de la recette dans l'alerte
        } else {
            alert('Recette non trouvée.');
        }
    } else {
        myRecipeList.push(recipeToAdd);
        localStorage.setItem('myRecipeList', JSON.stringify(myRecipeList));
        alert('Cette recette est déjà dans votre liste!');
        
    }
}
function addToMyList(recipeId) {
    let myRecipeList = JSON.parse(localStorage.getItem('myRecipeList')) || [];
    const existingRecipe = myRecipeList.find(recipe => recipe.id === recipeId);

    if (!existingRecipe) {
        const recipeToAdd = recipes.find(recipe => recipe.id === recipeId);
        if (recipeToAdd) {
            myRecipeList.push(recipeToAdd);
            localStorage.setItem('myRecipeList', JSON.stringify(myRecipeList));
            alert('Recette ajoutée à votre liste!\n\n' + recipeToAdd.description);
            displayMyRecipeList(); // Afficher la liste mise à jour
        } else {
            alert('Recette non trouvée.');
        }
    } else {
        alert('Cette recette est déjà dans votre liste!');
        displayMyRecipeList(); // Afficher la liste existante
    }
}
function displayMyRecipeList() {
    const myRecipeListContainer = document.getElementById('myRecipeList');
    myRecipeListContainer.innerHTML = ''; // Effacer le contenu actuel

    let myRecipeList = JSON.parse(localStorage.getItem('myRecipeList')) || [];
    if (myRecipeList.length === 0) {
        myRecipeListContainer.innerHTML = '<p>Aucune recette dans votre liste.</p>';
        return;
    }

    myRecipeList.forEach(recipe => {
        const recipeCard = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${recipe.name}</h5>
                    <p class="card-text">Ingredients: ${recipe.Ingredients}</p>
                    <p class="card-text">Description: ${recipe.description}</p>
                </div>
            </div>
        `;
        myRecipeListContainer.innerHTML += recipeCard;
    });
}














function displayRecipes(recipes) {
       
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    recipes.forEach(recipe => {
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("col-md-4", "mb-4");

        const card = `
            <div class="card">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.name}</h5>
                  
                    <p class="card-text">Ingredients: ${recipe.Ingredients}</p>
                    <p class="card-text">Publication Date: ${recipe.publicationDate}</p>
                    <p class="card-text">Catégorie: ${recipe.category}</p>
                    
                <p class="card-text">Time Cooking: ${recipe.timeCooking || "Non spécifié"}</p>
                
                <div class="position">
                        <div class="progress">
                            <div class="progress-bar bg-danger" id="progress-bar-${recipe.id}" role="progressbar" style="width: ${recipe.progress * 10}%; color:#FFBD59;"
                                aria-valuenow="${recipe.progress * 10}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p id="rating-value-${recipe.id}" class="card-text">Rating: ${recipe.rating}/10</p>
                        <p> progress rating after review </p<
                        <p id="rating-value-${recipe.id}" class="card-text">Rating: ${recipe.progress}/10</p>

                    </div>
                    <div class="buuu">
                        <button class="btn btn-primary custom-view-button" onclick="displayDescription(${recipe.id})">Voir la recette</button>
                        <button class="btn btn-success custom-view-button1" onclick="addToMyList(${recipe.id})">Ajouter à ma liste</button>
                    </div>
                </div>
            </div>
            <div class="description-section" id="description-${recipe.id}" style="display: none;">
                <form class="ss">
                    <div>
                        <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
                        <h6>Description:</h6>
                        <p>${recipe.description}</p>
                        <h1>${recipe.name}</h1>
                        <p>description les étapes</p>
                        <p class="card-text">Steps:</p>
                <ul>
                    ${recipe.steps ? recipe.steps.map(step => `<li>${step}</li>`).join('') : '<li>Steps not specified</li>'}
                </ul>
                    </div>
                    <div class="interactive-section">
                        <div class="mb-3">
    <label for="progressInput-${recipe.id}">Progression:</label>
    <input type="number" class="form-control" id="progressInput-${recipe.id}" min="0" max="10" step="0.1" value="${recipe.progress || 0}" onchange="updateProgress(${recipe.id})">
</div>
<!-- Reste du contenu du formulaire -->
<p>rating :</p>
<div class="progress">
    <div class="progress-bar bg-danger" id="progress-bar-${recipe.id}" role="progressbar" style="width: ${recipe.progress * 10}%; color:#FFBD59;"
        aria-valuenow="${recipe.progress * 10}" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p id="rating-value-${recipe.id}" class="card-text">Rating: ${recipe.progress}/10</p>

<p>rating review</p>
<div class="progress">
    <div class="progress-bar bg-danger" id="progress-bar-${recipe.id}" role="progressbar" style="width: ${recipe.progress * 10}%; color:#FFBD59;"
        aria-valuenow="${recipe.progress * 10}" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p id="rating-value-${recipe.id}" class="card-text">Rating: ${recipe.rating}/10</p>
                        <div class="time">Time : 30 min</div>
                        <form class="comment-form">
                            <div class="mb-3">
                                <label for="commentName">Nom:</label>
                                <input type="text" class="form-control textareA" id="commentName-${recipe.id}" placeholder="Votre nom">
                            </div>
                            <div class="mb-3">
                                <label for="commentText">Commentaire:</label>
                                <textarea class="form-control textare" id="commentText-${recipe.id}" placeholder="leave a comment"></textarea>
                            </div>
                            <button type="button" class="btn btn-primary SUBMIT" onclick="addComment(${recipe.id})">Ajouter Commentaire</button>
                            <button class="btn btn-secondary" onclick="closeDescription(${recipe.id})">Fermer</button>
                        </form>
                        <div class="comments-list" id="comments-${recipe.id}"></div>
                    </div>
                </form>
            </div>
        `;
        recipeItem.innerHTML = card;
        recipeList.appendChild(recipeItem);

        ratingValue.textContent = `Rating: ${recipe.rating}/10`;
        const ratingInput = document.getElementById(`rating${recipe.id}`);
        const ratingValue = document.getElementById(`rating-value-${recipe.id}`);
        ratingInput.addEventListener('input', function() {
            const rating = parseFloat(ratingInput.value).toFixed(1);
            ratingValue.textContent = `Rating: ${rating}`;
            rateRecipe(recipe.id, rating); // Appeler la fonction rateRecipe pour mettre à jour le rating
        });
    });
}