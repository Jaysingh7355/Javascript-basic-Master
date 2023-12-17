/** 
 * reduce is the higher odeer function available  ofr arrays.
 * reduce also takes a function f as an argument ,
 * what reduce does is , it one goes to every element of array .
 * say the current element is arr[i]
 * reduce will pass the element to the function f , and accumulate the result of further function calls
 * whit paticular result
 * **/

const aar = [1,2,3,4,5,6];
function sum(preResult, currValue){
   console.log(preResult,currValue);
    return preResult +currValue;
}

const result = aar.reduce(sum);
console.log(result);

/** 
 * Cart -> [iphne{price: 100000, name: "Iphone"}, Case {price:500, name: "backcover"}, Tempered glass { price:300, name: tempered glass  }]
 * **/
function addPrices(preResult , currValue){
    console.log(preResult,currValue);
    let newPrice = preResult.price + currValue.price ;
    return {price: newPrice};
}
let cart = [{price: 100000, name: "Iphone"},  {price:500, name: "backcover"},  { price:300, name: "tempered glass"  }];
const totalPrice = cart.reduce(addPrices);
console.log(totalPrice);