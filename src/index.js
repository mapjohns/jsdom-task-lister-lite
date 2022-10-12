document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("DOM loaded.")
});

document.querySelector('form input[type="submit"]').addEventListener('click', addTaskToList)
document.getElementById('new-task-description').addEventListener('input', updateValue)
document.getElementById('tasks')

let task

function updateValue(e) {
  task = e.target.value
}

function addTaskToList(e) {
  e.preventDefault();
  let addTask = document.createElement('li')
  let button = document.createElement("button")
  button.innerHTML = "X"
  addTask.innerHTML = `${task} `
  addTask.append(button)
  document.querySelector('ul#tasks').append(addTask)
  clearBox()
}

function clearBox() {
  document.getElementById('new-task-description').value = ""
  task = ""
}