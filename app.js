

let jobIn = document.querySelector('.jobIn');
let costs = document.querySelector('.costs');
let inCost = document.querySelector('.inCost');
let itemIn = document.querySelector('.itemIn');
let costIn = document.querySelector('.costIn');
let valIn = document.querySelector('.valIn');
let jobHere = document.querySelector('.jobHere');
let costValues = document.querySelector('.costValues');
let totalCost = document.querySelector('.totalCost');

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

    let allCostVal = noCost += parseInt(costIn.value);
    totalCost.textContent = '$ ' + allCostVal;
});




/*
here
jobHere
valIn
itemCost
itemName
incost
costs
joibIn



*/
console.log('app.js is working');























