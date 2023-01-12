import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton, RadioButtonInput, RadioButtonLabel } from "react-native-simple-radio-button";

const TipoInspecaoInputGroup = () => {
    const [value, setValue] = useState(0);

    const radio_props = [
        { label: '1a. Inspeção Regular', value: 0 },
        { label: 'Inspeção Regular', value: 1 },
        { label: 'Inspeção de Rotina', value: 2 },
        { label: 'Inspeção Especial', value: 3 }
    ];

    return (
        <View style={estilos.container}>
            <Text style={estilos.label}>Tipo de Inspeção: </Text>
            {
                radio_props.map((obj, i) => (
                    <RadioButton labelHorizontal={true} key={i} >
                        <RadioButtonInput
                            obj={obj}
                            index={i}
                            isSelected={value === i}
                            onPress={(value) => setValue(value)}
                            borderWidth={1}
                            buttonInnerColor={"#223F99"}
                            buttonOuterColor={value === i ? "#223F99" : "#D9D9D9"}
                            buttonSize={10}
                            buttonOuterSize={20}
                            buttonWrapStyle={{ marginLeft: 10 }}
                        />
                        <RadioButtonLabel
                            obj={obj}
                            index={i}
                            labelHorizontal={true}
                            onPress={(value) => setValue(value)}
                            labelStyle={estilos.texto}
                        />
                    </RadioButton>
                ))
            }
        </View>
    )
}

export default TipoInspecaoInputGroup;

const estilos = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15
    },
    texto: {
        fontSize: 18,
        marginBottom: 10
    }
});