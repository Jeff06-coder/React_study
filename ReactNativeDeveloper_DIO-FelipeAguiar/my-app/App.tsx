import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOff from './assets/pictures/symbol-off.png'; //Importando as imagens
import symbolOn from './assets/pictures/symbol-on.png';
import React, { useState } from 'react'



export default function App() {

  //Usando o hook useState
  const [isActive, setisActive] = useState(false)

  //Fazendo o fluxo de render no toque na tela
  function handleSymbol(){
    setisActive((oldValue:boolean)=> {
    return !oldValue
  })
    console.log(isActive)
  }

  return (
    /*Colocando as imagens no app com um sistema de liga e desliga*/
    <View style={isActive? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image
          source={isActive? symbolOn : symbolOff}>
        </Image>
      </TouchableOpacity>
    </View>

  );

}

//Criando um style condicional
const styles = StyleSheet.create({
  containerOn: {
    flex: 1, //Faz "pegar" a tela inteira
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
