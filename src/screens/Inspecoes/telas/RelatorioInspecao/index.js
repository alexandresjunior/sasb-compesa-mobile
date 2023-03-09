import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";
import Header from "../../../../components/Header";
import { InspecaoGlobalContext } from "../../../../contexts/InspecaoGlobalContext";
import { obterRelatorioPDF } from "../../../../services/api";
import { NotificacaoContext } from "../../../../contexts/NotificacaoContext";
import completedGif from "../../../../../assets/check.json";
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

const RelatorioInspecao = () => {
    const { barragem, formulario, setPaginaAtual } = useContext(InspecaoGlobalContext)
    const { adicionarNotificacao } = useContext(NotificacaoContext)

    const [loading, setLoading] = useState(false)

    const compartilharRelatorio = async () => {
        setLoading(true)

        try {
            // Fazer a chamada à API externa para obter o arquivo PDF
            const relatorio = await obterRelatorioPDF({ barragem: barragem, formulario: formulario })

            // Salva o arquivo no sistema
            const fileUri = `${FileSystem.documentDirectory}relatorio.pdf`;
            await FileSystem.writeAsStringAsync(fileUri, relatorio, {
                encoding: FileSystem.EncodingType.Base64,
            })

            // Compartilhar o arquivo PDF
            await Sharing.shareAsync(fileUri);
        } catch (error) {
            alert(error)
        }

        setLoading(false)
    };

    let animation = React.createRef();

    useEffect(() => {
        animation.current.play();
    })

    return (
        <View>
            <Header title={"Nova Inspeção"} />

            <View style={estilos.botoes}>
                <LottieView
                    source={completedGif}
                    style={{ width: 300, height: 300 }}
                    loop={true}
                    ref={animation}
                />
                <Text style={estilos.titulo}>Inspeção realizada com sucesso!</Text>

                <TouchableOpacity
                    style={[estilos.botao, { opacity: loading ? 0.5 : 1 }]}
                    onPress={compartilharRelatorio}
                    disabled={loading}>
                    <Text style={estilos.textoBotao}>Compartilhar Relatório</Text>
                </TouchableOpacity>

                {loading && <ActivityIndicator style={estilos.indicator} />}
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
    titulo: {
        textAlign: "center",
        alignSelf: "center",
        fontSize: 18,
        color: "#223F99",
        width: 150,
        marginBottom: 35
    },
    indicator: {
        margin: 10,
    }
})