import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
} from "react-native";

export default function DailyWeather({ weather, isLoading }) {
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
        <View style={styles.week}>
            <ScrollView>
                {weather.daily.map((day) => {
                    return (
                        <View
                            key={weather.daily.indexOf(day)}
                            style={styles.daily}
                        >
                            <View>
                                <Text style={styles.day}>{day.day}</Text>
                                <Text style={styles.data}>
                                    {day.description}
                                </Text>
                            </View>
                            <View style={styles.temp}>
                                <Text style={styles.data}>
                                    Min Temp: {day.temp.min}&deg;C
                                </Text>
                                <Text style={styles.data}>
                                    Max Temp: {day.temp.max}&deg;C
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    isLoading: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    week: {
        flex: 4,
        width: "90%",
    },
    daily: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        color: "white",
        padding: 16,
        margin: 5,
        backgroundColor: "#00B0FF",
        borderRadius: 7,
    },
    day: {
        color: "white",
        fontSize: 25,
        fontWeight: "700",
    },
    data: {
        color: "white",
        fontSize: 13,
    },
    temp: {
        marginTop: 16,
    },
});
