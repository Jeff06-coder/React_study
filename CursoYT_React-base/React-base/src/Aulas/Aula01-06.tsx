interface ICardProps{ //Criando uma interface para obrigar certos metodos na construçao do componete Card
  title: string ; //Adicionando o title q é do tipo string, para ser add dps no Card
  children: React.ReactNode; //Obrigando o card a ter um children
}
const Card = (props: ICardProps) =>{ //Implantando a interface

//Isso é um componete de React, n é function
//Adicionando css na div, e os metodos criados na interface
 return (
  <div style={{border:  '1px solid black'}}>   
  <h1>Title: {props.title}</h1>
  <div>{props.children}</div>
  <p>ISSO AE</p>
  </div>);

}



export function App() {
  
  //Colocando o Card para funcionar, ele pode ser reutilizado com os mesmos padrões
  return (
    <>
  ola
  <p>CARD: </p>

    <Card title='test 0'> bbbbbbbbbbbbbbbbb</Card>
    <Card title='test'> aaaaaaaaaaaaaaaaa </Card>

    </>
    
  )
}
