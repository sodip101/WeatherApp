import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";

export default function Search({ setLocation }) {
    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <Image source={require("../assets/search.png")} style={{marginTop:16, marginLeft:16}} />
                <TextInput
                    placeholder="Search Location"
                    placeholderTextColor="white"
                    onSubmitEditing={(e) => setLocation(e.nativeEvent.text)}
                    style={styles.textBox}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
    },
    searchBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#00B0FF",
        width: "85%",
        elevation: 10,
        borderRadius: 7,
        marginTop: 10,
    },
    textBox: {
        color: "white",
        width: "100%",
        height: "100%",
        padding: 16,
    },
});
