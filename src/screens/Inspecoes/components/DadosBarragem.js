import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DadosBarragem = ({ barragem }) => {
    return (
        <View style={estilos.container}>
            <View style={[estilos.row, estilos.titulo]}>
                <Text style={estilos.label}>Barragem: </Text>
                <Text style={estilos.texto}>{barragem.nome}</Text>
            </View>

            <View style={{ marginBottom: 10 }}>
                <Text style={estilos.label}>Empreendedor/Administração Regional: </Text>
                <Text style={estilos.texto}>{barragem.titularidade}</Text>
            </View>

            <View style={{ marginBottom: 10 }}>
                <Text style={estilos.label}>Riacho/Bacia: </Text>
                <Text style={estilos.texto}>{barragem.detalhes.bacia}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Cota Atual do Nível d'Água: </Text>
                <Text style={estilos.texto}>{barragem.detalhes.comprimentoM} m</Text>
            </View>
        </View>
    )
}

export default DadosBarragem;

const estilos = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    row: {
        flexDirection: "row",
        marginBottom: 10
    },
    titulo: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold"
    },
    texto: {
        fontSize: 18,
    }
});