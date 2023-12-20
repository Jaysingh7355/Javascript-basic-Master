class product {
    //name ;
   // price;
    //description ;

    constructor (n,p,d){
       this.name = n;
       this.price = p;
       this.description = d; 
      // return 10; //primitive ->no effact
      // return {x:10};
      return this; // if you don't return any thingn this is equale to say return this.
    }

    
   dispaly (){
      //print the product
   }
}

const p = new product('Beg',100,'a cool bag');
console.log (p);