async function addItem(cart,item) {
  cart.push(item)
}

async function calculateTotal(cart) {
  console.log('O valor total do seu carrinho é: ')
  const result = cart.reduce((total, item) => total + item.subTotal(), 0)
  console.log(result.toFixed(3))
}

async function deleteItem(cart, name) {
  const index = cart.findIndex((item) => item.name === name)

  if (index !== -1) {
    cart.splice(index, 1)
  }
}

async function removeItem(cart, index) {}

async function displayCart(cart) {
  console.log('Veja seu carrinho:')
  cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity} | Subtotal ${item.subTotal()} \n`)
  })
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart
}