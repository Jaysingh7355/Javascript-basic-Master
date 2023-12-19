Promise,resolve("foo")

.then (function p1(string){
        setTimeout(() => {
           string += "bar";
           resolve(string); 
        }, 10000);
    });


.then (function p2(string){
    
        setTimeout(() => {
           string += "baz";
           resolve(string); 
        }, 1);
    });

.then (function p3(string) {
    console.log(string);
});

{
    value:"foo",
    state:fullfilled,
    onfullfillment : [p1];
    outREject []
}
{
    value : undefined,
    state : pending,
    onfullfillment: [p2]
}
{
    value : undefined,
    sate : pending,
    onfullfillment : [p3]
}

     
