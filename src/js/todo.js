// check or uncheck todo
$("p").on("click", function() {
  $(this).toggleClass("lineThrough");
});

// on hover show the trash icon
$("p").on("mouseenter", function() {
  $(this).find("span").addClass("spanOn");
});
$("p").on("mouseleave", function() {
  $(this).find("span").removeClass("spanOn");
});

// alternate row colors
$("p").each(function(){
  $("p:even").css("background", "#fffeff");
  $("p:odd").css("background", "#f6f5f7");
});

//when chick on + show/hide the add input
$("button").on("click", function(){
  $("input").slideToggle();
});

// add new todos
$("input[type=text]").on("keypress", function(event){
  // if you press enter
  if(event.which === 13) {
    var inputTodos = $(this).val();

    // add new element and put todos class
    var newElement = $("<p />").text(inputTodos).addClass("todos");
    var span = '<span><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></span>';
    newElement.prepend(span);
    // var newElement = "<p><span>X </span>" + inputTodos + "</p>";
    // var newElement = $("<p></p>").text(inputTodos).addClass("todos");
    // var newElement = $("<p />", {class: "todos", text: inputTodos});


   //add event listener to new elements
    newElement.on("click", function() {
      $(this).toggleClass("lineThrough");
    });

    newElement.on("mouseenter", function() {
      $(this).find("span").addClass("spanOn");
    });
    newElement.on("mouseleave", function() {
      $(this).find("span").removeClass("spanOn");
    });

    //add the new element at the end of list
    $(".items").append(newElement);

    // clear the input
    $("input").val("");

    // alternate row colors
    $("p").each(function(){
      $("p:even").css("background", "#fffeff");
      $("p:odd").css("background", "#f6f5f7");
    });

    //delete todos on click
    $("span").click(function(event){
      event.stopPropagation();
      $(this).parent().slideDown(function() {
        $(this).remove();
      });
    });
  }
});


//delete todos on click
$("span").click(function(event){
  event.stopPropagation();
  $(this).parent().slideDown(function() {
    $(this).remove();
  });
});

