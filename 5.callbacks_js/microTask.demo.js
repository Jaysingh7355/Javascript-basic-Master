function createPromise (){
    return new Promise(function exec(resolve,reject){
        console.log("resolving the promies");
        resolve("Done");

    });
}
setTimeout(function process()  {
    console.log("Time completed");
}, 0);
let p = createPromise();
p.then(function fulfillHandler(value) {
    console.log("we fullfillHandled ehit avalue", value);
}, function rejectionHandler() {}); 
p.then(function fulfillHandler2(value) {
    console.log("we fullfillHandled ehit avalue", value);
}, function rejectionHandler() {});
p.then(function fulfillHandler3(value) {
    console.log("we fullfillHandled ehit avalue", value);
}, function rejectionHandler() {});

for(let int i =0;i<100000000000; i++)
{
    
}
console.log("coding");
