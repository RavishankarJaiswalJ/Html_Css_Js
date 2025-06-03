async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

  if (!city) return alert("Please enter a city name");

  resultDiv.innerHTML = "Loading...";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    if (data.cod === '404') {
      resultDiv.innerHTML = `<p>City not found</p>`;
    } else {
      const html = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>🌥️ Weather: ${data.weather[0].main}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
      resultDiv.innerHTML = html;
    }
  } catch (err) {
    resultDiv.innerHTML = `<p>Error fetching data</p>`;
  }
}
