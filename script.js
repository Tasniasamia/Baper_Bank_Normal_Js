
// document.getElementById('email_id').addEventListener('keyup',function(event){
//     if(event.target.value.endsWith("@gmail.com")){
//       document.getElementById('baton').removeAttribute('disabled');
//       document.getElementById('baton').classList.remove('focus:outline-none', 'disabled:opacity-50');
//       document.getElementById('baton').classList.add('hover:bg-amber-700');
//     }
//     else{
     
//       document.getElementById('baton').classList.add('focus:outline-none','disabled:opacity-50');
//       document.getElementById('baton').classList.remove('hover:bg-amber-700');
  
//     }
    
//   });
document.getElementById('baton').addEventListener('click',function(){
    const arr=document.getElementById('email_id').value ;
    const arr1=document.getElementById('password_id').value;
    if(arr =="samia@gmail.com" && arr1 =="18122"){
        window.location.href = "money.html";
    }
    else{
        alert('Please enter valid');
    }
})


