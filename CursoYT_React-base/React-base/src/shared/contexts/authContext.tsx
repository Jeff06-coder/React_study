import React, { createContext, useCallback, useContext, useState } from "react"

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

    const logout = useCallback(() => {
        setNome(undefined)
        setAcessToken(undefined)
        
    }, [])

    //CallBack otimiza a aplicaçao, n fazer ter muitas renders (ele armazena na memoria)
    const login = useCallback((nome: string, senha: string) =>{
        console.log(nome, senha)

        setNome(nome)
        setAcessToken(crypto.randomUUID())
    }, [])

    //useMemo amarzena valores, faz o mesmo do Call, mas ele executa
    /*const detailedUser = useMemo(()=> {
        return `O nome do user é ${nome}`
    }, [nome])*/



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