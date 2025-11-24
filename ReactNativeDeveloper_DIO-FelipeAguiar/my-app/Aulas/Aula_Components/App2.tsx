
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Text style={{
        color: 'white',
        backgroundColor: 'purple',
        fontSize:30
        }}>Chora não!</Text>

      <View style={{backgroundColor: 'yellow'}}>

        <Text style={{
          fontSize: 20,
          padding: 100,
          color: 'red'
          }}>Hello WORD!</Text>

        {/*Usando a folha de estilo criada, não precisando colocar direto na linha de código, bom para retilização*/}
        <Text style={styles2.titleStyle}>Style padrão</Text>

      </View>
      
      
    </View>
  );
}

//Criando uma folha de estilo
const styles2 = StyleSheet.create({
  titleStyle:{
    backgroundColor: 'white',
    fontSize: 30,
    color: 'black',
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
