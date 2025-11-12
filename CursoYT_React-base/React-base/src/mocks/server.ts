import { createServer, Model } from "miragejs"


createServer({

models: {
    todos: Model
},
//Sempre executado quando server inicia
seeds(server){
    const todosAsString = localStorage.getItem('MOCK_TODOS')
    if (todosAsString === null) return;

    const todos = JSON.parse(todosAsString)
    console.log(todos)

    todos.models.forEach((todo: {}) => server.schema.create('todos', todo))},

routes() {
    this.namespace = 'api';
    //pegando os dados
    this.get('/todos', (schema) =>{  // 'schema' é um 'banco de dados' local.

        return schema.all('todos') //método para pedir para listar todos os registro de algim Model

    })
    //colocando novas informaçoes
    this.post('/todos', (schema, request) =>{  // 'request' permite pegar os dados da requisiçao

        const attrs = JSON.parse(request.requestBody)

        const todo = schema.create('todos', attrs) //criando novo registro no model todos

        const todos = schema.all('todos')
        localStorage.setItem('MOCK_TODOS', JSON.stringify(todos))

        return todo
    })
    //atualizar registro
    this.put('/todos/:id', (schema, request)=> {

        const id = request.params.id //pegando os parametros id do request
        const newAttrs = JSON.parse(request.requestBody) //pegando os dados do requestBody para ser os novos atributos
        const todo = schema.find('todos', id) // 'find' filtrando pelo id
        todo?.update(newAttrs) 

        const todos = schema.all('todos')
        localStorage.setItem('MOCK_TODOS', JSON.stringify(todos))
        return {}
    })
    //deletando algum registro
    this.delete('/todos/:id', (schema, request) =>{

        const id = request.params.id
        const todo = schema.find('todos', id)
        todo?.destroy()

        const todos = schema.all('todos')
        localStorage.setItem('MOCK_TODOS', JSON.stringify(todos))
        return {}
    })
}

})  