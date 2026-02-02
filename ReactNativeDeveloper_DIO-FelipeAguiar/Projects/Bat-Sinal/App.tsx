import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Button, Text, TextInput } from 'react-native';
import BatSinal from './assets/bat-sinal.jpg';
import { useState } from "react";


export default function Home() {

  const [layout, setLayout] = useState(false);

  function handleLayoutChange() {
    setLayout(!layout);
  }

  return (
    
     <View style={styles.container}>
     
      {/* Primeira tela */}
      {layout === false && (<View  style={styles.button}>

        {/* Imagem do Bat-Sinal da Primeira Tela*/}
        <Image 
      
          source={BatSinal} 
          style={styles.image} 
        />



        {/* Primeiro botão */}
        <Button 
          title="Ativar Bat-Sinal" 
          onPress={handleLayoutChange}
          color="#000000"
        />

      </View>
      )}

      {/* Segunda tela */}

      {layout === true && (<View  style={styles.container}>

        {/* Imagem do Bat-Sinal da Segunda Tela*/}
        <Image 
      
          source={BatSinal} 
          style={[styles.image1]} 
        />

       
        <View style={styles.container1}>

          <View style={{margin: 10, justifyContent: 'center', alignItems: 'center', width: '95%'}}>
            <Text style={[styles.text]}>Bat-Sinal Ativado!</Text>
          </View>

          <Text style={styles.text}>Digite seu nome:</Text>
          <TextInput style={styles.input} placeholder="Escreva aqui"/>

          
        </View>



        {/* Segundo botão */}
        <View style={styles.button1}>
          <Button 
            title="Desativar Bat-Sinal" 
            onPress={handleLayoutChange}
            color="#ff0000"
          />
          <Button 
            title="Enviar Bat-Sinal" 
            onPress={handleLayoutChange}
            color="#1a8f3d"
          />
        </View>

         <View style={styles.button1}>
          
        </View>
        



      </View>
      )}
    
    





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
    width: 450,
    height: 450,
  },
  button: {

    alignItems: 'center',
    marginBottom: 300,
    width: 200,
  },
  image1: {
    
    width: 150,
    height: 150,
  },
  button1: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    width: 360,
    
  },
  input: {
    fontSize: 18,
    height: 40,
    borderColor: 'gray',
  },
});
