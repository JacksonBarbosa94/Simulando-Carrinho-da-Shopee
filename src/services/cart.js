// quais ações podem ser feitas no carrinho de compras

// Casos de uso:
// adicionar item
async function addItem(useCart,item) {
    useCart.push(item); // adicionar item ao carrinho

}
//delete item
async function deleteItem(useCart,name) {
    const index = useCart.findIndex(item => item.name === name);
    if (index !== -1) {
        useCart.splice(index, 1); // remover item do carrinho
    }
    

}
//remover item- diminuir quantidade
async function removeItem(useCart,item) {
    // encontrar item no carrinho
    const indexFoud = useCart.findIndex((p) => p.name === item.name);
      console.log(indexFoud);
      //Caso não encontre o item
      if (indexFoud === -1) {
        console.log("Item não encontrado");
        return;
      }
      
        //Se a quantidade for maior que 1, diminuir a quantidade
        if (useCart[indexFoud].quantity > 1) {
          useCart[indexFoud].quantity -= 1;
          return
        }
        //Se a quantidade for 1, remover o item do carrinho
         if (useCart[indexFoud].quantity === 1) {
          useCart.splice(indexFoud, 1);
          return;//
        }
}
//calcular total do carrinho
async function calculateTotal(useCart) {
    const result = useCart.reduce((total,item) => total + item.subtotal(),0);// somar todos os subtotais dos itens
    console.log(` \n Total: R$${result}`);// mostrar total
    
}

async function displayCart(useCart) {
    console.log(" \🛒 Shoppe Cart list");
    useCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} -R$${item.price} | Quantity: ${item.quantity}x | Subtotal: R$${item.subtotal()}`);//
    });
}
     
//esvaziar carrinho

export{
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart

    
}