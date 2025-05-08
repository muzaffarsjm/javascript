let products = [{
  name : 'Tea',
  cost: 2
}, {
  name : 'Coffee',
  cost: 4
}, {
  name : 'Coke',
  cost: 1
}, {
  name : 'Fanta',
  cost: 1
}, {
  name : 'Water',
  cost: 1
}, {
  name : 'Plov',
  cost: 8
}, {
  name : 'Shashlik',
  cost: 6
}, {
  name : 'Pizza',
  cost: 11
}, {
  name : 'Burger',
  cost: 6
}, {
  name : 'Pasta',
  cost: 10
}
];
let allElements = '';
products.forEach(product=> {
  allElements += `
        <div class="item">
          <p class="name">${product.name}</p>
          <p class="product-cost"
          >$${product.cost}</p>
          <button class = "order-button"
            data-item-name = "${product.name}"
            data-product-cost = "${product.cost}">
            Order</button>
        </div>`
})
document.querySelector('.food').innerHTML = allElements;
let cost = [];

let orderBasket = [];

document.querySelectorAll('.order-button')
.forEach((button) =>  {
  button.addEventListener('click', ()=>{
    const itemName=button.dataset.itemName;
    orderBasket.push(itemName);
    updateOrders();
  });
});
function updateOrders(){
  let allOrders = '';
    orderBasket.forEach((item) =>{
      html = `<div class = "orders-container">
        ${item}
        <button class = 'delete-button'
        onclick = "removeOrder()"
        >Delete</button>
        </div>`;
      allOrders += html;
    });
      document.querySelector('.ordered-items').innerHTML = 
      allOrders;
  };
  function removeOrder(index){
    orderBasket.splice(index, 1)
    updateOrders();
  };

//cost calculator button code below
let calculatedCost = document.querySelector('.cost-indicator');

let totalCost = 0;
const buttons = document.querySelectorAll('.order-button')

buttons.forEach((clicked) => {
  clicked.addEventListener('click', ()=>{
    const itemPrice = Number(clicked.dataset.productCost);
    totalCost += itemPrice;
    calculatedCost.innerHTML = `$${totalCost}`;
  });
});

