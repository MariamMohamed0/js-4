function validate(){
    var user=document.getElementById("user").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var confirmpass=document.getElementById("confirm-pass").value;
    var result=document.getElementById("result");
    result.style.backgroundColor="#f00";
    result.style.transition="all 1s linear";
    result.setAttribute("class","alert text-center text-white p-2")
    if(user=="" && email=="" && pass=="" && confirmpass==""){
        result.innerHTML="Enter data in form";
        return false;
    }
    else if(user.length<5 || user.length>15){
        result.innerHTML="Enter 5-15 characher in username";
        return false;
    }
    else if(email.indexOf("@")=="-1"){
        result.innerHTML="Enter valid email";
        return false;
    }
    else if(pass.length<8){
        result.innerHTML="Enter at least 8 characher in password";
        return false;
    }
    else if(pass!=confirmpass){
        result.innerHTML="Match password";
        return false;
    }
    else{
        return true;
    }
}