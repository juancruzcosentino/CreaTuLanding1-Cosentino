import React from 'react'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'

const App = () => {

  const Imagen = "https://d2j6dbq0eux0bg.cloudfront.net/images/78960537/4829867811.jpg"

  return (
    <>
      <NavBar/>
      <ItemListContainer Imagen={Imagen} Texto="Snowboard Kaikana"/>
    </>
  )
}

export default App
