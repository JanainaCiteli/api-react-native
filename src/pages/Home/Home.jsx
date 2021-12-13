import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import Shoes from '../../component/Shoes';


export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/banner.jpg')}
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
            <Text style={styles.text}>Novidades na loja</Text>

            <View style={{flexDirection:'row', justifyContent:'space-around'}}>

              <Shoes img={require('../../assets/assasinscreed.jpg')} cost="R$489,98">Assassin's Creed</Shoes>
              <Shoes img={require('../../assets/Cuphead.png')} cost="R$79,99">CupHead</Shoes>
                 
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around'}}>

              <Shoes img={require('../../assets/cyberpunk.jpg')} cost="R$48,20">Cyberpunk 2077</Shoes>
              <Shoes img={require('../../assets/darksouls.png')} cost="R$70,00">Dark souls</Shoes>
            

            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Shoes img={require('../../assets/darksouls2.png')} cost="R$133,99">Dark souls 2</Shoes>
              <Shoes img={require('../../assets/Fallout4.jpg')} cost="R$40,00">Fallout 4</Shoes>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Shoes img={require('../../assets/ff.jpg')} cost="R$246,62">Final Fantasy XV</Shoes>
              <Shoes img={require('../../assets/gow.jpg')} cost="R$ 59,99">God Of War</Shoes>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Shoes img={require('../../assets/gtav.png')} cost="R$ 39,99">Grand Theft Auto V</Shoes>
              <Shoes img={require('../../assets/mk.jpg')} cost="R$ 59,99">Mortal Kombat 11</Shoes>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Shoes img={require('../../assets/witcher.png')} cost="R$ 34,99">The witcher 3</Shoes>
              <Shoes img={require('../../assets/village.jpg')} cost="R$ 148,80">Resident Evil: Village</Shoes>
            </View>

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
    height: 100
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    marginHorizontal: '1%'
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

/* <Button title="DETALHE" onPress={()=> navigation.navigate("Detalhe")}/> */
/* <Button style={styles.botaoC} title="Comprar" onPress={()=> navigation.navigate("Carrinho")}/> */