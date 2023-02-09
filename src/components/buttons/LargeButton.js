import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const LargeButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default LargeButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#223F99",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: "100%",
        marginTop: 20,
        padding: 15,
    },
    label: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"
    }
})