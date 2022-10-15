import React from 'react'
import error404 from '../imagenes/error404.png'

export const Error404 = () => {
  return (
    <div className='container'>
        <center>
            <br/>
            <img style={{paddingTop:100}} src={error404} height="auto" alt="..."/>
        </center>
    </div>
  )
}
