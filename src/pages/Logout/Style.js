import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        margin: 10,
        height: 40,
        borderColor: '#008ae6',
        borderWidth: 2,
        backgroundColor:'#b3e0ff',
        borderRadius:15,
        fontSize:15,
        marginLeft:15,
        width:400
    },
    box: {
      backgroundColor:'#333333',
      width:300,
      height:300,
      borderRadius: 5

    },
    titulo:{
      fontSize:35,
      textAlign:'center',
      color:'white',
      marginBottom: 30,
      backgroundColor:'#262626'
      
    },
    button:{
      backgroundColor: '#003380',
      textAlign: 'center',
      height:35,
      width:200,
      marginLeft:55,
      borderRadius:10,
      justifyContent:'center',
      marginTop:10,
    },
    tituloButton:{
      fontSize: 15,
      color: '#b3e0ff',
      fontWeight: 'bold',
    },
    fundo:{
      flex:1,
      resizeMode: 'cover',
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center'
    },
    line:{
      borderBottomColor: '#0d0d0d',
      borderBottomWidth: 2,
      marginTop:-30,
      marginBottom: 25
    }
    

  });