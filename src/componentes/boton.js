import React from 'react'
import '../estilos/Boton.css'


function Boton({texto,esClic, manejaClic}){
    return(
        
        <button
        className={ esClic ? 'boton-clic' : 'boton-reiniciar' }
        onClick={manejaClic}>
            {texto}
        </button>
       
    );

}

export default Boton;