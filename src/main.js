import * as cartService from './services/cart.js'
import createItem from "./services/item.js"

const cart = []
const wishList = []

console.log('Bem vindo ao seu carrinho da Shopee! \n')

const item1 = await createItem('Mouse Logitech', 479.90, 2)
const item2 = await createItem('Xbox Series S', 3550.5, 1)

await cartService.addItem(cart, item1)
await cartService.addItem(cart, item2)

await cartService.displayCart(cart)

cartService.calculateTotal(cart)