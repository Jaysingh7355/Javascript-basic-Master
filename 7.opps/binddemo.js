const player = {
    fname: "virat",
    lastname: "kohli",
    numberTBat: 3,
    canBall: false,
    getDetails: function(){
          console.log(this.fname,this.lastname,"Come at No", this.numberTBat);
    }
}

const obj = function () {
    console.log(this.getDetails());

}


obj.bind(player);
obj();