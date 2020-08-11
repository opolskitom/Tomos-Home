$(document).ready(() => {
  const $page = $('.page');
  const $about = $(".about-section");
  const $projects = $(".projects-section");
  const $support = $(".support-section");
  const $jobs = $(".jobs-section");
  const $socials = $(".socials-section");
  const $contact = $(".contact-section");

  //hide sections
  $about.hide();
  $projects.hide();
  $support.hide();
  $jobs.hide();
  $socials.hide();
  $contact.hide();

  //create scrollbar
  $(".content-inner").overlayScrollbars({
    className: "os-theme-round-light"
  })

  //keyboard events
  //escape to open nav
  document.addEventListener("keydown", function (e) {
    keyboardLetter = e.key;
    if (keyboardLetter === "Escape") {
      $page.toggleClass('real');
    } else if (keyboardLetter === "t") {
      $('#alt-theme').prop('disabled', !$('#alt-theme').prop('disabled')); //toggle theme
    }
  });

  //menu click events
  $('.menu-toggle').click(function () {
    $page.toggleClass("real");
  })
  //click outside of menu
  $('.content').click(function () {
    $page.removeClass("real");
  })

  //card button click
  $(".unpressed").click(function () {
    $(this).toggleClass("pressed").toggleClass("unpressed");
    expandSection($(this));
  });

  //expand sections
  function expandSection(obj) {
    var section = $(obj).attr('id');
    switch (section) {
      case "about":
        $about.fadeToggle(1000);
        break;
      case "projects":
        $projects.fadeToggle(1000);
        break;
      case "support":
        $support.fadeToggle(1000);
        break;
      case "jobs":
        $jobs.fadeToggle(1000);
        break;
      case "socials":
        $socials.fadeToggle(1000);
        break;
      case "contact":
        $contact.fadeToggle(1000);
        break;
    }
  };

  //form validation
  validateForm();

  function validateForm() {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  };


})