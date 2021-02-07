const button = document.getElementById("button")
button.addEventListener('click', function () {

  const searchInput = document.getElementById('searchInput').value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`)
    .then(res => res.json())
    .then(data => foodName(data))
})

const foodName = foods => {
  const foodsDiv = document.getElementById("foods-name");
  foods.meals.forEach(food => {
  
    const foodDiv = document.createElement("div");
    foodDiv.className = "food";

    const foodInfo = `
        <div class="card full-card" style="width: 13rem;">
        <img src=${food.strMealThumb} class="card-img-top" alt="meal">
        <div class="card-body card-text">
        <h3 class="card-text foodName"> ${food.strMeal}</h3>
        </div>
        </div>
        
       
      `
    foodDiv.innerHTML = foodInfo;
    foodsDiv.appendChild(foodDiv);
  });

}

