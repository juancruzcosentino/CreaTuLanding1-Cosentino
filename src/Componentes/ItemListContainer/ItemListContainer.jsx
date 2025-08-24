import "./ItemListContainer.css"

const ItemListContainer = ({Imagen, Texto}) => {
  return (
    <>
      <img src={Imagen} alt="Imagen de snowboard" />
      <h3>{Texto}</h3>
    </>
  )
}

export default ItemListContainer
