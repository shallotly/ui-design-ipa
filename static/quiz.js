$(document).ready(function () {

  if (data["type"] == '1'){

    var correct = quiz_answer["correct"]
    console.log(correct)

    if(data["questions_number"] == '2'){
      $("#quiz-button-a").click(function() {
        var select = "a"
        console.log(select)

        if (select == correct){
          $(this).removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
          $("#quiz-button-b").prop("disabled", true);

          var clientInfo = $("<div></div>");
          clientInfo.html("Nice!");
          $("#client-info").append(clientInfo).addClass('green');
        }
        else {
          $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
          $("#quiz-button-b").removeClass('btn-primary').addClass('btn-success').prop("disabled", true);

          var clientInfo = $("<div></div>");
          clientInfo.html("Oops!");
          $("#client-info").append(clientInfo).addClass('red');
        }


        var data_to_save = {
              "id": id,
              "answer": select,
          }

        $.ajax({
          type: "POST",
          url: "/add_answer",
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

        if (select == correct){
          $(this).removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
          $("#quiz-button-a").prop("disabled", true);

          var clientInfo = $("<div></div>");
          clientInfo.html("Nice!");
          $("#client-info").append(clientInfo).addClass('green');
        }
        else {
          $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
          $("#quiz-button-a").removeClass('btn-primary').addClass('btn-success').prop("disabled", true);

          var clientInfo = $("<div></div>");
          clientInfo.html("Oops!");
          $("#client-info").append(clientInfo).addClass('red');
        }

        var data_to_save = {
              "id": id,
              "answer": select,
          }

        $.ajax({
          type: "POST",
          url: "/add_answer",
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
    }

    if(data["questions_number"] == '3'){

      $("#quiz-button-a").click(function() {
        var select = "a"
        console.log(select)

        if (select == correct){
          $(this).removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
          $("#quiz-button-b").prop("disabled", true);
          $("#quiz-button-c").prop("disabled", true);

          var clientInfo = $("<div></div>");
          clientInfo.html("Nice!");
          $("#client-info").append(clientInfo).addClass('green');
        }
        else {
          if (correct == "b"){
            $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
            $("#quiz-button-b").removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
            $("#quiz-button-c").prop("disabled", true);
          }

          if (correct == "c"){
            $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
            $("#quiz-button-c").removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
            $("#quiz-button-b").prop("disabled", true);
          }

          var clientInfo = $("<div></div>");
          clientInfo.html("Oops!");
          $("#client-info").append(clientInfo).addClass('red');
        }


        var data_to_save = {
              "id": id,
              "answer": select,
          }

        $.ajax({
          type: "POST",
          url: "/add_answer",
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

        if (select == correct){
          $(this).removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
          $("#quiz-button-a").prop("disabled", true);
          $("#quiz-button-c").prop("disabled", true);

          var clientInfo = $("<div></div>");
          clientInfo.html("Nice!");
          $("#client-info").append(clientInfo).addClass('green');
        }
        else {
          if (correct == "a"){
            $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
            $("#quiz-button-a").removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
            $("#quiz-button-c").prop("disabled", true);
          }

          if (correct == "c"){
            $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
            $("#quiz-button-c").removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
            $("#quiz-button-a").prop("disabled", true);
          }

          var clientInfo = $("<div></div>");
          clientInfo.html("Oops!");
          $("#client-info").append(clientInfo).addClass('red');
        }

        var data_to_save = {
              "id": id,
              "answer": select,
          }

        $.ajax({
          type: "POST",
          url: "/add_answer",
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

      $("#quiz-button-c").click(function() {
        var select = "c"
        console.log(select)

        if (select == correct){
          $(this).removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
          $("#quiz-button-a").prop("disabled", true);
          $("#quiz-button-b").prop("disabled", true);

          var clientInfo = $("<div></div>");
          clientInfo.html("Nice!");
          $("#client-info").append(clientInfo).addClass('green');
        }
        else {
          if (correct == "a"){
            $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
            $("#quiz-button-a").removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
            $("#quiz-button-b").prop("disabled", true);
          }

          if (correct == "b"){
            $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
            $("#quiz-button-b").removeClass('btn-primary').addClass('btn-success').prop("disabled", true);
            $("#quiz-button-a").prop("disabled", true);
          }

          var clientInfo = $("<div></div>");
          clientInfo.html("Oops!");
          $("#client-info").append(clientInfo).addClass('red');
        }

        var data_to_save = {
              "id": id,
              "answer": select,
          }

        $.ajax({
          type: "POST",
          url: "/add_answer",
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


    }
  }

  if (data["type"] == '2'){
    console.log(quiz_answer)

  }

});
