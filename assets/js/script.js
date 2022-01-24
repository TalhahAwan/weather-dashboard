const searcher = document.querySelector('#searcher');
const weatherCard = document.querySelector('#weather-card');
const weatherToday = document.querySelector('#weather-today');
const weatherWeek = document.querySelector('#weather-week');
const weatherDay = document.querySelector('#weather-day');
const searcherData = [];

function getTodaysWeather(lat, lon) {
    const apiKey = "5b56094d59883ba5fedee29d1c55668b";
    const apiUrl = 'api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=' + apiKey;
}



function citySearcher (event) {
    const searcherInput = document.querySelector('#autocomplete-input');
    area = searcherInput.value;
    if (area) {

    }
}