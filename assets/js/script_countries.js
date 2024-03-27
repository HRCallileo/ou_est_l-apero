async function loadCountriesData() {
    try {
        const response = await fetch('../assets/js/countries.json');
        const countries = await response.json();
        return countries;
    } catch (error) {
        console.error('Une erreur s\'est produite lors du chargement des données des pays :', error);
    }
}

function displayCountries(countries) {
    const countriesList = document.getElementById('countriesList');
    countries.forEach(country => {
        const currentTime = new Date();
        currentTime.setTime(currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000 + getTimeZoneOffset(country.timezone) * 60 * 60 * 1000);
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = `${country.name} - ${timeString}`;
        countriesList.appendChild(listItem);
    });
}

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
