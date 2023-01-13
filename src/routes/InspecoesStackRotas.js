import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inspecoes from "../screens/Inspecoes";
import NovaInspecao from "../screens/Inspecoes/telas/NovaInspecao";
import { questoes } from "../mocks";
import { InspecaoProvider } from "../contexts/InspecaoGlobalContext";
import FormularioInspecao from "../screens/Inspecoes/telas/NovaInspecao/components/FormularioInspecao";

const Stack = createNativeStackNavigator();

const InspecoesStackRotas = () => {
    return (
        <InspecaoProvider>
            <Stack.Navigator initialRouteName="Inspecoes Realizadas" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Inspecoes Realizadas" component={Inspecoes} />
                <Stack.Screen name="Nova Inspecao" component={NovaInspecao} />
                {
                    questoes?.map((questao, indice) => {
                        return (
                            <Stack.Screen key={indice} name={`${questao.codigo} - ${questao.nome}`} component={FormularioInspecao} />
                        )
                    })
                }
            </Stack.Navigator>
        </InspecaoProvider>
    )
}

export default InspecoesStackRotas;


