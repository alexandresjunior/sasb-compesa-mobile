import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inspecoes from "../screens/Inspecoes";
import NovaInspecao from "../screens/Inspecoes/telas/NovaInspecao";

const Stack = createNativeStackNavigator();

const InspecoesStackRotas = () => {
    return (
        <Stack.Navigator initialRouteName="Inspecoes Realizadas" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Inspecoes Realizadas" component={Inspecoes} />
            <Stack.Screen name="Nova Inspecao" component={NovaInspecao} />
        </Stack.Navigator>
    )
}

export default InspecoesStackRotas;


