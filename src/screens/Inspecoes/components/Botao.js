import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Botao = ({ texto, linkPara, indice }) => {
    const navigation = useNavigation();

    return (
        <View style={estilos.container}>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => { navigation.navigate(linkPara, indice) }}>
                <Text style={estilos.textoBotao}>{texto}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Botao;

const estilos = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 25,
        marginBottom: 15
    },
    botao: {
        backgroundColor: "#223F99",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: 200,
        padding: 15,
        alignSelf: "center",
        marginBottom: 10
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"
    },
})