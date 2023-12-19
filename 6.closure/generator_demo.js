function fetchNextElement(){
    console.log("I am inside the genrator function");
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const iter = featchNextElement();