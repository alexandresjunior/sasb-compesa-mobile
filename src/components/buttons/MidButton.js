import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MidButton = ({ label, onPress }) => {
    return (
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.button} onPress={onPress}>
                <Text style={estilos.label}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MidButton;

const estilos = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 25,
        marginBottom: 15
    },
    button: {
        backgroundColor: "#223F99",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: 200,
        padding: 15,
        alignSelf: "center",
        marginBottom: 10
    },
    label: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"
    },
})