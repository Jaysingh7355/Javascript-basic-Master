function timeConsumingByLoop(){
    console.log("loop Starts");
    for(let i = 0; i<10000000000; i++){
        //some task;
    } 
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature0(){
    console.log("starting timer");
    setTimeout(function exec(){
        for(let i = 0; i<10000000000; i++){
            //some task;
        } 
    },8000);
}
function timeConsumingByRuntimeFeature1(){
    console.log("starting timer");
    setTimeout(function exec(){
        console.log("completed the timer1");
    },0);
}
function timeConsumingByRuntimeFeature2(){
    console.log("starting timer");
    setTimeout(function exec() {
        console.log("completed the timer2");
    },200);
}
console.log("hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("by");