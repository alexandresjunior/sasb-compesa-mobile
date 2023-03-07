import React from "react";
import { StyleSheet, TextInput } from "react-native";

const FormTextInput = ({ placeholder, type='none', setValue, defaultValue, password=false }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            inputMode={type}
            onChangeText={(value) => {
                setValue(value)
            }}
            secureTextEntry={password}
            defaultValue={defaultValue}
        />
    )
}

export default FormTextInput;

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        height: 50,
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white"
    }
})