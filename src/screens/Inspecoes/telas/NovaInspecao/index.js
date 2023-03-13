import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { InspecaoGlobalContext } from "../../../../contexts/InspecaoGlobalContext";
import Header from "../../../../components/Header";
import FormularioSection from "../../components/FormularioSection";
import ConfirmarDados from "../../components/ConfirmarDados";
import { formatarData, obterPaginasDoFormulario } from "../../../../utils";
import { GlobalContext } from "../../../../contexts/GlobalContext";

const NovaInspecao = () => {
    const { barragem, formulario, paginaAtual, avancar, voltar } = useContext(InspecaoGlobalContext)
    const { usuarioLogado } = useContext(GlobalContext)

    const paginas = obterPaginasDoFormulario(formulario)

    const [pagina, setPagina] = useState(paginaAtual !== 0 ? paginas[paginaAtual - 1] : -1)

    const scrollViewRef = useRef()

    const numVistoria = barragem?.inspecao?.inspecoes?.length + 1

    const novaInspecao = {
        data: formatarData(new Date()),
        numVistoria: numVistoria,
        inspetor: usuarioLogado?.nome,
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
                            nextPage={() => avancar(paginaAtual, pagina, paginas)}
                        />
                    ) : (
                        <FormularioSection
                            pagina={pagina}
                            prevPage={() => voltar(paginaAtual)}
                            nextPage={() => avancar(paginaAtual, pagina, paginas)}
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