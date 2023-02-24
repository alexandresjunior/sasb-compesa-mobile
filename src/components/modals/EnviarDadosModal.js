import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const EnviarDadosModal = ({ modalVisible, mensagem, textoBotao, onPress }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onPress}>
            <View style={estilos.container}>
                <View style={estilos.modal}>
                    <Text style={estilos.texto}>{mensagem}</Text>
                    <TouchableOpacity
                        style={estilos.botao}
                        onPress={onPress}>
                        <Text style={estilos.textoBotao}>{textoBotao}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default EnviarDadosModal;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modal: {
        margin: 20,
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
    botao: {
        marginTop: 30,
        borderRadius: 5,
        padding: 15,
        backgroundColor: '#223F99',
        width: 175
    },
    botaoDisabled: {
        marginTop: 30,
        borderRadius: 5,
        padding: 15,
        backgroundColor: '#223F99',
        width: 175,
        opacity: 0.5
    },
    texto: {
        fontSize: 16,
        textAlign: 'center',
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