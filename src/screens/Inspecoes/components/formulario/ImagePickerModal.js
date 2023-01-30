import React from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const ImagePickerModal = ({ modalVisible, setModalVisible, legenda, setLegenda, anexos, setAnexos }) => {
    const salvarAnexo = () => {
        setAnexos([...anexos, legenda])
        setModalVisible(!modalVisible)
        console.log(anexos)
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={estilos.container}>
                <View style={estilos.modal}>
                    <Text style={estilos.titulo}>Adicionar descrição:</Text>

                    <TextInput
                        style={estilos.input}
                        placeholder="Digite uma descrição..."
                        placeholderTextColor={"#CACACA"}
                        keyboardType="text"
                        multiline={true}
                        onChangeText={(legenda) => {
                            setLegenda(legenda)
                        }}
                        defaultValue={legenda}
                    />

                    <TouchableOpacity
                        style={estilos.botao}
                        onPress={salvarAnexo}>
                        <Text style={estilos.textoBotao}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ImagePickerModal;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modal: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    titulo: {
        marginBottom: 20,
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "left"
    },
    input: {
        height: 80,
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        width: 200,
    },
    botao: {
        marginTop: 30,
        borderRadius: 5,
        padding: 15,
        backgroundColor: '#223F99',
        width: 85
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textoModal: {
        textAlign: 'center',
    },
});