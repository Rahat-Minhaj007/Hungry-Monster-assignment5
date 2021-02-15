const inputButton = async () => {

  const searchInput = document.getElementById('searchInput').value;
  if (searchInput == "") {
    alert("SORRY SIR, AT FIRST INPUT YOUR MEAL NAME");
  }
  else {
       const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        toggleSpinner();
        const res = await fetch(url);
        const data = await res.json();
        foodName(data);
  }

}

const foodName = foods => {
  const foodsDiv = document.getElementById("foods-name");
  foodsDiv.innerHTML = "";
  const foodDetail = document.getElementById("food-detail");
  foodDetail.innerHTML = "";

  (foods.meals).forEach(food => {
    const foodDiv = document.createElement("div");
    foodDiv.className = "food";
    const foodInfo = `
        <div class="card full-card" style="width: 13rem;">
        <img onclick="displayFoodDetail('${food.strIngredient1}','${food.strIngredient2}','${food.strIngredient3}','${food.strIngredient4}','${food.strIngredient5}','${food.strIngredient6}','${food.strIngredient7}','${food.strIngredient8}','${food.strIngredient9}','${food.strIngredient10}','${food.strMealThumb}','${food.strMeal}')" src=${food.strMealThumb} class="card-img-top" alt="meal">
        <div class="card-body card-text">
        <h3 class="card-text foodName"> ${food.strMeal}</h3>
        </div>
        </div>
        `
    foodDiv.innerHTML = foodInfo;
    foodsDiv.appendChild(foodDiv);
    toggleSpinner();
  });
  
}

const displayFoodDetail = (name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, pic1, mealName) => {
  const foodDetail = document.getElementById("food-detail")
  foodDetail.innerHTML = `
<div class="card " style="width: 18rem;">
  <img src="${pic1}" class="card-img-top" alt="">
  <div class="card-body">
    <h3 class="card-title" style="text-align:center;">${mealName}</h3>
    <h4 style="text-align:center;">INGREDIENTS</h4>
  </div>
    <ul class="list-group list-group-flush  ">
        <li class="list-group-item bg-warning">1. ${name1}</li>
        <li class="list-group-item">2. ${name2}</li>
        <li class="list-group-item bg-warning">3. ${name3}</li>
        <li class="list-group-item">4. ${name4} </li>
        <li class="list-group-item bg-warning">5. ${name5}</li>
        <li class="list-group-item">6. ${name6}</li>
        <li class="list-group-item bg-warning ">7. ${name7}</li>
        <li class="list-group-item ">8. ${name8}</li>
        <li class="list-group-item bg-warning ">9. ${name9}</li>
        <li class="list-group-item ">10. ${name10}</li>
    </ul>
 </div>
`
}
// enter key added
document.getElementById('searchInput')
  .addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
      document.getElementById('button').click();
    }
  });
// spinner added
  const toggleSpinner = () => {
    const spinner = document.getElementById("loading-spinner");
    const images = document.getElementById("foods-name");
  
    spinner.classList.toggle("d-none");
    images.classList.toggle("d-none");
  }
