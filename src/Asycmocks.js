const misProductos = [
    {id: 1, nombre: "Guantes de nieve", precio: 100.000, img:"../public/img/guantes.jpeg"},
    {id: 2, nombre: "Campera impermeable", precio: 300.000, img:"../public/img/campera.jpeg"},
    {id: 3, nombre: "Botas de nieve", precio: 500.000, img:"../public/img/botas.jpeg"},
    {id: 4, nombre: "Fijaciones Snowboard", precio: 600.000, img:"../public/img/fijaciones.jpeg"},
]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        })
    }, 2000)
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item=> item.id === id)
            resolve(producto)
        }, 2000)
    })
}
