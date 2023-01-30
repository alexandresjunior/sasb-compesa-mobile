import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ImageViewerSection from "./ImageViewerSection";
import ImagePickerModal from "./ImagePickerModal";

const ImagePickerSection = ({ anexos, setAnexos }) => {
    const [legenda, setLegenda] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
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
            console.log(result);

            setModalVisible(true)
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

            <ImagePickerModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                legenda={legenda}
                setLegenda={setLegenda}
                anexos={anexos}
                setAnexos={setAnexos}
            />

            {
                anexos?.map((anexo, index) => {
                    return <ImageViewerSection imageSource={anexo} fileName={fileName} legenda={legenda} key={index} />
                })
            }
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