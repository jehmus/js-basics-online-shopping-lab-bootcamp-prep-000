var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push( {itemName:item, itemPrice:Math.floor(Math.random()*100)} )
  return `${item} has been added to your cart.`
}

function viewCart() {
  var output = `In your cart, you have `
  if (cart.length===0) {
    return `Your shopping cart is empty.`
  }
  else if (cart.length===1) {
     output=output+`${cart[0].itemName} at $${cart[0].itemPrice}.`
     return output
  }
  else {
    for (var i=0; i<cart.length-1; i++) {
      output = output + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  return output + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
}

function total() {
  var total=0
  for (var i=0; i<cart.length; i++) {
    total+=cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  if (cart[item] === undefined) {
    return `That item is not in your cart.`
  }
  else {
    for (var i=0; i<cart.length; i++) {
      if (cart[i].itemName===item) {
        var removed = cart.splice(i, 1)
      }
    }
    return cart
    
  }
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  else {
    var cartTotal=total()
    cart=[]
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
    
  }
}
