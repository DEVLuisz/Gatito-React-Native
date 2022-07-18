import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import styles from '../Components/stylesButton';

export default function Button({pequeno = false, invertido = false, valor, acao}){

    const stylesDefault = styles(pequeno, invertido)

    return(
        <TouchableOpacity onPress={acao} style={stylesDefault.botao}>
            <Text style={stylesDefault.valor}>{valor}</Text>
        </TouchableOpacity>
    )
}