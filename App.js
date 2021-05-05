import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    Text,
    Image
} from "react-native";
import CurrentWeather from "./components/currentWeather";
import DailyWeather from "./components/dailyWeather";
import Search from "./components/search";
import getData from "./helper";

export default function App() {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (location) {
            getData(location)
                .then((weatherData) => setWeather(weatherData))
                .catch((err) => console.log(err.message))
                .finally(() => setLoading(false));
        }
    }, [location]);

    const initialView = (
        <View style={styles.isLoading}>
            <Search setLocation={setLocation} style={styles.initialSearch} />
            <View style={styles.messageView}>
                <Image
                    source={require("./assets/initial.png")}
                    style={styles.initialImg}
                ></Image>
                <Text style={styles.initialMessage}>
                    Search for a City to view Weather Info
                </Text>
            </View>
        </View>
    );

    const weatherView = (
        <>
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
        </>
    );

    return (
        <KeyboardAvoidingView
            style={styles.container}
            enabled={Platform.OS === "ios"}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        >
            {!location ? initialView : weatherView}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
    isLoading: {
        flex: 1,
        alignItems: "center",
    },
    initialSearch: {
        flex: 1,
    },
    messageView: {
        flex: 7,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 70,
    },
    initialImg: {
        height: "35%",
        width: 350,
        marginTop: 70,
    },
    initialMessage: {
        flex: 1,
        fontSize: 16,
    },
});
