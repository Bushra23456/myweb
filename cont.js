function validation(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let number = document.getElementById('number').value;

    let userCheck = /^[A-Za-z]+$/;
let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordCheck = /^[0-9a-zA-Z]+$/;
let numberCheck = /^[0-9]+$/;

if (userCheck.test(username)){
    document.getElementById('usererror').innerHTML="";
  
    
}
else{
    document.getElementById('usererror').innerHTML="INVALID USERNAME";
   return false ;
}
if (emailCheck.test(email)){
    document.getElementById('emailerror').innerHTML="";
    
}
else{
    document.getElementById('emailerror').innerHTML="INVALID Email";
    return false ;
   

}

if (passwordCheck.test(password)){
    document.getElementById('passworderror').innerHTML="";
    
}
else{
    document.getElementById('passworderror').innerHTML="INVALID password";
    return false ;
   

}

if (numberCheck.test(number)){
    document.getElementById('numbererror').innerHTML="";
    
}
else{
    document.getElementById('numbererror').innerHTML="INVALID number";
    return false ;
   

}

if(userCheck.test(username) && emailCheck.test(email) && passwordCheck.test(password)){
    swal({
        title: "Your details are saved",
        
        timer: 2000
      });
      return false ;
}
else{
    alert(INVALID);
    return false;
}
}


