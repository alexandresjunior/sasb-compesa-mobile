import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatarData } from "../../../utils";

const DadosInspecao = ({ inspecao }) => {
    const [numVistoria] = useState(inspecao.relatorios.length + 1)
    const dataAtual = formatarData(new Date()).data;

    return (
        <View style={estilos.container}>
            <View style={estilos.row}>
                <Text style={estilos.label}>Data da Inspeção: </Text>
                <Text style={estilos.texto}>{dataAtual}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Vistoria N.: </Text>
                <Text style={estilos.texto}>{numVistoria}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Inspetor(a): </Text>
                <Text style={estilos.texto}>{"[$NOME DO USUÁRIO$]"}</Text>
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
        marginBottom: 10
    },
    label: {
        fontSize: 18,
        fontWeight: "bold"
    },
    texto: {
        fontSize: 18,
    }
});