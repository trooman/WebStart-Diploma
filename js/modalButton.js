var modalButton = document.querySelector('#modalButton');
var id = consultationModalButtonFirst = document.querySelector('#consultationModalButtonFirst');
var id = consultationModalButtonSecond = document.querySelector('#consultationModalButtonSecond');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

modalButton.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

consultationModalButtonFirst.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

consultationModalButtonSecond.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

close.addEventListener('click', function () {
  modal.classList.remove('modal_active');
  $("#modal-form").trigger('reset');
  var validator = $("#modal-form").validate();
  validator.resetForm();
});