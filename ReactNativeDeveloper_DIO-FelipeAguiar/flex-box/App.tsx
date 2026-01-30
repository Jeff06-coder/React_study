import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return(
    <View style={{width:130, height:150, backgroundColor:'red', flexGrow: 1, flexShrink: 2, borderWidth: 2, borderColor: 'black'}}></View>
  )
}

function CaixaBlue(){
  return(
    <View style={{width:50, height:50, backgroundColor:'blue', flexBasis: 100}}></View>
  )
}

function CaixaYellow(){
  return(
    <View style={{width:110, height:100, borderWidth: 2, borderColor: 'black', backgroundColor:'yellow', flexShrink: 0}}></View>
  )
}
 
export default function App() {
  return (

    <View style={styles.container}>

      <CaixaRed />
      <CaixaBlue />
      <CaixaYellow />
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
    flexDirection: 'column-reverse',
    //Quando não cabe mais na tela, ele quebra os elementos em nova linha ou coluna
    flexWrap: 'wrap-reverse',
    backgroundColor: '#9fb1a8',
    //Alinha o eixo segundario (perpendicular (horizontal) ao flexDirection)
    alignItems: 'center',
    //Alinha os elementos no eixo principal (Ele anda junto com o flexDirection)
    justifyContent: 'center',
    //Alinha o conteúdo quando há mais espaço disponível no container (so tem efeito com o wrap)
    alignContent: 'center',
  },
});
