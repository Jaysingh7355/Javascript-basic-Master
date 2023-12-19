/**
 * 1. Inverstion of control.
 * 2.Callback hell -> readabiltity problem
 * 
 */

//let arr = [1,10,100,9,2,3,11];

//arr.sort (function cmp(a,b){
    //return a-b;
//})

//console.log(arr);


function doTask(fn, x){
    // whole implimantion is done by team A

    fn(x*x); //caling my callbck whit square of x
     fn(x*x);
} // team A

// here team b tries to use it 
doTas (function(num){ // du e to callbacks , I am pasing the control hoe exec should be called to daTask
   // this is version of control.
    console.log("Woah num is", num);
},9);



