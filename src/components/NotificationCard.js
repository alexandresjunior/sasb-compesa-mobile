import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NotificationCard = ({ notificacao }) => {
    return (
        <View style={estilos.container}>
            <View style={estilos.row}>
                <Text style={estilos.titulo}>{notificacao.titulo}</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons style={estilos.icone} name={"trash-outline"} size={20} />
                </TouchableOpacity>
            </View>
            <Text style={estilos.texto}>{notificacao.texto}</Text>
        </View>
    )
}

export default NotificationCard;

const estilos = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 5,
        backgroundColor: "#FFF",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 20
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15
    },
    texto: {
        marginTop: 5,
    },
    icone: {
        color: "#223F99",
        verticalAlign: "middle"
    }
})