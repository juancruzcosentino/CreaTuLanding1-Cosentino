import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

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
      <Link to={`/item/${id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  )
}

export default Item
