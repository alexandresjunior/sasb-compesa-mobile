import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LocalizacaoBarragem = ({ barragem }) => {
    return (
        <>
            <View style={estilos.row}>
                <View style={estilos.row}>
                    <Text style={estilos.label}>Município: </Text>
                    <Text style={estilos.texto}>{barragem.municipio}</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={estilos.label}>Estado: </Text>
                    <Text style={estilos.texto}>{barragem.estado}</Text>
                </View>
            </View>

            <View>
                <Text style={estilos.label}>Coordenadas: </Text>
                <View style={estilos.row}>
                    <View style={estilos.row}>
                        <Text style={estilos.label}>Latitude: </Text>
                        <Text style={estilos.texto}>{barragem.latitude}</Text>
                    </View>
                    <View style={estilos.row}>
                        <Text style={estilos.label}>Longitude: </Text>
                        <Text style={estilos.texto}>{barragem.longitude}</Text>
                    </View>
                </View>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Sistema de Coordenadas: </Text>
                <Text style={estilos.texto}>{barragem.sistemaCoordenadas}</Text>
            </View>
        </>
    )
}

export default LocalizacaoBarragem;

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