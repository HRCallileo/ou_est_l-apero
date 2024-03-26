const countries = [
    { name: 'France', code: 'FR', alcohol: 'Vin rouge', timezone: 'Europe/Paris' },
    { name: 'Allemagne', code: 'DE', alcohol: 'Bière', timezone: 'Europe/Berlin' },
    { name: 'Royaume-Uni', code: 'GB', alcohol: 'Gin', timezone: 'Europe/London' },
    { name: 'États-Unis', code: 'US', alcohol: 'Bourbon', timezone: 'America/New_York' },
    { name: 'Chine', code: 'CN', alcohol: 'Baijiu', timezone: 'Asia/Shanghai' },
    { name: 'Japon', code: 'JP', alcohol: 'Saké', timezone: 'Asia/Tokyo' },
    { name: 'Australie', code: 'AU', alcohol: 'Vin Shiraz', timezone: 'Australia/Sydney' },
    { name: 'Brésil', code: 'BR', alcohol: 'Cachaça', timezone: 'America/Sao_Paulo' },
    { name: 'Inde', code: 'IN', alcohol: 'Rhum arrack', timezone: 'Asia/Kolkata' },
    { name: 'Russie', code: 'RU', alcohol: 'Vodka', timezone: 'Europe/Moscow' },
    { name: 'Norvège', code: 'NO', alcohol: 'Aquavit', timezone: 'Europe/Oslo' },
    { name: 'Tunisie', code: 'TN', alcohol: 'Thibarine', timezone: 'Africa/Tunis' },
    { name: 'Canada', code: 'CA', alcohol: 'Rye Whisky', timezone: 'America/Toronto' },
    { name: 'Suède', code: 'SE', alcohol: 'Absinthe', timezone: 'Europe/Stockholm' },
    { name: 'Thaïlande', code: 'TH', alcohol: 'Sang Som', timezone: 'Asia/Bangkok' },
    { name: 'Irlande', code: 'IE', alcohol: 'Whiskey', timezone: 'Europe/Dublin' },
    { name: 'Roumanie', code: 'RO', alcohol: 'Tuica', timezone: 'Europe/Bucharest' },
    { name: 'Italie', code: 'IT', alcohol: 'Grappa', timezone: 'Europe/Rome' },
    { name: 'Corée du Sud', code: 'KR', alcohol: 'Soju', timezone: 'Asia/Seoul' },
    { name: 'Mongolie', code: 'MN', alcohol: 'Airag', timezone: 'Asia/Ulaanbaatar' },
    { name: 'Argentine', code: 'AR', alcohol: 'Fernet', timezone: 'America/Argentina/Buenos_Aires' },
    { name: 'Égypte', code: 'EG', alcohol: 'Zibib', timezone: 'Africa/Cairo' },
    { name: 'Fidji', code: 'FJ', alcohol: 'Kava', timezone: 'Pacific/Fiji' },
    { name: 'Groenland', code: 'GL', alcohol: 'Kahlúa', timezone: 'America/Godthab' },
    { name: 'Indonésie', code: 'ID', alcohol: 'Brem', timezone: 'Asia/Jakarta' },
    { name: 'Kenya', code: 'KE', alcohol: 'Urge', timezone: 'Africa/Nairobi' },
    { name: 'Mexique', code: 'MX', alcohol: 'Tequila', timezone: 'America/Mexico_City' },
    { name: 'Nouvelle-Zélande', code: 'NZ', alcohol: 'Sauvignon Blanc', timezone: 'Pacific/Auckland' },
    { name: 'Pérou', code: 'PE', alcohol: 'Pisco', timezone: 'America/Lima' },
    { name: 'Turquie', code: 'TR', alcohol: 'Rakı', timezone: 'Europe/Istanbul' }
    // Ajoutez d'autres pays ici
];

const currentTime = new Date();
const currentHour = currentTime.getUTCHours();

const aperoCountries = document.getElementById('aperoCountries');

countries.forEach(country => {
    const countryTime = new Date().toLocaleString("en-US", {timeZone: country.timezone});
    const countryHour = new Date(countryTime).getHours();

    if (countryHour >= 19 && countryHour < 21) {
        const flagUrl = `https://www.flagsapi.com/${country.code}/flat/64.png`;
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4');
        cardDiv.innerHTML = `
            <div class="card mb-3 bg-dark border-2 border-white">
                <img src="${flagUrl}" class="card-img-top" alt="${country.name} Flag">
                <div class="card-body">
                    <h5 class="card-title text-center">${country.name}</h5>
                    <p class="card-text text-center">${country.alcohol}</p>
                    <p class="card-text text-center">(À consommer avec modération)</p>
                </div>
            </div>
        `;
        aperoCountries.appendChild(cardDiv);
    }
});