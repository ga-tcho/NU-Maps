$(document).ready(function () {
  var base = $('.nav_sp');

  $('#hamburger').click(function () {
    base.toggleClass('active');
  });
  base.click(function () {
    base.removeClass('active');
  });


  $('.nav_sp li a').click(function () {
    base.toggleClass('active');
  });
  base.click(function () {
    base.removeClass('active');
  });
});

$(function () {
  var $animation = $('.icon-animation');

  $animation.on('click', function () {
    //console.log('');
    if ($(this).hasClass('is-open')) {
      $(this).removeClass('is-open');
    } else {
      $(this).addClass('is-open');
    }
  });


  $(".nav_sp").on('click', function () {
    if ($(".icon-animation").addClass('is-open')) {
      $(".icon-animation").removeClass('is-open');
    } else {
      $(".icon-animation").hasClass('is-open');
    }
  });


  $(".nav_sp li a").on('click', function () {
    if ($(".icon-animation").addClass('is-open')) {
      $(".icon-animation").removeClass('is-open');
    } else {
      $(".icon-animation").hasClass('is-open');
    }
  });
});