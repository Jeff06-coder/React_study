import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './BatButtonStyle';

export function BatButton() {
  return (
    <>

        <Pressable>
            <Text style={styles.text}>👌 Generate 👌</Text>
        </Pressable>
        
        <Pressable>
            <Text style={styles.text}>🤫 Copy 🤫</Text>
        </Pressable>
    </>
  );
}