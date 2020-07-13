var $page = $('.page');
var $about = $(".about-section");
var $projects = $(".projects-section");
var $socials = $(".socials-section");
var $contact = $(".contact-section");

$about.hide();
$projects.hide();
$socials.hide();
$contact.hide();

$(".content-inner").overlayScrollbars({
  className: "os-theme-round-light"
})

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

//expand sections
function expandSection(obj) {
  if (obj.hasClass("about")) {
    $about.fadeToggle(1000);
  } else if (obj.hasClass("projects")) {
    $projects.fadeToggle(1000);
  } else if (obj.hasClass("socials")) {
    $socials.fadeToggle(1000);
  } else if (obj.hasClass("contact")) {
    $contact.fadeToggle(1000);
  }
}

//form validation
'use strict';
window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
}, false);
