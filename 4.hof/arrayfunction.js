/** 
   arrays are costom object in js 
  index of the element is the key and the element it self is the value.
   ["abc", "def", "ghi"] -> (0:"abc",1:"def",2:ghi);
**/

/** 
 * map function
 * map is higher oder function abvilable whit arrays
 * it tkes a function as an argument -> f 
 * it return an array in which every value is actully poppulated by calling
 * function f ewhit original array element as argument 
 * 
 * every element of orignal array passed one by one in the argument function f
 * whatever is the output of each element , we populate that out put in an array 
 * map internall iterate /loop over element of the given orignal array 
 * pass the element in the argument function f and stroe the returned
 * value in side an array 
 * **/

function square(el){
   return el*el;

}

function cube(x){
    return x*x*x; 
}
function isevenodd(x){
    if(x%2 == 0){
        return "even";
    }else{
        return "odd";
    }
}
const arr = [1,2,3,4,5];
const result = arr.map(square);
/** 
 * square(1) -> 1
 * suare (2) -> 4
 * sqquare(3) -> 9
 * square(4) -> 16
 * square(5) -> 25
 * **/

console.log(result);
const  resulte2 = arr.map(cube);
console.log(resulte2)
const oddevenresult = arr.map(isevenodd);
console.log(oddevenresult);

/** *
 * WHEN TO USE MAP
 * in any situation when we have to do an opration on the  array
 * and store the result of each operation 
 * map can be good option
 * 
 * for exaple:
 * array of product objects.  
*/

const newArr = [9,8,7,6,5];
/**
 * if the function that we are pasing inmap takes two arguments
 * the first argument will be accesign the actual value
 *  secand argument will be accessed index of that value
 */
function print(element,idx){
    return `element at index ${idx} is ${element}`;
}

const result1 = newArr.map(print);
console.log(result1);

function customMapper(arr,func){
let result = [];
for(let i=0; i<arr.lenth; i++){
    result.push(fun(arr[i],i));
}
return result;
}
const value = customMapper(newArr,print);
console.log (value);
