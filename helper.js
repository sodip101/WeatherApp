async function getCoordinates(searchTerm){
    const coordinatesLink = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=ffbccf87d3fcf7af14d15c61e6f7d6cb`;
    const response=await fetch(coordinatesLink);
    const data=await response.json();

    return data.coord;
}

export default getData = async (searchTerm) => { 
    const coordinates=await getCoordinates(searchTerm);

    const weatherLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&exclude=minutely,hourly,alerts&appid=ffbccf87d3fcf7af14d15c61e6f7d6cb`;
    const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    const response = await fetch(weatherLink);

    const rawData = await response.json();
    const weather = {
        current: {
            description: rawData.current.weather[0].description,
            temp: rawData.current.temp,
        },
        daily: [],
    };

    rawData.daily.forEach((day) => {
        weather.daily.push({
            day: days[new Date(Number(day.dt) * 1000).getDay()],
            temp: {
                max: day.temp.max,
                min: day.temp.min,
            },
            description: day.weather[0].description.toUpperCase(),
        });
    });

    return weather;
};
