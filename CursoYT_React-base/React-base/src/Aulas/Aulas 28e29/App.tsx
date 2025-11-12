
import { AppRoutes } from "./Rautes";
import { AuthProvider } from "./shared/contexts/authContext";



export function App() {


  return(
    //Rotas privadas e publicas
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
  
}

