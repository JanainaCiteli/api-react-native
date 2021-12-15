import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { styles } from './Style';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Detalhe({ navigation, route }) {

    // const navigation = useNavigation();

    const { itemId } = route.params;



    useEffect(async () => {
        await axios({
            method: 'GET',
            url: `https://api-reactcarlos2.herokuapp.com/produto/${itemId}`,
            responseType: 'json'
        }).then(resposta => {

            console.log("cabo a requisição", resposta.data)
            setjogo(resposta.data)
        })
    }, [])

    navigation.setOptions({
        headerTitle: 'Informações do Jogo'
    })

    const [jogo, setjogo] = useState([])

    return (
        <ScrollView >

            <View style={styles.container}>
                <View opacity={0.3}>
                    <Text style={styles.title, { fontSize: 24 }}>{jogo.imagem}</Text>
                </View>
                <View>
                    <Text style={styles.title, { fontSize: 20 }}>R$ {jogo.valor}</Text>
                    <Image source={{ uri: jogo.imagem }} style={{ height: 200, width: 300 }} />
                    <Text style={styles.title, { fontSize: 20 }}>R$ {jogo.descricao}</Text>
                </View>
            </View>

        </ScrollView>
    )
}

