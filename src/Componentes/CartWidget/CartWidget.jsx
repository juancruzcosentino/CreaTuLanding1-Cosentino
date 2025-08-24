import "./CartWidget.css"

const CartWidget = () => {
  
  const ImgCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlxgAQ4X5PYZo8B83rZ4fhSXVt9Zl7Es-rw&s"

  return (
    <>
      <img className="ImgCarrito" src={ImgCarrito} alt="Imagen de carrito de compras" />
      <strong>3</strong>
    </>
  )
}

export default CartWidget
