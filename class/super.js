class Project {
   constructor(){
     console.log(`constructor called `);
   }
   getid(){
    console.log(99);
   }
}

class SoftwareProject extends Project {
      constructor(name){
        super();
        console.log(`SoftwareProject constructor called with name : ${name}`);
      }
}
let p = new SoftwareProject('Godzilla');
p.getid();
