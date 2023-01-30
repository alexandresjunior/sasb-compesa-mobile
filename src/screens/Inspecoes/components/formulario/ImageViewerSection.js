import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ImageViewerSection = ({ anexo, anexos, setAnexos, indice }) => {
    const removerAnexoDaLista = (indice) => {
        const lista = anexos.filter((_, index) => index !== indice);
        setAnexos(lista);
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.row}>
                <View>
                    <Image style={estilos.imagem} source={anexo.source} />

                    <Text style={estilos.texto}>
                        <Text style={estilos.titulo}>Descrição: </Text>
                        {anexo.descricao}
                    </Text>
                </View>

                <TouchableOpacity onPress={() => removerAnexoDaLista(indice)}>
                    <Ionicons name="close-circle-outline" size={20} color={"red"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImageViewerSection;

const estilos = StyleSheet.create({
    container: {
        margin: 10,
        height: 100,
    },
    row: {
        flexDirection: "row",
        marginVertical: 2.5
    },
    titulo: {
        fontSize: 14,
        fontWeight: "bold",
        marginEnd: 5
    },
    texto: {
        marginTop: 10,
        flexWrap: "wrap",
        width: 250,
        marginVertical: 5
    },
    imagem: {
        width: 65,
        height: 65,
    }
})