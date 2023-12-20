function product (n,p,c){
    this.name = n;
    this.price  = p;
    
     category.call(this,c);
}
function category (c){
    this.categoryNmae = c;
    this.getcategoryName = function () {
        console.log(this.categoryName);
    }
}

let p = new poduct("Iphone", 1000000,"Electronics");
p.getcategoryName();