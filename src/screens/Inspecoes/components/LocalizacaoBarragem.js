import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LocalizacaoBarragem = ({ barragem }) => {
    return (
        <View style={estilos.container}>
            <View style={{ marginBottom: 10 }}>
                <View style={estilos.row}>
                    <Text style={estilos.label}>Município: </Text>
                    <Text style={estilos.texto}>{barragem.localizacao.municipio}</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={estilos.label}>Estado: </Text>
                    <Text style={estilos.texto}>{barragem.localizacao.estado}</Text>
                </View>
            </View>
        </View>
    )
}

export default LocalizacaoBarragem;

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