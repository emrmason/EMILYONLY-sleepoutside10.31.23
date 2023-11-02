import { findProductById } from "./productData.mjs";
import { getParam } from "./utils.mjs";
export { productDetails };

export default async function productDetails(productId, selector) {
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    let product = await findProductById(productId).then(getParam(product.id)); 
    // console.log(product); // this logs the entire object
    //renderProductDetails(product.id);// HERE!!
    // once we have the product details we can render out the HTML
    // add a listener to Add to Cart button
   addToCartHandler(product);
  }

function addProductToCart(product) {
  if(!getLocalStorage("so-cart")) {
    setLocalStorage("so-cart", []);
  }
  let cartProduct = getLocalStorage("so-cart");
  cartProduct.push(product);
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

function renderProductDetails() {
  document.getElementById("productName").innerText = product.Name;
  document.getElementById("productNameWithoutBrand").innerText = product.NameWithoutBrand;
  document.getElementById("productImage").src = product.Images.PrimaryLarge;
  document.getElementById("productImage").alt = product.Name;
  document.getElementById("productFinalPrice").innerText = product.FinalPrice;
  document.getElementById("productColorName").innerText = product.Colors.ColorName;
  document.getElementById("productDescriptionHtmlSimple").innerText = product.DescriptionHtmlSimple;
  document.getElementByClassName("addToCart").dataset.id = product.Id;
}

const productData = {

}