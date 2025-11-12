import type React from "react"
import './AppLayout.css'

//Criando um layout para ser customizado no CSS, e exportando ele para ser usado em outras páginas.
//Permitindo ser criado 'classes' filhos dentro dele
export const AppLayout = ({ children }: React.PropsWithChildren) =>{

return(

<div className="layout-base">
    
    <div className="layout-header">
        <a>Home</a>
        <a>Sobre</a>
    </div>
    <hr className="divider" />
    
    
{children}
</div>


)


}

