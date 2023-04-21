const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ebe032694cmsh985fe3c5d018e09p193579jsnac5e26aa8eec",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetchData = () => {
	const cityName=document.getElementById('cityName').value;
	const city=document.getElementById('city');
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`,
    options
    )
    .then((response) => response.json())
    .then((data) => {
      city.innerHTML=cityName.toUpperCase();
      temp.innerHTML = data.temp;
      temp2.innerHTML = data.temp;
      max_temp.innerHTML = data.max_temp;
      min_temp.innerHTML = data.min_temp;
      humidity.innerHTML = data.humidity;
      humidity2.innerHTML = data.humidity;
      feels_like.innerHTML = data.feels_like;
      wind_degrees.innerHTML = data.wind_degrees;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
      wind_speed.innerHTML = data.wind_speed;
      wind_speed2.innerHTML = data.wind_speed;
    })
    .catch((err) => console.error(err));
};
