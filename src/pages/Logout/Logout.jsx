import React from 'react';
import { Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './Style';
import { StackActions } from '@react-navigation/native';

export default function Logout({ navigation }) {
  return (
    <View style={styles.container}>
    <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/0e/c1/dc/0ec1dcc9c5dda39fd76d62fc694dc6a0.jpg'}} style={styles.fundoLogout}>

    <View style={{backgroundColor:'#bfbfbf', width:300, height:250, borderRadius: 15}}> 

      <Text style={{textAlign: 'center', fontSize:20, fontWeight:'bold', marginBottom:15, marginTop:10, color:'black'}}>Deseja realmente sair?</Text>
      
      <Button style={styles.button} title="SAIR" 
      onPress={()=> navigation.dispatch(StackActions.popToTop())}
      />

      <Button style={styles.button} title="VOLTAR" 
        onPress={()=> navigation.goBack()} 
        />
      </View>
    </ImageBackground>  
    </View>
  );
   
}



