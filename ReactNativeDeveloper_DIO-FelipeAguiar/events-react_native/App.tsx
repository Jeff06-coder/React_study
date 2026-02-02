// Melhor guia sempre sera a documentação da linguagem para saber como e quais eventos usar
import { helloV } from './src/actions';
import { StyleSheet, Text, View, TextInput } from 'react-native';

async function handlerPress(id: number){
  console.log('Texto pressionado', id);
  
}

async function handlerFunction(){
  console.log('Texto pressionado - Handler Function');
}

export default function App() {

  return (
    <View style={styles.container}>

      <TextInput 
      style={{fontSize: 20}}
      placeholder="Digite algo aqui"
      onChange={() => console.log("OnChange executado")}
      //Dispara quando o texto muda
      onChangeText={() => console.log('Um texto mudado')}
      //Dispara quando o texto muda sempre depois do onChange
      onFocus={() => console.log("Usuário focou no input")}
      //Dispara quando o usuario entra no input

      ></TextInput>

      <Text

       style={{fontFamily: 'Arial', fontSize: 20}} 
       onPressIn={() => console.log("PressIn acionado (Aciona quando começa a pressionar)")}
       onPress={() => console.log("Componente Principal Pressionado (Aciona quando solta)")}
       onPressOut={() => console.log("Dedo saiu")}
       onLongPress={() => console.log("LongPress acionado")}
       onTextLayout={() => console.log("Text Layout")}
       //Dispara quando carrega o texto do layout
       
        >Componente Principal</Text>


      {/* <Text onPress={() => handlerPress(1)} style={{fontSize: 18,}}>Open up App.tsx to start working on your app!</Text>
      <Text onPress={() => console.log("onPress Inline")} style={{fontSize: 20,}}>Inline</Text>
      <Text onPress={handlerFunction} style={{fontSize: 20,}}>Handler Function</Text>
      <Text onPress={() => handlerPress(2)} style={{fontSize: 20,}}>Handler Function with parameters</Text>*/}

      <Text onPress={helloV} style={{fontSize: 20,}}>Hello Viajante Another file</Text> 



        
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
});
