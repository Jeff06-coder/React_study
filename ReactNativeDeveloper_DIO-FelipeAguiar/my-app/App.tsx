import { StyleSheet, Text, View, Image } from 'react-native';
import symbolOff from './assets/pictures/symbol-off.png'; //Importando as imagens
import symbolOn from './assets/pictures/symbol-on.png';



export default function App() {

  const  isActive = false

  return (
    /*Colocando as imagens no app com um sistema de liga e desliga*/
    <View style={isActive? styles.containerOn : styles.containerOff}>
      <Image
        source={isActive? symbolOn : symbolOff}>
      </Image>
    </View>

  );

}

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
