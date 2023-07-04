const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'Enter your private API_KEY here';


// const iconPath = 'http://openweathermap.org/img/wn/'${icon}'@2x.png'


export const getCity = async () => {
    //https://ipapi.co/json
    const url = "https://ipapi.co/city";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Getting city error");
        }
        const city = await response.text();
        return { success: true, city };
    } catch (error) {
        console.error(error);
        return { success: false, error };
    }
}


export const getWeather = async (city) => {
    try {
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=en`);
        if (!response.ok) {
            throw new Error("Request Error");
        }
        const data = await response.json();
        return { success: true, data }
    } catch (error) {
        return { success: false, error }
    }
}