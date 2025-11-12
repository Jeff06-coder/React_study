import { useState } from "react" //useState ele guarda o dado na memória do react impedindo de ser resetado junto com os outros



export function App() {
//setCount re-faz o fluxo de render
  const [count, setCount] = useState(0);//Para guardar valores useState

  
  
  return (
    
    <button onClick={() => setCount(count + 1)}>

      {count}

    </button>
    
  )
}