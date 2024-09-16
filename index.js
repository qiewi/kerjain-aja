const menu = [
    {name: "Margherita", price: 5},
    {name: "Pepperoni", price: 15},
    {name: "Hawaiian", price: 15},
    {name: "Veggie", price: 5},
]

const cashInRegister = 100
const nextOrderId = 1
const orderQueue = []

function addNewPizza(pizza) {
    menu.push(pizza)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName)
    cashInRegfister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId) 
    order.status = "completed"
    return order
}