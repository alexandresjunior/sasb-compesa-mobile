import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from "../../../assets/sasb_compesa_logo.png";

const FormHeader = ({ text, link, onPress }) => {
    return (
        <>
            <Image source={logo} style={styles.image} />

            <View>
                <Text style={styles.title}>Bem-vindo(a)!</Text>
                <View style={styles.row}>
                    <Text>{text}</Text>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.link}>{link}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default FormHeader;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginTop: 10
    },
    image: {
        marginTop: 15,
        marginBottom: 35,
        width: 288,
        height: 54,
        alignSelf: 'center'
    },
    title: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    link: {
        color: "#223F99",
        paddingStart: 5
    }
})