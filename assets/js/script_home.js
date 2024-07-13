// Get the element where countries will be displayed
const countriesList = document.getElementById('countriesList');

// Async function to load country data from a JSON file
async function loadCountriesData() {
    try {
        const response = await fetch('../assets/js/countries.json');
        const countries = await response.json();
        return countries;
    } catch (error) {
        console.error('Une erreur s\'est produite lors du chargement des données des pays:', error);
    }
}

function displayCountries(countries) {
    countries.forEach(country => {
        const countryTime = new Date().toLocaleString("en-US", {timeZone: country.timezone});
        const countryHour = new Date(countryTime).getHours();

        if (countryHour >= 18 && countryHour < 21) {
            const flagUrl = `./assets/flags/${country.code}.png`;
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-4');
            cardDiv.innerHTML = `
                <div class="card mb-3 bg-secondary border-2 border-white">
                    <img src="${flagUrl}" class="card-img-top" alt="${country.name} Flag">
                    <div class="card-body">
                        <h5 class="card-title text-center text-decoration-underline">${country.name}</h5><br>
                        <p class="card-text text-center text-decoration-underline">Alcool typique :</p>
                        <p class="card-text text-center">${country.alcohol}</p><br>
                        <p class="card-text text-center text-decoration-underline">Apéritifs typique :</p>
                        <p class="card-text text-center">${country.apéritif}</p>
                    </div>
                </div>
            `;
            aperoCountries.appendChild(cardDiv);
        }
    });
}
// Load country data and display it
loadCountriesData()
    .then(countries => displayCountries(countries))
    .catch(error => console.error('Une erreur s\'est produite:', error));