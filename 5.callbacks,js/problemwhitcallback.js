/**
 * 1. Inverstion of control.
 * 2.Callback hell -> readabiltity problem
 * 
 */

let arr = [1,10,100,9,2,3,11];

arr.sort (function cmp(a,b){
    return a-b;
})

console.log(arr);


function doTask(){
    // whole implimantion is done by team A

    fn(X*x); //caling my callbck whit square of x
} // team A

// here team b tries to use it 
doTask(function () {}, 9);