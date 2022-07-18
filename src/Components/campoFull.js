import React from 'react';
import {TextInput} from "react-native";
import styles from './styles'

export default function CampoFull({valor, estilos, acao}){

    const update = (newValue, actionReturn) => {
        const verificaInt = newValue.match(/^[0-9]*$/);
        if(!verificaInt) return;

        const removeZeroRight = newValue.replace(/^(0)(.+)/, '$2');

        actionReturn(removeZeroRight);
    }

    const stringToNumber = String(valor)

    return(
        <>
         <TextInput
             style={[styles.campo, estilos]}
            keyboardType='number-pad'
            selectTextOnFocus
            onChangeText={(newValue) => {update(newValue, acao)}}
            value={stringToNumber}
         />
        </>
    )
}