import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DadosBarragem = ({ barragem }) => {
    return (
        <>
            <View style={estilos.row}>
                <Text style={estilos.label}>Barragem: </Text>
                <Text style={estilos.texto}>{barragem.nome}</Text>
            </View>

            <View>
                <Text style={estilos.label}>Empreendedor/Administração Regional: </Text>
                <Text style={estilos.texto}>{barragem.empreendedor}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Riacho/Bacia: </Text>
                <Text style={estilos.texto}>{barragem.bacia}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Cota Atual do Nível d'Água: </Text>
                <Text style={estilos.texto}>{barragem.cotaAtualNivelAgua}</Text>
            </View>
        </>
    )
}

export default DadosBarragem;

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