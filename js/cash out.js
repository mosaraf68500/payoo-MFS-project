document.getElementById('cash-out-btn').addEventListener('click', function(event){

    event.preventDefault();
    const curentAmout=document.getElementById('current-amout').innerText;
    const newAmout=document.getElementById('cash-out-amout').value;
    const pinNumber=document.getElementById('cash-out-amout-pin').value;
    floatCurrentAmout=parseFloat(curentAmout);
    floatNewAmout=parseFloat(newAmout);
    if(pinNumber==='1234'){
        document.getElementById('current-amout').innerText=floatCurrentAmout - floatNewAmout;
    }
    else{
        alert('Invalid Pin');
    }
});