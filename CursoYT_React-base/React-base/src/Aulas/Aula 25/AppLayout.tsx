import type React from "react"
import './AppLayout.css'
import { NavLink } from "react-router" //Importando a biblioteca de navegaçao em link

//Criando um layout para ser customizado no CSS, e exportando ele para ser usado em outras páginas.
//Permitindo ser criado 'classes' filhos dentro dele
export const AppLayout = ({ children }: React.PropsWithChildren) =>{

return(

<div className="layout-base">
    
    <div className="layout-header">

        <NavLink to='/'>Home</NavLink> {/*Aplicando o link de navegaçao no conteudo*/}

        <NavLink to='/sobre'>Sobre</NavLink>

        <NavLink to='/detalhe'>Detalhes</NavLink>

    </div>
    <hr className="divider" />
    
    
{children}
</div>


)


}

