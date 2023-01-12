import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { respostas } from "../mocks";

const RespostaOpcoes = () => {
    const [situacao, setSituacao] = useState();
    const [magnitude, setMagnitude] = useState();
    const [nivelPerigo, setNivelPerigo] = useState();

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Situação:</Text>
            <View style={estilos.row}>
                {
                    respostas?.situacao.map((opcao, index) => {
                        return (
                            <TouchableOpacity style={[
                                estilos.botao,
                                situacao === opcao.sigla && estilos.botaoSelecionado
                            ]}
                                onPress={() => setSituacao(opcao.sigla)}
                                key={index}>
                                <Text style={situacao === opcao.sigla ? estilos.textoBotaoSelecionado : estilos.textoBotao}>{opcao.sigla}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            <Text style={estilos.titulo}>Magnitude:</Text>
            <View style={estilos.row}>
                {
                    respostas?.magnitude.map((opcao, index) => {
                        return (
                            <TouchableOpacity style={[
                                estilos.botao,
                                magnitude === opcao.sigla && estilos.botaoSelecionado
                            ]}
                                onPress={() => setMagnitude(opcao.sigla)}
                                key={index}>
                                <Text style={magnitude === opcao.sigla ? estilos.textoBotaoSelecionado : estilos.textoBotao}>{opcao.sigla}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            <Text style={estilos.titulo}>Nível de Perigo:</Text>
            <View style={estilos.row}>
                {
                    respostas?.nivelPerigo.map((opcao, index) => {
                        return (
                            <TouchableOpacity style={[
                                estilos.botao,
                                nivelPerigo === opcao.sigla && estilos.botaoSelecionado
                            ]}
                                onPress={() => setNivelPerigo(opcao.sigla)}
                                key={index}>
                                <Text style={nivelPerigo === opcao.sigla ? estilos.textoBotaoSelecionado : estilos.textoBotao}>{opcao.sigla}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default RespostaOpcoes;

const estilos = StyleSheet.create({
    container: {
        margin: 25,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300,
        marginBottom: 20
    },
    titulo: {
        marginBottom: 20,
        fontSize: 18,
        fontWeight: "bold"
    },
    botao: {
        borderWidth: 1,
        borderColor: "#223F99",
        borderRadius: 5,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    botaoSelecionado: {
        backgroundColor: "#223F99",
    },
    textoBotao: {
        color: "#223F99",
        fontSize: 16
    },
    textoBotaoSelecionado: {
        color: "#fff",
        fontSize: 16
    }

});