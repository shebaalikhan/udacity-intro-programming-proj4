/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
products.push(
  {
  "name": "cherry",
  "price": 5,
  "quantity": 0,
  "productId": 0,
  "image": "./images/cherry.jpg"
}, {
  "name": "orange",
  "price": 10,
  "quantity": 0,
  "productId": 1,
  "image": "./images/orange.jpg"
}, {
  "name": "strawberry",
  "price": 15,
  "quantity": 0,
  "productId": 2,
  "image": "./images/strawberry.jpg"
});


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  // Define productId variable 
  let correctProduct = foundProduct(productId);
  // Check if the product exists 
  if (correctProduct) {
    // Product found, add quantity 
    correctProduct.quantity += 1;
    // Check product in cart 
    let isProductInCart = cart.find(x => x.productId === correctProduct.productId);
    if (!isProductInCart) {
      // Add product to cart 
      cart.push(correctProduct)
    }
  } else {"Product not found"}

}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  // Define increaseQuantity variable 
  let correctProduct = foundProduct(productId);
  correctProduct.quantity += 1;

}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  let correctProduct = foundProduct(productId);
  correctProduct.quantity -= 1;
  if (correctProduct.quantity == 0 ) {
    removeProductFromCart(productId);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  let correctProduct = foundProduct(productId);
  correctProduct.quantity = 0;
  let productInCartIndex = cart.findIndex(x => x.productId === correctProduct.productId);
  if (productInCartIndex !== -1) {
    cart.splice(productInCartIndex, 1)
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let total = 0;
  for (x of cart) {
    total += x.price * x.quantity;
  }
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.length = 0;
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let totalPaid = 0; 

function pay(amount) {
  totalPaid += amount;
  let remainingBal = cartTotal() - totalPaid;
  if (remainingBal > 0) {
    return -remainingBal;
  } else {
    let change = Math.abs(remainingBal);
    totalPaid = 0; 
    emptyCart(); 
    return change;
  }
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

function foundProduct(productId) {
  return products.find(x => x.productId === productId);
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}