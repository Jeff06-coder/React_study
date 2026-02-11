import React, { useState, useReducer } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';

const listener = (state: any, action: any) => {
  switch (action.type) {
    case 'addTask':
      return { tasks: [...state.tasks, {name:action.value, isDone:false}] };
    case 'removeTask':
      return { tasks: state.tasks.filter((task: any) => task.name !== action.value) };
    default:
      throw new Error('Invalid action type');
  }
}

export default function App() {

  const [state, dispatch] = useReducer(listener, {tasks: []});

  const [value, setValue] = useState('');

  const handleChange = () => {
    dispatch({ type: 'addTask', value });
  };

  const handleChange2 = () => {
    dispatch({ type: 'removeTask', value });
  }
    



  return (


    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Digite algo..." value={value} onChangeText={(text)=> setValue(text)} />

      

      <View style={styles.inline}>
        <Button title="Remover tarefa" onPress={handleChange2} ></Button>
        <Button title="Adicionar tarefa" onPress={handleChange}></Button>
      </View>

      {state.tasks.map((task: any) => <Text>{task.name}</Text>)}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32f0b7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
  },
  inline:{
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,


  }
});
