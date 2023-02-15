import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import TabRotas from "./TabRotas";
import Cadastro from "../screens/Cadastro";
import Suporte from "../screens/Suporte";
import { NotificacaoProvider } from "../contexts/NotificacaoContext";

const Stack = createNativeStackNavigator();

const StackRotas = () => {
    return (
        <NotificacaoProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
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
                <Stack.Screen name="Suporte" component={Suporte} />
            </Stack.Navigator>
        </NotificacaoProvider>
    )
}

export default StackRotas;