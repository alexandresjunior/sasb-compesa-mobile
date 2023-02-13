import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { obterBarragensInfo } from "../services/api"

export const useBarragens = () => {
    const [barragens, setBarragens] = useState([])

    const { networkConnected } = useContext(GlobalContext)

    useEffect(() => {
        if (!networkConnected) {
            alert("Dispositivo sem conexão de rede. Utilizando dados sincronizados no dia XX-XX-XXXX.")
        } else {
            obterBarragensInfo("/barragens", setBarragens)
        }
    }, [])

    return [barragens, setBarragens]
}