import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Cabecalho from "../Inspecoes/components/Cabecalho";

const Suporte = () => {
    return (
        <>
            <Cabecalho nome={"Suporte"} />
            <View style={estilos.container}>
                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.texto}>Esta solicitação deverá ser feita diretamente com o administrador.</Text>
                </View>

                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>Telefone: </Text>
                    <Text style={estilos.texto}>(XX) XXXXX-XXXX</Text>
                </View>

                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>E-mail: </Text>
                    <Text style={estilos.texto}>suporte.sasb@compesa.com.br</Text>
                </View>
            </View>
        </>
    )
}

export default Suporte;

const estilos = StyleSheet.create({
    container: {
        margin: 25,
    },
    row: {
        flexDirection: "row",
    },
    titulo: {
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold"
    },
    texto: {
        fontSize: 18,
    }
});