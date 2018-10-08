//Define our UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //Add task event
  form.addEventListener("submit", addTask);

  //Remove task event
  taskList.addEventListener("click", removeTask);

  //Clear task event
  clearBtn.addEventListener("click", clearTask);

  //Filter tasks events
  filter.addEventListener("keyup", filterTask);
}

//Add Tasks
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }

  //Create li element

  const li = document.createElement("li");
  li.className = "collection-item";
  //Create text node append to the li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element
  const link = document.createElement("a");

  //Add class name
  link.className = "delete-item secondary-content";

  //Add icon HTML

  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append the link to li

  li.appendChild(link);

  //Append the li to ul
  taskList.appendChild(li);

  //Clear the input
  taskInput.value = "";

  e.preventDefault();
}

//Remove tasks

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    //console.log(e.target);
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear tasks

function clearTask() {
  //slower
  // taskList.innerHTML = "";
  //faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//Filter tasks
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  // console.log(text);
  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
