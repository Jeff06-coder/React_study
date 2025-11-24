import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyle';
import batlogo from '../../../assets/batlogo.png'

export function BatLogo() {
  return (
    <View>

        <Text style={styles.title}>
            BAT PASS
        </Text>

        <Image
            source= {batlogo}
            style={{
                resizeMode:'contain',
                height: 200
            }}
        />

    </View>
  );
}