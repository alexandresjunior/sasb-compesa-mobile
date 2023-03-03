import { createContext, useEffect, useState } from "react";
import { listaBarragens } from "../mocks";
import { filtrarBarragensPeloNome } from "../utils";

export const BarragemContext = createContext({})

const INITIAL_REGION = {
    latitude: -8.470697,
    longitude: -38.371057,
    latitudeDelta: 1,
    longitudeDelta: 1,
}

export const BarragemProvider = ({ children }) => {
    const [coordenadas, setCoordenadas] = useState(INITIAL_REGION)
    const [barragens, setBarragens] = useState(listaBarragens)
    const [busca, setBusca] = useState()

    useEffect(() => {
        // Filtrar da lista obtida da API e não do state!
        const barragensFiltradas = filtrarBarragensPeloNome(listaBarragens, busca)

        setBarragens(barragensFiltradas)

        if (barragens?.length === 1) {
            const barragem = barragens[0]

            setCoordenadas({
                latitude: barragem.localizacao.latitude,
                longitude: barragem.localizacao.longitude,
                latitudeDelta: 1,
                longitudeDelta: 1,
            })
        }
    }, [busca])

    return (
        <BarragemContext.Provider value={{ barragens, setBarragens, busca, setBusca, coordenadas, setCoordenadas }}>
            {children}
        </BarragemContext.Provider>
    )
}