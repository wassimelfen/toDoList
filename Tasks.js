function renderTask() {
  $("#tasks-container").show();
  var input = $("#idInput").val();
  var allTasks = [];
  allTasks.push(input);
  $("#tasks-container").append(
    `<div id="task-shown">${input}<button class="remove" onclick="removeTask()" type="button">remove</button></div>`
  );
}

function removeTask() {
  $("#task-shown").remove();
}

localStorage.setItem("monday", "monday");
var t = localStorage.getItem("monday");
$(".days").append(`<h1>Your Todo list for </h1>` + `<h1>` + t + `</h1>`);

function reset() {
  $("#tasks-container").hide();
  $("#task-shown").remove();
}

function save() {
  $("button").hide();
  $("input").hide();
  $("body").append(`<h1>Challenge yourself to do all the tasks</h1>`);
}
