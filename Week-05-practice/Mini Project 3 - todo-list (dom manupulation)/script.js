let taskInput=document.getElementById("taskInput");
let addButton=document.getElementById("addButton");
let taskList=document.getElementById("taskList");

addButton.addEventListener("click",function(){
let task=taskInput.value.trim();
if(task===""){
alert("Please enter a task");
return;
}
let li=document.createElement("li");
li.textContent=task;
let deleteButton=document.createElement("button");
deleteButton.textContent="Delete";
deleteButton.addEventListener("click",function(){
li.remove();
});
li.appendChild(deleteButton);
taskList.appendChild(li);
taskInput.value="";
taskInput.focus();
});