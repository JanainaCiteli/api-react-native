import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './Style';
import { CreateTable, addItem, comprar, mostrarCarrinho } from './CarrinhoRepository';
import ItensCarrinho from './itensCarrinho';

export default function Carrinho({ navigation }) {

    const [listaCarrinho, setListaCarrinho] = useState([])

    useEffect(async () => {
        CreateTable();
        const iC =  ItensCarrinho
        if (iC == undefined) {
            return ("carrinho vazio")
        } else {
            setListaCarrinho(await ItensCarrinho.query)
        }
    })

    return (
        <View style={styles.container}>
            <Text>Carrinho</Text>

        </View>
    )
}