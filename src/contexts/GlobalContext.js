import React, { createContext, useEffect, useState } from "react";
import * as Network from "expo-network";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [networkConnected, setNetworkConnected] = useState();

    useEffect(() => {
        const getNetworkState = async () => {
            await Network.getNetworkStateAsync()
                .then((networkState) => setNetworkConnected(networkState.isConnected))
                .catch(() => console.error("Erro ao obter estado da conexão de rede."));
        }

        getNetworkState();
    }, []);

    return (
        <GlobalContext.Provider value={{ networkConnected }}>
            {children}
        </GlobalContext.Provider>
    )
}