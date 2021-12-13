import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './Style';

export default function Detalhe({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Detalhe do Produto</Text>
            <Text>R$ 00,00</Text>
            <Button title="COMPRAR" 
      onPress={()=> navigation.navigate("Carrinho")} 
      />
            <Button title="VOLTAR" 
      onPress={()=> navigation.goBack()} 
      />
            
            
        </View>
    )
}

