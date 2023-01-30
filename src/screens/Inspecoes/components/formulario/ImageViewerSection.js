import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ImageViewerSection = ({ anexo, anexos, setAnexos, indice }) => {
    const editarAnexoDaLista = (indice) => {
        // TODO
    }

    const removerAnexoDaLista = (indice) => {
        const lista = anexos.filter((_, index) => index !== indice);
        setAnexos(lista);
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.row}>
                <View style={estilos.row}>
                    <Image style={estilos.imagem} source={anexo.source} />

                    <Text style={estilos.texto}>
                        <Text style={estilos.titulo}>Descrição: </Text>
                        {anexo.descricao}
                    </Text>
                </View>
                <TouchableOpacity style={estilos.row} onPress={() => editarAnexoDaLista(indice)}>
                    <Text style={{ color: "#223F99", marginEnd: 5 }}>Editar</Text>
                    <Ionicons name="create-outline" size={20} color={"#223F99"} />
                </TouchableOpacity>

                <TouchableOpacity style={estilos.row} onPress={() => removerAnexoDaLista(indice)}>
                    <Text style={{ color: "red", marginEnd: 5 }}>Excluir</Text>
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
        borderWidth: 1,
        borderColor: "#223F99",
        borderRadius: 5,
        padding: 15,
        width: 200
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center"
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
        width: 75,
        height: 75,
    }
})