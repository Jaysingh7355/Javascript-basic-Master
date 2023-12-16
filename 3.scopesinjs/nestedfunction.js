function Fun(){
    var x = 10;
    function fun(){
        var x=10;
        function gun(){
            var y = 20;
            console.log(x);
            console.log(y);
        }
        console.log(x);
        console.log(y);
    } 
}
Fun();