var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var buttonClose = document.querySelector('#close');

button.addEventListener('click', function(){
  modal.classList.add('modal_active');
});

buttonClose.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});