//CASOS DE USO DOS ITENS NO CARRINHO

//Criar item com subtotal certo
async function createItem(name,price,quantity) {
     return {
        name: name,
        price: price,
        quantity: quantity,
        subtotal:() => price * quantity // calcular subtotal
     }
}


export default createItem;