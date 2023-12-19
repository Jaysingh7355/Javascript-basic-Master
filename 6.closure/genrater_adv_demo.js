function*  fetchNextElement(){
    console.log("inside genrator");
    const x=10;
   yield 11;
    console.log("entering after ayield");
    const y = x + (yield 30);
    console.log("vale of y is",y);
}
console.log("start");
const iter  = fetchNextElement();
console.log("clled genrator");
console.log("secand",iter.next());
console.log("secand",iter.next());
console.log("secand",iter.next(17));