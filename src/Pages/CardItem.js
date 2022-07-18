import React, {useState} from 'react';
import { Text, View} from 'react-native';
import styles from './stylesItem';
import CampoFull from "../Components/campoFull";
import Button from "../Components/Button"

export default function CardItem ({nome, preco, descricao, quantidade: quantidadeInicial}){

    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);

    const updateQuantidadeTotal = (newQuantidade) =>{
        setQuantidade(newQuantidade);
        calculoTotal(newQuantidade);
    }

    const calculoTotal = (newQuantidade) => {
        setTotal(newQuantidade * preco)
    }

    return (
        <>
            <View style={styles.informacao}>
                <Text style={styles.nome}> {nome}</Text>
                <Text style={styles.descricao}> {descricao}</Text>
                <Text style={styles.preco}> {
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(preco)
                }</Text>
            </View>

                <View style={styles.carrinho}>
                    <View>
                        <View style={styles.valor}>
                            <Text style={styles.descricao}>Quantidade:</Text>
                            <CampoFull estilos={styles.quantidade} valor={quantidade} acao={updateQuantidadeTotal}/>
                        </View>
                        <View style={styles.valor}>
                            <Text style={styles.descricao}>Total:</Text>
                            <Text style={styles.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                    style: 'currency', currency: 'BRL'
                                }).format(total)
                            }</Text>
                        </View>
                    </View>
                    <Button valor="Remover ao Carrinho" acao={() => {
                    }}/>
                </View>

            <View style={styles.divisor}></View>
        </>
    )
}