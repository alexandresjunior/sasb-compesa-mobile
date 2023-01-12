import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const HorizontalCard = ({ inspecao }) => {
    return (
        <TouchableOpacity onPress={() => { }}>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>{inspecao.nome}</Text>

                <View style={estilos.row}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Data: </Text>
                    <Text style={estilos.texto}>{inspecao.data}</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Inspetor(a): </Text>
                    <Text style={estilos.texto}>{inspecao.inspetor}</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Responsável Técnico: </Text>
                    <Text style={estilos.texto}>{inspecao.responsavel}</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Status: </Text>
                    <Text style={[estilos.texto, { fontWeight: "bold", color: inspecao.status === 'Concluída' ? "#8BC63E" : "#FDCC0D" }]}>{inspecao.status}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HorizontalCard;

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
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold"
    },
    texto: {
        marginTop: 5,
    }
})