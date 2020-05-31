
function validatePhoneNumber(){

    var phoneNumber = document.getElementById('phoneNumber').value;
    
     if(isNaN(phoneNumber)){
         alert('Please enter a valid phone Number');
     }
}