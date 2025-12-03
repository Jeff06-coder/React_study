import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './TextInputStyle';

interface BATTextInputProps{

  pass:string

}

export function BATTextInput(props: BATTextInputProps) {
  return (

        <TextInput

            placeholder='Pass'
            style={styles.inputer}
            value={props.pass}
         
         />


  );
}