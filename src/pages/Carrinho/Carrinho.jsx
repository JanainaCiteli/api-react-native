import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import axios from "axios";
import { styles } from "./Style";
import CardCarrinho from "../CardCarrinho/CardCarrinho";


export default function Carrinho({navigation}) {

  const [pedidos, setPedidos] = useState([])
  const[total, setTotal] = useState(0)

  const handleClick = async () => {

    await axios ({
      method: "GET",
      url:"https://api-reactcarlos2.herokuapp.com/itemPedido",

    }).then(response => {
      setPedidos(response.data)
    })
  };


  useEffect(()=>{handleClick()},[])

  const calculaTotal = async () => {

    await axios ({
      method: "GET",
      url:"https://api-reactcarlos2.herokuapp.com/pedidos/1",

    }).then(response => {
      setTotal(response.data)
    })
  };

  useEffect(()=>{calculaTotal()},[])

  return (
    
    <View style={styles.mainContainer}>
      
      <ScrollView>
        {pedidos.map((pedido, i)=>{
          return( <CardCarrinho  key={i} foto={pedido.produto.imagens} preco={pedido.produto.vlUnitario} nome={pedido.produto.nome}/>)
        })}
      </ScrollView>
      

      <View style={styles.container}>

        <Text style={styles.total}>Total</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.price, {fontWeight: 'bold'}]}>R$ </Text>
        <Text style={styles.price}>{total.totalGeral}</Text>
        </View>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>

      </View>
    </View>  
  )
};