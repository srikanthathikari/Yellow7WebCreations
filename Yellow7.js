//   Example starter JavaScript for disabling form submissions if there are invalid fields 

(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          alert('Please fill all mandatory fields');
          event.preventDefault();
          event.stopPropagation();
        }
        else {
          showAnAlert();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function showAnAlert() {
  alert('Awesome! We got all your information. One our team members will reachout to you shortly');
}

window.onload = (function(){
  var minValue = document.getElementById('selectDate');
 return minValue.setAttribute('min',todayDate());
})

function todayDate() {
  var today = new Date(); // get the current date
  var dd = today.getDate(); //get the day from today.
  var mm = today.getMonth() + 1; //get the month from today +1 because january is 0!
  var yyyy = today.getFullYear(); //get the year from today

  //if day is below 10, add a zero before (ex: 9 -> 09)
  if (dd < 10) {
    dd = '0' + dd
  }
  //like the day, do the same to month (3->03)
  if (mm < 10) {
    mm = '0' + mm
  }
  //finally join yyyy mm and dd with a "-" between then
  return yyyy + '-' + mm + '-' + dd;
}






