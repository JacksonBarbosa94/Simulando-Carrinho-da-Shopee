import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const  myCart = [];
const myWishlist = [];

console.log("Welcome to the Shopping Cart System");

//Criando dois itens
const item1 = await createItem("Laptop", 1200, 1);
const item2 = await createItem("Mouse", 25, 2);
    
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);// remove one mouse from cart
await cartService.removeItem(myCart, item2);// remove laptop from cart

await cartService.displayCart(myCart);// display cart items
//await cartService.deleteItem(myCart, item1.name);// delete laptop from cart


console.log(item1.subtotal());
console.log(item2.subtotal());



console.log("Shoppe cart total");
await cartService.calculateTotal(myCart);