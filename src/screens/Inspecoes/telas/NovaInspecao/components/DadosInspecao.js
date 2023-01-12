import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DadosInspecao = ({ inspecao }) => {
    return (
        <>
            <View style={estilos.row}>
                <Text style={estilos.row}>Data da Inspeção: </Text>
                <Text style={estilos.texto}>{inspecao.data}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.row}>Vistoria N.: </Text>
                <Text style={estilos.texto}>{inspecao.numVistoria}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.row}>Inspetor(a): </Text>
                <Text style={estilos.texto}>{inspecao.inspetor}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.row}>Responsável Técnico: </Text>
                <Text style={estilos.texto}>{inspecao.responsavel}</Text>
            </View>
        </>
    )
}

export default DadosInspecao;

const estilos = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    label: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: "bold"
    },
    texto: {
        fontSize: 18,
        marginTop: 5,
    }
});