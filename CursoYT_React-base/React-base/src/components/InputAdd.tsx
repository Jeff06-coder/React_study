import { useRef, useState } from "react";
import './InputStyle.css'


interface IInputAddProps{
    onADD(value: string): void;   // void para n retornar nd
    //onAdd recebendo parametro de value string
}

export const InputAdd = (props: IInputAddProps) => {
const [value, setValue] = useState('');  //Guardando valor string

const inputRef= useRef<HTMLInputElement>(null) //Pegando referencia de um elemento HTML e colocando no Ref


const handleAdd = () => {

    props.onADD(value)
    setValue('')
    inputRef.current?.focus() //Executando a ação de focar no input pos digitação e add
} //current = referença atual, ?. esta buscando tupo de pode ser colocado no input do html original




return(

<div>
        {/* value recebe valor informado no input, onChange atualiza o value usando o evento, e. é o evento, */}
         {/* .target aponta para o input q desparou o evento, .value é o novo valor, setValue recebe atualização*/ }
    <input id="txtInput" type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} /> {/*Enviando valor do input para value */}

      <button id='addButton' onClick={ handleAdd }>Add</button>{/*Passando o valor value para ser adicionado ao apretar button Add, com a interface criada */}

</div>

)

}