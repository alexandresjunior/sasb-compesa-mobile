import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DadosInspecao = ({ inspecao }) => {
    return (
        <View style={estilos.container}>
            <View style={estilos.row}>
                <Text style={estilos.label}>Data da Inspeção: </Text>
                <Text style={estilos.texto}>{inspecao.data}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Vistoria N.: </Text>
                <Text style={estilos.texto}>{inspecao.numVistoria}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Inspetor(a): </Text>
                <Text style={estilos.texto}>{inspecao.inspetor}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Responsável Técnico: </Text>
                <Text style={estilos.texto}>{inspecao.responsavel}</Text>
            </View>
        </View>
    )
}

export default DadosInspecao;

const estilos = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    row: {
        flexDirection: "row",
        marginBottom: 10,
        flexWrap: 'wrap'
    },
    label: {
        fontSize: 18,
        fontWeight: "bold"
    },
    texto: {
        fontSize: 18,
    }
});