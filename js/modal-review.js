var reviewFooterContacts = document.querySelector('#reviewFooterContacts');
var reviewPhonePicture = document.querySelector('#reviewPhonePicture');
var reviewContacts = document.querySelector('#reviewContacts');

var reviewClose = document.querySelector('#reviewClose');

reviewFooterContacts.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

reviewPhonePicture.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

reviewContacts.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

reviewClose.addEventListener('click', function () {
  modal.classList.remove('modal_active');
  $("#modal-form").trigger('reset');
  var validator = $("#modal-form").validate();
  validator.resetForm();
});