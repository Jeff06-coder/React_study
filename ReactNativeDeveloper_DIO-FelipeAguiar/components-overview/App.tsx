import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

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
  texto: {
    fontSize: 20,
    color: 'yellow',
    backgroundColor: 'black',
    marginBottom: 10,
  },
});
