import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "../screens/TelaInicial";
import Login from "../screens/Login";
import TabRotas from "./TabRotas";
import Cadastro from "../screens/Cadastro";
import { AuthContext } from "../contexts/AuthContext";
import { useAuth } from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

const StackRotas = () => {
    const { state } = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tela Principal" component={TelaInicial} />
            <Stack.Screen name="Log In" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Tab Rotas" component={TabRotas} />
            {/* {state?.userToken == null ? (
                <>
                    <Stack.Screen name="Tela Principal" component={TelaInicial} />
                    <Stack.Screen name="Log In" component={Login} />
                    <Stack.Screen name="Cadastro" component={Cadastro} />
                </>
            ) : (
                <Stack.Screen name="Tab Rotas" component={TabRotas} />
            )} */}
        </Stack.Navigator>
    )
}

export default StackRotas;