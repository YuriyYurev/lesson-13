$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var buttonClose = $('#close');
  button.on('click', function() {
    modal.addClass('modal_active');
  });
  buttonClose.on('click', function() {
    modal.removeClass('modal_active');
  });
});