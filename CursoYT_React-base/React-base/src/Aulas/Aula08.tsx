import { useState } from "react" //useState ele guarda o dado na memória do react impedindo de ser resetado junto com os outros



export function App() {
//setCount re-faz o fluxo de render
  const [count, setCount] = useState(0);//Para guardar valores useState
  const [hid, setHide] = useState(false);//Para esconder o conteudo

  


  if (hid) return null;    //Esconde tudo do site/HTML se for verdadeiro, n usar useState/outers dps de ifs


  //{hide && <p >Teste</p>}        //Esconde o texto de acordo se é falso ou verdadeiro
    //{!hide && <p >Teste0</p>}           //Ou usar o metodo de baixo, que faz o msm
  
  return (
    <div>

     {hid
     ?<p >Teste</p>
     :<p >Teste0</p>

      }


    <button onClick={() => setCount(count + 1)}>

      {count}

    </button>

    <button onClick={() => setHide(!hid)}>
      Toggle
    </button>
    </div>
  )
}


