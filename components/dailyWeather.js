import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image
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
                                <View style={{height:"50%"}}>
                                    <Image
                                        style={{height:"75%", width:"25%"}}
                                        source={{ uri: day.icon }}
                                    />
                                    <Text style={styles.data}>
                                        {day.description}
                                    </Text>
                                </View>
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
        flex: 5,
        width: "93%",
    },
    daily: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        color: "white",
        padding: 20,
        margin: 5,
        backgroundColor: "#00B0FF",
        borderRadius: 7,
        elevation:3
    },
    day: {
        color: "white",
        fontSize: 25,
        fontWeight: "700",
    },
    data: {
        color: "white",
        fontSize: 13,
        marginBottom:16
    },
    temp: {
        marginTop: 16,
    },
});
