let valortotal = document.querySelector("#valortotal")
let cantidad = document.querySelector(".cantidad")
let suma = document.querySelector("#suma")
let resta = document.querySelector("#resta")
let preciobase = document.querySelector("#preciobase")


suma.addEventListener("click", function(){
        let cantidadtotal = Number(cantidad.innerHTML) + 1
        cantidad.innerHTML = cantidadtotal
        valortotal.innerHTML = 400000 * Number(cantidad.innerHTML)
})

resta.addEventListener("click", function(){
        let cantidadtotal = Number(cantidad.innerHTML) - 1
        cantidad.innerHTML = cantidadtotal
})


/* valortotal.innerHTML = Number(cantidad.innerHTML) * Number(preciobase)
valortotal.innerHTML = Number(cantidad.innerHTML) * 400000
 */