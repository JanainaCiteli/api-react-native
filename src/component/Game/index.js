import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';



export default function Game(props) {

    function filterDesc(desc){
        if(desc.lenght < 27){
            return desc;
        }

        return `${desc.substring(0, 23)}...`;
    }

 return (

    <TouchableOpacity style={styles.container}>
        <Image source={props.img} style={styles.GameImg}/>
        <Text style={styles.GameText}>{filterDesc(props.children)}</Text>
        <View opacity={0.4}>
            <Text style={styles.GameText}>{props.cost}</Text>
        </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems:'center',
        justifyContent:'center'
    },
    GameImg:{
        width:150,
        height:150
    },
    GameText:{
        fontSize:16
    }
});