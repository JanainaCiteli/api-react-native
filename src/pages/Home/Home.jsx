import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';

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
 
  const mudarpagina = ((id)=>{
    return navigation.navigate("Detalhe" , {itemId : id})
  })

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={{uri:"https://scontent.fsdu1-1.fna.fbcdn.net/v/t39.30808-6/265999034_111414051390462_7763748280094411277_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=qNgVdl8ev-UAX8_IMNs&_nc_ht=scontent.fsdu1-1.fna&oh=00_AT_ajVqi5ALkkMRr0JBxcPaaADENeiA8iqBoliIqkwtmzQ&oe=61BC28B8"}}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.text}>Inicio</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>Jogos</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
         </View>
       </View>

      <View style={styles.line} />

        <ScrollView>
            
           
            {
             itens.map((jogo)=>{
          return (
            <View >
 
              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
               <View style={{margin:20}}>
                <TouchableOpacity onPress={(()=>{
                  return( console.log("cliquei"),
                  mudarpagina(jogo.id)) 
                })}>
                    <Image source={{uri:jogo.imagem}} style={{height:200, width:300}}/>
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
  }
});
