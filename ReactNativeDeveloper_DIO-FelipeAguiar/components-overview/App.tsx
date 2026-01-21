import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

     <View onTouchStart={(event) => Alert.alert("event")} onTouchEnd={(evento)=> {Alert.alert('Éeee')}}>

      <Text style={styles.texto}>Clique aqui!</Text>
      
      {/* Propriedade selectable permite copiar o texto ao segurar o toque sobre ele */}
      <Text selectable={true}>Copia aqui!</Text>
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
  texto: {
    fontSize: 20,
    color: 'yellow',
    backgroundColor: 'black',
    marginBottom: 10,
  },
});
