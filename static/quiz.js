$(document).ready(function () {

  $("#next-button").prop("disabled", true);

// type 1 question
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
          $("#next-button").prop("disabled", false);

          var clientInfo = $("<div></div>");
          clientInfo.html("Nice!");
          $("#client-info").append(clientInfo).addClass('green');
        }
        else {
          $("#choice2a").css("visibility", "visible")
          $("#choice2b").css("visibility", "visible")
          $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
          $("#quiz-button-b").prop("disabled", true);
          $("#next-button").prop("disabled", false);

          var clientInfo = $("<div></div>");
          clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer["correct_vowel"]));
          $("#client-info").append(clientInfo).addClass('red');
        }


        var data_to_save = {
              "id": id,
              'sub_id': 0,
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
          $("#next-button").prop("disabled", false);

          var clientInfo = $("<div></div>");
          clientInfo.html("Nice!");
          $("#client-info").append(clientInfo).addClass('green');
        }
        else {
          $("#choice2a").css("visibility", "visible")
          $("#choice2b").css("visibility", "visible")
          $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
          $("#quiz-button-a").prop("disabled", true);
          $("#next-button").prop("disabled", false);

          var clientInfo = $("<div></div>");
          clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer["correct_vowel"]));
          $("#client-info").append(clientInfo).addClass('red');
        }

        var data_to_save = {
              "id": id,
              'sub_id': 0,
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
          $("#next-button").prop("disabled", false);

          var clientInfo = $("<div></div>");
          clientInfo.html("Nice!");
          $("#client-info").append(clientInfo).addClass('green');
        }
        else {
          $("#choice3a").css("visibility", "visible")
          $("#choice3b").css("visibility", "visible")
          $("#choice3c").css("visibility", "visible")
          $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
          $("#quiz-button-b").prop("disabled", true);
          $("#quiz-button-c").prop("disabled", true);
          $("#next-button").prop("disabled", false);

          var clientInfo = $("<div></div>");
          clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer["correct_vowel"]));
          $("#client-info").append(clientInfo).addClass('red');
        }


        var data_to_save = {
              "id": id,
              'sub_id': 0,
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
          $("#next-button").prop("disabled", false);

          var clientInfo = $("<div></div>");
          clientInfo.html("Nice!");
          $("#client-info").append(clientInfo).addClass('green');
        }
        else {
          $("#choice3a").css("visibility", "visible")
          $("#choice3b").css("visibility", "visible")
          $("#choice3c").css("visibility", "visible")
          $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
          $("#quiz-button-a").prop("disabled", true);
          $("#quiz-button-c").prop("disabled", true);
          $("#next-button").prop("disabled", false);


          var clientInfo = $("<div></div>");
          clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer["correct_vowel"]));
          $("#client-info").append(clientInfo).addClass('red');
        }

        var data_to_save = {
              "id": id,
              'sub_id': 0,
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
          $("#next-button").prop("disabled", false);

          var clientInfo = $("<div></div>");
          clientInfo.html("Nice!");
          $("#client-info").append(clientInfo).addClass('green');
        }
        else {
          $("#choice3a").css("visibility", "visible")
          $("#choice3b").css("visibility", "visible")
          $("#choice3c").css("visibility", "visible")
          $(this).removeClass('btn-primary').addClass('btn-danger').prop("disabled", true);
          $("#quiz-button-a").prop("disabled", true);
          $("#quiz-button-b").prop("disabled", true);
          $("#next-button").prop("disabled", false);


          var clientInfo = $("<div></div>");
          clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer["correct_vowel"]));
          $("#client-info").append(clientInfo).addClass('red');
        }

        var data_to_save = {
              "id": id,
              'sub_id': 0,
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

// type 2 question
  if (data["type"] == '2'){
    console.log(quiz_answer)
    console.log(id)

    // question number is 2
    if(data["questions_number"] == '2'){

      $("#question_one, #question_two").draggable({
          revert: true,
          stack: "#question_one, #question_two"
      })

      $("#quiz-button-a").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'a'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'a',
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

              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'a'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'a',
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
              }

          }

      })

      $("#quiz-button-b").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'b'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'b',
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
              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'b'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'b',
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
              }

          }

      })

      $("#quiz-button-c").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'c'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'c',
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
              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'c'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'c',
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
              }

          }

      })


      $("#quiz-button-d").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'd'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'd',
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
              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'd'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'd',
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
              }

          }

      })

      $("#quiz-button-e").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'e'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'e',
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
              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'e'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'e',
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
              }

          }

      })

      $("#quiz-button-f").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'f'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'f',
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
              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'f'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'f',
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
              }

          }

      })

    }

    // question number is 3
    if(data["questions_number"] == '3'){
      console.log(id)

      $("#question_one, #question_two, #question_three").draggable({
          revert: true,
          stack: "#question_one, #question_two, #question_three"
      })

      $("#quiz-button-a").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'a'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'a',
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

              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'a'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'a',
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
              }

              if (ui.draggable.attr("id") == "question_three"){
                if (quiz_answer[2]["correct"] == 'a'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[2]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 2,
                      "answer": 'a',
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
              }

          }

      })

      $("#quiz-button-b").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'b'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'b',
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
              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'b'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'b',
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
              }

              if (ui.draggable.attr("id") == "question_three"){
                if (quiz_answer[2]["correct"] == 'b'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[2]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 2,
                      "answer": 'b',
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
              }

          }

      })

      $("#quiz-button-c").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'c'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'c',
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
              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'c'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'c',
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
              }

              if (ui.draggable.attr("id") == "question_three"){
                if (quiz_answer[2]["correct"] == 'c'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[2]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 2,
                      "answer": 'c',
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
              }

          }

      })


      $("#quiz-button-d").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'd'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'd',
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
              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'd'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'd',
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
              }

              if (ui.draggable.attr("id") == "question_three"){
                if (quiz_answer[2]["correct"] == 'd'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[2]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 2,
                      "answer": 'd',
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
              }

          }

      })

      $("#quiz-button-e").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'e'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'e',
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
              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'e'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'e',
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
              }

              if (ui.draggable.attr("id") == "question_three"){
                if (quiz_answer[2]["correct"] == 'e'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[2]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 2,
                      "answer": 'e',
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
              }

          }

      })

      $("#quiz-button-f").droppable({
        drop: function (event, ui) {

              if (ui.draggable.attr("id") == "question_one"){
                if (quiz_answer[0]["correct"] == 'f'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[0]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 0,
                      "answer": 'f',
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
              }

              if (ui.draggable.attr("id") == "question_two"){
                if (quiz_answer[1]["correct"] == 'f'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[1]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 1,
                      "answer": 'f',
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
              }

              if (ui.draggable.attr("id") == "question_three"){
                if (quiz_answer[2]["correct"] == 'f'){
                  $(this).removeClass('btn-default').addClass('btn-success');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Nice!");
                  $("#client-info").append(clientInfo).addClass('green');
                }
                else{
                  $(this).removeClass('btn-default').addClass('btn-danger');
                  ui.draggable.detach().appendTo($(this));
                  ui.draggable.draggable( 'disable' )
                  $("#next-button").prop("disabled", false);

                  $("#client-info").empty();
                  $("#client-info").removeClass("green, red");
                  var clientInfo = $("<div></div>");
                  clientInfo.html("Oops! Correct answer is".concat(' ', quiz_answer[2]["correct_vowel"]));
                  $("#client-info").append(clientInfo).addClass('red');
                }

                var data_to_save = {
                      "id": id,
                      'sub_id': 2,
                      "answer": 'f',
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
              }

          }

      })

    }


  }

});
