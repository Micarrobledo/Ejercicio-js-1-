// Debemos crear 6 objetos como mínimo.


var Pizzas = [

    {
        id: 1,
        nombre: "pizza de Argentina",
        ingredientes: "base de masa elaborada con vino. Salsa de tomate, queso, jamón crudo y aceitunas",
        precio: 500

    },
    {
        id: 2,
        nombre: "pizza de España",
        ingredientes: "base harina de trigo. Sal, agua y levadura. Mozzarella, cuatro quesos y verduras",
        precio: 300
    },
    {
        id: 3,
        nombre: "pizza de Mexico",
        ingredientes: "base de masa con picante. Salsa de tomate, jalapeño, queso y aceitunas",
        precio: 600
    },
    {
        id: 4,
        nombre: "pizza de Chile",
        ingredientes: "base de  masa con coliflor. Salsa de tomate, Provolone y pescado fresco",
        precio: 800
    },
    {
        id: 5,
        nombre: "pizza Paris",
        ingredientes: "base de masa sin gluten. Salsa de tomate, queso mozarella, queso provolone y jamón",
        precio: 400
    },
    {
        id: 6,
        nombre:"pizza de Bolivia",
        ingredientes: "base con jalapeño. Tomate, cuatro queso, morrones y aceitunas",
        precio: 900
    }

];



//console.log("los ingre. pares son:${pares}", "los ingredientes impares son; ${impares}");

//a)Las pizzas que tengan un id impar

const idPar = Pizzas.filter(Pizzas => Pizzas.id%2!==0).map(Pizzas => Pizzas.nombre)
console.log(`Las pizzas con identificador impar son ${idPar}.`)


//b) ¿Hay alguna pizza que valga menos de $600?

const precioPizza = Pizzas.filter(Pizzas => Pizzas.precio < 600).map(Pizzas => Pizzas.nombre)

function precioChecker() {
    if (precioPizza == false) {
        console.log("No tenemos disponible");
    } else {
        console.log(`las pizzas menores de $600 son las ${precioPizza}.`);
    }
}
precioChecker()



//c) El nombre de cada pizza con su respectivo precio

let nombreprecio = Pizzas.map(Pizzas => {
console.log(`La pizza ${Pizzas.nombre} sale $${Pizzas.precio}`)
 })

 //d) Todos los ingredientes de cada pizza

 let nombreingredientes = Pizzas.map(Pizzas => {
    console.log(`La pizza ${Pizzas.nombre} trae una ${Pizzas.ingredientes}`)
     })
