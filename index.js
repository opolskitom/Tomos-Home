var $page = $('.page');
var $about = $(".about-section");
var $projects = $(".projects-section");
var $contact = $(".contact-section");

$about.hide();
$projects.hide();
$contact.hide();

//keyboard events
document.addEventListener("keydown", function(e) {
  keyboardLetter = e.key;
  if (keyboardLetter === "Escape") {
    $page.toggleClass('real');
  }
});

//menu click events
$('.menu-toggle').click(function() {
  $page.toggleClass("real");
})
//click outside of menu
$('.content').click(function() {
  $page.removeClass("real");
})

$(".unpressed").click(function() {
  $(this).toggleClass("pressed").toggleClass("unpressed");
  expandSection($(this));

});

function expandSection(obj) {
  if (obj.hasClass("about")) {
    $about.fadeToggle(1000);
  } else if (obj.hasClass("projects")) {
    $projects.fadeToggle(1000);
  } else if (obj.hasClass("contact")) {
    $contact.fadeToggle(1000);
  }
}
