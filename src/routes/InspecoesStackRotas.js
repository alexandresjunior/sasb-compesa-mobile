import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inspecoes from "../screens/Inspecoes";
import NovaInspecao from "../screens/Inspecoes/telas/NovaInspecao";
import { formulario } from "../mocks";
import { InspecaoProvider } from "../contexts/InspecaoGlobalContext";
import FormularioInspecao from "../screens/Inspecoes/telas/NovaInspecao/components/FormularioInspecao";
import RelatorioInspecao from "../screens/Inspecoes/telas/RelatorioInspecao";
import Barragem from "../screens/Barragem";

const Stack = createNativeStackNavigator();

const InspecoesStackRotas = () => {
    return (
        <InspecaoProvider>
            <Stack.Navigator initialRouteName="Relatorio Inspecao" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Relatorio Inspecao" component={RelatorioInspecao} />
                <Stack.Screen name="Selecionar Barragem" component={Barragem} />
                <Stack.Screen name="Inspecoes Realizadas" component={Inspecoes} />
                <Stack.Screen name="Nova Inspecao" component={NovaInspecao} />
                {
                    formulario?.map((questao, indice) => {
                        return (
                            <Stack.Screen key={indice} name={`${questao.codigo} - ${questao.nome}`} component={FormularioInspecao} />
                        )
                    })
                }
                {/* <Stack.Screen name="Relatorio Inspecao" component={RelatorioInspecao} /> */}
            </Stack.Navigator>
        </InspecaoProvider>
    )
}

export default InspecoesStackRotas;


