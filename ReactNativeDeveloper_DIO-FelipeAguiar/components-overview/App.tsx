import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

     <View onTouchStart={(event) => Alert.alert("event")} onTouchEnd={(evento)=> {Alert.alert('Éeee')}}>

      <Text>Clique aqui!</Text>

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
});
