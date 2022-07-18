import React from 'react';
import {  FlatList } from 'react-native';
import CardItem from "./CardItem";
import CardStatus from "../Components/CardStatus";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Damos banho no seu gatinho!",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4.",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose? Seu gato precisa de um por ano",
        quantidade: 1
    },
]

export default function Card(){

        const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0)

    return (
        < >
            <CardStatus total={total}/>
                <FlatList data={servicos}
                          removeClippedSubviews={false}
                          renderItem={({item}) => <CardItem {...item}/>}
                          keyExtractor={({id}) => String(id)}/>
        </>
    )
}