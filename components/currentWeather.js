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
                <Text style={styles.currentTemp}>{weather.current.temp}&deg;C</Text>
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
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    current: {
        flex: 1,
        width:"100%"
    },
    currentDataView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    currentTemp: {
        fontSize: 52,
    },
    currentDescription: {
        fontSize: 20,
    },
    currentImgView:{
        width:"100%",
        flex:2,
        alignItems:"center",
        justifyContent:"center"
    },
    currentImg: {
        height: "100%",
        width: "100%",
    },
});
