let toDoItems = [];

document.querySelector('#createdBy').innerHTML = document
.querySelector("#createdBy")
.innerHTML.concat(" Felipe");

function ToDo (description) {
  this.description = description;
  this.complete = false;
}

ToDo.prototype.completeToDo = function(){
  this.complete = true;
}

function buildToDo(todo, index) {
  let toDoShell = document.createElement("div"),
  toDoText = document.createElement("span"),
  checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.id = index;
  checkbox.onclick = completeToDo;

  toDoShell.className = "toDoShell";
  toDoText.innerHTML = todo.description;

  if(todo.complete){
    checkbox.className = "completeCheckbox";
    checkbox.setAttribute("checked", "true")
  }
  
  toDoShell.appendChild(toDoText);
  toDoShell.appendChild(checkbox);

  return toDoShell;

}

function buildToDos(toDos) {
  return toDos.map (function(item, idx){
    return buildToDo(item, idx)
  });
}

function displayToDos() {
  
  let toDoContainer = document.querySelector("#toDoContainer");

  toDoContainer.innerHTML = "";

  buildToDos(toDoItems).forEach(function (todo) {
    toDoContainer.appendChild(todo);
  });
}

function addToDo() {
  let input = document.getElementById("toDoInput");

  let newToDo = new ToDo(input.value);
  toDoItems.push(newToDo);
  input.value = "";

  displayToDos();
}

let button = document.getElementById("addButton")
button.addEventListener('click', addToDo)

function completeToDo(event) {
  let index = event.target.id;
  toDoItems[index].complete();
}

displayToDos();

if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
