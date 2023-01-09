import React from 'react';
import '../hojas-de-estilo/Boton.css'

function Boton(props){
    //La esOperador, que estamos creando devuelve true si no es un numero, y no es un punto...
    const esOperador = valor => {
        return isNaN(valor) && (valor != ".") && (valor !="=")
    }

    

    return(
        <button className={`boton-contenedor ${esOperador(props.children) ? "operador" : null}`}
        onClick={()=> props.manejarClic(props.children)}>
            {props.children}
        </button>
    )
}

export default Boton;