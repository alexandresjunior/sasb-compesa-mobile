import React from "react";
import SearchBar from "../../components/SearchBar";
import Cabecalho from "../Inspecoes/components/Cabecalho";

const Barragem = () => {
    return (
        <>
            <Cabecalho nome={"Selecionar Barragem"} />
            <SearchBar />
        </>
    )
}

export default Barragem;