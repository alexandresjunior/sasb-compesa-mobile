import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inspecoes from "../screens/Inspecoes";
import NovaInspecao from "../screens/Inspecoes/telas/NovaInspecao";
import { InspecaoProvider } from "../contexts/InspecaoGlobalContext";
import FormularioInspecao from "../screens/Inspecoes/components/FormularioInspecao";
import RelatorioInspecao from "../screens/Inspecoes/telas/RelatorioInspecao";
import Barragem from "../screens/Barragem";
import { obterPaginasDoFormulario } from "../utils";
import { formulario } from "../states/formulario";

const Stack = createNativeStackNavigator();

const InspecoesStackRotas = () => {
    const paginas = obterPaginasDoFormulario(formulario);

    return (
        <InspecaoProvider>
            <Stack.Navigator initialRouteName="Selecionar Barragem" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Selecionar Barragem" component={Barragem} />
                <Stack.Screen name="Inspecoes Realizadas" component={Inspecoes} />
                <Stack.Screen name="Nova Inspecao" component={NovaInspecao} />
                {
                    paginas?.map((pagina, indice) => {
                        return (
                            <Stack.Screen key={indice} name={`${pagina.titulo} - ${pagina.subtitulo}`} component={FormularioInspecao} />
                        )
                    })
                }
                <Stack.Screen name="Relatorio Inspecao" component={RelatorioInspecao} />
            </Stack.Navigator>
        </InspecaoProvider>
    )
}

export default InspecoesStackRotas;


