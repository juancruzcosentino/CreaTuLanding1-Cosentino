import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='cardItemDetail'>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>  
      <h3>ID: {id}</h3>
      <img src={img} alt={nombre} />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est libero praesentium eveniet placeat ullam inventore ad eos accusantium, fugit impedit provident dolores odio quis repellat mollitia quasi dicta adipisci consequatur.</p>
    </div>

  )
}

export default ItemDetail
