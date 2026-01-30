import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return(
    <View style={{width:150, height:150, backgroundColor:'red'}}></View>
  )
}

function CaixaBlue(){
  return(
    <View style={{width:150, height:150, backgroundColor:'blue'}}></View>
  )
}

function CaixaYellow(){
  return(
    <View style={{width:150, height:150, backgroundColor:'yellow'}}></View>
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
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
