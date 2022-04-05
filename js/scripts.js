$(document).ready(function () {

  $("input:radio[name='animals']").change(function () {
    if ($(this).val() == "turtles") {
      $('#turtles-facts').show();
      $('#snakes-facts').hide();
      $('#insects-facts').hide();

    } else if ($(this).val() == "snakes") {
      $('#turtles-facts').hide();
      $('#snakes-facts').show();
      $('#insects-facts').hide();

    } else if ($(this).val() == "insects") {
      $('#turtles-facts').hide();
      $('#snakes-facts').hide();
      $('#insects-facts').show();
    }

  })
})


