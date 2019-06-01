$(document).ready(function() {
  var anchor = $('#anchor');
  anchor.on('click', function(){
    $('html, body').animate({scrollTop: 0},500);
    return;
  });
});