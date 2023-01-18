import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Situacao = () => {
    return (
        <View>
            <Text style={estilos.titulo}>Legenda: Situação</Text>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>NA</Text>
                <Text style={estilos.legenda}>Este item não é aplicável</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>NE</Text>
                <Text style={estilos.legenda}>Anomalia não existente</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>PV</Text>
                <Text style={estilos.legenda}>Anomalia constatada pela primeira vez</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>DS</Text>
                <Text style={estilos.legenda}>Anamolia desapareceu</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>DI</Text>
                <Text style={estilos.legenda}>Anamolia diminuiu</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>PC</Text>
                <Text style={estilos.legenda}>Anamolia permaneceu constante</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>AU</Text>
                <Text style={estilos.legenda}>Anamolia aumentou</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>NI</Text>
                <Text style={estilos.legenda}>Este item não foi inspecionado</Text>
            </View>
        </View>
    )
}

export const Magnitude = () => {
    return (
        <View>
            <Text style={estilos.titulo}>Legenda: Magnitude</Text>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>I</Text>
                <Text style={estilos.legenda}>Insignificante</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>P</Text>
                <Text style={estilos.legenda}>Pequena</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>T</Text>
                <Text style={estilos.legenda}>Média</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>G</Text>
                <Text style={estilos.legenda}>Grande</Text>
            </View>
        </View>
    )
}
export const NivelDePerigo = () => {
    return (
        <View>
            <Text style={estilos.titulo}>Legenda: Nível de Perigo</Text>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>0</Text>
                <Text style={estilos.legenda}>Nenhum</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>1</Text>
                <Text style={estilos.legenda}>Atenção</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>2</Text>
                <Text style={estilos.legenda}>Alerta</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.sigla}>3</Text>
                <Text style={estilos.legenda}>Emergência</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        fontWeight: "bold",
        marginBottom: 10
    },
    row: {
        flexDirection: "row"
    },
    sigla: {
        fontWeight: "bold",
        marginBottom: 5
    },
    legenda: {
        marginStart: 5
    }
})