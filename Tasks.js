function renderTask() {
  $("#tasks-container").show();
  var input = $("#idInput").val();
  $("#tasks-container").append(
    `<div id="task-shown">${input}<button class="remove" onclick="removeTask()" type="button">remove</button>
</div>`
  );
  $("#task-shown").append();
}

function removeTask() {
  $("#task-shown").remove();
}

// localStorage.setItem("monday", "monday");
// var t = localStorage.getItem("monday");
$(".days").append(
  `<h1 class="txt">Your Todo list for </h1>` +
    `<h1 class="txt1">` +
    "monday" +
    `</h1>`
);

function reset() {
  $("#tasks-container").hide();
  $("#task-shown").remove();
}

function save() {
  $("button").hide();
  $("input").hide();
  $("body").append(
    `<h1 class="txt">Challenge yourself to do all the tasks</h1>`
  );
  $("#tasks-container").css(
    "background-image",
    "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hunterdonhealthcare.org%2Fwp-content%2Fuploads%2F2019%2F05%2FBlue-Gradient-Background-1024x374.jpg&f=1&nofb=1')"
  );
}
