import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LocalizacaoBarragem = ({ barragem }) => {
    return (
        <View style={estilos.container}>
            <View style={{ marginBottom: 10 }}>
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
                <Text style={[estilos.label, { marginBottom: 10 }]}>Coordenadas: </Text>
                <View style={{ marginBottom: 10 }}>
                    <View style={estilos.row}>
                        <Text style={estilos.label}>Latitude: </Text>
                        <Text style={estilos.texto}>{barragem.latitude}</Text>
                    </View>
                    <View style={estilos.row}>
                        <Text style={estilos.label}>Longitude: </Text>
                        <Text style={estilos.texto}>{barragem.longitude}</Text>
                    </View>
                    <View style={estilos.row}>
                        <Text style={estilos.label}>Sistema de Coordenadas: </Text>
                        <Text style={estilos.texto}>{barragem.sistemaCoordenadas}</Text>
                    </View>
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