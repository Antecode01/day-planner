$("#currentDay").text(moment().format(" dddd, MMMM Do "));

var hoursOfDay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

for (var i = 0; i < hoursOfDay.length; i++) {
  var row = $("<div>");
  row.attr("class", "row time-block");
  var timeArea = $("<div>");
  timeArea.attr("class", " col-md-2 hour");
  timeArea.html(hoursOfDay[i]);
  var textArea = $("<textarea>");
  if (hoursOfDay[i] === moment().format("k")) {
    textArea.attr("class", "form-control col-md-8 present");
  } else if (hoursOfDay[i] > moment().format("k")) {
    textArea.attr("class", "form-control col-md-8 future");
  } else if (hoursOfDay[i] < moment().format("k")) {
    textArea.attr("class", "form-control col-md-8 past");
  }
  textArea.attr("id", "textArea" + i);
  textArea.attr("rows", "3");
  var button = $("<button>");
  button.attr("type", "button");
  button.attr("class", "btn btn-primary col-md-2 saveBtn");
  button.attr("id", i);
  button.html("Primary");

  row.append(timeArea, textArea, button);

  $(".container").append(row);
}
function renderFromLs() {
  for (var j = 0; j < 9; j++) {
    var notesFromLocalStotage = JSON.parse(localStorage.getItem("todo" + j));
    if (notesFromLocalStotage !== null) {
      $("#textArea" + j).html(notesFromLocalStotage);
    }
  }
}

$(".container").on("click", ".btn", function () {
  var inputText = $("#textArea" + $(this).attr("id")).val();
  if (inputText) {
    localStorage.setItem(
      "todo" + $(this).attr("id"),
      JSON.stringify(inputText)
    );
  }
});

renderFromLs();
