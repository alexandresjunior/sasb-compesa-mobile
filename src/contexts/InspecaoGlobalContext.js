import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { questoes, respostas } from "../mocks";

export const InspecaoGlobalContext = createContext({});

export const InspecaoProvider = ({ children }) => {
    const navigation = useNavigation();

    const [indiceQuestao, setIndiceQuestao] = useState(0);

    const iniciarNovaInspecao = () => {
        navigation.navigate("A - INFRAESTRUTURA OPERACIONAL", indiceQuestao)
    }

    const questaoAnterior = () => {
        setIndiceQuestao(indiceQuestao-1);

        if (indiceQuestao < 0) {
            navigation.navigate("Nova Inspecao");
            setIndiceQuestao(0);
        } else {
            navigation.navigate(`${questoes[indiceQuestao].codigo} - ${questoes[indiceQuestao].nome}`);
        }
    }

    const proximaQuestao = () => {
        setIndiceQuestao(indiceQuestao+1);

        if (indiceQuestao > questoes.length) {
            navigation.navigate("Relatorio Inspecao");
            setIndiceQuestao(questoes.length);
        } else {
            navigation.navigate(`${questoes[indiceQuestao].codigo} - ${questoes[indiceQuestao].nome}`);
        }
    }

    return (
        <InspecaoGlobalContext.Provider value={{ questoes, respostas, iniciarNovaInspecao, indiceQuestao, questaoAnterior, proximaQuestao }}>
            {children}
        </InspecaoGlobalContext.Provider>
    )
}
