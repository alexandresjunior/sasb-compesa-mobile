import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { barragem } from "../../../../mocks";
import { InspecaoGlobalContext } from "../../../../contexts/InspecaoGlobalContext";
import Header from "../../../../components/Header";
import FormularioSection from "../../components/FormularioSection";
import ConfirmarDados from "../../components/ConfirmarDados";
import { formatarData } from "../../../../utils";

const NovaInspecao = () => {
    const { paginas, paginaAtual, avancar, voltar } = useContext(InspecaoGlobalContext)

    const [pagina, setPagina] = useState(paginaAtual !== 0 ? paginas[paginaAtual - 1] : -1)

    const scrollViewRef = useRef()

    const novaInspecao = {
        data: formatarData(new Date()),
        numVistoria: "05",
        inspetor: "Eng. Taianne Ellis",
        responsavel: "Eng. Hudson Pedrosa"
    }

    useEffect(() => {
        setPagina(paginaAtual !== 0 ? paginas[paginaAtual - 1] : -1)

        scrollViewRef.current.scrollTo({ y: 0, animated: true })
    }, [paginaAtual])

    // TODO: AddEventListener para click no botão de voltar

    return (
        <ScrollView ref={scrollViewRef}>
            <Header title={"Nova Inspeção"} />
            <View style={estilos.container}>
                {
                    pagina === -1 ? (
                        <ConfirmarDados
                            barragem={barragem}
                            inspecao={novaInspecao}
                            nextPage={() => avancar(paginaAtual)}
                        />
                    ) : (
                        <FormularioSection
                            pagina={pagina}
                            prevPage={() => voltar(paginaAtual)}
                            nextPage={() => avancar(paginaAtual)}
                        />
                    )
                }
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