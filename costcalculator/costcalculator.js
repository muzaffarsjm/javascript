let products = [{
  name : 'Tea',
  cost: 2
}, {
  name : 'Americano',
  cost: 2
},{
  name : 'Vanilla Latte',
  cost: 4
}, {
  name : 'Coke',
  cost: 1
}, {
  name : 'Fanta',
  cost: 1
}, {
  name : 'Bottled water 0.5L',
  cost: 1
}, {
  name : 'Plov',
  cost: 8
}, {
  name : 'Shashlik',
  cost: 6
}, {
  name : 'Somsa',
  cost: 3
}, {
  name : 'Pizza',
  cost: 11
}, {
  name : 'Burger',
  cost: 6
}, {
  name : 'Pasta',
  cost: 10
}, {
  name : 'Bibimpap',
  cost: 7
}, {
  name: 'Turkish Kebab',
  cost: 7
},{
  name: 'Ramyon',
  cost: 6
}
];
let allElements = '';
//creator function
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
//accumulator pattern
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
    let displayEl = document.querySelector('.ordered-items')
    if(orderBasket.length ===0){
      displayEl.innerHTML = 'No orders!'
    }else {
      displayEl.innerHTML = 
      `Your orders: ${allOrders}`;
    };
  }
  function removeOrder(index){
    orderBasket.splice(index, 1);
    updateOrders();
  };

//cost calculator button code below
let calculatedCost = document.querySelector('.cost-indicator');
// saves total cost using accumulator pattern
let totalCost = 0;
const buttons = document.querySelectorAll('.order-button')

buttons.forEach((clicked) => {
  clicked.addEventListener('click', ()=>{
    const itemPrice = Number(clicked.dataset.productCost);
    totalCost += itemPrice;
    calculatedCost.innerHTML = `$${totalCost}`;
  });
});

