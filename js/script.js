const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")
function addTask(){
    const task = taskInput.value.trim("");
    if(task=="") return;
    const li = document.createElement("li");
    li.testContent = task;
    li.addEventListener("click",()=>{
        li.remove();
    });
    taskList.appendChild(li);
    taskInput.value = "";
}
