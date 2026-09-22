const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const resultDiv = document.getElementById("result");

const API_KEY = "b3b4eff37393d812b448752e618e3236";

searchBtn.addEventListener("click",async function(){
  const city = cityInput.value;

  if(city === ""){
    resultDiv.textContent = "please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try{
    const response = await fetch(url);
    const data = await response.json();

    if(data.cod !== 200){
      resultDiv.textContent = "city not found.";
      return;
    }

    const temp = data.main.temp;
    const description = data.weather[0].description;

    resultDiv.textContent = `Temp: ${temp}*c,Description: ${description}`;
  }catch(error){
    resultDiv.textContent = "something went wrong.Try again.";
    console.log(error);
  }
});