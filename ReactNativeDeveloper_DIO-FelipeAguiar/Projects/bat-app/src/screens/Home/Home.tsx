import React from 'react'
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style'
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BATTextInput } from '../../components/TextInput/TextInput';

export default function Home() {

return(
    <View style = {styles.container}>
        
        <View style={styles.logoContainer}>
            <BatLogo/>
        </View>
        <View style={styles.inputContainer}>
            <BATTextInput/>
        </View>
        
        <Text style={styles.txtStyle}>BUAHahahahaha</Text>
        <StatusBar style='light'></StatusBar>

    </View>
    

)

}

