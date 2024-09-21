document.getElementById('login-btn').addEventListener('click', function(event){

event.preventDefault();
const phoneNumber=document.getElementById('phone-number').value;
 const pinNumber=document.getElementById('pin').value;

 if(phoneNumber==='38' && pinNumber==='1234'){

window.location.href='homepage.html';
 }

 else{
    alert('Enter valid phone number or pin !');
 }
});