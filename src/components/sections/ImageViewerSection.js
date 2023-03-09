import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";

const ImageViewerSection = ({ anexo, anexos, setAnexos, indice }) => {
    const removerAnexoDaLista = (indice) => {
        const lista = anexos.filter((_, index) => index !== indice);
        setAnexos(lista);
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.row}>
                <Image style={estilos.imagem} source={anexo} />

                <TouchableOpacity style={estilos.botao} onPress={() => removerAnexoDaLista(indice)}>
                    <Ionicon name="close-circle" size={25} color={"red"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImageViewerSection;

const estilos = StyleSheet.create({
    container: {
        margin: 10,
        borderWidth: 1,
        borderColor: "#223F99",
        borderRadius: 5,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imagem: {
        width: 100,
        height: 100,
    },
    botao: {
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: 20,
        alignSelf: "flex-start",
        marginStart: 90,
        marginTop: -10
    }
})