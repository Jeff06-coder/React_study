import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Button, } from 'react-native';
import BatSinal from '../../assets/bat-sinal.jpg';
import { useState } from "react";


export default function Home() {

  const [layout, setLayout] = useState(false);

  function handleLayoutChange() {
    setLayout(!layout);
  }

  return (
    
 <View style={styles.container}>
     

    
    <View  style={styles.button}>

      <Image 
      
      source={BatSinal} 
      style={styles.image} 
      />


      
    
      <Button 
      title="Ativar Bat-Sinal" 
      onPress={() => console.log("Bat-Sinal ativado!")}
      color="#000000"
      />

    </View>





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
    marginBottom: 150,
    width: 200,
    height: 200,
  },
  button: {

    alignItems: 'center',
    marginBottom: 300,
    width: 150,
  }
});