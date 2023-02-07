import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, showButton }) => {
    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                {
                    !!showButton && (
                        <TouchableOpacity onPress={() => { }}>
                            <Ionicons name={"cloud-download-outline"} size={25} style={styles.icon} />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 150,
        backgroundColor: "#223F99",
    },
    row: {
        flexDirection: "row",
        marginTop: 100,
        justifyContent: "space-between",
        marginHorizontal: 25,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginTop: 5
    },
    icon: {
        color: "#fff",
        verticalAlign: "middle"
    }
});