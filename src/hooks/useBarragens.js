import { useEffect, useState } from "react"
import { listaBarragens } from "../mocks"

export const useBarragens = () => {
    const [barragens, setBarragens] = useState([])

    useEffect(() => {
        setBarragens(listaBarragens)
    }, [])

    return barragens
}