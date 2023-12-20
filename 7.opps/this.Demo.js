let iphone = {
    name : "Iphone 13 pro",
    price : 100000,
    description : "the new apple iphone 13 pro",
    rating : 4.8,

    dislay (){
        console.log("First display", this);
    }

}
let macbook = {
    name : "mackbook m2",
    price : 125000,
    description : "tThe new apple macbook m2",
    rating : 4.9,

    display(){
        console.log("secand display", this);
    }
}

macbook.display();