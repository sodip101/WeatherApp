async function getCityInfo(searchTerm) {
    const coordinatesLink = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=ffbccf87d3fcf7af14d15c61e6f7d6cb`;
    const response = await fetch(coordinatesLink);
    const data = await response.json();

    if (data.cod === 200) {
        return {
            coordinates: data.coord,
            city: data.name + ", " + data.sys.country,
        };
    } else {
        return data;
    }
}

export default getData = async (searchTerm) => {
    const cityInfo = await getCityInfo(searchTerm);

    if (cityInfo.message) {
        return cityInfo;
    }

    const weatherLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityInfo.coordinates.lat}&lon=${cityInfo.coordinates.lon}&units=metric&exclude=minutely,hourly,alerts&appid=ffbccf87d3fcf7af14d15c61e6f7d6cb`;
    const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    const response = await fetch(weatherLink);

    const rawData = await response.json();
    const weather = {
        city: cityInfo.city,
        current: {
            description: rawData.current.weather[0].description,
            temp: rawData.current.temp,
            icon: `http://openweathermap.org/img/wn/${rawData.current.weather[0].icon}@2x.png`,
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
            icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
        });
    });

    return weather;
};
