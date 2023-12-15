let y = {
    name: "jay singh",
    age : 21,
}
console.log(y.name);
console.log(y.age);



y.name = "sundram";
console.log(y.name);

//how to add new property to alredy created object;
y.marks = 100;
console.log(y.marks); 
// if you want to delete the key value pair;
// we can use dekete operater for this thig;
delete y.marks;
console.log(y);