//Define our UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {

  //Add task event
  form.addEventListener('submit', addTask);

}


//Add Tasks
function addTask(e) {


  if (taskInput.value === '') {
    alert('Add a Task');
  }

  //Create li element

  const li = document.createElement('li');
  li.className = 'collection-item';
  //Create text node append to the li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element
  const link = document.createElement('a');

  //Add class name
  link.className = 'delete-item secondary-content';


  //Add icon HTML

  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append the link to li

  li.appendChild(link);


  //Append the li to ul
  taskList.appendChild(li);

  //Clear the input
  taskInput.value = '';



  e.preventDefault();




}