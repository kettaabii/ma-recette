const recipes = [
  {
    name: "Tagine",
    ingredients: ["onions", "carrotes", "viande","huile d'olive"],
    image: "TAGINE.png",
    time: 30 ,
    comments: []
  },
   {
      name: "couscous",
      ingredients: ["legumes", "couscous", "poulet","huile d'olive"],
      image: "couscous.png",
      time: 30 ,
      comments: []
    }

];

// Search Functionality
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results-container");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm) ||
           recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
  });

  resultsContainer.innerHTML = ""; // Clear previous results

  if (filteredRecipes.length === 0) {
    resultsContainer.innerHTML = "<p>No recipes found.</p>";
  } else {
    filteredRecipes.forEach((recipe, index) => {
      const recipeElement = document.createElement("div");
      recipeElement.classList.add("recipe-element"); // Optional CSS class for styling

      const nameElement = document.createElement("h3");
      nameElement.textContent = recipe.name;
      recipeElement.appendChild(nameElement);

      // Add event listener to open popup
      recipeElement.addEventListener("click", () => {
        showPopup(index);
      });

      resultsContainer.appendChild(recipeElement);
    });
  }
});

// Popup Functionality
const popup = document.getElementById("recipe-popup");
const popupImage = document.getElementById("popup-image");
const popupName = document.getElementById("popup-name");
const popupIngredients = document.getElementById("popup-ingredients");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list"); // Add this line
const popupClose = document.getElementById("popup-close");

function showPopup(recipeIndex) {
  const recipe = recipes[recipeIndex];

  popupImage.src = recipe.image;
  popupName.textContent = recipe.name;
  popupIngredients.innerHTML = ""; // Clear previous ingredients

  recipe.ingredients.forEach(ingredient => {
    const ingredientElement = document.createElement("li");
    ingredientElement.textContent = ingredient;
    popupIngredients.appendChild(ingredientElement);
  });



  // Update time
  document.getElementById("popup-time").textContent = recipe.time + " minutes";

  // Clear previous comments
  commentList.innerHTML = "";

  // Add existing comments
  recipe.comments.forEach(comment => {
    const commentElement = document.createElement("li");
    commentElement.textContent = comment;
    commentList.appendChild(commentElement);
  });

  const modal = new bootstrap.Modal(document.getElementById("recipe-popup"));
  modal.show();
}
function closePopup() {
  popup.style.display = "none";
}

