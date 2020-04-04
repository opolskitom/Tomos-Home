
$(".unpressed").click(function() {
  if ($(this).hasClass("unpressed")) {
    $(this).addClass("pressed").removeClass("unpressed");
  } else {
    $(this).addClass("unpressed").removeClass("pressed");
  }
});
