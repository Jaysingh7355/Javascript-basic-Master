function process (){
    let i = 0;
    function innerprocess(){
        i += 1;
        return i;
    
    }
    return innerprocess; // we are not calling the function , we are just returnoing the function
}
let res = process();
console.log("frist time calling ",res);
console.log("secand time calling res",res);
console.log("third time calling res",res());