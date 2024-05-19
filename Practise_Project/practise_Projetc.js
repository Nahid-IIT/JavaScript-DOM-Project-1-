const search_data = () => {
  const val = document.getElementById("search-level").value;
  console.log(val);
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`)
    .then((res) => res.json())
    .then((data) => {
      dis_play_search_product(data.meals);
    });
};

const dis_play_search_product = (data) => {
  const container = document.getElementById("item-container");
  data.forEach((item) => {
    console.log(item);
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
        <img src=${item.strMealThumb} alt="" id="item-img">
         <h3 id="item-title" onclick="display_details('${item.idMeal}')">${item.strMeal}</h3>
        `;
    container.appendChild(div);
  });
};

const display_details = (id) => {
  console.log(id);
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((single_item) => {
      display_single_item(single_item);
    });
};

const display_single_item = (item) => {
  console.log(item.meals[0].strCategory);
  const container = document.getElementById("single-item-container");
  const div = document.createElement("div");
  div.classList.add("one-item");
  div.innerHTML = `
    <img src=${item.meals[0].strMealThumb} alt="" id="single_img"> 
    <h3 id="single-img-title">${item.meals[0].strMeal}</h3>
    <ul>
        <li>${item.meals[0].strIngredient1}</li>
        <li>${item.meals[0].strIngredient2}</li>
        <li>${item.meals[0].strIngredient3}</li>
        <li>${item.meals[0].strIngredient4}</li>
        <li>${item.meals[0].strIngredient5}</li>
    </ul>
    `;
  container.appendChild(div);
};
