const mainContainer = document.querySelector(".main");
const search = document.querySelector(".search button");
const weatherBox = document.querySelector(".weather-container");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector('.not-found')
const defaultText = document.querySelector('.default-text')



search.addEventListener("click", () => {
  const APIkey = "055f5869f81cb3ba0ce82df8a06d84d2";
  const city = document.querySelector(".search input").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
  )
    .then((response) =>  response.json())
    .then((json) => {

        if(json.cod == '404'){
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            defaultText.classList.add('active')
            return;
        }

        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
        error404.classList.remove('active');




    //   console.log(json);

      const image = document.querySelector(".weather-container img");
      const temperature = document.querySelector(
        ".weather-container .temperature"
      );
      const desc = document.querySelector(".weather-container .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "./images/clear.png";
          break;
        case "Rain":
          image.src = "./images/rain.png";
          break;
        case "Snow":
          image.src = "./images/snow.png";
          break;
        case "Clouds":
          image.src = "./images/cloud.png";
          break;
        case "Mist":
        case "Haze":
          image.src = "./images/mist.png";
          break;
        default:
          image.src = "/images/cloud.png";
      }

      const celsiusTemp = json.main.temp;
      temperature.innerHTML = `${celsiusTemp.toFixed(2)}<span>C</span>`;
      desc.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${json.wind.speed} km/h`;
    })
});
