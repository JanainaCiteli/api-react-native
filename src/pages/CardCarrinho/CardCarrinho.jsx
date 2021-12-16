import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";


export default function CardCarrinho(props) {
    
    const { nome, preco, foto, total } = props
    const [contador, setContador] = useState(1)

    return (
        <>
            <View style={styles.mainContainer}>

                <View style={styles.infoContainer}>

                    <Text style={styles.gameName}>{nome}</Text>

                    <Text style={styles.price}>{preco}</Text>

                    <View style={styles.iconsContainer}>

                        <TouchableOpacity disabled={contador == 1? true : false} onPress={()=>setContador(contador -1)}>
                            <AntDesign name="minussquareo" size={24} color="black" />
                        </TouchableOpacity>
                        
                        <Text style={styles.quantity}>{contador}</Text>

                        <TouchableOpacity  onPress={()=>setContador(contador + 1)}>
                            <AntDesign name="plussquareo" size={24} color="black" />
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.removeButton}>
                        <FontAwesome name="remove" size={26} color="blue" />
                    </TouchableOpacity>

                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: foto,
                        }}
                        style={styles.image}
                    />
                </View>

            </View>
        </>
    );
} 