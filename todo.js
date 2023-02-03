// --get_todos-- is the function that will retrieve the list of TODO items from our "database".
function getTodos() {
  let todos = new Array();
  let todosStr = localStorage.getItem("todo");
  if (todosStr != null) {
    todos = JSON.parse(todosStr);
  }
  return todos;
}

// --add-- will take the text from the input box and save it in our "database" (Localstorage).
function add() {
  let task = document.getElementById("task").value;
  let todos = getTodos();
  todos.push(task);
  localStorage.setItem("todo", JSON.stringify(todos));
  show();
  return false;
}

// --remove-- will remove the selected item from the list of TODO items in our "database".
function remove() {
  let id = this.getAttribute("id");
  let todos = getTodos();
  todos.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(todos));
  show();
  return false;
}

// --show-- will display the current list of TODO items.
function show() {
  let todos = getTodos();
  let html = "<ul>";

  for (let i = 0; i < todos.length; i++) {
    html +=
      "<div class='container'>" +
      "<div class='list'>" +
      "<li>" +
      todos[i] +
      "</div>" +
      "<div class='btn'>" +
      '<button class="remove" id="' +
      i +
      '">x</button></div></li>' +
      "</div>";
  }

  html += "</ul>";

  document.getElementById("todos").innerHTML = html;

  let buttons = document.getElementsByClassName("remove");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", remove);
  }
}

//Select the button element add and created an event listener
document.getElementById("add").addEventListener("click", add);

show();
