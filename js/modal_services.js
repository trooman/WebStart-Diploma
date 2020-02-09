var servicesFooterContacts = document.querySelector('#servicesFooterContacts');
var servicesPhonePicture = document.querySelector('#servicesPhonePicture');
var servicesContacts = document.querySelector('#servicesContacts');

var servicesClose = document.querySelector('#servicesClose');

servicesFooterContacts.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

servicesPhonePicture.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

servicesContacts.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

servicesClose.addEventListener('click', function () {
  modal.classList.remove('modal_active');
  $("#modal-form").trigger('reset');
  var validator = $("#modal-form").validate();
  validator.resetForm();
});