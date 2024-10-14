async function addItem(userCart,item) {
  userCart.push(item)
}

async function calculateTotal(cart) {
  const result = cart.reduce((total, item) => total + item.subTotal(), 0)
  console.log(result.toFixed(3))
}

async function deleteItem(userCart, name) {}

async function remove(userCart, index) {}

export {
  addItem,
  calculateTotal,
  deleteItem,
  remove
}