import React from 'react';
import { FlatList} from 'react-native';
import Item from "./Item";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Damos banho no seu gatinho!"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4."
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose? Seu gato precisa de um por ano"
    },
]

export default function Services(){
    return (
        <>
            <FlatList data={servicos}
                      removeClippedSubviews={false}
                      renderItem={({item}) => <Item {...item}/>}
            keyExtractor={({id}) => String(id)}/>
        </>
    )
}