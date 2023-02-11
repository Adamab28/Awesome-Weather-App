 function displayTemperature(response) {
    console.log (response.data);
    let temperatureElement = docunement.querySlecetor("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
