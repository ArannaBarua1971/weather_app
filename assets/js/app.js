const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ebe032694cmsh985fe3c5d018e09p193579jsnac5e26aa8eec',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// city information
let obj=JSON.stringify({});

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kotwali', options)
	.then(response => response.json())
	.then(data => {
		
		let cloud_pct=data.cloud_pct;
		let temp=data.temp;
		let feels_like=data.feels_like;
		let humidity=data.humidity;
		let min_temp=data.min_temp;
		let max_temp=data.max_temp;
		let wind_speed=data.wind_speed;
		let wind_degrees=data.wind_degrees;
		let sunrise=data.sunrise;
		let sunset=data.sunset;
	})
	.catch(err => console.error(err));



console.log(obj);
