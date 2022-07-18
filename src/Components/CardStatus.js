import React from "react";
import { Text, View } from 'react-native';
import styles from './CardStatusStyles'
import Button from "./Button";

export default function CardStatus({ total }){
    return (
        <View style={styles.conteudo}>
            <View style={styles.total}>
                <Text style={styles.descricao}>Total do Carrinho:</Text>
                <Text style={styles.valor}>
                    {
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)
                    }
                </Text>
            </View>
            <View style={styles.botao}>
                <Button valor='Concluir Pedido' invertido/>
            </View>
        </View>
    )
}