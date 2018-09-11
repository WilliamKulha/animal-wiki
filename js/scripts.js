$(document).ready(function(){
  var userInput = parseInt(prompt("Which of the following animals would you like to learn about? Enter 1 for snakes, 2 for Pandas, and 3 for Cranes"));

  if (userInput === 1) {
    $('#snake').show();
  } else if (userInput === 2) {
    $('#panda').show();
  } else {
    $('#crane').show();
  }
  $("img#snakeClick").click(function() {
    $('div#snake').slideDown();
    $('div#panda').slideUp(10);
    $('div#crane').slideUp(10);
  });
  $('img#craneClick').click(function(){
    $('div#crane').slideDown();
    $('div#snake').slideUp(10);
    $('div#panda').slideUp(10);
  });
  $('img#pandaClick').click(function(){
    $('div#panda').slideDown();
    $('div#snake').slideUp(10);
    $('div#crane').slideUp(10);
  })

});
