import React, { useState, useEffect } from "react";
import getData from "./helper";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import CurrentWeather from "./components/currentWeather";
import DailyWeather from "./components/dailyWeather";
import Search from "./components/search";

export default function App() {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      if(location){
        getData(location)
            .then((weatherData) => setWeather(weatherData))
            .catch((err) => console.log(err.message))
            .finally(() => setLoading(false));
      }
    }, [location]);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            enabled={Platform.OS === "ios"}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        >
            <Search setLocation={setLocation} />
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
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
});
