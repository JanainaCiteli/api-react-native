import React, { useState } from 'react';
import { Text, View, TextInput,KeyboardAvoidingView, TouchableOpacity, ImageBackground} from 'react-native';
import { styles } from './Style';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const user = <Entypo name="user" size={24} color="black" />
const key = <Foundation name="key" size={24} color="black" />

export default function Login({ navigation }) {

    const mockLogin = ([
        { nome: 'carlos', senha: 'ze', id: 0 },
        { nome: 'joao', senha: '123', id: 1 },
        { nome: 'marcelo', senha: '111', id: 2 },
        { nome: 'Viny', senha: 'banana', id: 3 },
        { nome: 'jonh', senha: 'pulp', id: 4 },
        { nome: 'travolta', senha: 'fiction', id: 5 },
        { nome: 'admim', senha: 'admin', id: 6 },
        { nome: 'pedro', senha: 'pedro', id: 7},
        { nome: 'convidado', senha: '', id: 8},

    ]
    )
    const [logPassword, setLogPassword] = useState(null);
    const [logUser, setLogUser] = useState(null);
    const [loged, setloged] = useState(false)

    const handlePassword = (text) => {
        setLogPassword(text);
    }
    const handleUser = (text) => {
        setLogUser(text);
    }
    const setLogT = () =>{
        setloged(true)
    }

    function handleLogin (username, password) {
          
       
        mockLogin.map((user) => {
                if (username == user.nome && password == user.senha) {
                    setLogT()
                    console.log("senha correta");
                    navigation.navigate("HomeTab");
                    setLogUser(null);
                    setLogPassword(null);
                } else {
                   
                };
            })
        
    }


    return (
       
        <View style={styles.container}>
            <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/0e/c1/dc/0ec1dcc9c5dda39fd76d62fc694dc6a0.jpg'}} style={styles.fundo}>
                <View style={styles.box}>
                    <Text style={styles.titulo}>Login</Text>
                    <View style={styles.line} />
                    <View style={{flexDirection:'row'}}>
                        <Entypo name="user" size={20} color="black" style={{marginTop:19, marginLeft:15}} />
                        <TextInput
                            style = {styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Nome"
                            placeholderTextColor="black"
                            autoCapitalize="none"
                            value={logUser}
                            onChangeText = {handleUser}
                            />
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Foundation name="key" size={24} color="black" style={{marginTop:19, marginLeft:15}} />
                    <TextInput
                        style = {styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Senha"
                        placeholderTextColor="black"
                        autoCapitalize="none"
                        value={logPassword}
                        onChangeText = {handlePassword}
                    />
                    </View>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                        ()=>{
                            handleLogin(logUser, logPassword)}}>

                        <Text style={styles.tituloButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    
    )
}