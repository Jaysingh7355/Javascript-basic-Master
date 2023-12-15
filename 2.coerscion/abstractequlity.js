console.log(null == undefined);
console.log (12 == "12");

console.log(false == "0");
/*
x -> boolean -> tonumber -> false -> 0
x->0, y->"0",x==y
0==0 ->true
*/

console.log(null == false);
/** *
 * y->boolean ->tonumber ->0
 * null == 0
 * return false.
*/
console.log(NaN == NaN);
let obj = { x:10, valueof(){return 100}};
console.log(99 == obj);
console.log(100 == obj);