import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { BATTextInput } from '../../components/TextInput/TextInput';
import { styles } from './BatButtonStyle';

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        setPass('ola')
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