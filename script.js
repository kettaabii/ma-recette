// function search(){
//     let searchBar = document.querySelector('.searchInput').value.toUpperCase();
//     let recetteList = document.querySelector('.recettes-liste');
//     let recette = document.querySelector('.recette')
//     let recetteName = document.getElementsByTagName('h2')

  
// for(let i = 0; i<recette ; i++){
//     if(recetteName[i].innerHTML.toUpperCase().indexOf(searchBar) >=0){
//         recette[i].style.display = "";
//     }
//     else{ 
//         recette[i].style.display = "none";
//     }
// }
// }
 // Exemple de données de recettes
 let recipes = [
    {id: 1, image: "https://via.placeholder.com/200", name: "Tarte aux pommes",Ingredients: "Tarte aux pommes",  description: "Délicieuse tarte aux pommes faite avec des pommes fraîches et une croûte croustillante." ,rating: 4.5, category: "DESSERTS"},
    {id: 2, image: "https://via.placeholder.com/300", name: "Poulet rôti",Ingredients: "Tarte aux pommes",description: "Poulet juteux rôti au four avec des herbes et des épices.", rating: 4.0, category: "PLATS PRINCIPAUX" },
    {id: 3, image: "https://via.placeholder.com/300", name: "Salade César",Ingredients: "Tarte aux pommes", description: "Salade croustillante aux feuilles de laitue, croûtons, parmesan et vinaigrette César.",rating: 3.8, category: "PLATS PRINCIPAUX" },
    {id: 4, image: "https://via.placeholder.com/300", name: "Spaghetti bolognaise",Ingredients: "Tarte aux pommes", description: "Spaghetti garni d'une sauce bolognaise maison savoureuse à la viande et aux tomates.",rating: 4.2, category: "PLATS PRINCIPAUX" },
    {id: 5, image: "https://via.placeholder.com/300", name: "Muffins aux myrtilles", Ingredients: "Tarte aux pommes", description: "Délicieux muffins moelleux remplis de myrtilles fraîches.",rating: 4.7, category: "DESSERTS", },
    {id: 6, image: "https://via.placeholder.com/300", name: "Sushi california",Ingredients: "Tarte aux pommes",description: "Rouleaux de sushi remplis de crabe, d'avocat et de concombre, enveloppés dans du riz et de l'algue nori.", rating: 4.9, category: "PLATS PRINCIPAUX"},
    {id: 7, image: "https://via.placeholder.com/300", name: "Soupe à l'oignon",Ingredients: "Tarte aux pommes", description: "Soupe chaude et réconfortante à base d'oignons caramélisés et de bouillon de poulet.", rating: 3.5, category: "PLATS PRINCIPAUX"},
    {id: 8, image: "https://via.placeholder.com/300", name: "Pancakes",Ingredients: "Tarte aux pommes",description: "Délicieux pancakes moelleux servis avec du sirop d'érable et du beurre.", rating: 4.3, category: "DESSERTS", },
    {id: 9, image: "https://via.placeholder.com/300", name: "Risotto aux champignons",Ingredients: "Tarte aux pommes", description: "Risotto crémeux aux champignons, cuit lentement avec du bouillon et du vin blanc.",rating: 4.6, category: "PLATS PRINCIPAUX",},
    {id: 10, image: "https://via.placeholder.com/300", name: "Gâteau au chocolat",Ingredients: "Tarte aux pommes", description: "Gâteau moelleux au chocolat noir avec un glaçage onctueux.",rating: 4.8, category: "DESSERTS" }
];

// Fonction pour afficher les recettes
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
                    <div id="rating-slider-${recipe.id}" class="rating-slider"></div>
                    <p id="rating-value-${recipe.id}" class="card-text">Rating: ${recipe.rating}</p>
                    <p class="card-text">Catégorie: ${recipe.category}</p>
                    <div class="form-group mt-2">
                        <label for="rating">Note:</label>
                        <select class="form-select" id="rating${recipe.id}" onchange="rateRecipe(${recipe.id}, this.value)">
                            <option value="">Sélectionner une note</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
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
    
    

    // Initialize noUiSlider for this recipe
    const slider = document.getElementById(`rating-slider-${recipe.id}`);
    const valueElement = document.getElementById(`rating-value-${recipe.id}`);

    noUiSlider.create(slider, {
        start: [recipe.rating], // Initial value
        step: 0.1, // Step size
        range: {
            'min': 0,
            'max': 5
        },
        format: {
            to: value => parseFloat(value).toFixed(1),
            from: value => parseFloat(value)
        }
    });

    // Update the rating value when slider changes
    slider.noUiSlider.on('update', values => {
        const rating = values[0];
        valueElement.innerHTML = `Rating: ${rating}`;
        // You can update the recipe object here with the new rating
    });
});
}


function displayDescription(recipeId) {
const recipe = recipes.find(r => r.id === recipeId);
if (recipe) {
    const descriptionSection = document.getElementById(`description-${recipe.id}`);
    const isVisible = descriptionSection.style.display === 'block';

    // Fermer toutes les autres descriptions
    const allDescriptionSections = document.querySelectorAll('.description-section');
    allDescriptionSections.forEach(section => {
        section.style.display = 'none';
    });

    if (!isVisible) {
        descriptionSection.style.display = 'block';
    }
}

}


function closeDescription(recipeId) {
const descriptionSection = document.getElementById(`description-${recipeId}`);
if (descriptionSection) {
    descriptionSection.style.display = 'none';
}
}


// filtrer  par catégorie
function filterRecipesByCategory(category) {
    const filteredRecipes = recipes.filter(recipe => recipe.category === category);
    displayRecipes(filteredRecipes);
}

// cat
const categoryLinks = document.querySelectorAll(".category");
categoryLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const category = e.target.dataset.category;
        filterRecipesByCategory(category);
    });
});

// Pagi
function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

// Pagi
document.addEventListener("DOMContentLoaded", function() {
    const PAGE_SIZE = 6; 
    let currentPage = 1;

    displayRecipes(paginate(recipes, PAGE_SIZE, currentPage));

    
    const paginationLinks = document.querySelectorAll(".page-link");
    paginationLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const pageNumber = parseInt(e.target.innerText);
            if (!isNaN(pageNumber)) {
                currentPage = pageNumber;
                displayRecipes(paginate(recipes, PAGE_SIZE, currentPage));
            }
        });
    });

    document.getElementById("previous-button").addEventListener("click", function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayRecipes(paginate(recipes, PAGE_SIZE, currentPage));
        }
    });
    document.getElementById("next-button").addEventListener("click", function(e) {
        e.preventDefault();
        if (currentPage > 0) {
            currentPage++;
            displayRecipes(paginate(recipes, PAGE_SIZE, currentPage));
        }
    });
});

function addRecipe() {
    const recipeTitle = document.getElementById('recipeTitle').value;
    const recipeCategory = document.getElementById('recipeCategory').value;
    const recipeIngredients = document.getElementById('recipeIngredients').value.split(',');
    const recipeSteps = document.getElementById('recipeSteps').value.split('\n');
    const recipeImage = document.getElementById('recipeImage').value;

    const newRecipe = {
        id: recipes.length + 1,
        image: recipeImage,
        name: recipeTitle,
        rating: "",
        category: recipeCategory,
        description:recipeSteps ,
        ingredients: recipeIngredients
        
    };

    recipes.push(newRecipe);
    displayRecipes(recipes);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    // Clear form fields
    document.getElementById('addRecipeForm').reset();

    // Close the modal
    $('#addRecipeModal').modal('hide');
}

// Function to delete a recipe
function deleteRecipe(recipeId) {
    recipes = recipes.filter(recipe => recipe.id !== recipeId);
    displayRecipes(recipes);
   // localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Function to rate a recipe
function rateRecipe(recipeId, rating) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        recipe.rating = rating;
        displayRecipes(recipes);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }
}
document.addEventListener("DOMContentLoaded", function() {
// Charger les recettes depuis le LocalStorage
if (localStorage.getItem('recipes')) {
    recipes = JSON.parse(localStorage.getItem('recipes'));
    displayRecipes(recipes);
}


});
function addComment(recipeId) {
const commentName = document.getElementById(`commentName-${recipeId}`).value;
const commentText = document.getElementById(`commentText-${recipeId}`).value;

// Créer un objet commentaire
const newComment = {
    recipeId: recipeId,
    name: commentName,
    text: commentText
};

// Récupérer les commentaires existants depuis le localStorage
let allComments = JSON.parse(localStorage.getItem('allComments')) || [];

// Ajouter le nouveau commentaire à la liste
allComments.push(newComment);

// Mettre à jour les commentaires dans le localStorage
localStorage.setItem('allComments', JSON.stringify(allComments));

// Rediriger vers la page comments.html
window.location.href = 'comments.html';
}

function filterRecipesByName() {
const input = document.getElementById("search-input").value.toUpperCase();
const filteredRecipes = recipes.filter(recipe => recipe.name.toUpperCase().includes(input));
displayRecipes(filteredRecipes);
}
document.getElementById("search-button").addEventListener("click", filterRecipesByName);
document.getElementById("search-input").addEventListener("keyup", function(event) {
if (event.key === "Enter") {
    filterRecipesByName();
}
});
function myFunction() {
var input, filter, ul, li, a, i, txtValue;
input = document.getElementById("search-input");
filter = input.value.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName("li");
ul.style.display = "block"; // Afficher la liste complète par défaut

// Parcourir toutes les recettes de la liste
for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    
    // Si le texte de la recette correspond à la recherche, afficher la recette
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none"; // Sinon, masquer la recette
    }
}
}

// Ajouter un événement de clic sur les recettes de la liste
const recipeLinks = document.querySelectorAll("#myUL li a");
recipeLinks.forEach(link => {
link.addEventListener("click", function(e) {
    e.preventDefault();
    const recipeName = this.textContent;
    document.getElementById("search-input").value = recipeName;
    myFunction(); // Appeler la fonction de recherche pour afficher la recette sélectionnée
});
});

// Ajouter un événement de clic sur le bouton de recherche
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function() {
myFunction(); // Appeler la fonction de recherche lorsque le bouton est cliqué
});
