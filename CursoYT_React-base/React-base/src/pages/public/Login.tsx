import { useState } from "react"

import './Login.css'
import { useAuthContext } from "../../shared/contexts/authContext"

//Tela de login simples
export const Login = () => {

const [nome, setNome] = useState('')
const [senha, setSenha] = useState('')
const {login} = useAuthContext()


const handleLogin = () =>{
    console.log('Enter')

    login(nome, senha)
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