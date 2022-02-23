const lodeCountris = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
lodeCountris();
const displayCountries = countris => {
    // for (const country of countris) {
    // console.log(country)
    // }
    const countryDiv = document.getElementById('countries');
    countris.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button class="color" onclick="lodeCountryByName('${country.name}')">Details</button>`;
        // const h3 = document.createElement('h3')
        // h3.innerText = country.name
        // console.log(country)
        // div.appendChild(h3)
        // const p = document.createElement('p')
        // p.innerText = country.capital;
        // div.appendChild(p)
        countryDiv.appendChild(div)
    })
}
const lodeCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDitiles(data[0]));
}
const displayCountryDitiles = country => {
    const countryDiv = document.getElementById('country-ditail')
    countryDiv.innerHTML = `
<h4>${country.name}</h4>
<p>population : ${country.population}</p>
<img width="200px" src="${country.flag}">
`
}