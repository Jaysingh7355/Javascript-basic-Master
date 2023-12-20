class product {
    #name; //privet
   //price;
   //description;
   constructor(n,p,d) {
       this.#name = n;
       this.price = p;
       this.description = d;
       //return "10"; //primitive -> nodffact.
       //return {x:10};
       //return this: //
   }
   Setname(n) {
      if(typeof(n)!='string'){
        console.log("invaild name passed");
        return;
      }
      this.Name = n;

   }
   dispaly (){
    //print the product
    console.log (this.#name,this.price,this.description);
   }
}
const p = new product("Beg" ,100,'a cool beg');
p.Setname(-1)
console.log(p);
//console.log(p.getname());
console.log(p.setname("jay"));