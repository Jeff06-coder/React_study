import { useState, useEffect } from "react"
import { InputAdd } from "../components/InputAdd"
import { TodosItens } from "../components/TodosItens";
import { List } from "../components/List";
import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI";
import { PageLayout } from "../shared/layout/page-layout/PageLayout";

export const Home = () => {


  const [list, setList] = useState<ITodo[]>([      //Guardando valor de lista no useState

  ]);
  // useEffect faz a execuçao ser atualizada apenas uma vez, a cada ação, ele "bloqueia" o flow render e faz o propeio
  useEffect(() => { 
    TodoAPI.getAll().then(data => setList(data))
  }, []) //Array de dependência do useEffect



const handleAdd = (value: string) => {
 //Fazendo os ADD e COMPLETE ser salvos no backend com o dado local, usando o data.
  TodoAPI.create({label: value, complete: false}).then(data =>{
    setList([...list, data])// ...list é para adicionar toda lista anterior novamente
  })
}
//Fazendo as auterações feitas no front-end serem feitas e salvas no back-end também, amarzenado no data local
const handleRemove = (id: string) => {TodoAPI.deleteById(id).then(() => {setList([...list.filter(item => item.id !== id)])})}

const handleComplete = (id: string) =>{TodoAPI.updateById(id, {complete: true}).then(() => {
  setList([
            ...list.map(item => ({...item, complete: item.id === id? true : item.complete}))
          ])
})
  }



  
  return (
    <PageLayout title="TODOs LIST">
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
          onRemove={() => handleRemove(ListItem.id)}
          onComplete={() => handleComplete(ListItem.id)}

          />
          
        ))}



      </List>




    </PageLayout>
  )

}