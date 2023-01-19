import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ImageViewerSection = ({ imageSource, fileName }) => {
    return (
        <View style={estilos.container}>
            <View style={estilos.row}>
                <View>
                    <Text style={estilos.texto}>
                        <Text style={estilos.titulo}>Nome: </Text>
                        {fileName}
                    </Text>

                    <Text style={estilos.texto}>
                        <Text style={estilos.titulo}>Legenda: </Text>
                        {"Alguma frase descritiva da imagem anexada."}
                    </Text>
                </View>

                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="close-circle-outline" size={20} />
                </TouchableOpacity>

                {/* <Image source={{uri: imageSource}}  /> */}
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
        flexWrap: "wrap",
        width: 250,
        marginVertical: 5
    },
    imagem: {
        width: 100,
        height: 100,
    }
})