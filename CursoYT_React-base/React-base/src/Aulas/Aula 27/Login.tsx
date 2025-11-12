import { useState } from "react"

import './Login.css'

//Tela de login simples
export const Login = () => {
const [nome, setNome] = useState('')
const [senha, setSenha] = useState('')

const handleLogin = () =>{
    console.log('Enter')
}

    return(
     <div id="page">
        <div id="head">
            <h1>Login</h1>

            <div id="layoutL">

            Nome: <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            <br />
            <br />
            Senha: <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>






            </div>
            <br />
            <button onClick={handleLogin}>Entrar</button>

        </div>
     </div>






    )
}