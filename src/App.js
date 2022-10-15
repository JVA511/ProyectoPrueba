import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Error404 } from "./components/Error404";
import { Reseñas } from "./components/Reseñas";
import { Perfil } from "./components/Perfil";
import { Carrito } from './components/Carrito';
import { Login } from './components/Login'








// function App() {
//   return (
    
//     <div className="App"> 
//       <Login/>
//       <Perfil/>
//       <Logout/>
      

      
      
      
//     </div>
//   );
// }

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            
            <BrowserRouter>
              <Header/>

                <Routes>
                  <Route exact path="/" element={<Home/>}/> 
                  <Route exact path="/home" element={<Home/>}/>
                  <Route exact path="/reseñas" element={<Reseñas/>}/>
                  <Route exact path="*" element={<Error404/>}/>
                  <Route exact path="/perfil" element={<Perfil/>}/>
                  <Route exact path="/carrito" element={<Carrito/>}/>     

                </Routes>      
              </BrowserRouter>
          </>
        ) : (
          <Login />
        )}
      </header>
    </div>
  );
}
export default App;
