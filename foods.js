const button = document.getElementById("button")
button.addEventListener('click', function () {

  const searchInput = document.getElementById('searchInput').value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(res => res.json())
    .then(data => foodName(data))
    
})

const foodName = foods => {
  const foodsDiv = document.getElementById("foods-name");
   foodsDiv.innerHTML= "";
   const foodDetail = document.getElementById("food-detail");
   foodDetail.innerHTML= "";

  (foods.meals).forEach(food => {
    const foodDiv = document.createElement("div");
    foodDiv.className = "food";
    const foodInfo = `
        <div class="card full-card" style="width: 13rem;">
        <img onclick="displayFoodDetail('${food.strIngredient1},${food.strIngredient2},${food.strIngredient3},${food.strIngredient4},${food.strIngredient5},${food.strIngredient6},${food.strIngredient7},${food.strIngredient8},${food.strIngredient9},${food.strIngredient10}')" src=${food.strMealThumb} class="card-img-top" alt="meal">
        <div class="card-body card-text">
        <h3 class="card-text foodName"> ${food.strMeal}</h3>
        </div>
        </div>
        `
    foodDiv.innerHTML = foodInfo;
    foodsDiv.appendChild(foodDiv);
 });

}

const displayFoodDetail =(name) =>{

console.log( name);
const foodDetail= document.getElementById("food-detail")
foodDetail.innerHTML=`



<div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header"><h3>INGREDIENTS</h3></div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"><h5>${name}</h5></p>
  </div>
</div>


  `
}





