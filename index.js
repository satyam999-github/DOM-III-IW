let task= document.getElementById("task");
let priority= document.getElementById("priority");
let display= document.getElementsByClassName("tbody")


function submit(){
    display.innerText= task.value
}