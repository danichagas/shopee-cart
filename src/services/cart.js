async function addItem(cart,item) {
  cart.push(item)
}

async function calculateTotal(cart) {
  const result = cart.reduce((total, item) => total + item.subTotal(), 0)
  console.log(result.toFixed(3))
}

async function deleteItem(cart, name) {
  const index = cart.findIndex((item) => item.name === name)

  if (index !== -1) {
    cart.splice(index, 1)
  }
}

async function remove(cart, index) {}

export {
  addItem,
  calculateTotal,
  deleteItem,
  remove
}