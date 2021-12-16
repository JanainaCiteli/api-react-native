import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import axios from "axios";

export default function Home() {
  const navigation = useNavigation();

  const [itens, setitens] = useState([]);

  useEffect(async () => {
    await axios({
      method: "GET",
      url: "https://api-reactcarlos2.herokuapp.com/produtos",
      responseType: "json",
    }).then((resposta) => {
      console.log("cabo a requisição", resposta.data);
      setitens(resposta.data);
    });
    console.log("cabei a func");
  }, []);

  const mudarpagina = (id) => {
    return navigation.navigate("Detalhe", { itemId: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://scontent.fsdu1-1.fna.fbcdn.net/v/t39.30808-6/265999034_111414051390462_7763748280094411277_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=qNgVdl8ev-UAX8_IMNs&_nc_ht=scontent.fsdu1-1.fna&oh=00_AT_ajVqi5ALkkMRr0JBxcPaaADENeiA8iqBoliIqkwtmzQ&oe=61BC28B8",
          }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>Inicio</Text>
          <Text style={[styles.textHeader, { color: "#CECECF" }]}> • </Text>
          <Text style={[styles.textHeader, { color: "#CECECF" }]}>Jogos</Text>
        </View>
      </View>

      <View style={styles.line} />
      <Text
        style={{
          fontSize: 25,
          marginLeft: 10,
          marginTop: 3,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Lançamentos:{" "}
      </Text>
      <ScrollView>
        {itens.map((jogo) => {
          return (
            <View>
              <View>
                <View
                  style={{
                    backgroundColor: "#d9d9d9",
                    flexDirection: "row",
                    marginBottom: 20,
                  }}
                >
                   <TouchableOpacity
                    onPress={() => {
                      return console.log("cliquei"), mudarpagina(jogo.id);
                    }}
                  >
                    <Image
                      source={{ uri: jogo.imagem }}
                      style={{ height: 220, width: 170, marginBottom:20, marginLeft:15, borderRadius:10 }}
                    />
                  </TouchableOpacity>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.text1}>{jogo.nome}</Text>
                    <Text style={styles.text2}>R${jogo.valor}</Text>                    
                  <View style={styles.shoppingCart}>
                  <TouchableOpacity style={{ marginLeft: 10 }}>
                      <Feather
                        name="shopping-cart"
                        size={50}
                        
                      />
                    </TouchableOpacity>
                  </View>
                  </View>
                  
                  <TouchableOpacity
                    onPress={() => {
                      return console.log("cliquei"), mudarpagina(jogo.id);
                    }}
                  ></TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 150,
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  text: {
    textAlign: "right",
  },
  line: {
    borderBottomColor: "#D8d8d8",
    borderBottomWidth: 2,
    marginTop: -10,
    marginBottom: 3,
  },
  botaoC: {
    justifyContent: "flex-end",
    width: 15,
    height: 20,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
    textAlign: "center",
    marginTop: "30%",
  },

  text2: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
  },
  shoppingCart: {
    alignSelf:'center',
    marginTop: 50,
    color: "black",
  },
});
