import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const BarragemCard = ({ barragem, linkPara }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => { navigation.navigate(linkPara) }}>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>{barragem.nome}</Text>

                <View style={estilos.row}>
                    <Text style={estilos.texto}>{barragem.localizacao.municipio}, {barragem.localizacao.estado}</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Inspeção: </Text>
                    <Text style={estilos.texto}>{barragem.inspecao.frequencia}</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Status: </Text>
                    <Text style={[estilos.texto, { fontWeight: "bold", color: barragem.inspecao.status === 'EM DIA' ? "#8BC63E" : "#FDCC0D" }]}>{barragem.inspecao.status}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BarragemCard;

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
        fontSize: 22,
        fontWeight: "bold"
    },
    texto: {
        marginTop: 5,
        fontSize: 16
    }
})