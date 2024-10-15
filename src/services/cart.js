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

async function removeItem(cart, item) {
  const indexFound = cart.findIndex((p) => p.name === item.name)

  if (indexFound == -1) {
    console.log('Item não encontrado')
    return
  }

  if (cart[indexFound].quantity > 1) {
    cart[indexFound] -= 1
  }

  if (cart[indexFound].quantity == 1) {
    cart.splice(indexFound, 1)
  }
}

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