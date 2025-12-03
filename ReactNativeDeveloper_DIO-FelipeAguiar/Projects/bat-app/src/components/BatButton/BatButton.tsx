import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { BATTextInput } from '../../components/TextInput/TextInput';
import { styles } from './BatButtonStyle';
import generatePass from '../../services/passwordSarvice';


export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePass
        setPass(generateToken)
    }

  return (
    <> 

        <BATTextInput pass={pass}/>

        <Pressable
            onPress={handleGenerateButton}>
            <Text style={styles.text}>👌 Generate 👌</Text>
        </Pressable>
        
        <Pressable>
            <Text style={styles.text}>🤫 Copy 🤫</Text>
        </Pressable>
    </>
  );
}