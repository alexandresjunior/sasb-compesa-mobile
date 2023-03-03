import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import Home from "../screens/Home";
import InspecoesStackRotas from "./InspecoesStackRotas";
import Perfil from "../screens/Perfil";
import Notificacoes from "../screens/Notificacoes";
import { NotificacaoContext } from "../contexts/NotificacaoContext";
import { BarragemProvider } from "../contexts/BarragemContext";

const Tab = createBottomTabNavigator();

const TabRotas = () => {
    const { badge } = useContext(NotificacaoContext)

    return (
        <BarragemProvider>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName = "home";

                    switch (route.name) {
                        case "Inspecoes":
                            iconName = "docs";

                            return <SimpleLineIconsIcon name={iconName} size={size} color={color} />
                        case "Perfil":
                            iconName = "user"

                            return <SimpleLineIconsIcon name={iconName} size={size} color={color} />
                        case "Notificacoes":
                            iconName = "notifications-outline"

                            return <IoniconsIcon name={iconName} size={size} color={color} />
                    }

                    return <IoniconsIcon name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "#223F99",
                tabBarInactiveTintColor: "#000000"
            })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Inspecoes" component={InspecoesStackRotas} />
                <Tab.Screen name="Notificacoes" component={Notificacoes} options={badge} />
                <Tab.Screen name="Perfil" component={Perfil} />
            </Tab.Navigator>
        </BarragemProvider>
    )
}

export default TabRotas;