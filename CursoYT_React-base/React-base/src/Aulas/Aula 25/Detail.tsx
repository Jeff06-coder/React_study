import { PageLayout } from "../shared/layout/page-layout/PageLayout"
import { useParams } from "react-router" 

export const Detail = () =>{

const { id } = useParams()    //Colocando parametro

return(

    <PageLayout title='Detalhes'>

        <p>
            Esse item é do ID:{id} {/*Mostrando o ID na pagina de detalhes*/}
        </p>
       


    </PageLayout>


)


} 