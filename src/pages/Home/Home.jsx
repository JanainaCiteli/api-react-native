
import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { styles } from './Style';
import logo from '../../../assets/logo.jpg';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <Image source={logo} style={styles.logo} />         
            </View>                  
        </View>

        
    )
}