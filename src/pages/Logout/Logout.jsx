import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './Style';
import { StackActions } from '@react-navigation/native';

export default function Logout({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Deseja realmente sair?</Text>
      <Button style={styles.button} title="SAIR" 
      onPress={()=> navigation.dispatch(StackActions.popToTop())}
      />
      <Button style={styles.button} title="VOLTAR" 
        onPress={()=> navigation.goBack()} 
        />
      
    </View>
  );
   
}



