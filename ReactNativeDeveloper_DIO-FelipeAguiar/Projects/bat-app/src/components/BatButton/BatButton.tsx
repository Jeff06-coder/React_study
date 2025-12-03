import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { BATTextInput } from '../../components/TextInput/TextInput'; //Para utilizar a interface tbm
import { styles } from './BatButtonStyle';
import generatePass from '../../services/passwordSarvice'; //Trazendo o back(ação) para o Copy

import * as Clipboard from 'expo-clipboard'; //Memória do CTRL + C e CTRL + V

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePass
        setPass(generateToken)
    }

    //Function que ativa o button copy
    function handleCopyButton() {

        Clipboard.setStringAsync(pass)

    }

  return (
    <> 

        <BATTextInput pass={pass}/>

        {/*Button de Gerar a senha, é um texto interativo, igual um <Button> praticamente*/}
        <Pressable
            onPress={handleGenerateButton}>
            <Text style={styles.text}>👌 Generate 👌</Text>
        </Pressable>
        
        {/*Button de Copy, é um texto interativo, igual um <Button> praticamente*/}
        <Pressable>
            <Text style={styles.text} onPress={handleCopyButton}>🤫 Copy 🤫</Text>
        </Pressable>
    </>
  );
}