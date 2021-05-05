import React from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";

export default function CurrentWeather({ weather, isLoading }) {

    if (weather.message) {
        return (
            <View style={styles.isLoading}>
                <ActivityIndicator size="large" color="#00B0FF" />
                <Text>{weather.message.toUpperCase()}</Text>
            </View>
        );
    }

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
                <Text style={styles.currentDescription}>
                    {weather.city.toUpperCase()}
                </Text>
                <View style={{ flex:1.5,flexDirection:"row"}}>
                    <Text style={styles.currentTemp}>
                        {weather.current.temp}&deg;C
                    </Text>
                    <Image
                        style={styles.currentImg}
                        source={{uri:weather.current.icon}}
                    />
                </View>
                <Text style={styles.currentDescription}>
                    {weather.current.description.toUpperCase()}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    isLoading: {
        flex: 4,
        alignItems: "center",
    },
    current: {
        flex: 2.5,
        width: "100%",
    },
    currentDataView: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    currentTemp: {
        fontSize: 40,
    },
    currentDescription: {
        flex:1,
        fontSize: 20,
    },
    currentImg: {
        height: "60%",
        width: "25%",
    },
});
