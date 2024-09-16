const menu = [
    {name: "Margherita", price: 5},
    {name: "Pepperoni", price: 15},
    {name: "Hawaiian", price: 15},
    {name: "Veggie", price: 5},
]

const cashInRegister = 100
const orderQueue = []

function addNewPizza(pizza) {
    menu.push(pizza)
}