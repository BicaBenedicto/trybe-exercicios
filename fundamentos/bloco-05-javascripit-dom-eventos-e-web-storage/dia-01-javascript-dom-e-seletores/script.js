let headerContainer = document.getElementById("header-container");
let emergencyTasks = document.querySelector(".emergency-tasks");
let emergencyTasksDiv = document.querySelectorAll(".emergency-tasks div h3");
let noEmergencyTasks = document.querySelector(".no-emergency-tasks");
let noEmergencyTasksDiv = document.querySelectorAll(".no-emergency-tasks div h3");
let footer = document.getElementsByTagName("footer");

headerContainer.style.backgroundColor = "green";
emergencyTasks.style.backgroundColor = "salmon";
noEmergencyTasks.style.backgroundColor = "yellow";
footer[0].style.backgroundColor = "teal";

for (let i in emergencyTasksDiv) {
  emergencyTasksDiv[i].style.backgroundColor = "purple";
  noEmergencyTasksDiv[i].style.backgroundColor = "black";
}