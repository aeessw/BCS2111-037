const mealName = document.getElementById("meal-name");
const mealImage = document.getElementById("meal-image");
const mealIngredients = document.getElementById("meal-ingredients");
const mealInstructions = document.getElementById("meal-instructions");

function getMealDetails(meal) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(response => response.json())
    .then(data => {
      const mealData = data.meals[0];
      mealName.textContent = mealData.strMeal;
      mealImage.src = mealData.strMealThumb;
      for (let i = 1; i <= 30; i++) {
        if (mealData[`strIngredient${i}`]) {
          const li = document.createElement("p");
          li.textContent =  `${mealData[`strIngredient${i}`]} - ${mealData[`strMeasure${i}`]}`;
          mealIngredients.appendChild(li);
        }
      }
      mealInstructions.textContent = mealData.strInstructions;
    });
}

const mealSelect = document.getElementById("meal");
mealSelect.addEventListener("change", () => {
  const selectedMeal = mealSelect.value;
  getMealDetails(selectedMeal);
});