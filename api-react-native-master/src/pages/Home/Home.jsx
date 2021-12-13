import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import Game from '../../component/Game';


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
              <Game img={require('../../assets/assasinscreed.jpg')} cost="R$489,98">Assassin's Creed</Game>
              <Game img={require('../../assets/Cuphead.png')} cost="R$79,99">CupHead</Game>                 
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Game img={require('../../assets/cyberpunk.jpg')} cost="R$48,20">Cyberpunk 2077</Game>
              <Game img={require('../../assets/darksouls.png')} cost="R$70,00">Dark souls</Game>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Game img={require('../../assets/darksouls2.png')} cost="R$133,99">Dark souls 2</Game>
              <Game img={require('../../assets/Fallout4.jpg')} cost="R$40,00">Fallout 4</Game>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Game img={require('../../assets/ff.jpg')} cost="R$246,62">Final Fantasy XV</Game>
              <Game img={require('../../assets/gow.jpg')} cost="R$ 59,99">God Of War</Game>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Game img={require('../../assets/gtav.png')} cost="R$ 39,99">Grand Theft Auto V</Game>
              <Game img={require('../../assets/mk.jpg')} cost="R$ 59,99">Mortal Kombat 11</Game>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Game img={require('../../assets/witcher.png')} cost="R$ 34,99">The witcher 3</Game>
              <Game img={require('../../assets/village.jpg')} cost="R$ 148,80">Resident Evil: Village</Game>
            </View>

        </ScrollView>    

   </View>
  );
}