    document.getElementById('baton1').addEventListener('click',function(){
    const arr=document.getElementById('depo_id').value;
    const arrnumber=parseFloat(arr);
    if(isNaN(arrnumber)){
        alert('please leave');
        return;
    }
    const addmoney=document.getElementById('addmoney').innerText;
    const addmoneynumber=parseFloat(addmoney);
    const totaldepo=arrnumber+addmoneynumber;
    document.getElementById('addmoney').innerText=totaldepo;
    document.getElementById('depo_id').value="";
    
    const balance=document.getElementById('balance').innerText;
    const balancenumber=parseFloat(balance);
    const totalbalance=balancenumber+totaldepo;
    document.getElementById('balance').innerText=totalbalance;
    
})



// document.getElementById('baton2').addEventListener('click',function(){
//     const arr1=document.getElementById('with_id').value;
//     const arrnumber1=parseFloat(arr1);
//     if(isNaN(arrnumber1)){
//         alert('please leave');
//         return;
//     }
//     const addmoney1=document.getElementById('minusmoney').innerText;
//     const addmoneynumber1=parseFloat(addmoney1);
//     const totaldepo1=arrnumber1+addmoneynumber1;
//     document.getElementById('minusmoney').innerText=totaldepo1;
//     document.getElementById('with_id').value="";
    
//     const balance1=document.getElementById('balance').innerText;
//     const balancenumber1=parseFloat(balance1);
//     if(balancenumber1<totaldepo1){
//         alert("Your father's have not enough money")
//     }
//     const totalbalance1=balancenumber1-totaldepo1;
//     document.getElementById('balance').innerText=totalbalance1;


    
// })
