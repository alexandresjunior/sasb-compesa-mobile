import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { barragem } from "../../../../mocks";
import { InspecaoGlobalContext } from "../../../../contexts/InspecaoGlobalContext";
import Header from "../../../../components/Header";
import FormularioSection from "../../components/FormularioSection";
import ConfirmarDados from "../../components/ConfirmarDados";
import { formatarData } from "../../../../utils";

const NovaInspecao = () => {
    const { paginas, paginaAtual, proximaPagina, paginaAnterior } = useContext(InspecaoGlobalContext)

    const [pagina, setPagina] = useState(paginas[paginaAtual])
    const [conteudoPagina, setConteudoPagina] = useState()

    const scrollViewRef = useRef()

    const novaInspecao = {
        data: formatarData(new Date()),
        numVistoria: "05",
        inspetor: "Eng. Taianne Ellis",
        responsavel: "Eng. Hudson Pedrosa"
    }

    useEffect(() => {
        setPagina(paginas[paginaAtual])
        renderPage()
        scrollViewRef.current.scrollTo({ y: 0, animated: true })
    }, [paginaAtual])

    // TODO: AddEventListener para click no botão de voltar

    const renderPage = () => {
        if (paginaAtual === 0) {
            setConteudoPagina(<ConfirmarDados barragem={barragem} inspecao={novaInspecao} nextPage={proximaPagina} />)
        } else {
            setConteudoPagina(<FormularioSection pagina={pagina} prevPage={paginaAnterior} nextPage={proximaPagina} />)
        }
    }

    return (
        <ScrollView ref={scrollViewRef}>
            <Header title={"Nova Inspeção"} />
            <View style={estilos.container}>
                {conteudoPagina}
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