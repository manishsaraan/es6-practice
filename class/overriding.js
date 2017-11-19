class Project {
   constructor(){
     console.log(`constructor called `);
   }
   getid(){
    return 50;
   }
}

class SoftwareProject extends Project {
      constructor(name){
        super();
        console.log(`SoftwareProject constructor called with name : ${name}`);
      }
      getid(){
         console.log(super.getid() + 9);
      }
}
let p = new SoftwareProject('Godzilla');
p.getid();
