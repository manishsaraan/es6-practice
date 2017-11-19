class Task {
      constructor(){
        console.log('constructor start..');
      }
      showId(){
        console.log(99);
      }
};
let task = new Task();
task.showId();
console.log(typeof Task);
console.log(typeof task);
//console.log(window.Task === Task);
