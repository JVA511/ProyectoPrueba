import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import fondo from '../imagenes/fondo.png'
import Button from 'react-bootstrap/Button';



export const Login = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <>
        <div
            class="fondo"
            style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            height: 929,
            width: 1920,
            color: "#f5f5f5"    
        }}>     
        
            

            <div style={{paddingLeft:1100, paddingTop:600}} className="mb-2">
                <Button onClick={() => loginWithRedirect()} variant="light" size="lg">
                <h1>BIENVENIDO</h1>
                </Button>
            </div>
            
        
        </div>
        
    </> 
    
  )
}
