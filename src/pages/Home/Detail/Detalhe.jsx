import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './Style';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

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
            <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/0e/c1/dc/0ec1dcc9c5dda39fd76d62fc694dc6a0.jpg'}} style={styles.fundoDetalhe}>
                <View style={{backgroundColor: '#d9d9d9', marginTop:100, height:600}}>
                    <Text style={styles.tituloNome}>{jogo.nome}</Text>
                    <Image source={{ uri: jogo.imagem }} style={styles.imagemDetalhe} />
                    <Text style={styles.precoDetalhe}>R${jogo.valor}</Text>
                    <View style={{backgroundColor:'#f2f2f2'}}>
                       
                        <Text style={styles.title, { fontSize: 20, textAlign:'center'  }}>{jogo.descricao}</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="add-shopping-cart" size={45} color="black" style={{alignSelf:'center', marginTop:25}} />
                    </TouchableOpacity>
            
                </View>
            </ImageBackground>    
            </View>

        </ScrollView>
    )
}

