import { useState } from "react";



interface IInputAddProps{
    onADD(value: string): void;   // void para n retornar nd
    //onAdd recebendo parametro de value string
}

export const InputAdd = (props: IInputAddProps) => {
const [value, setValue] = useState('');  //Guardando valor string

const handleAdd = () => {

    props.onADD(value)
    setValue('')
}




return(

<div>
        {/* value recebe valor informado no input, onChange atualiza o value usando o evento, e. é o evento, */}
         {/* .target aponta para o input q desparou o evento, .value é o novo valor, setValue recebe atualização*/ }
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> {/*Enviando valor do input para value */}

      <button onClick={ handleAdd }>Add</button>{/*Passando o valor value para ser adicionado ao apretar button Add, com a interface criada */}

</div>

)

}