import React from "react";
import BarragemCard from "../../components/BarragemCard";
import SearchBar from "../../components/SearchBar";
import { listaBarragens } from "../../mocks";
import Cabecalho from "../Inspecoes/components/Cabecalho";

const Barragem = () => {
    return (
        <>
            <Cabecalho nome={"Selecionar Barragem"} showButton={true} />
            <SearchBar />
            {listaBarragens?.map((barragem, index) => (
                <BarragemCard barragem={barragem} linkPara={"Inspecoes Realizadas"} key={index} />
            ))}
        </>
    )
}

export default Barragem;