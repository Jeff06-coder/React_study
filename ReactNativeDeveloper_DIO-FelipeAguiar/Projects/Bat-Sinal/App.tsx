import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import BatSinal from './assets/bat-sinal.jpg';


export default function App() {
  return (

    <View style={styles.container}>
     
      <Image 
      source={BatSinal} 
      style={styles.image} />


      <Button title="Clique aqui" onPress={() => console.log("Botão clicado!")}/>






      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 480,
    width: 200,
    height: 200,
  },
});
