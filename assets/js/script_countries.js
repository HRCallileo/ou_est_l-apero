// Fonction pour afficher les pays avec leurs informations, triés par heure la plus proche de 21h
async function displayCountries(countries) {
    // Tri des pays en fonction de l'heure la plus proche de 21h
    countries.sort((a, b) => {
        const aTime = getLocalTime(a.timezone);
        const bTime = getLocalTime(b.timezone);
        const aDiff = Math.abs(21 - parseInt(aTime.split(':')[0]));
        const bDiff = Math.abs(21 - parseInt(bTime.split(':')[0]));
        return aDiff - bDiff;
    });

    const countriesList = document.getElementById('countriesList');
    countries.forEach(country => {
        const currentTime = new Date();
        currentTime.setTime(currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000 + getTimeZoneOffset(country.timezone) * 60 * 60 * 1000);
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        // Changement de fond pour les pays entre 19h et 21h
        const countryHour = currentTime.getHours();
        if (countryHour >= 19 && countryHour < 21) {
            listItem.classList.add('bg-warning');
        }

        listItem.textContent = `${country.name} - ${timeString}`;
        countriesList.appendChild(listItem);
    });
}

// Fonction pour charger les données des pays depuis le fichier JSON
async function loadCountriesData() {
    try {
        const response = await fetch('../assets/js/countries.json');
        const countries = await response.json();
        return countries;
    } catch (error) {
        console.error('Une erreur s\'est produite lors du chargement des données des pays :', error);
    }
}

// Fonction pour obtenir l'heure locale du pays
function getLocalTime(timezone) {
    const currentTime = new Date();
    currentTime.setTime(currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000 + getTimeZoneOffset(timezone) * 60 * 60 * 1000);
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Fonction pour obtenir le décalage horaire du fuseau horaire par rapport à l'heure UTC
function getTimeZoneOffset(timezone) {
    const timezoneDate = new Date().toLocaleString("en-US", { timeZone: timezone });
    const utcDate = new Date(timezoneDate);
    const localDate = new Date();
    const offset = (utcDate.getTime() - localDate.getTime()) / (1000 * 60 * 60);
    return offset;
}

loadCountriesData()
    .then(countries => displayCountries(countries))
    .catch(error => console.error('Une erreur s\'est produite :', error));
