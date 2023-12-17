/** *
 * fillter function 
 * fillter is also a higer order function
 * Filter also loops over the array element
 * there is no specal thing about fillter , i.e. the argument function f ehich we have to pass inside
 * fillter should always return boolean, otherwise output is converted to a boolean
 * 
 * Fillter loops over every element ,passes that element in argument function and then if the output
 * of the function call is ture , then it stores the orignal element in a new array otherwise
 * doesn't add this add element to the array
*/

function oddEven (x){
    return (x%2 == 0)// returing boolean
}

let arr = [1,2,3,4,5,6,7,8,9]

const result = arr.filter(oddEven);
console.log(result);