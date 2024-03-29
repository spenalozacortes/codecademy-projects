import products from './products';

const productName: string = 'tote bag';
const shippingAddress: string = '575 Broadway, New York City, New York';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const product = products.find(product => product.name === productName);

if (product.preOrder === true) {
  console.log('We will send you a message when your product is on its way.');
}

if (Number(product.price) >= 25) {
  shipping = 0;
  console.log("Free shipping!");
} else {
  shipping = 5;
}

if (shippingAddress.includes('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
  Product:  ${product.name}
  Address:  ${shippingAddress}
  Price:    $${product.price}
  Tax:      $${taxTotal}
  Shipping: $${shipping}
  Total:    $${total}
`);
