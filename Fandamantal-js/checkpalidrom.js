 function ispalindrom(s){
    let str = "" + s;
    let i = 0;
    let j = str.length - 1;
    while(i<=j){
        if(str[i] == str[j]){
            i++;
            j--;
        }else{
             return false;
        }
    }
    return true;
 }

 let i = 1455541;
 
 console.log(ispalindrom(i));