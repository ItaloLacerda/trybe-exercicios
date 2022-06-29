let header = document.getElementById('header-container');
let footer = document.getElementById('footer-container')
let emergencyTasks = document.getElementsByClassName('emergency-tasks');
let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
let emergencyTasksTitel = document.querySelectorAll('.emergency-tasks div h3');
let noEmergencyTasksTitel = document.querySelectorAll('.no-emergency-tasks div h3');


header.style.backgroundColor = 'green'
emergencyTasks[0].style.backgroundColor = 'orange'
noEmergencyTasks[0].style.backgroundColor = 'yellow'
footer.style.backgroundColor = 'green'

for (let element of emergencyTasksTitel) {
    element.style.backgroundColor = 'purple'
}

for (let element of noEmergencyTasksTitel) {
    element.style.backgroundColor = 'black'
}