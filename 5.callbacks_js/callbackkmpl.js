// Task (don't use promise only cllbacks)
// 1.write function to get a data from url
// 2. write a function to save that downloaded data in a fike and return the filename
//3. write a function to upload the file write the file written in privious step to new url

function download( download, cd){
    /**
     * downloaded the function from the given url and passed the
     * downloaded content to the given callbacks cb
     * 
     */
    console.log("Starting to download the data from ",url)
    setTimeout(function demo(){
        console.log("Downloading completed");
        const content = "ABCDEFGH";
        cb(content);
    },4000);
}

function writefile(data,cb){
    /**
     * write the given data into a new file
     */
    console.log("Startesd writing a file whit",data);
    setTimeout (function write(){
        setTimeout(function weite() {
            console.log("completed writing the data in file")
            cb(filename);
        }, 5000);
    });

}
function upload(url ,file , cb){
    /**
     * uploads the data from a file to agiven url 
     *  */
   setTimeout(function up() {
     console.log("upload complete");
     const response = "success";
     cb(response);
   },2000);
}

 
download("www.xyz.com",function processs(content){
    console.log(" we are noew going to process the downloaded data");
    FileSystemWritableFileStream(content,function processwrite(){
        console.log ("we have downloaded and written the file.now will upload");
        upload("www.upload.com",filename,function process(response){
            console.log("we have upload whit",response);
        });
    });
}); 