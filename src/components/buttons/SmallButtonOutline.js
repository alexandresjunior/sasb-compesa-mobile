import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SmallButtonOutline = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default SmallButtonOutline;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: 170
    },
    label: {
        textAlign: "center",
        color: "#223F99",
        fontWeight: "bold",
        fontSize: 18
    }
})