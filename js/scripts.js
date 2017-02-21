$(function() {
  var animal = prompt("Do you want to learn about turtles, wolves, or whales?");

  if (animal === "turtles") {
    $(".turtles").show();
  } else {
    if (animal === "wolves") {
      $(".wolves").show();
    }
    $(".whales").show();
  }
});
