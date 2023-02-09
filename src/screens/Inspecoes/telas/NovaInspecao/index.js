import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DadosBarragem from "../../components/DadosBarragem";
import DadosInspecao from "../../components/DadosInspecao";
import LocalizacaoBarragem from "../../components/LocalizacaoBarragem";
import TipoInspecaoInputGroup from "../../components/TipoInspecaoInputGroup";
import { barragem, inspecao } from "../../../../mocks";
import { InspecaoGlobalContext } from "../../../../contexts/InspecaoGlobalContext";
import MidButton from "../../../../components/buttons/MidButton";
import Header from "../../../../components/Header";

const NovaInspecao = () => {
    const { setPaginaAtual } = useContext(InspecaoGlobalContext);

    return (
        <ScrollView>
            <Header title={"Nova Inspeção"} />
            <View style={estilos.container}>
                <DadosBarragem barragem={barragem} />
                <LocalizacaoBarragem barragem={barragem} />
                <DadosInspecao inspecao={inspecao} />
                <TipoInspecaoInputGroup />

                <MidButton label={"Confirmar Dados"} onPress={() => setPaginaAtual(0)} />
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