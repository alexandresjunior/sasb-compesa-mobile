import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Botao from "../../components/Botao";
import Cabecalho from "../../components/Cabecalho";
import DadosBarragem from "./components/DadosBarragem";
import DadosInspecao from "./components/DadosInspecao";
import LocalizacaoBarragem from "./components/LocalizacaoBarragem";
import TipoInspecaoInputGroup from "./components/TipoInspecaoInputGroup";
import { barragem, inspecao } from "../../../../mocks"

const NovaInspecao = () => {
    return (
        <ScrollView>
            <Cabecalho nome={"Nova Inspeção"} />

            <View style={estilos.container}>
                <DadosBarragem barragem={barragem} />
                <LocalizacaoBarragem barragem={barragem} />
                <DadosInspecao inspecao={inspecao} />
                <TipoInspecaoInputGroup />

                <Botao texto={"Confirmar Dados"} linkPara="Inspecoes" />
            </View>
        </ScrollView>
    )
}

export default NovaInspecao;

const estilos = StyleSheet.create({
    container: {
        margin: 25
    }
});