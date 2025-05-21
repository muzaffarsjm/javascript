let cartQuantity = 0;
let quantity = document.querySelector('.quantity-displayer');
//function reders the quantity of products
function quantityRender(added){
  quantity.innerHTML = `Quantity of products:
  ${cartQuantity+=added}`;
}