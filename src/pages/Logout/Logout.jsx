import React from 'react';
<<<<<<< Updated upstream
import { Text, View,Button } from 'react-native';


export default function Logout ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Logout</Text>            
        </View>

        
    )
}
=======
import { Text, View, Button } from 'react-native';
import { styles } from './Style';

export default function Logout({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Deseja realmente sair?</Text>
      <Button style={styles.button} title="SAIR" 
      onPress={()=> navigation.navigate("login")}
      />
      <Button style={styles.button} title="VOLTAR" 
        onPress={()=> navigation.goBack()} 
        />
      
    </View>
  );
 /* export default function Voltar({ navigation }) {
    return (
      <View style={styles.container}>
          
        
        <Button style={styles.button} title="VOLTAR" 
        onPress={()=> navigation.goBack()} 
        />
      </View>
    );
  }*/
  
}
>>>>>>> Stashed changes
