import React, { createContext, useContext, useState } from "react"

interface IAuthContextProps{

        nome: string | undefined
        acessToken: string | undefined

        login(nome: string, senha: string): void
        logout(): void

}
const AuthContext = createContext({} as IAuthContextProps)

export const AuthProvider = ({children}: React.PropsWithChildren) =>{
    const [nome, setNome] = useState<string>()
    const [acessToken, setAcessToken] = useState<string>()

    const logout = () => {
        setNome(undefined)
        setAcessToken(undefined)
    }
    const login = (nome: string, senha: string) =>{
        console.log(nome, senha)

        setNome(nome)
        setAcessToken(crypto.randomUUID())
    }



return(

    <AuthContext.Provider value = {{login, logout, acessToken, nome}}>
        {children}
    </AuthContext.Provider>


)

}


export const useAuthContext = () => {
   return  useContext(AuthContext)

}

export const useIsAthenticated = () => {
    const {acessToken} = useAuthContext()

    return !!acessToken

}