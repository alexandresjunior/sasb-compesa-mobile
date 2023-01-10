import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import Home from "../screens/Home";
import Inspecoes from "../screens/Inspecoes";

const Tab = createBottomTabNavigator();

const TabRotas = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
                let iconName = "home";

                if (route.name === "Inspecoes") {
                    iconName = "docs";

                    return <SimpleLineIconsIcon name={iconName} size={size} color={color} />
                }

                return <IoniconsIcon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "#223F99",
            tabBarInactiveTintColor: "#000000"
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Inspecoes" component={Inspecoes} />
        </Tab.Navigator>
    )
}

export default TabRotas;