import { useState } from "react"
import { InputAdd } from "./InputAdd"
import { TodosItens } from "./TodosItens";
import { List } from "./List";



export function App() {
  
  const [list, setList] = useState([      //Guardando valor de lista no useState

    { id: '1', label: 'Fazer café', complete: false },
    { id: '2', label: 'Fazer café', complete: false },           //Passando id e label para as listas
    { id: '3', label: 'Fazer almoço', complete: false },
    { id: '4', label: 'Fazer janta', complete: false }

  ]);


const handleAdd = (value: string) => {

  setList([...list, { id: (list.length + 1).toString(), complete: false, label: value }])// ...list é para adicionar toda lista anterior novamente

}

const handleRemove = (id: string) => {setList([...list.filter(item => item.id !== id)])}
const handleComplete = (id: string) =>{
  setList([
            ...list.map(item => ({...item, complete: item.id === id? true : item.complete}))
          ])}








  
  return (
    <div>
     {/*Usando o sistema de button criado na pagina original, atraves da interface e do componente criado */}
      <InputAdd onADD= {handleAdd}/*Definindo a ação que irá ser feita atraves da interface criada*//>
      

      <List>

        {list.map((ListItem) => (  //map para ser colocado como lista na pagina, ListItem nome figurativo para saber qual tipo de lista esta manipulando
          <TodosItens 
          
          key={ListItem.id} //Declarando key

          id= {ListItem.id}         //Componentizando a lista e seus buttons
          label= {ListItem.label}
          complete= {ListItem.complete}
          //Fazendo os buttons funcionarem, mas declarados em outro arquivo, viraram onRemove e onComplete
          onRemove={() => handleRemove}
          onComplete={() => handleComplete}

          />
          
        ))}



      </List>




    </div>
  )
}


