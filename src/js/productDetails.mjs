import { findProductById } from "./productData.mjs";

export default async function productDetails(productId, selector) {
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    // once we have the product details we can render out the HTML
    // add a listener to Add to Cart button
   
  }

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

function renderProductDetails() {

}

const productData = {

}