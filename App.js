import React, { useState, useEffect } from "react";
import getData from "./helper";
import { StyleSheet, View } from "react-native";
import CurrentWeather from "./components/currentWeather";
import DailyWeather from "./components/dailyWeather";

export default function App() {
    const [weather, setWeather] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getData()
            .then((weatherData) => setWeather(weatherData))
            .catch((err) => console.log(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            <CurrentWeather
                style={styles.current}
                weather={weather}
                isLoading={isLoading}
            />
            <DailyWeather
                style={styles.daily}
                weather={weather}
                isLoading={isLoading}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
