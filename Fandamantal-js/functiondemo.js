function isoddoreven( a){
    if(a%2==0){
        return true;
    }
    else{
        return false;
    }
}
let x=4;
if(isoddoreven(x)){
    console.log("even");
} else{
    console.log("odd");
}