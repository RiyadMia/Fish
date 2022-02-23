const searchFood = async () => {
    const searchFirld = document.getElementById('search-firld');
    // clear data
    const searchText = searchFirld.value;
    if (searchText == '') {
        // place write someting to display
    }

    else {

        // lode data
        console.log(searchText)
        searchFirld.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText}`
        // sestem 01
        const res = await fetch(url)
        const data = await res.json()
        displaySearchResult(data.
            meals)
        // sestem 02
        // fetch(url)
        // .then(res => res.json())
        // // // .then(data => displaySearchResult(data.meals))
    }
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');

    // aga ar gola muca fala sestem 01

    // searchResult.innerHTML = '';
    // aga ar gola muca fala 
    //  sestem 02
    searchResult.textContent = '';

    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="lodeMealDetails(${meal.idMeal})" class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">
          ${meal.strInstructions.slice(0, 250)}
          </p>
        </div>
    </div>
`
        searchResult.appendChild(div)
    })
}

const lodeMealDetails = async mealId => {
    const url = `
https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
`;
    // sestem 01


    const res = await fetch(url)
    const data = await res.json()
    displayMealDetail(data.meals
    [0]);

    // sestem 02


    // fetch(url)
    // .then(res => res.json())
    // // // .then(data => displayMealDetail(data.meals[0]));
}
const displayMealDetail = meal => {
    console.log(meal)
    const mealDatails = document.getElementById('meal-details');

    // ager ta clear kora

    mealDatails.textContent = '';


    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text"> 
        ${meal.strInstructions.slice(0, 150)}
            </p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    mealDatails.appendChild(div);
}
