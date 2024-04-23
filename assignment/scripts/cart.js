console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
const basket = ['Watermelon', 'Cherries', 'Strawberries', 'Chocolate', 'Peaches'];

function addItem(item) {
    console.log('in addItem', item)
    if (isFull(basket) === true) {
        console.log('CANNOT ADD ANY MORE ITEMS!!!');
        return false;
    }
    else
        console.log('there is still room in your cart for ' + item);
    basket.push(item);
    console.log(basket);
    return true;
}

function empty() {
    basket.length = 0;

    console.log('Basket Reset:');
    return basket;
}

function isFull() {
    console.log('in isFull');
    if (maxItems > basket.length) {
        console.log('You have room to add', maxItems - basket.length, 'more items');
        return false;
    }
    else {
        if (maxItems <= basket.length) {
            console.log('Your Cart is Full!');
            return true;
        }
    }
}

function listItems() {
    console.log('in listItems');
    let i = 0;
    while (i < basket.length) {
        console.log(basket[i]);
        i++;
    }
    return basket.join(' , ');
}


function removeItem(item) {
    console.log('in removeItem');
    if (basket.indexOf(item) !== -1) {
        console.log('index of ', item, ' in cart: ', basket.indexOf(item));
        let removed = basket.splice(basket.indexOf(item), 1);
        console.log('Testing show removed: ', removed[0]);
        console.log(item, 'has been removed from cart!', basket);
        return removed[0];
    }
    console.log(item + " does not exist");
    return 
}



//console.log('Testing empty: ' , empty(basket));
// console.log(`Basket contains ${listItems(basket)}`);
// console.log('Adding Strawberries (expect true)', addItem('Strawberries')); 
// console.log('Testing isFull: ', isFull(basket));
// console.log(`Basket contains ${basket}`);
// console.log('Adding Watermelon (expect true)', addItem('Watermelon')); 
// console.log('Testing isFull: ', isFull(basket));
// console.log(`Basket contains ${listItems(basket)}`);
// console.log('Adding Grapes (expect true)', addItem('Grapes'));
// console.log('Testing isFull: ', isFull(basket));
// console.log(`Basket contains ${listItems(basket)}`);
// console.log('Adding Pumpkins (expect true)', addItem('Pumpkins'));
// console.log('Testing isFull: ', isFull(basket));
// console.log(`Basket contains ${listItems(basket)}`);
// console.log('Adding Cherries (expect true)', addItem('Cherries'));
// console.log('Testing isFull: ', isFull(basket));
// console.log(`Basket contains ${listItems(basket)}`);
// console.log('Adding Corn (expect false)', addItem('Corn'));
// console.log('Testing isFull: ', isFull(basket));
// console.log('Testing listItems: ', listItems(basket));
// console.log('Testing removeItem: ', removeItem('Pumpkins'));
// console.log(`Basket contains ${listItems(basket)}`);
// console.log('Testing removeItem: ', removeItem('Cherries'));
// console.log(`Basket contains ${listItems(basket)}`);
// console.log('Adding Corn (expecting true) ', addItem('Corn'));
// console.log(`Basket contains ${listItems(basket)}`);



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
} catch (e) {
    // Do nothing
}
