var soundEnabled = true;

//Sound Button
$(".unpressed").children(".fa-volume-mute.sound-icon").hide();
$(".unpressed").click(function() {
  soundEnabled = !soundEnabled;
  $(this).toggleClass("pressed").toggleClass("unpressed");
  $(this).children(".fa-volume-mute.sound-icon").toggle();
  $(this).children(".fa-volume-up.sound-icon").toggle();
  if ($(this).hasClass("unpressed")) {
    $(this).children(".sound-icon").css("color","#d6d6d6");
  } else {
    $(this).children(".sound-icon").css("color","#858585");
  }
});
