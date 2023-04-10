

let jobIn = document.querySelector('.jobIn');
let costs = document.querySelector('.costs');
let inCost = document.querySelector('.inCost');
let itemIn = document.querySelector('.itemIn');
let costIn = document.querySelector('.costIn');
let valIn = document.querySelector('.valIn');
let jobHere = document.querySelector('.jobHere');
let costValues = document.querySelector('.costValues');
let totalCost = document.querySelector('.totalCost');

const printBtn = document.querySelector('.printBtn');

let noCost = 0;

function sendItems(element, message) {
    let itemPost = document.createElement("li");
    itemPost.textContent = message;
    element.appendChild(itemPost);
}


valIn.addEventListener('click', () => {
    jobHere.textContent = jobIn.value
    
    costVal = itemIn.value + " - $" + costIn.value
    sendItems(costValues, costVal);

    let allCostVal = noCost += parseFloat(parseFloat(costIn.value).toFixed(2));
    totalCost.textContent = '$ ' + allCostVal;
});


printBtn.addEventListener('click', () => {
    window.print();
  });

console.log('app.js is working');