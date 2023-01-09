import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import Clear from './componentes/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs'; //mathjs es un paquete externo, para ello previamente lo instalamos con npm install mathjs
//Evaluate, directamente hace el calculo


function App() {

  const [input, setInput] = useState("")

  const agregarInput = val => {
    if (/[\+\-\*\/\.]$/.test(input)) {
      // Si es así, entonces verificamos si el nuevo valor a agregar también es un signo matemático
      if (/[\+\-\*\/\.]/.test(val)) {
        // Si el nuevo valor también es un signo matemático, entonces no permitimos que se agregue
        return;
      }
    }
    setInput(input + val)
  };


  const carcularResultado = () => {
    if (/[/\d/]/.test(input) && (/[/+/-/*/]/.test(input))) { // ahora vamos a validar que el input no este vacio, y que al menos tenga un signo antes de dar al igual
      if (/[\+\-\*\/\.]$/.test(input)) {
        alert("Introduzca otro número para hacer el calculo")
      } else {
        setInput(evaluate)
      }
    } else {
      alert("Por favor ingrese un calculo antes de pulsar el igual")
    }

  };

  return (
    <div className="App">
      <div className="calculadora">
        <Pantalla
          input={input}
        />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={carcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Clear clearClic={() => setInput("")}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
