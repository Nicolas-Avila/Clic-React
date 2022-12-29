import logo from './imagenes/1.png';
import './App.css';
import Contador from './componentes/contador';
import Boton from './componentes/boton';
import {useState} from 'react';

function App() {

const [numClic, setNumClics] = useState(0);

const manejaClic=()=>{
  setNumClics(numClic+1);
}

const reiniciar=()=>{
  setNumClics(0)
}


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
        className='logoimg'
        src={logo}
        alt='logoinicial'
        />
      </div>
      <div className='contedor-principal'>
        <Contador numClic={numClic}/>
        <Boton
        texto='clic'
        esClic={true}
        manejaClic={manejaClic}/>
        <Boton
        texto='reiniciar'
        esClic={false}
        manejaClic={reiniciar}/>
      </div>
    </div>
  );
}

export default App;
