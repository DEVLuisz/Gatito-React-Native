import React, {useState} from 'react';
import { TouchableOpacity,Text, View} from 'react-native';
import styles from './stylesItem';
import CampoFull from "../Components/campoFull";
import Button from "../Components/Button"

export default function Item ({nome, preco, descricao}){

    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const updateQuantidadeTotal = (newQuantidade) =>{
        setQuantidade(newQuantidade);
        calculoTotal(newQuantidade);
    }

    const calculoTotal = (newQuantidade) => {
        setTotal(newQuantidade * preco)
    }

    const toolTip = () =>{
        setExpandir(!expandir);
        updateQuantidadeTotal(1)
    }

    return (
        <>
        <TouchableOpacity style={styles.informacao} onPress={toolTip}>
        <Text style={styles.nome}> {nome}</Text>
        <Text style={styles.descricao}> {descricao}</Text>
        <Text style={styles.preco}> {
            Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(preco)
        }</Text>
        </TouchableOpacity>
            {expandir &&
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
                    <Button valor="Adicionar ao Carrinho" acao={() => {
                    }}/>
                </View>
            }
            <View style={styles.divisor}></View>
        </>
    )
}