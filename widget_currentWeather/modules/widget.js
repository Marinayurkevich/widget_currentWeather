import { getWeather, getCity } from "./apiService.js";
import { renderWidget, showError } from "./renderWidget.js";

export const startWidget = async (city, widget) => {
    if (!city) {
        const dataCity = await getCity();
        if (dataCity.success) {
            city = dataCity.city;
        } else {
            showError(dataCity.error, widget);
        }
    }

    if (!widget) {
        widget = document.createElement('div');
        widget.classList.add('widget_layout');
    }

    const dataWeather = await getWeather(city);

    if (dataWeather.success) {
        renderWidget(widget, dataWeather.data);
    } else {
        showError(dataWeather.error, widget);
    }
    return widget;
};

export const searchCity = (widget) => {
    const button = document.querySelector('.location');
    button.addEventListener("click", function toggle() {
        if (document.getElementById('form_id')) {
            const prev_input = document.getElementById("form_id");
            prev_input.parentNode.removeChild(prev_input);
        } else if (!document.getElementById('form_id')) {
            const form = document.createElement('form');

            form.className = 'form';
            form.id = 'form_id';                    
            const inputCity = document.createElement('input');
            inputCity.classList.add('form_input');
            inputCity.name = 'city';
            inputCity.type = 'search';
            inputCity.placeholder = 'Enter City';

            form.append(inputCity);
            widget.append(form);

            inputCity.focus();

            form.addEventListener('submit', async (event) => {
                event.preventDefault();
                widget.textContent = '';
                await startWidget(inputCity.value, widget);
                searchCity(widget);
            })
        }
    })
}