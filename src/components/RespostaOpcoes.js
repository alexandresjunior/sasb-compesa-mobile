import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { respostas } from "../mocks";
import { MaterialIcons } from '@expo/vector-icons';
import LegendaModal from "./LegendaModal";
import { Magnitude, NivelDePerigo, Situacao } from "../mocks/legenda";

const RespostaOpcoes = ({ situacao, setSituacao, magnitude, setMagnitude, nivelPerigo, setNivelPerigo, comentarios, setComentarios }) => {
    const [situacaoModalVisible, setSituacaoModalVisible] = useState(false);
    const [magnitudeModalVisible, setMagnitudeModalVisible] = useState(false);
    const [nivelDePerigoModalVisible, setNivelDePerigoModalVisible] = useState(false);

    return (
        <View>
            <View style={estilos.tooltip}>
                <Text style={estilos.titulo}>Situação:</Text>
                <TouchableOpacity style={estilos.icone} onPress={() => setSituacaoModalVisible(true)}>
                    <MaterialIcons name="info-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <LegendaModal
                modalVisible={situacaoModalVisible}
                setModalVisible={setSituacaoModalVisible}
                item={<Situacao />}
            />

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

            <View style={estilos.tooltip}>
                <Text style={estilos.titulo}>Magnitude:</Text>
                <TouchableOpacity style={estilos.icone} onPress={() => setMagnitudeModalVisible(true)}>
                    <MaterialIcons name="info-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <LegendaModal
                modalVisible={magnitudeModalVisible}
                setModalVisible={setMagnitudeModalVisible}
                item={<Magnitude />}
            />

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

            <View style={estilos.tooltip}>
                <Text style={estilos.titulo}>Nível de Perigo:</Text>
                <TouchableOpacity style={estilos.icone} onPress={() => setNivelDePerigoModalVisible(true)}>
                    <MaterialIcons name="info-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <LegendaModal
                modalVisible={nivelDePerigoModalVisible}
                setModalVisible={setNivelDePerigoModalVisible}
                item={<NivelDePerigo />}
            />

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
    tooltip: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icone: {
        paddingEnd: 5
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