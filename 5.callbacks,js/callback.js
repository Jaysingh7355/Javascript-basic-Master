/**
 * fun -> HIF it takes the function fun(which is fuction )as argument
 * 
 * x -> number
 * fu -> function
 */

function fun(x, fn){
    for(let i =0; i< x; i++){
console.log(i);
    }
    fn();
}

fun(10,function exec(){ // callbacks
    console.log("I am excuted also");
})