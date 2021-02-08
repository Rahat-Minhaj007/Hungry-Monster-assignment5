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
        <img onclick="displayFoodDetail('${food.strIngredient1}')" src=${food.strMealThumb} class="card-img-top" alt="meal">
        <div class="card-body card-text">
        <h3 class="card-text foodName"> ${food.strMeal}</h3>
        </div>
        </div>
        
       
      `
    foodDiv.innerHTML = foodInfo;
    foodsDiv.appendChild(foodDiv);
 });

}


const displayFoodDetail = name =>{

 
 console.log( name);

const foodDetail= document.getElementById("food-detail")
 
  foodDetail.innerHTML=`
  <h3>${name}</h3>


  `
}





