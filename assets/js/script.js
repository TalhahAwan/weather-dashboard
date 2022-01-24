const searcher = document.querySelector('#searcher');
const weatherCard = document.querySelector('#weather-card');
const weatherToday = document.querySelector('#weather-today');
const weatherWeek = document.querySelector('#weather-week');
const weatherDay = document.querySelector('#weather-day');
const pastSearcherData = $('#searcher')
const searcherData = [];
const cityName;
const area;

searcher.addEventListener('submit', citySearcher);
function getTodaysWeather(lat, lon) {
    const apiKey = "5b56094d59883ba5fedee29d1c55668b";
    const apiUrl = 'api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=' + apiKey;
    fetch(apiUrl)
        .then(function(response) {
            response.json().then(function(data) {
            })
        })
}



function citySearcher (event) {
    const searcherInput = document.querySelector('#autocomplete-input');
    area = searcherInput.value;
    if (area) {
        weatherToday(area);
        weatherWeek(area);
        searcherData.push(area);
        localStorage.setItem('pastSearcherData', JSON.stringify(searcherData));
    }
}