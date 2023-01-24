import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Magnitude, NivelDePerigo, Situacao } from "../mocks/legenda";
import ImagePickerSection from "../screens/Inspecoes/components/formulario/ImagePickerSection";
import InputSection from "../screens/Inspecoes/components/formulario/InputSection";

const RespostaOpcoes = ({ questao, completo, situacao, setSituacao, magnitude, setMagnitude, nivelPerigo, setNivelPerigo, comentarios, setComentarios }) => {
    const [situacaoModalVisible, setSituacaoModalVisible] = useState(false);
    const [magnitudeModalVisible, setMagnitudeModalVisible] = useState(false);
    const [nivelDePerigoModalVisible, setNivelDePerigoModalVisible] = useState(false);

    const resposta = {
        situacao: situacao?.sigla,
        magnitude: magnitude?.sigla,
        nivelPerigo: nivelPerigo?.sigla,
        anexos: {},
        comentarios: ""
    }

    useEffect(() => {
        questao.resposta = resposta;
    }, [completo]);

    return (
        <View>
            <InputSection
                titulo={"Situação:"}
                legenda={<Situacao />}
                answer={situacao}
                setAnswer={setSituacao}
                modalVisible={situacaoModalVisible}
                setModalVisible={setSituacaoModalVisible}
            />

            <InputSection
                titulo={"Magnitude:"}
                legenda={<Magnitude />}
                answer={magnitude}
                setAnswer={setMagnitude}
                modalVisible={magnitudeModalVisible}
                setModalVisible={setMagnitudeModalVisible}
            />

            <InputSection
                titulo={"Nível de Perigo:"}
                legenda={<NivelDePerigo />}
                answer={nivelPerigo}
                setAnswer={setNivelPerigo}
                modalVisible={nivelDePerigoModalVisible}
                setModalVisible={setNivelDePerigoModalVisible}
            />

            <ImagePickerSection />

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