function download(url,cd){
    console.log("Stared downloading from url");
    setTimeout(function exec(){
        console.log("completed downloading after 5s");
        const content = "ABCDEF";
       // cd(content);
        //cd(content);
    }, 5000);
}

download ("www.xyz.com",function processDowload (data){
    console.log("downloaded dta is", data); 
})