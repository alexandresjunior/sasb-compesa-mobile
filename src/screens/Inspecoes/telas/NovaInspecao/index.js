import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Botao from "../../components/Botao";
import Cabecalho from "../../components/Cabecalho";
import DadosBarragem from "./components/DadosBarragem";
import DadosInspecao from "./components/DadosInspecao";
import LocalizacaoBarragem from "./components/LocalizacaoBarragem";
import TipoInspecaoInputGroup from "./components/TipoInspecaoInputGroup";
import { barragem, inspecao } from "../../../../mocks";
import { InspecaoGlobalContext } from "../../../../contexts/InspecaoGlobalContext";

const NovaInspecao = () => {
    const { setPaginaAtual } = useContext(InspecaoGlobalContext);

    return (
        <ScrollView>
            <Cabecalho nome={"Nova Inspeção"} />
            <View style={estilos.container}>
                <DadosBarragem barragem={barragem} />
                <LocalizacaoBarragem barragem={barragem} />
                <DadosInspecao inspecao={inspecao} />
                <TipoInspecaoInputGroup />

                <Botao label={"Confirmar Dados"} onPress={() => setPaginaAtual(0)} />
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