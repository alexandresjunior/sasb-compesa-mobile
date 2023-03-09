import React from "react";
import Inspecoes from "../screens/Inspecoes";
import NovaInspecao from "../screens/Inspecoes/telas/NovaInspecao";
import { InspecaoProvider } from "../contexts/InspecaoGlobalContext";
import RelatorioInspecao from "../screens/Inspecoes/telas/RelatorioInspecao";
import Barragem from "../screens/Barragem";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const InspecoesStackRotas = () => {
    return (
        <InspecaoProvider>
            <Stack.Navigator initialRouteName="Selecionar Barragem" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Selecionar Barragem" component={Barragem} />
                <Stack.Screen name="Inspecoes Realizadas" component={Inspecoes} />
                <Stack.Screen name="Nova Inspecao" component={NovaInspecao} />
                <Stack.Screen name="Relatorio Inspecao" component={RelatorioInspecao} />
            </Stack.Navigator>
        </InspecaoProvider>
    )
}

export default InspecoesStackRotas;


