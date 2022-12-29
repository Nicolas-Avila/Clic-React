import React from 'react';
import'../estilos/Contador.css'




function Contador({ numClic }){
    return(
        <div className='contador'>
            {numClic}
        </div>

    )
}

export default Contador;