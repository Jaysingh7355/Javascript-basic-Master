function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Staert downloading from ", url);
        setTimeout(function processDowloading()  {
            let data = "Dumy data";
            console.log("Download completed");
            resolve(data);
        }, 7000);
    });
}

console.log ("start");
let promiseobj = fetchData("skfbjklinmre");
promiseobj.then(function A (value){
    console.log("value is", value);
})
console.log("end")