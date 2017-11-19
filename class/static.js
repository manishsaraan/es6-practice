class Project {
   constructor(){
     this.location = "mazatlan";
   }
   static getID() {
     return 99;
   }   
}
Project.otherID = 66;
console.log(Project.getID());
console.log(Project.otherID);
