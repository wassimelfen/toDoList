function renderTask() {
  var input = $("#idInput").val();
  $("#tasks-container").append(
    `<div id="task-shown">${input}<button class="remove" onclick="removeTask()" type="button">remove</button></div>`
  );
}

function removeTask() {
  $("#task-shown").addClass("rrr");
  $(".rrr").remove();
}

function day0() {
  $(".days").append(`<h1>Your Todo list for monday</h1>`);
}
//// local Storage
