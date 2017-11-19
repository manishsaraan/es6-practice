class Project {
   constructor(name){
     console.log(`constructor called with name : ${name}`);
   }
}

class SoftwareProject extends Project {

}
let p = new SoftwareProject('Godzilla');
