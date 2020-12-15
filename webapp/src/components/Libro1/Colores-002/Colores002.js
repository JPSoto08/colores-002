import React from 'react'
import Brick from './Brick'
import Letras from './Letras'
import './Letras.css'

//Desde aca llamaremos todos los componentes necesarios y la logica.
//<Brick color={'green'}/>
function Colores(props) {

    return(
        <>
            <h1>COLORES</h1>
            <h2>Presiona cada letra y remplazala por la letra correcta.</h2>            
            <Letras />            
        </>
    )
}
export default Colores