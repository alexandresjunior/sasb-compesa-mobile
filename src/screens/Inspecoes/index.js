import React from "react";
import { FlatList } from "react-native";
import HorizontalCard from "../../components/HorizontalCard";
import { inspecoes } from "../../mocks/inspecoes";
import Botao from "./components/Botao";
import Cabecalho from "./components/Cabecalho";

const Inspecoes = () => {
    return (
        <FlatList
            data={inspecoes}
            renderItem={({ item }) => <HorizontalCard inspecao={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => {
                return <Cabecalho nome={"Barragem Jaime Nejaim"} />
            }}
            ListFooterComponent={() => {
                return <Botao texto={"Nova Inspeção"} linkPara={"Nova Inspecao"} />
            }}
        />
    )
}

export default Inspecoes;
