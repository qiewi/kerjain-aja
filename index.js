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

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName)
    cashInRegfister += selectedPizza.price
    const newOrder = { pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}