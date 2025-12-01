import React from 'react';
import { Pressable, Text } from 'react-native';
import { BATTextInput } from '../../components/TextInput/TextInput';
import { styles } from './BatButtonStyle';

export function BatButton() {
  return (
    <> 

        <BATTextInput/>

        <Pressable>
            <Text style={styles.text}>👌 Generate 👌</Text>
        </Pressable>
        
        <Pressable>
            <Text style={styles.text}>🤫 Copy 🤫</Text>
        </Pressable>
    </>
  );
}