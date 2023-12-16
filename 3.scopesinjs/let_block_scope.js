var teacher = "sanket"; // global
function fun(){ //global
   console.log(teacher); //no erorr will be given
  // console.log(content); // throw an erorr
   var teacher = "pulkit"; // scope of fun
   let content = "js"; // content only will be acess only post declaration
   if(content=== "js"){
    let hours = "120+" ;
    console.log(hours);
   }
   console.log(teacher,content);
}
fun();
console.log(teacher);
//console.log(content);