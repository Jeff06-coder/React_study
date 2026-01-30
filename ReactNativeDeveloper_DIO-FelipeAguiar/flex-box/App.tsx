import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return(
    <View style={{width:150, height:150, backgroundColor:'red'}}></View>
  )
}

function CaixaBlue(){
  return(
    <View style={{width:'100%', height:150, backgroundColor:'blue', flex:1}}></View>
  )
}
 
export default function App() {
  return (

    <View style={styles.container}>

      <CaixaRed />
      <CaixaBlue />
      <CaixaRed />
      

      
      <StatusBar style="auto" />



    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
