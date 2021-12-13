import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { styles } from './Style';

export default function Detalhe({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Informações do Jogo'
})
    return (
        <ScrollView style={styles.container}>
            <Image 
            source={require('../../../assets/darksouls.png')}                     
            style={styles}
            resizeMode='cover'
            />

            <View opacity={0.3}>
                <Text style={styles.title, {fontSize: 24}}>Título</Text>
            </View>
            <View>
                <Text style={styles.title, {fontSize: 20}}>R$ 00,00</Text>
            </View>
            <Text>
                Sinopse do jogo
            </Text>

        </ScrollView>
    )
}

