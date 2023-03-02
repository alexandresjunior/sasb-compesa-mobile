import { useEffect, useState } from "react";
import { listaBarragens } from "../mocks";
import { filtrarBarragensPeloNome } from "../utils";

export const useBarragens = (filtro) => {
    const [barragens, setBarragens] = useState()

    useEffect(() => {
        // Filtrar da lista obtida da API e não do state!
        const barragensFiltradas = filtrarBarragensPeloNome(listaBarragens, filtro)

        setBarragens(barragensFiltradas)
    }, [filtro])

    return barragens
}