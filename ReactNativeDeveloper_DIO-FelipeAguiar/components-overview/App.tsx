import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, TextInput, Image, Text, View, Button, ScrollView, Switch } from 'react-native';
import React, {useState} from 'react';



export default function App() {
    const [inputValue, setInputValue] = useState('');
    const [ligado, setLigado] = useState(false);

    function handleToggleSwitch(){
      setLigado(!ligado);
    }

  return (
    <ScrollView>
    <View style={styles.container}>

     

     <Image source={require('C:/Users/jefferson.coelho/Downloads/Pessoal/React_study/ReactNativeDeveloper_DIO-FelipeAguiar/components-overview/assets/play-button.png')} style={{display: ligado ? 'flex' : 'none'}} />

      <TextInput style={styles.input}

        //Definindo o pad que vai setr usado no input e capiturando o valor digitado com o evento onChange
        onChange={(text) =>setInputValue(text.nativeEvent.text)}
        placeholder='Digite seu numero'
        value={inputValue}
      />
      <Button title='Click aqui' onPress={()=>{Alert.alert('valor atual',inputValue)}} />

      <Switch value={ligado} onValueChange={handleToggleSwitch}></Switch>
    

    <View onTouchStart={(event) => Alert.alert("event")} onTouchEnd={(evento)=> {Alert.alert('Éeee')}}>

      {/* Usando array de estilo, misturando dois estilos */}
      <Text style={[styles.texto, styles.border]}>Clique aqui!</Text>
      
      {/* Propriedade selectable permite copiar o texto ao segurar o toque sobre ele */}
      <Text selectable={true}>Copia aqui!</Text>

      <StatusBar style="auto" />


     </View>

    </View>

    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderWidth: 2,
    borderColor: 'red',
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
  },

  texto: {
    fontSize: 20,
    color: 'yellow',
    backgroundColor: 'black',
    marginBottom: 10,
  },
});
