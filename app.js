// DOM
const searchInput = document.querySelector('input')
const showButton = document.querySelector('button')

const h3CityName = document.querySelector('h3')
const h1Temp = document.querySelector('h1')
// const h1TempSpan = document.querySelector('h1 span')
const p1 = document.querySelectorAll('p')[0]
const p2 = document.querySelectorAll('p')[1]
const p3 = document.querySelectorAll('p')[2]
const img = document.querySelector('img')

const api_key = '&appid=2a44318a88c074e4bdbd09721e9f08b6'
const base_url = 'https://api.openweathermap.org/data/2.5/weather?q='
// fetch


const weather_status = {
    Clouds: "Облачно",
    Rain: "Дождь",
    Sunny: "Ясно",
    Haze: "Туман",
}

const dynamic_img = {
    Haze: './sun.png',
    Sunny: './sunny.png',
    Rain: './rain2.png',
    Clouds: './mist.png',
}


function getWeather(cityName = 'Bishkek') {
    fetch(base_url + cityName + api_key)
        .then(response => response.json())
        .then(city => {
            const { name, sys, wind, main, weather } = city
            const { country } = sys
            h3CityName.innerHTML = name + ` <span> ${country}</span>`
            p1.innerText = weather_status[weather[0].main]
            p2.innerText = 'Ветер ' + wind.speed + ' км/ч'
            p3.innerText = 'Влажность ' + main.humidity + ' %'
            h1Temp.innerHTML = `${Math.ceil(main.temp - 273.15)} <span>°c</span> `

            img.src = dynamic_img[weather[0].main]
        })
}

getWeather()

showButton.addEventListener('click', () => {
    getWeather(searchInput.value);
    searchInput.value = "";
})

