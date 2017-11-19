class Project {
   constructor(){
     this.location = "mazatlan";
   }   
}

class SoftwareProject extends Project {
      constructor(name){
        super();
        this.location =  this.location + " beach";
      }
    
}
let p = new SoftwareProject('Godzilla');
console.log(p.location);
