import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";
import { InspecaoGlobalContext } from "../../../../contexts/InspecaoGlobalContext";
import Header from "../../../../components/Header";
import { enviarDadosFormulario } from "../../../../services/api";
import EnviarDadosModal from "../../../../components/modals/EnviarDadosModal";

const RelatorioInspecao = () => {
    const { formulario, setPaginaAtual } = useContext(InspecaoGlobalContext)
    const [modalVisible, setModalVisible] = useState(false)
    const [response, setResponse] = useState("Enviando dados...")

    let animation = React.createRef();

    useEffect(() => {
        animation.current.play();
    })

    return (
        <View>
            <Header title={"Nova Inspeção"} />

            <View style={estilos.botoes}>
                <LottieView
                    source={require("../../../../../assets/check.json")}
                    style={{ width: 300, height: 300 }}
                    loop={true}
                    ref={animation}
                />
                <Text style={estilos.titulo}>Inspeção realizada com sucesso!</Text>

                <TouchableOpacity style={estilos.botao} onPress={() => {
                    enviarDadosFormulario(formulario, setResponse, setModalVisible)
                }}>
                    <Text style={estilos.textoBotao}>Enviar Dados</Text>
                </TouchableOpacity>
            </View>

            <EnviarDadosModal
                modalVisible={modalVisible}
                mensagem={response}
                textoBotao={"Voltar à Tela Inicial"}
                onPress={() => {
                    setModalVisible(false)
                    setPaginaAtual(-1)
                }}
            />
        </View>
    )
}

export default RelatorioInspecao;

const estilos = StyleSheet.create({
    botoes: {
        marginTop: 65,
        alignSelf: "center",
    },
    botao: {
        backgroundColor: "#223F99",
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        marginBottom: 20,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18
    },
    titulo: {
        textAlign: "center",
        alignSelf: "center",
        fontSize: 18,
        color: "#223F99",
        width: 150,
        marginBottom: 35
    },
})