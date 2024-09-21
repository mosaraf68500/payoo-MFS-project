document.getElementById('add-money-btn').addEventListener('click', function(event){

    event.preventDefault();
    const currentAmout=document.getElementById('current-amout').innerText;
    const newAmout=document.getElementById('amout').value;
    const pinNumber=document.getElementById('amout-pin').value;


    if(pinNumber==='1234'){
        CurrentFloatAmout=parseFloat(currentAmout);
        newFloatAmout=parseFloat(newAmout);
        const total=CurrentFloatAmout+newFloatAmout;
        console.log(total);
        document.getElementById('current-amout').innerText=total;

    }

    else{
        alert('Invalid Pin');
        return;
    }
});