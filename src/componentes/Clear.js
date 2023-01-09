import React from "react";
import '../hojas-de-estilo/Clear.css'


//En vez de props.children, perfectamente, se podría poner directamente clear, ya que no va a cambiar

function Clear(props){
    return(
        <div className="boton-clear" onClick={props.clearClic}>
            {props.children} 
        </div>
    )
}


export default Clear