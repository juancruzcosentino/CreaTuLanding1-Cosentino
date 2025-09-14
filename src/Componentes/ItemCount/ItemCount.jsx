import React from 'react'
import { useState } from 'react'

const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const Incrementar = () =>{
      if (contador < stock) {
        setContador(contador + 1)
      } 
      
}

    const Decrementar = () =>{
      if (contador > inicial) {
        setContador(contador - 1)
      }
}

console.log(contador)

return (
    <>
    <div>
      <button onClick={Incrementar}> + </button>
      <p> {contador} </p>
      <button onClick={Decrementar}> - </button>
    </div>
      <button onClick={()=>funcionAgregar(contador)}>Agregar al carrito</button>
    </>
)}


export default ItemCount