export default getData = async () => {
    const days=["Sat","Sun","Mon","Tue","Wed","Thu","Fri"]
    const response = await fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=27.716667&lon=85.316666&units=metric&exclude=minutely,hourly,alerts&appid=ffbccf87d3fcf7af14d15c61e6f7d6cb"
    );

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
            day: days[new Date(Number(day.dt)*1000).getDay()],
            temp: {
                max: day.temp.max,
                min: day.temp.min,
            },
            description: day.weather[0].description.toUpperCase(),
        });
    });

    return weather;
};
