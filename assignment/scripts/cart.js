console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
let basket = [];


function addItem( item ){
    console.log('in addItem', item)
    if (isFull(basket) === true ){
console.log('Cannot add anymore items to your cart!');
        return false;
    }
    else  
    basket.push( item );
    console.log(basket);
    return true;
}

function empty(basket){
    basket.length = 0;
    console.log('Reset basket:', basket);
    return basket;
}

function listItems(basket){
for (let i=0; i<basket.length; i++){
    return basket.join(' , ');
}
    


}
function isFull(basket){
    if (maxItems > basket.length){
return false;
    }
else {
    if(maxItems <= basket.length){
    return true;
}
}
}


function removeItem(item){
    console.log(basket);
    console.log(basket.indexOf(item));
    if (basket.indexOf(item) !== -1){
        basket.splice(basket.indexOf(item));

    return basket
    }
    console.log( item + " does not exists")
    return null;
    }
   




empty(basket);
console.log(`Basket is ${basket}`);
console.log('Adding Strawberries (expect true)', addItem('Strawberries'));
console.log(`Basket is now ${basket}`);
console.log(`Basket is ${basket}`);
console.log('Adding Watermelon (expect true)', addItem('Watermelon'));
console.log(`Basket is now ${basket}`);
console.log(`Basket is ${basket}`);
console.log('Adding Grapes (expect true)', addItem('Grapes'));
console.log(`Basket is now ${basket}`);
console.log(`Basket is ${basket}`);
console.log('Adding Pumpkins (expect true)', addItem('Pumpkins'));
console.log(`Basket is now ${basket}`);
console.log(`Basket is ${basket}`);
console.log('Adding Cherries (expect true)', addItem('Cherries'));
console.log(`Basket is now ${basket}`);
console.log(`Basket is ${basket}`);
console.log('Adding Corn (expect false)', addItem('Corn'));
console.log(`Basket is still ${basket}`);




console.log('Testing isFull: ', isFull(basket), basket, 'your cart is full!');

console.log('Testing listItems: ', listItems(basket));
console.log('Testing removeItem: ',  removeItem('Cake'), basket );


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
