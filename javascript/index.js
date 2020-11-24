
$(document).ready(function () {
$('.search').hide(); //hiding the element
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.search').fadeIn();
    } else {
      $('.search').fadeOut();
    }
  });
});


// $(window).scroll(function() {
//   if ($(this).scrollTop() > 200) {
//     $('.search').fadeIn();
//   } else {
//     $('.search').fadeOut();
//   }
// });
