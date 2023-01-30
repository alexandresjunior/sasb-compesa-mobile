import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ImageViewerSection from "./ImageViewerSection";
import ImagePickerModal from "./ImagePickerModal";

const ImagePickerSection = ({ anexos, setAnexos }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [source, setSource] = useState("");

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSource(result.assets)
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
                anexos={anexos}
                setAnexos={setAnexos}
                source={source}
                setSource={setSource}
            />

            {
                anexos?.map((anexo, indice) => {
                    return <ImageViewerSection anexo={anexo} anexos={anexos} setAnexos={setAnexos} indice={indice} key={indice} />
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