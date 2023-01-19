import React, { useContext, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";
import Cabecalho from "../../components/Cabecalho";
import { InspecaoGlobalContext } from "../../../../contexts/InspecaoGlobalContext";

const RelatorioInspecao = () => {
    const { setPagina } = useContext(InspecaoGlobalContext);

    let animation = React.createRef();

    useEffect(() => {
        animation.current.play();
    })

    return (
        <View>
            <Cabecalho nome={"Nova Inspeção"} />

            <View style={estilos.botoes}>
                <LottieView
                    source={require("../../../../../assets/check.json")}
                    style={{ width: 300, height: 300 }}
                    loop={true}
                    ref={animation}
                />
                <Text style={estilos.titulo}>Inspeção realizada com sucesso!</Text>

                <TouchableOpacity style={estilos.botao} onPress={() => { }}>
                    <Text style={estilos.textoBotao}>Gerar Relatório</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaoOutline} onPress={() => setPagina(-1)}>
                    <Text style={estilos.textoBotaoOutline}>Voltar à Tela Inicial</Text>
                </TouchableOpacity>
            </View>
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
    botaoOutline: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
    },
    textoBotaoOutline: {
        textAlign: "center",
        color: "#223F99",
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