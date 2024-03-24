const recipes = [
  {
    name: "Chocolate Chip Cookies",
    ingredients: ["flour", "sugar", "chocolate chips"],
    image: "chocolate-chip-cookies.jpg",
    rating: 0,
    comments: []
  },
  // ... Add more recipes here
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
const ratingStars = document.querySelectorAll(".rating-star");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
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

  // Update rating stars
  ratingStars.forEach((star, index) => {
    star.classList.toggle("active", index < recipe.rating);
  });

  // Clear previous comments
  const commentList = document.getElementById("comment-list");
  commentList.innerHTML = "";

  // Add existing comments
  recipe.comments.forEach(comment => {
    const commentElement = document.createElement("li");
    commentElement.textContent = comment;
    commentList.appendChild(commentElement);
  });

  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}

popupClose.addEventListener("click", closePopup);

// Rating functionality
ratingStars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const recipeIndex = // ... (get the recipe index from the context)
    recipes[recipeIndex].rating = index + 1;
    showPopup(recipeIndex); // Update the popup with the new rating
  });
});

// Commenting functionality


// Commenting functionality
commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the recipe index from a hidden input field or data attribute (assuming you have a way to store it)
  const recipeIndex = document.getElementById("recipe-index").value; // Replace with your method

  const comment = commentInput.value;
  recipes[recipeIndex].comments.push(comment);
  showPopup(recipeIndex); // Update the popup with the new comment
  commentInput.value = "";
});