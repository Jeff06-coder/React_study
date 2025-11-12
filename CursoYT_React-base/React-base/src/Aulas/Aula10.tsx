import { useState } from "react"


export function App() {
  const [value, setValue] = useState('');  //Guardando valor string
  const [list, setList] = useState([      //Guardando valor de lista no useState
    
    {id: '1', label: 'Fazer café'},
    {id: '2', label: 'Fazer café'},           //Passando id e label para as listas
    {id: '3', label: 'Fazer almoço'},
    {id: '4', label: 'Fazer janta'}

  ]);


  //value recebe valor de value, onChange atualiza o value usando o evento, e. é o evento, 
  // .target aponta para o input q desparou o evento, .value é o novo valor, setValue recebe atualização
  return (
    <div>

  
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}  /> 

    <button onClick={() => {setList([...list,{ id: (list.length + 1).toString(), label: value}]); // ...list é para adicionar toda lista anterior novamente
      setValue('');
    
    }}>Add</button>

    <ol>
      
      {list.map((ListItem) => (  //map para ser colocado como lista na pagina, ListItem nome figurativo para saber qual tipo de lista esta manipulando
        <li key={ListItem.id}>{ListItem.label}</li> //keys para colocar o modo que vai ser lido/achado a lista
          //Criando uma lista com react, fazendo ela ler por id e label.
      ))}
      

    </ol>




    </div>
  )
}


