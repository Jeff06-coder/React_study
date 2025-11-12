import type React from "react"
import PageLayoutStyles from './PageLayout.module.css'

interface IPageLayutProps{

    children: React.ReactNode
    title: string
}

export const PageLayout = ({children, title}: IPageLayutProps) => {

    return(

        <div className={PageLayoutStyles.PageLayoutContainer}>
          <div className={PageLayoutStyles.PageLayoutConter}>
           <div>
             <h1 className={PageLayoutStyles.PageLayoutH1}>{title}</h1>
           </div>
        

         <div>
        {children}
         </div>
           </div>
         </div>

    )

}