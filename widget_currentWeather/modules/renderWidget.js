import { convertPressure, getCurrentTime } from "./functions.js";

//icons here "http://openweathermap.org/img/wn/01d@2x.png";


export const renderWidget = (widget, data) => {
  const { month, day, year, hours, minutes, dayOfWeek } = getCurrentTime();

  const iconPath = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';


  widget.insertAdjacentHTML(
    'beforeend',
    `<div class="widget_main">   
      <div class="widget_date">
        <div>
          <p class="bold">${day} ${month} ${year}, ${dayOfWeek}</p>         
          <p class="current_time"> ${hours}:${minutes}</p>          
        </div>
        <div>
        <p>Wind:  ${data.wind.speed} m/sec</p> 
        <p>Humidity:  ${data.main.humidity} %</p>
        <p>Pressure:  ${convertPressure(data.main.pressure)} mmHg</p>
      </div>
      </div>
      <div class="widget_weather">        
        <button class="location">${data.name}<img height="60" src="./icon/location.svg"></img></button>
        <p class="current_temp">${(data.main.temp - 273.15).toFixed(1)} °C</p>
        <p class="bold">Feels like: ${(data.main.feels_like - 273.15).toFixed(1)}°C</p>
        <p>${data.weather[0].main}</p>      
        <img class="weather_icon" src=${iconPath} alt="weather_icon">              
      </div>   
    </div>`
  );
}

export const showError = (error, widget) => {
  widget.textContent = error.toString();
  widget.classList.add = ('widget_error');
}