import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    Image:{
      width: '100%',
      
    },
    tituloNome:{
     fontSize:20,
     fontWeight:'bold',
     textAlign:'center',
     marginBottom:20 
     
    },
    imagemDetalhe:{
      height:250,
      width:250,
      alignSelf:'center',
      borderRadius:15
    },
    precoDetalhe:{
      fontSize:20,
      alignSelf:'center',
      marginBottom:15
    },
    fundoDetalhe:{
      flex:1,
      resizeMode: 'cover',
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center'
    }
  });