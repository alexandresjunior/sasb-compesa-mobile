import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SmallButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default SmallButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#223F99",
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: 170
    },
    label: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18
    }
})