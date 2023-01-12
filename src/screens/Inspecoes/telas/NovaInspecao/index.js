import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RadioButton, RadioButtonInput, RadioButtonLabel } from "react-native-simple-radio-button";
import Botao from "../../components/Botao";
import Cabecalho from "../../components/Cabecalho";

const NovaInspecao = () => {
    const [value, setValue] = useState(0);

    const radio_props = [
        { label: '1a. Inspeção Regular', value: 0 },
        { label: 'Inspeção Regular', value: 1 },
        { label: 'Inspeção de Rotina', value: 2 },
        { label: 'Inspeção Especial', value: 3 }
    ];

    return (
        <ScrollView>
            <Cabecalho nome={"Nova Inspeção"} />

            <View style={estilos.container}>
                <View style={estilos.row}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Barragem: </Text>
                    <Text style={estilos.texto}>{"Jaime Nejaim"}</Text>
                </View>

                <View style={estilos.row}>
                    <View style={[estilos.row, { marginEnd: 50 }]}>
                        <Text style={[estilos.texto, { fontWeight: "bold" }]}>Município: </Text>
                        <Text style={estilos.texto}>{"Caruaru"}</Text>
                    </View>
                    <View style={estilos.row}>
                        <Text style={[estilos.texto, { fontWeight: "bold" }]}>Estado: </Text>
                        <Text style={estilos.texto}>{"PE"}</Text>
                    </View>
                </View>

                <View>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Coordenadas: </Text>
                    <View style={estilos.row}>
                        <View style={[estilos.row, { marginEnd: 10 }]}>
                            <Text style={[estilos.texto, { fontWeight: "bold" }]}>Latitude: </Text>
                            <Text style={estilos.texto}>{"-8.357694"}</Text>
                        </View>
                        <View style={estilos.row}>
                            <Text style={[estilos.texto, { fontWeight: "bold" }]}>Longitude: </Text>
                            <Text style={estilos.texto}>{"-36.031853"}</Text>
                        </View>
                    </View>
                </View>

                <View style={estilos.row}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Sistema de Coordenadas: </Text>
                    <Text style={estilos.texto}>{"SIRGAS 2000"}</Text>
                </View>

                <View>
                    <View style={estilos.row}>
                        <Text style={[estilos.texto, { fontWeight: "bold" }]}>Data da Inspeção: </Text>
                        <Text style={estilos.texto}>{"20/12/2022"}</Text>
                    </View>

                    <View style={estilos.row}>
                        <Text style={[estilos.texto, { fontWeight: "bold" }]}>Vistoria N.: </Text>
                        <Text style={estilos.texto}>{"05"}</Text>
                    </View>

                    <View style={estilos.row}>
                        <Text style={[estilos.texto, { fontWeight: "bold" }]}>Inspetor(a): </Text>
                        <Text style={estilos.texto}>{"Eng. Taianne Ellis"}</Text>
                    </View>

                    <View style={estilos.row}>
                        <Text style={[estilos.texto, { fontWeight: "bold" }]}>Instituição: </Text>
                        <Text style={estilos.texto}>{"COMPESA"}</Text>
                    </View>

                    <View>
                        <Text style={[estilos.texto, { fontWeight: "bold" }]}>Empreendedor/Administração Regional: </Text>
                        <Text style={estilos.texto}>{"COMPESA/GNR Agreste Central"}</Text>
                    </View>

                    <View style={estilos.row}>
                        <Text style={[estilos.texto, { fontWeight: "bold" }]}>Riacho/Bacia: </Text>
                        <Text style={estilos.texto}>{"Olho d’Água/UP03 - Rio Ipojuca"}</Text>
                    </View>

                    <View style={estilos.row}>
                        <Text style={[estilos.texto, { fontWeight: "bold" }]}>Cota Atual do Nível d’Água: </Text>
                        <Text style={estilos.texto}>{"-"}</Text>
                    </View>
                </View>

                <View>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Tipo de Inspeção: </Text>
                    {
                        radio_props.map((obj, i) => (
                            <RadioButton labelHorizontal={true} key={i} >
                                <RadioButtonInput
                                    obj={obj}
                                    index={i}
                                    isSelected={value === i}
                                    onPress={(value) => setValue(value)}
                                    borderWidth={1}
                                    buttonInnerColor={"#223F99"}
                                    buttonOuterColor={value === i ? "#223F99" : "#D9D9D9"}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    buttonWrapStyle={{ marginLeft: 10 }}
                                />
                                <RadioButtonLabel
                                    obj={obj}
                                    index={i}
                                    labelHorizontal={true}
                                    onPress={(value) => setValue(value)}
                                    labelStyle={{ fontSize: 18 }}
                                />
                            </RadioButton>
                        ))
                    }
                </View>

                <Botao texto={"Confirmar Dados"} linkPara="Inspecoes" />
            </View>
        </ScrollView>
    )
}

export default NovaInspecao;

const estilos = StyleSheet.create({
    container: {
        margin: 25
    },
    row: {
        flexDirection: "row",
    },
    texto: {
        fontSize: 18,
        marginTop: 5,
    }
});