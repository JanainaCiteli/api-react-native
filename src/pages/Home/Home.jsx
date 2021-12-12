
import React from 'react';
import { Text, View,Button } from 'react-native';
import { styles } from './Style';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Produto</Text>
            <Button title="COMPRAR" 
      onPress={()=> navigation.navigate("Carrinho")} 
      />
            <Button title="DETALHE" 
      onPress={()=> navigation.navigate("Detalhe")} 
      />
            
        </View>
    )
}

/*Criei o "button" DETALHE provisóriamente só pra conseguir acessar a tela do Detalhe do Produto. 
Quando a API estiver funcionando, esse button vai deixar de existir e vamos substituir pela "imagem clicável", ou seja, clicando na imagem(foto do produto), o cliente será direcionado para a tela Detalhe*/