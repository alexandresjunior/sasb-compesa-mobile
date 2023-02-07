import React from "react";
import { StyleSheet, View } from "react-native";

const FormSection = ({ children }) => {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                {children}
            </View>
        </View>
    )
}

export default FormSection;

const styles = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: "#223F99"
    },
    container: {
        margin: 25
    }
})