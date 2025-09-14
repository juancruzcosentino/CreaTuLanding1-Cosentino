import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad)
    console.log("Productos agregados: " + cantidad)
  }
  return (
    <div className='cardItemDetail'>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>  
      <h3>ID: {id}</h3>
      <img src={img} alt={nombre} />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est libero praesentium eveniet placeat ullam inventore ad eos accusantium, fugit impedit provident dolores odio quis repellat mollitia quasi dicta adipisci consequatur.</p>
      {
        agregarCantidad > 0 ?(<Link to="/cart">Terminar Compra</Link>) : <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>
      }

    </div>

  )
}

export default ItemDetail
