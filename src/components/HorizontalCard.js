import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const HorizontalCard = ({ inspecao }) => {
    return (
        <TouchableOpacity onPress={() => { }}>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>{inspecao.nome}</Text>

                <View style={estilos.containerRow}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Data: </Text>
                    <Text style={estilos.texto}>{inspecao.data}</Text>
                </View>
                <View style={estilos.containerRow}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Inspetor(a): </Text>
                    <Text style={estilos.texto}>{inspecao.inspetor}</Text>
                </View>
                <View style={estilos.containerRow}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Responsável Técnico: </Text>
                    <Text style={estilos.texto}>{inspecao.responsavel}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default HorizontalCard;

const estilos = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        marginEnd: 10,
        backgroundColor: "#FFFFFF",
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
    containerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 25,
    },
    titulo: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    texto: {
        marginTop: 10,
        width: 180
    },
    botao: {
        backgroundColor: "#FFA959",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959",
        width: 140,
        marginTop: 15
    },
    textoBotao: {
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold"
    }
})