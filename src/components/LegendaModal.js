import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LegendaModal = ({ modalVisible, setModalVisible, item }) => {
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
                    {item}
                    <TouchableOpacity
                        style={estilos.botao}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={estilos.textoBotao}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default LegendaModal;

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
        padding: 10,
        backgroundColor: '#223F99',
        width: 70
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