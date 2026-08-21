const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
const clearBtn=document.getElementById("clearBtn");
let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}
function displayTasks(){
taskList.innerHTML="";
tasks.forEach(function(task,index){
const li=document.createElement("li");
const span=document.createElement("span");
span.textContent=task.text;
if(task.completed){
span.classList.add("completed");
}
span.addEventListener("click",function(){
completeTask(index);
});
const deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.addEventListener("click",function(){
deleteTask(index);
});
li.appendChild(span);
li.appendChild(deleteBtn);
taskList.appendChild(li);
});
}
function addTask(){
const taskText=taskInput.value.trim();
if(taskText===""){
alert("Please enter a task");
return;
}
tasks.push({
text:taskText,
completed:false
});
saveTasks();
taskInput.value="";
displayTasks();
}
function completeTask(index){
tasks[index].completed=!tasks[index].completed;
saveTasks();
displayTasks();
}
function deleteTask(index){
tasks.splice(index,1);
saveTasks();
displayTasks();
}
function clearTasks(){
if(tasks.length===0){
alert("There are no tasks to clear");
return;
}
if(confirm("Are you sure you want to delete all tasks?")){
tasks=[];
saveTasks();
displayTasks();
}
}
addBtn.addEventListener("click",addTask);
taskInput.addEventListener("keydown",function(event){
if(event.key==="Enter"){
addTask();
}
});
clearBtn.addEventListener("click",clearTasks);
displayTasks();