const aperoCountries = document.getElementById('aperoCountries');

// Fonction pour charger les données des pays depuis le fichier JSON
async function loadCountriesData() {
    try {
        const response = await fetch('./assets/js/countries.json');
        const countries = await response.json();
        return countries;
    } catch (error) {
        console.error('Une erreur s\'est produite lors du chargement des données des pays :', error);
    }
}

// Fonction pour afficher les pays avec leurs informations
function displayCountries(countries) {
    countries.forEach(country => {
        const countryTime = new Date().toLocaleString("en-US", {timeZone: country.timezone});
        const countryHour = new Date(countryTime).getHours();

        if (countryHour >= 0 && countryHour < 21) {
            const flagUrl = `./assets/flags/${country.code}.png`;
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-4');
            cardDiv.innerHTML = `
                <div class="card mb-3 bg-dark border-2 border-white">
                    <img src="${flagUrl}" class="card-img-top" alt="${country.name} Flag">
                    <div class="card-body">
                        <h5 class="card-title text-center">${country.name}</h5>
                        <p class="card-text text-center">Alcool typique : ${country.alcohol}</p>
                        <p class="card-text text-center">(À consommer avec modération)</p>
                    </div>
                </div>
            `;
            aperoCountries.appendChild(cardDiv);
        }
    });
}

// Chargement des données des pays et affichage
loadCountriesData()
    .then(countries => displayCountries(countries))
    .catch(error => console.error('Une erreur s\'est produite :', error));
