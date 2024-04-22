console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
let item;
function addItem(item) {
   
    console.log('in addItem - you are adding ', item ,' to your basket')
basket.push(item);
console.log('The item ', item, ' has been added to your basket!')
return true;

}

console.log('Testing addItem -' , addItem('Apple'));
console.log('Testing addItem -' , addItem('Peaches'));
console.log('Testing addItem -' , addItem('Carrots'));
console.log('Testing addItem -' , addItem('Cottage Cheese'));





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
