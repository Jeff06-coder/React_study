import { useState } from "react"


export function App() {
  const [list, setList] = useState([      //Guardando valor de lista no useState
    
    {id: 1, label: 'Fazer café'},
    {id: 2, label: 'Fazer café'},           //Passando id e label para as listas
    {id: 3, label: 'Fazer almoço'},
    {id: 4, label: 'Fazer janta'}

  ]);




  return (
    <div>


    <input type="text" />

    <button>Add</button>

    <ol>
      
      {list.map((ListItem) => (  //map para ser colocado como lista na pagina, ListItem nome figurativo para saber qual tipo de lista esta manipulando
        <li key={ListItem.id}>{ListItem.label}</li> //keys para colocar o modo que vai ser lido/achado a lista
          //Criando uma lista com react, fazendo ela ler por id e label.
      ))}
      

    </ol>




    </div>
  )
}


