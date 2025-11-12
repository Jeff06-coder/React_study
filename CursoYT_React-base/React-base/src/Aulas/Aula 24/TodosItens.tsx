import './TodosStyle.css'


interface ITodosItensProps {

    id: string
    label: string
    complete: boolean

    onRemove(): void
    onComplete(): void
}

//Trocando props para os componentes diretos, para n precisar usar dps props. atrás dos componetes
export const TodosItens = ({id, label, complete, onRemove, onComplete }: ITodosItensProps) => {
//Declarando as props que a interface tem e vai usar




return(


<li key={id}>

            {label}

            {complete ? 'Concluido' : ''} {/* Se for true add se n, fica sem nd*/}

            <button id="RemoveB" onClick={onRemove}>
              Remover
            </button>
                    {/*item é um parametro definido dentro da funçao, é cada elemento do array*/}
                    {/* Fazendo a analise dos elementos para ver se é igual ao id da lista, caso n seja é tomado como falto e fica no msm*/}
            <button id="CompleteB" onClick={onComplete}>
              Concluir
            </button>

          </li> //keys para colocar o modo que vai ser lido/achado a lista
          //Criando uma lista com react, fazendo ela ler por id, label e complete.




)





}


