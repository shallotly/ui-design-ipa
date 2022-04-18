$(document).ready(function () {
  $("#quiz-button-a").click(function() {
    var select = "a"
    console.log(select)

    var data_to_save = {
          "id": id,
          "answer": select,
      }

    $.ajax({
      type: "POST",
      url: "add_answer",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify(data_to_save),
      success: function (response) {
          console.log(response["answers"])
      },
      error: function(request, status, error){
          console.log("Error");
          console.log(request)
          console.log(status)
          console.log(error)
      }
    });
  });

  $("#quiz-button-b").click(function() {
    var select = "b"
    console.log(select)

    var data_to_save = {
          "id": id,
          "answer": select,
      }

    $.ajax({
      type: "POST",
      url: "add_answer",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify(data_to_save),
      success: function (response) {
          console.log(response["answers"])
      },
      error: function(request, status, error){
          console.log("Error");
          console.log(request)
          console.log(status)
          console.log(error)
      }
    });
  });

});
