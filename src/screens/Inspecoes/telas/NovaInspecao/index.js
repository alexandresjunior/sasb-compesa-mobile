import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { barragem } from "../../../../mocks";
import { InspecaoGlobalContext } from "../../../../contexts/InspecaoGlobalContext";
import Header from "../../../../components/Header";
import FormularioSection from "../../components/FormularioSection";

const NovaInspecao = () => {
    const { paginas, paginaAtual, setPaginaAtual } = useContext(InspecaoGlobalContext);

    const [pagina] = useState(paginas[paginaAtual])

    // TODO: AddEventListener para click no botão de voltar

    const renderPage = () => {
        switch (paginaAtual) {
            case 1:
                return <ConfirmarDados barragem={barragem} nextPage={() => setPaginaAtual(paginaAtual + 1)} />
            default:
                return <FormularioSection pagina={pagina} prevPage={() => setPaginaAtual(paginaAtual - 1)} nextPage={() => setPaginaAtual(paginaAtual + 1)} />
        }
    }

    return (
        <ScrollView>
            <Header title={"Nova Inspeção"} />
            <View style={estilos.container}>
                {renderPage()}
            </View>
        </ScrollView>
    )
}

export default NovaInspecao;

const estilos = StyleSheet.create({
    container: {
        margin: 25
    },
});