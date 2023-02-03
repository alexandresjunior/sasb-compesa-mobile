import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ImageViewerCarousel from "./ImageViewerCarousel";

const ImagePickerSection = ({ anexos, setAnexos }) => {
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            allowsMultipleSelection: true,
            aspect: [16, 9],
            quality: 1,
        });

        if (!result.canceled) {
            // This might be removed in SDK 48 (check deprecated variables)
            setAnexos([...anexos, ...result.assets])
        } else {
            alert("Nenhuma imagem foi selecionada!");
        }
    };

    return (
        <>
            <Text style={estilos.titulo}>Anexos:</Text>
            <TouchableOpacity style={estilos.botao} onPress={pickImageAsync}>
                <Text style={estilos.textoBotao}>Selecionar Imagem</Text>
            </TouchableOpacity>

            <ImageViewerCarousel anexos={anexos} setAnexos={setAnexos} />
        </>
    )
}

export default ImagePickerSection;

const estilos = StyleSheet.create({
    botao: {
        borderWidth: 1,
        borderColor: "#223F99",
        borderRadius: 5,
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginBottom: 20,
        backgroundColor: "#223F99",
    },
    textoBotao: {
        color: "#fff",
        fontSize: 16
    },
    titulo: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold"
    }
})