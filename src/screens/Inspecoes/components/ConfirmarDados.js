import React from "react";
import DadosBarragem from "./DadosBarragem";
import DadosInspecao from "./DadosInspecao";
import LocalizacaoBarragem from "./LocalizacaoBarragem";
import TipoInspecaoInputGroup from "./TipoInspecaoInputGroup";
import MidButton from "../../../components/buttons/MidButton";

const ConfirmarDados = ({ barragem, inspecao, nextPage }) => {
    return (
        <>
            <DadosBarragem barragem={barragem} />
            <LocalizacaoBarragem barragem={barragem} />
            <DadosInspecao inspecao={inspecao} />
            <TipoInspecaoInputGroup />

            <MidButton label={"Confirmar Dados"} onPress={nextPage} />
        </>
    )
}

export default ConfirmarDados;