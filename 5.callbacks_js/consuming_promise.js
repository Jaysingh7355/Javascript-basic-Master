function getRandomInt(max){
    return Math.floor(Math.random() * max)
}
function createpromiseWhitSettimeout(){
    return new Promise(function executor(resolve,reject){
        setTimeout(function (){
            let num = getRandomInt(10);
            if(num %2 == 0){
                // if the random number is even we fullfill
                resolve(num);
            } else {
                  // if the random number s odd we reject
                reject(num);
            }
        },1000);
        console.log ("Exiting the callback in the promise constructor");
    });
}

console.log("starting.....");
const p = createpromiseWhitSettimeout();
console.log("we are now waiting for the promise to complete"); 
console.log("cuurrently my promise object is like....",p);
p
.then(
function fulfllHandler(value){console.log("Inside fullfill handerler whit value", value)},
function rejectionHandler(value) {console.log("Inside fullfill handerler whit value", value)}
);