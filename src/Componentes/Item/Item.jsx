import React from 'react'
import "./Item.css"

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProductos'>
      <img src={img} alt={nombre}/>
      <br/>
      <h3>Nombre: {nombre}</h3>
      <br/>
      <p>Precio : {precio}</p>
      <br/>
      <p>Id: {id}</p> 
      <br/>
      <button>Ver detalles</button>
    </div>
  )
}

export default Item
