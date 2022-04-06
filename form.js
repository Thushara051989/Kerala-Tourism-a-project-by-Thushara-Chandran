let fname=document.getElementById("fname");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let pwd1=document.getElementById("pwd1");
let pwd2=document.getElementById("pwd2");
let error=document.getElementById("error");
let errorp=document.getElementById("errorp");


function validate() {
    if(email.value.trim()=="" || pwd1.value.trim()=="" ||pwd2.value.trim()=="" || fname.value.trim()==""|| phone.value.trim()=="" ) {
        alert("Fields cannot be empty");
        return false;
        
    }
    else if (pwd1.value!=pwd2.value){
        alert ("Passwords must be matching");
        return false;
    }
    else if(pwd1.value.length<8){
        alert("Password is too short");
        return false;
    }
    
    else{
        // email validation
        let regexp=/^([A-Za-z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
        if(regexp.test(email.value)){
            error.innerHTML="Valid Mail Id";
            error.style.color="green";
            // phone number validation
        //    let regexpn=/\s*(?:\+?(\d{1,3}))?[\W\D\s]^|()*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d[\W\D\s]*?\d)(?: *x(\d+))?\s*$/
              let regexpn=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;    
               if(regexpn.test(phone.value)){
                errorp.innerHTML="Valid Phone Number";
                errorp.style.color="green";
                let strongreg= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
                if(strongreg.test(pwd1.value)){  
             return true;
            }
            else{
                errorpas.innerHTML="Password not Strong Enough";
                errorpas.style.color="red";
                return false;
            }
        }
            else{
                errorp.innerHTML="Invalid Phone Number";
                errorp.style.color="red";
                return false;
              } 
         
        }
        else{
            error.innerHTML="Invalid Mail ID";
            error.style.color="red";
            return false;
        
        }
        
       
    }
}
