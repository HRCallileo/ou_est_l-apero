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

// Function to display countries with their information
function displayCountries(countries) {
    countries.forEach(country => {
        const flagUrl = `../assets/flags/${country.code}.png`;
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4');

        // Get current date and time in the country's time zone, formatted in French
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZone: country.timezone,
            timeZoneName: 'short',
            locale: 'fr-FR' // Set locale to French
        };
        const countryDateTime = new Date().toLocaleString('fr-FR', options);

        cardDiv.innerHTML = `
            <div class="card mb-3 bg-secondary border-2 border-white text-white">
                <img src="${flagUrl}" class="card-img-top" alt="${country.name} Flag">
                <div class="card-body">
                    <h5 class="card-title text-center text-decoration-underline">${country.name}</h5><br>
                    <p class="card-text text-center text-decoration-underline">Date et heure actuelles :</p>
                    <p class="card-text text-center">${countryDateTime}</p>
                </div>
            </div>
        `;

        countriesList.appendChild(cardDiv);
    });
}

// Load country data and display it
loadCountriesData()
    .then(countries => displayCountries(countries))
    .catch(error => console.error('Une erreur s\'est produite:', error));