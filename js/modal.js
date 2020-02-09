var contacts = document.querySelector('#contacts');
var footerContacts = document.querySelector('#footerContacts');
var phonePicture = document.querySelector('#phonePicture');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

contacts.addEventListener('click', function(){
  modal.classList.add('modal_active');
});

footerContacts.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

phonePicture.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
  $("#modal-form").trigger('reset');
  var validator = $("#modal-form").validate();
  validator.resetForm();
});