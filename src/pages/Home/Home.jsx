import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import Shoes from '../../component/Shoes';
import axios from 'axios';



export default function Home() {
 const navigation = useNavigation();

 const [itens, setitens] = useState([])

 useEffect(async ()=>{
  
  await axios({
  method: 'GET',
  url:'https://api-reactcarlos2.herokuapp.com/produtos',
  responseType: 'json'

}).then(resposta  =>{
 
  console.log("cabo a requisição", resposta.data)
  setitens(resposta.data)

})
console.log('cabei a func')
 
},[])
 

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/banner.jpg')}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.textH}>Inicio</Text>
            <Text style={[styles.textH, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.textH, { color: '#CECECF'} ]}>Jogos</Text>
         </View>
       </View>

      <View style={styles.line} />

        <ScrollView style={{backgroundColor:'#e6e6e6' }}>
        <Text style={{fontSize:30, fontWeight:'bold', marginLeft:10,marginTop:10}}>Lançamentos:</Text>    
           
            {
             itens.map((jogo)=>{
          return (
            <View >
 
              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
               <View style={{margin:20}}>

                <TouchableOpacity onPress={(()=>{
                  return console.log("cliquei");
                })}>
                    <Image source={{uri:jogo.imagem}} style={{height:175, width:175}}/>
                </TouchableOpacity>
                <Text style={styles.text}>{jogo.nome}</Text>    
                <Text style={styles.text}>R$ {jogo.valor}</Text>
                
              </View>
              </View>
            </View>
          )
        })}
    
            
           
       
       </ScrollView>

        

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%',
    height: 150,
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    textAlign:'center'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
    marginTop:-10,
    marginBottom:3
  },
  botaoC:{
    justifyContent:'flex-end',
    width:15,
    height:20
  },
  textH:{
    fontSize:20,
    fontWeight:'bold'

  }
});


// export default function Home({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <Text>Produto</Text>
//             <Button title="COMPRAR" 
//       onPress={()=> navigation.navigate("Carrinho")} 
//       />
//             <Button title="DETALHE" 
//       onPress={()=> navigation.navigate("Detalhe")} 
//       />
            
//         </View>
//     )
// }

