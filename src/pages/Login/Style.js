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
        marginLeft:10
    },
    box: {
      backgroundColor:'#004d80',
      width:300,
      height:300,
      borderRadius: 5

    },
    titulo:{
      fontSize:50,
      textAlign:'center',
      color:'#b3e0ff',
      marginBottom: 30
      
    },
    button:{
      backgroundColor: '#008ae6',
      textAlign: 'center',
      height:35,
      width:200,
      marginLeft:55,
      borderRadius:10,
      justifyContent:'center',
      marginTop:10
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
    }
    

  });