import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%',
    height: 100
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
    marginTop:-10,
    marginBottom:3
  },
  botaoC:{
    justifyContent:'flex-end',
    width:15,
    height:20
  }
});