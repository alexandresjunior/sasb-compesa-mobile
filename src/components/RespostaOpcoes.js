import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Magnitude, NivelDePerigo, Situacao } from "../mocks/legenda";
import ImagePickerSection from "./sections/ImagePickerSection";
import InputSection from "./sections/InputSection";
import { respostas } from "../mocks";

const RespostaOpcoes = ({ questao, completo, situacao, setSituacao, magnitude, setMagnitude, nivelPerigo, setNivelPerigo, anexos, setAnexos, comentarios, setComentarios }) => {
    const [situacaoModalVisible, setSituacaoModalVisible] = useState(false);
    const [magnitudeModalVisible, setMagnitudeModalVisible] = useState(false);
    const [nivelDePerigoModalVisible, setNivelDePerigoModalVisible] = useState(false);

    const resposta = {
        situacao: situacao?.sigla,
        magnitude: magnitude?.sigla,
        nivelPerigo: nivelPerigo?.sigla,
        anexos: anexos,
        comentarios: comentarios
    }

    useEffect(() => {
        /* 
            Quando 'situacao' for 'NA/NE/DS/NI', 
            define-se 'magnitude' e 'nivelPerigo' com
            seus valores iniciais.
        */
        const opcoes = ['NA', 'NE', 'DS', 'NI']

        if (opcoes.some((opcao) => situacao?.sigla === opcao)) {
            setMagnitude(respostas.magnitude[0])
            setNivelPerigo(respostas.nivelPerigo[0])
        }

        questao.resposta = resposta;
    }, [completo, situacao, anexos]);

    return (
        <View>
            <InputSection
                titulo={"Situação:"}
                legenda={<Situacao />}
                opcoes={respostas.situacao}
                answer={situacao}
                setAnswer={setSituacao}
                modalVisible={situacaoModalVisible}
                setModalVisible={setSituacaoModalVisible}
            />

            <InputSection
                titulo={"Magnitude:"}
                legenda={<Magnitude />}
                opcoes={respostas.magnitude}
                answer={magnitude}
                setAnswer={setMagnitude}
                modalVisible={magnitudeModalVisible}
                setModalVisible={setMagnitudeModalVisible}
            />

            <InputSection
                titulo={"Nível de Perigo:"}
                legenda={<NivelDePerigo />}
                opcoes={respostas.nivelPerigo}
                answer={nivelPerigo}
                setAnswer={setNivelPerigo}
                modalVisible={nivelDePerigoModalVisible}
                setModalVisible={setNivelDePerigoModalVisible}
            />

            <ImagePickerSection anexos={anexos} setAnexos={setAnexos} />

            <Text style={estilos.titulo}>Comentários:</Text>
            <View style={estilos.row}>
                <TextInput
                    style={estilos.input}
                    placeholder="Digite aqui os comentários..."
                    placeholderTextColor="#CACACA"
                    keyboardType="text"
                    multiline={true}
                    onChangeText={(comentarios) => {
                        setComentarios(comentarios)
                    }}
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