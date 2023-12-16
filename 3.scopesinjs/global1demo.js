var teacher = "sanket"; //teacher -> global ->teacher
function fun (){
    var teacher = "jay"; //teacher -> faction fun -> jay
    console.log(teacher);
}
function gun () {
    var student = "gyanedra"; // student --> funtion gun -> gyanedra

    console.log(student);
}
fun();
gun();
console.log(teacher);
