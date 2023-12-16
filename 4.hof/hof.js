// higher order function --> there are fuction ehich take another function as arguments
// these are called higher order functions.

function f(x, fn){
    /**
     * x -> number
     * fn ->function
     * **/
    console.log(x);
    fun();
}


f(10,function exec() {
   console.log("i am expression passed to a Hof")
})


let arr = [1,23,45,1,13,12,14,2,3]; // unsorted array

arr.sort(); //it sort the given array // [expectation] -> this might arraange the element in the inc order
// default implimantation of arr.sort() is going to sort my array in lexicographical order
/** 
 * 0 -> A
 * 1 -> B
 * 3 -> C
 * 4 -> D
 * 5 -> F
 * 6 -> G
 * 7 -> H
 * 8 -> I
 * [B,BA,J,BAA,BB,BC,BD,BE,C,D]// IF WE ARRANGE it according to dictiory.
 * [B,BA,BBA,BB,BC,BD,.....]
 * 
 * **/