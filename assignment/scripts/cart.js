console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
const basket = [];

function addItem( item ){
    console.log('in addItem', item)
    if (isFull(basket) === true ){
         console.log('Cannot add anymore items to your cart!');
        return false;
    }
    else  
    console.log('there is still room in your cart to add ' + item);
    basket.push( item );
    console.log(basket);
    return true;
}

function empty(basket){
    let i = basket.length;
    while (i > 0){
        basket.pop(i);
        i--;
    }
    console.log('Reset basket:', basket);
        return basket;
} 

function isFull(basket){
    if (maxItems > basket.length){
        return false;
    }
    else {
        if(maxItems <= basket.length){
        console.log('Your Cart is Full!');
        return true;
        }
    }
}

function listItems(basket){
    for (let i=0; i<basket.length; i++){
    return basket.join(' , ');
    }
}




function removeItem(item){
    
    if (basket.indexOf(item) !== -1){
        console.log('index of ', item,' in cart: ', basket.indexOf(item));
        basket.splice(basket.indexOf(item),1);

            return console.log(item , 'has been removed from cart!', basket);
        }
    console.log( item + " does not exist")
        return null;
    }
   




console.log('Testing empty: ' , empty(basket));
console.log(`Basket is ${listItems(basket)}`);
console.log('Adding Strawberries (expect true)', addItem('Strawberries')); 
console.log('Testing isFull: ', isFull(basket), basket);
console.log(`Basket is ${listItems(basket)}`);
console.log('Adding Watermelon (expect true)', addItem('Watermelon')); 
console.log('Testing isFull: ', isFull(basket), basket);
console.log(`Basket is ${listItems(basket)}`);
console.log('Adding Grapes (expect true)', addItem('Grapes'));
console.log('Testing isFull: ', isFull(basket), basket);
console.log(`Basket is ${listItems(basket)}`);
console.log('Adding Pumpkins (expect true)', addItem('Pumpkins'));
console.log('Testing isFull: ', isFull(basket), basket);
console.log(`Basket is ${listItems(basket)}`);
console.log('Adding Cherries (expect true)', addItem('Cherries'));
console.log('Testing isFull: ', isFull(basket), basket);
console.log(`Basket is ${listItems(basket)}`);
console.log('Adding Corn (expect false)', addItem('Corn'));
console.log('Testing isFull: ', isFull(basket), basket);
console.log('Testing listItems: ', listItems(basket));
console.log('Testing removeItem: ', removeItem('Pumpkins'));
console.log(`Basket is ${listItems(basket)}`);
console.log('Testing removeItem: ', removeItem('Cherries'));
console.log(`Basket is ${listItems(basket)}`);
console.log('Adding Corn (expecting true) ', addItem('Corn'));
console.log(`Basket is ${listItems(basket)}`);



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
