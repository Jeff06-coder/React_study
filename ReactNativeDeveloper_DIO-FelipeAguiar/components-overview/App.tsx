import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, TextInput, Image, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

     <View onTouchStart={(event) => Alert.alert("event")} onTouchEnd={(evento)=> {Alert.alert('Éeee')}}>

      {/* Usando array de estilo, misturando dois estilos */}
      <Text style={[styles.texto, styles.border]}>Clique aqui!</Text>
      
      {/* Propriedade selectable permite copiar o texto ao segurar o toque sobre ele */}
      <Text selectable={true}>Copia aqui!</Text>

      <StatusBar style="auto" />
     </View>

     <Image source={require('C:/Users/jefferson.coelho/Downloads/Pessoal/React_study/ReactNativeDeveloper_DIO-FelipeAguiar/components-overview/assets/play-button.png')} style={{ width: 200, height: 200 }} />

      <TextInput style={styles.input}
        onChange={() =>console.log('digitando')}
        keyboardType='phone-pad'
        placeholder='Digite seu numero'
      />
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
