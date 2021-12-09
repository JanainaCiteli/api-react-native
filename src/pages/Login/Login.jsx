import React, { useState } from 'react';
import { Text, View, Button, TextInput,KeyboardAvoidingView } from 'react-native';
import { styles } from './Style';

export default function Login({ navigation }) {

    const mockLogin = ([
        { nome: 'carlos', senha: 'ze', id: 0 },
        { nome: 'joao', senha: '123', id: 1 },
        { nome: 'marcelo', senha: '111', id: 2 },
        { nome: 'Viny', senha: 'banana', id: 3 },
        { nome: 'jonh', senha: 'pulp', id: 4 },
        { nome: 'travolta', senha: 'fiction', id: 5 },
        { nome: 'admim', senha: 'admin', id: 6 }
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

    function Login (username, password) {
          
       
        mockLogin.map((user) => {
                if (username == user.nome && password == user.senha) {
                    setLogT()
                    console.log("senha correta");
                    navigation.navigate("Home")
                } else {
                   
                };
            })
        
    }


    return (
       
        <View style={styles.container}>

            <Text>Login</Text>

            <TextInput
                style = {styles.input}
                underlineColorAndroid="transparent"
                placeholder="Username"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText = {handleUser}
                />

            <TextInput
                style = {styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText = {handlePassword}
            />

            <Button
                title = "login"
                onPress={()=>{
                    Login(logUser, logPassword)}}
            />

            <Button title="ir pra home" onPress={() => {
                navigation.navigate("Home");
            }} />
        </View>
    
    )
}