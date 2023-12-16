var teacher = "sanket"; // global -> sanket
function fun (){
    var techer = "pulkit"; //fun as ->pulkit 
    content = "JS";  //auto global
    console.log(teacher);
}
function gun(){
    var student = "sarthak"; // function gun -->sarthak 
    console.log(student)
}
fun();
gun();
console.log(teacher);
console.log(content);