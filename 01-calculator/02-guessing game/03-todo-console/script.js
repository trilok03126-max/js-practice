let todos = [];

function addtask(taskname){
  let newTask = {
  task : taskname,
  done : false
  };
  todos.push(newTask);
}

function showtask(){
  for(let i=0; i<todos.length; i++){
    console.log("Tasks :",JSON.stringify(todos[i]));
  }
}

function completeTask(index){
 todos[index].done = true;
}

addtask("study javascript");
addtask("Do college assigment");
addtask("Exercise");
showtask();
completeTask(1);
showtask();