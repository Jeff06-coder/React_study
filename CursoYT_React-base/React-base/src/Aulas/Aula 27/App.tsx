import  { BrowserRouter, Navigate, Route } from "react-router"

import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { Routes } from "react-router";
import { Abount } from "./pages/Abount";
import { Detail } from "./pages/Detail";
import { Login } from "./pages/public/Login"



export function App() {
const isAuthenticated = false

  return(

   <BrowserRouter>
      {isAuthenticated && (  //Fazendo a autenticaçao de pagina, se ele passar do login carrega a pagina privada
          <AppLayout>
       <Routes>
         <Route path="/" element={<Home />} />   {/*Quando clicado em Home volta para page Inicial*/}
         <Route path="/sobre" element={<Abount />} />  {/*Quando clicar no sobre, vai para page Abount criada*/}
         <Route path='/detalhe/:id' element={<Detail /> }/>
         <Route path="*" element={<Navigate to ='/'/>} />{/*Fazendo a pessoa voltar para página inicial, caso ela tente entrar em uma q n existe*/}
        </Routes>
      </AppLayout>
      )}
      {!isAuthenticated && ( //Fazendo a negaçao do valor da Autenticaçao, para permanecer na tela de login
       <Routes>
         <Route path="*" element={<Login />}/> {/*Fazendo a pessoa voltar para página inicial de login, caso ela tente entrar em uma q n é permitido*/}
        </Routes>
      )}
    </BrowserRouter>
  )
  
}

