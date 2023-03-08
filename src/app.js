const apiKey = '81582db1169825fc2753116e5a20f557';
const city = 'Tokyo';
const country = 'JP';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
  
// Fetch the weather data
fetch(weatherUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const deg = data.wind.deg;
  
    // Display the weather data
    const weatherData = document.querySelector('#weather-data');
    weatherData.innerHTML = `
    <div>
      <h1>Japan, JP</h1><h1>${temperature} &deg;C</h1>
    <div>
      <hr>
      <p>Description: ${description}</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind: ${wind} mph</p>
      <p>Deg: ${deg} °</p>
    `;
    })
    .catch(error => {
      const weatherData = document.querySelector('#weather-data');
      weatherData.innerHTML = `<p>Error loading weather data: ${error.message}</p>`;
    });