function swap (arr , i , j ){
      let temp = arr [i];
      arr  [i] = arr [j];
       arr[j] = temp;
}
function saperate(arr){
    let i = 0;
    let j = arr.lenght - 1;
    while(i<=j){
        // Tillthe time i is not equle to j run this loop.
        if(arr[i] == 1){
            swap(arr,i,j);
            j--;
        }else{
            i++;
        }
    }
}
let arr =[0,1,0,1,0,0,1,1];
saperate(arr);
console.log(arr);