var form = document.getElementById('form');
// form.addEventListener('submit', function validate() {
//     alert('form submitted')
// })

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var coemail = document.getElementById('coemail');
var phone = document.getElementById('tel');
var username = document.getElementById('username');
var password = document.getElementById('password');
var password = document.getElementById('conpassword')
var btn = document.getElementById('btn');
form.addEventListener('submit', function validate() {
    if (fname.value == "") {
        alert('First Name cannot be empty')
        return false;
    } else if (lname.value == "") {
        alert('Last Name cannot be empty')
        return false;
    } else if (email.value.include('@') == false) {
        alert('This is not a valid email address')
        return false;
        // } else if (coemail.value !== email.value) {
        //     alert('This does not match the email address')
        //     return false;
    } else if (phone.value == "") {
        alert('Phone Number cannot be empty')
        return false;
    } else if (isNaN(phone.value)) {
        alert('Phone Number must contain only numbers')
        return false;
    } else if (phone.value.length > 11) {
        alert('Phone Number must contain only 11 numbers')
    } else {
        submit.innerHTML = "Submitting ..."
        return false;
    }
})