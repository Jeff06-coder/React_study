import React from 'react';
import { Button, Pressable, View, Text } from 'react-native';

import { styles } from './BatButtonStyle';

export function BatButton() {
  return (
    <View style={styles.container}>
        <Button 

            onPress={() => {console.log("Ola")}}
            title='Click aqui'
            accessibilityLabel='click em mim'
            color='rgba(0, 0, 0, 0.53)'

        />
        
        <Pressable>
            <Text style={{ backgroundColor:'grey', color: 'white'}}>🤫 Copy 🤫</Text>
        </Pressable>
    </View>
  );
}