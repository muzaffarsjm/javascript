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
          <p class="product-cost">$${product.cost}</p>
          <button class = "order-button">Order</button>
        </div>`
})
document.querySelector('.food').innerHTML = allElements;
let cost = [];
let calculatedCost = document.querySelector('.cost-indicator');

document.querySelectorAll('.order-button').forEach((buttony) =>  {
  buttony.addEventListener('click', ()=>{
    
  })
})
console.log(cost)
