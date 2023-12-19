function download(url){
    console.log("Stared downloading content from",url);
    return new Promise(function exec(res, rej)  {
        setTimeout (function p() {
       console.log("Complited downloading data in 5s");
       const content ="ABCDEF";
       res(content);
        }, 5000);
    });
}

download("www.xyz.com")
.then(function fulfillHandler(value){
    console.log("Content downloaded is",value);       
})