import { startWidget, searchCity } from "./modules/widget.js";

const init = async (app) => {
    const widget = await startWidget();
    app.append(widget);

    searchCity(widget);
}

const app = document.getElementById('widget_currentWeather');

init(app);