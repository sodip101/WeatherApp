import React from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";

export default function CurrentWeather({ weather, isLoading }) {
    if (isLoading) {
        return (
            <View style={styles.isLoading}>
                <ActivityIndicator size="large" color="#00B0FF" />
            </View>
        );
    }

    return (
        <View style={styles.current}>
            <View style={styles.currentDataView}>
                <Text style={styles.currentTemp}>
                    {weather.current.temp}&deg;C
                </Text>
                <Text style={styles.currentDescription}>
                    {weather.current.description.toUpperCase()}
                </Text>
            </View>
            <View style={styles.currentImgView}>
                <Image
                    style={styles.currentImg}
                    source={require("../assets/current.png")}
                ></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    isLoading: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    current: {
        flex: 4,
        width: "100%",
    },
    currentDataView: {
        flex: 1,
        alignItems: "center",
    },
    currentTemp: {
        fontSize: 43,
    },
    currentDescription: {
        fontSize: 20,
    },
    currentImgView: {
        flex: 2,
        marginBottom:10,
        alignItems: "center",

    },
    currentImg: {
        height: "100%",
        width: "100%",
    },
});
