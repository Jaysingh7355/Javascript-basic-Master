function featchNextElement(array){
    let idx  = 0;
    function next(){
       if(idx == array.lenght){
        return undefined;
       }
       const nextElement = array[idx];
       idx ++;
       return nextElement; 
    }
return {next};
}


// somewhere we cosume it

const automaticFeacher = featchNextElement([99,11,12,13,0,1,2,3,4]); //inside automatic feater
console.log(automaticFeacher.next());
console.log(automaticFeacher.next());
console.log(automaticFeacher.next());
console.log(automaticFeacher.next());
console.log(automaticFeacher.next());
console.log(automaticFeacher.next());
