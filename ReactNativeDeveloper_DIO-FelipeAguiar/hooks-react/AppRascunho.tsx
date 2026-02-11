import React, { useState, useEffect, useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const reducer = (state: { count: string }, action: { type: string }) => {
  switch (action.type) {
    case 'incrementC':
      return { count: state.count + "A" };
    case 'decrementC':
      return { count: state.count.slice(0, -1) };
    default:
      throw new Error('Invalid action type');
  }};

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
    if(counter > 0){
        setCounter((prevState) => prevState - 1);
    }else { alert('O contador não pode ser menor que 0') }
        
      };

// O useEffect é um hook que permite executar uma função toda vez que o componente for atualizado ou quando uma variável for atualizada.
useEffect(() => {
  console.log('O contador foi atualizado: ' + counter);
}, [counter]);



const [state, dispatch] = useReducer(reducer, { count: "a" });

  const incrementC = () => {
    dispatch({ type: 'incrementC' });
  }

  const decrementC = () => {
    dispatch({ type: 'decrementC' });
  }

  return (


    <View style={styles.container}>
      <Text style={{fontSize: 50}}>{counter}{state.count}</Text>

      

      <View style={styles.inline}>
        <Button title="Remove" onPress={decrement}></Button>
        <Button title="Add" onPress={increment}></Button>
      </View>

      <View style={styles.inline}>
        <Button title="Remove" onPress={decrementC}></Button>
        <Button title="Add" onPress={incrementC}></Button>
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
