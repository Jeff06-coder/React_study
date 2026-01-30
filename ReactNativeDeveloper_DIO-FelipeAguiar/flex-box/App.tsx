import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return(
    <View style={{width:150, height:150, backgroundColor:'red'}}></View>
  )
}

function CaixaBlue(){
  return(
    <View style={{width:100, height:100, backgroundColor:'blue'}}></View>
  )
}

function CaixaYellow(){
  return(
    <View style={{width:100, height:100, backgroundColor:'yellow'}}></View>
  )
}
 
export default function App() {
  return (

    <View style={styles.container}>

      <CaixaRed />
      <CaixaBlue />
      <CaixaYellow />

      
      <StatusBar style="auto" />



    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    //Determina o quanto o container vai ocupar da tela
    flex: 1,
    //Define a direção dos elementos dentro do container
    flexDirection: 'column',
    backgroundColor: '#9fb1a8',
    //Alinha o eixo segundario (perpendicular (horizontal) ao flexDirection)
    alignItems: 'center',
    //Alinha os elementos no eixo principal (Ele anda junto com o flexDirection)
    justifyContent: 'space-around',
  },
});
