let name1 = prompt("ingrese su nombre de usuario")
alert("Bienvenido " + name1 )

let cantidadDeUnidades = prompt("el costo del helado es de $15. Cuantas unidades desea?")

let precio = cantidadDeUnidades * 15

alert("el total de su compra es de " + "$" + precio)




for(s= 1 ; s <=3; s++){

    let sabores = prompt("ingrese los sabores que desea, maximo 3");
    alert("sabor " + sabores + " " + "se agrego a tu helado" )
    console.log(sabores)
}
alert("terminamos! pronto enviaremos su pedido")


