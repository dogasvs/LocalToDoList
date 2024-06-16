let toDoForm = document.querySelector('.todoList');
let activeListe = document.querySelector('.activeListe');
let silme = document.querySelector('.delete');

let activeCount = document.querySelector('.activeCount');

let todoListe = [];

if(typeof localStorage.todoListe !== 'undefined') {
  todoListe = JSON.parse(localStorage.todoListe);
}

function handleSubmitToDo(e) {
  e.preventDefault(); 
  let formData = new FormData(toDoForm);
  let formObj = Object.fromEntries(formData);
  activeCounter++;
  todoListe.push(formObj);
  toDoForm.reset();
  save();
  renderTodo();
}

toDoForm.addEventListener('submit', handleSubmitToDo);

function save() {
  localStorage.todoListe = JSON.stringify(todoListe);
}

let activeCounter = 0;

function renderTodo() {
  activeListe.innerHTML = '';
  for(let i = 0; i < todoListe.length; i++) {
    activeListe.innerHTML += `<li> ${todoListe[i].name} </li>`;
  }
  activeCount.innerHTML = activeCounter;
}

function deleteForm() {
  localStorage.clear();
  activeCounter = [];
  todoListe = [];
  renderTodo();
}

silme.addEventListener('click', deleteForm);
