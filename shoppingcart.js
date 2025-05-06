let cartQuantity = 0;
let quantity = document.querySelector('.quantity-displayer');

function quantityRender(added){
  quantity.innerHTML = `Quantity of products:
  ${cartQuantity+=added}`;
}