import  { BrowserRouter, Navigate, Route } from "react-router"

import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { Routes } from "react-router";
import { Abount } from "./pages/Abount";
import { Detail } from "./pages/Detail";



export function App() {

  return(

   <BrowserRouter>
     <AppLayout>
       <Routes>
         <Route path="/" element={<Home />} />   {/*Quando clicado em Home volta para page Inicial*/}
         <Route path="/sobre" element={<Abount />} />  {/*Quando clicar no sobre, vai para page Abount criada*/}
         <Route path='/detalhe/:id' element={<Detail /> }/>
         <Route path="*" element={<Navigate to ='/'/>} />{/*Fazendo a pessoa voltar para página inicial, caso ela tente entrar em uma q n existe*/}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
  
}

