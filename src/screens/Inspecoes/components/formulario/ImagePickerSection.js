import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ImageViewerSection from "./ImageViewerSection";

const ImagePickerSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [fileName, setFileName] = useState("");

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            result.assets[0].fileName = "Imagem_1.jpg";
            setFileName(result.assets[0].fileName);
            setSelectedImage(result.assets[0].uri);
            // console.log(result);
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

            {!!selectedImage && <ImageViewerSection imageSource={selectedImage} fileName={fileName} />}
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