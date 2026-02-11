import React, { useState } from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

const [counter, setCounter] = useState(0);
// 1. Criar o estado para o contador
// 2. Criar a função para incrementar o contador
// 3. Criar a função para decrementar o contador
// Só podem ser criados fora do return
const increment = () => {

        setCounter((prevState) => prevState + 1);
        
      };

      const decrement = () => {
        setCounter((prevState) => prevState - 1);
      };

  return (


    <View style={styles.container}>
      <Text style={{fontSize: 50}}>{counter}</Text>

      

      <View style={styles.inline}>
        <Button title="Remove" onPress={decrement}></Button>
        <Button title="Add" onPress={increment}></Button>
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
  inline:{
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,


  }
});
