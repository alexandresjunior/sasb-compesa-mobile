import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { respostas } from "../mocks";

const RespostaOpcoes = ({ situacao, setSituacao, magnitude, setMagnitude, nivelPerigo, setNivelPerigo, comentarios, setComentarios }) => {
    return (
        <View>
            <Text style={estilos.titulo}>Situação:</Text>
            <View style={estilos.row}>
                {
                    respostas?.situacao.map((opcao, index) => {
                        return (
                            <TouchableOpacity style={[
                                estilos.botao,
                                situacao === opcao && estilos.botaoSelecionado
                            ]}
                                onPress={() => setSituacao(opcao)}
                                key={index}>
                                <Text style={situacao === opcao ? estilos.textoBotaoSelecionado : estilos.textoBotao}>
                                    {opcao.sigla}
                                </Text>
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
                                magnitude === opcao && estilos.botaoSelecionado
                            ]}
                                onPress={() => setMagnitude(opcao)}
                                key={index}>
                                <Text style={magnitude === opcao ? estilos.textoBotaoSelecionado : estilos.textoBotao}>
                                    {opcao.sigla}
                                </Text>
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
                                nivelPerigo === opcao && estilos.botaoSelecionado
                            ]}
                                onPress={() => setNivelPerigo(opcao)}
                                key={index}>
                                <Text style={nivelPerigo === opcao ? estilos.textoBotaoSelecionado : estilos.textoBotao}>
                                    {opcao.sigla}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            <Text style={estilos.titulo}>Comentários:</Text>
            <View style={estilos.row}>
                <TextInput
                    style={estilos.input}
                    placeholder="Digite aqui os comentários..."
                    placeholderTextColor="#CACACA"
                    keyboardType="text"
                    multiline={true}
                    onChangeText={(event) => setComentarios(event.target.value)}
                    defaultValue={""}
                />
            </View>
        </View>
    )
}

export default RespostaOpcoes;

const estilos = StyleSheet.create({
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
    },
    input: {
        width: 260,
        height: 100,
        borderRadius: 5,
        borderColor: "#223F99",
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        margin: 10,
    }
});