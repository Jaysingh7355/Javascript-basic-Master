// Task (don't use promise only cllbacks)
// 1.write function to get a data from url
// 2. write a function to save that downloaded data in a fike and return the filename
//3. write a function to upload the file write the file written in privious step to new url

function download(url) {
    return new promise (Function exec(resolve,reject){
        console.log("Strting to download the data from",url);
        setTimeout(function downn() {
            console.log("Downloading complrted");
            const content = "ABCDEF";
            resolve(content);
        },6000);

    });
}
