const misProductos = [
    {id: "1", nombre: "Guantes de nieve", precio: 100.000, img:"../public/img/guantes.jpeg", idCat: "indumentaria", stock:22},
    {id: "2", nombre: "Campera impermeable", precio: 300.000, img:"../public/img/campera.jpeg", idCat: "indumentaria", stock:50},
    {id: "3", nombre: "Botas de nieve", precio: 500.000, img:"../public/img/botas.jpeg", idCat: "equipamiento", stock:13},
    {id: "4", nombre: "Fijaciones Snowboard", precio: 600.000, img:"../public/img/fijaciones.jpeg", idCat: "equipamiento", stock:10},
]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        })
    }, 100)
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item=> item.id === id)
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=>{
           const productosCategotria = misProductos.filter(item=> item.idCat === idCategoria) 
           resolve(productosCategotria)
        }, 100)
    })
}