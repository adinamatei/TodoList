// check or uncheck todo
$(".items").on("click", "p", function() {
  $(this).toggleClass("lineThrough");
});

//delete todos on click
$(".items").on("click", "span", function(event){
  event.stopPropagation();
  $(this).parent().slideDown(function() {
    $(this).remove();
  });
});


// on hover show the trash icon
$(".items").on("mouseenter", "p", function() {
  $(this).find("span").addClass("spanOn");
});
$(".items").on("mouseleave", "p", function() {
  $(this).find("span").removeClass("spanOn");
});

// alternate row background
$("p").each(function(){
  $("p:even").css("background", "#fffeff");
  $("p:odd").css("background", "#f6f5f7");
});

//when click on + show/hide the add input
$("button").on("click", function(){
  $("input[type=text]").fadeToggle();
});

// add new todos
$("input[type=text]").on("keypress", function(event){
  // if you press enter
  if(event.which === 13) {
    var inputTodos = $(this).val();

    // add new element and put todos class
    var newElement = $("<p />").text(inputTodos).addClass("todos");
    var span = '<span><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></span>';
    // var newElement = "<p><span>X </span>" + inputTodos + "</p>";
    // var newElement = $("<p></p>").text(inputTodos).addClass("todos");
    // var newElement = $("<p />", {class: "todos", text: inputTodos});
    newElement.prepend(span);

    //add the new element at the end of list
    $(".items").append(newElement);

    // clear the input
    $("input").val("");

    // alternate row colors
    $("p").each(function(){
      $("p:even").css("background", "#fffeff");
      $("p:odd").css("background", "#f6f5f7");
    });

  }
});



