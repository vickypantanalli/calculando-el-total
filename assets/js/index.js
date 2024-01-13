let valortotal = document.querySelector("#valortotal")
let cantidad = document.querySelector(".cantidad")
let suma = document.querySelector("#suma")
let resta = document.querySelector("#resta")


suma.addEventListener("click", function(){
        let cantidadtotal = Number(cantidad.innerHTML) + 1
        cantidad.innerHTML = cantidadtotal
})