import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { obterBarragensInfo } from "../services/api"
import { obterUltimaSincronizacao } from "../services/local"

export const useBarragens = () => {
    const [barragens, setBarragens] = useState([])
    const [ultimaSincronizacao, setUltimaSincronizacao] = useState()

    const { networkConnected } = useContext(GlobalContext)

    useEffect(() => {
        if (!networkConnected) {
            obterUltimaSincronizacao(setBarragens, setUltimaSincronizacao)

            alert(`Dispositivo sem conexão de rede. 
                Utilizando dados sincronizados no dia ${ultimaSincronizacao?.data} às ${ultimaSincronizacao?.hora}.
            `)
        } else {
            obterBarragensInfo("/barragens", setBarragens)
        }
    }, [])

    return [barragens, setBarragens]
}